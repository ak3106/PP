import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { doc, getDoc, updateDoc, serverTimestamp } from "firebase/firestore";
import { auth, db } from "../firebase";
import {
  ArrowLeft,
  Package,
  Truck,
  CheckCircle2,
  XCircle,
  MapPin,
  Receipt,
  AlertCircle,
  Loader2,
  Clock,
  Banknote,
} from "lucide-react";
import { ConfirmDialog } from "./Account";

const STEPS = [
  { key: "placed", label: "Order Placed", icon: Package },
  { key: "confirmed", label: "Confirmed", icon: CheckCircle2 },
  { key: "shipped", label: "Shipped", icon: Truck },
  { key: "out_for_delivery", label: "Out for Delivery", icon: Truck },
  { key: "delivered", label: "Delivered", icon: CheckCircle2 },
];

const STATUS_LABELS = {
  placed: "Order Placed",
  confirmed: "Confirmed",
  shipped: "Shipped",
  out_for_delivery: "Out for Delivery",
  delivered: "Delivered",
  cancelled: "Cancelled",
  cancellation_requested: "Cancellation Requested",
  return_requested: "Return Requested",
};

const STATUS_COLORS = {
  placed: "text-[#f59e0b] bg-[#f59e0b18]",
  confirmed: "text-[#3b82f6] bg-[#3b82f618]",
  shipped: "text-[#3b82f6] bg-[#3b82f618]",
  out_for_delivery: "text-[#3b82f6] bg-[#3b82f618]",
  delivered: "text-[#22c55e] bg-[#22c55e18]",
  cancelled: "text-[#ef4444] bg-[#ef444418]",
  cancellation_requested: "text-[#ef4444] bg-[#ef444418]",
  return_requested: "text-[#ef4444] bg-[#ef444418]",
};

const PAYMENT_STATUS_LABELS = {
  pending: "Pending",
  paid: "Paid",
  failed: "Failed",
  refunded: "Refunded",
};

// Formats a number as ₹ amount — no decimals for whole numbers,
// otherwise 2 decimal places (e.g. 495.85, not 495.8500000001).
const formatPrice = (value) => {
  if (value === undefined || value === null || isNaN(value)) return "—";
  const num = Number(value);
  return Number.isInteger(num) ? `₹${num}` : `₹${num.toFixed(2)}`;
};

// URL shape: /account/orders/<ORDER_ID>
// Route: <Route path="/account/orders/:orderId" element={<OrderDetail />} />
// (kept as its own path segment, NOT /account/orders?orderId=..., because a
// query string can't be distinguished from /account/:tab? — both resolve to
// the same path and React Router's static-segment ranking always picked
// /account/orders over the dynamic tab route, silently swallowing this page.)
const OrderDetail = () => {
  const navigate = useNavigate();
  const { orderId } = useParams();

  const [user, setUser] = useState(() => auth.currentUser);
  useEffect(() => {
    // Same auth-hydration fix as Account.jsx — on a hard refresh,
    // auth.currentUser can be null for a moment before Firebase Auth
    // rehydrates the session.
    const unsubscribe = auth.onAuthStateChanged
      ? auth.onAuthStateChanged((u) => setUser(u))
      : () => {};
    return unsubscribe;
  }, []);

  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showConfirm, setShowConfirm] = useState(false);
  const [acting, setActing] = useState(false);
  const [toast, setToast] = useState(null);

  const showToast = (msg, type = "success") => {
    setToast({ msg, type });
    setTimeout(() => setToast(null), 3000);
  };

  useEffect(() => {
    if (!orderId) {
      setLoading(false);
      return;
    }
    (async () => {
      try {
        const snap = await getDoc(doc(db, "orders", orderId));
        if (snap.exists()) {
          setOrder({ id: snap.id, ...snap.data() });
        }
      } catch (err) {
        // Logs "Missing or insufficient permissions" if this is a
        // Firestore security rules issue rather than a missing doc.
        console.error("[OrderDetail] Failed to load order:", err);
      }
      setLoading(false);
    })();
  }, [orderId]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#f5f4f0] flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-[#1a1a1a]" />
      </div>
    );
  }

  if (!order) {
    return (
      <div className="min-h-screen bg-[#f5f4f0] flex flex-col items-center justify-center gap-4 px-4 text-center">
        <AlertCircle className="w-10 h-10 text-[#aaa]" />
        <p className="text-[#666]">We couldn't find that order.</p>
        <button
          className="bg-[#1a1a1a] text-white rounded-xl px-6 py-3 text-sm font-semibold"
          onClick={() => navigate("/account/orders")}
        >
          Back to Orders
        </button>
      </div>
    );
  }

  const status = order.status || "placed";
  const isTerminal = [
    "cancelled",
    "cancellation_requested",
    "return_requested",
  ].includes(status);
  const stepIndex = STEPS.findIndex((s) => s.key === status);

  const createdMillis = order.createdAt?.toMillis
    ? order.createdAt.toMillis()
    : new Date(order.date || 0).getTime();
  const hasValidDate = createdMillis > 0;
  const hoursElapsed = hasValidDate
    ? (Date.now() - createdMillis) / 36e5
    : Infinity;
  const withinWindow = hasValidDate && hoursElapsed <= 12;
  const hoursLeft = Math.max(0, 12 - hoursElapsed);
  const isDelivered = status === "delivered";
  const canAct = withinWindow && !isTerminal;

  const pricing = order.pricing || {};
  const shipping = order.shipping;
  const customer = order.customer || {};
  const payment = order.payment || {};

  const handleAction = async () => {
    try {
      setActing(true);
      const newStatus = isDelivered
        ? "return_requested"
        : "cancellation_requested";
      await updateDoc(doc(db, "orders", order.id), {
        status: newStatus,
        actionRequestedAt: serverTimestamp(),
      });
      setOrder((o) => ({ ...o, status: newStatus }));
      setShowConfirm(false);
      showToast(isDelivered ? "Return requested" : "Order cancelled");
    } catch (err) {
      showToast(err.message, "error");
    }
    setActing(false);
  };

  return (
    <div className="min-h-screen bg-[#f5f4f0] px-4 py-8 pb-16">
      {toast && (
        <div
          className={`fixed bottom-8 left-1/2 -translate-x-1/2 px-[1.6rem] py-3 rounded-[40px] text-sm font-medium z-[2000] shadow-xl ${toast.type === "error" ? "bg-[#ef4444] text-white" : "bg-[#1a1a1a] text-white"}`}
        >
          {toast.msg}
        </div>
      )}

      {showConfirm && (
        <ConfirmDialog
          title={isDelivered ? "Return this order?" : "Cancel this order?"}
          icon={isDelivered ? "↩️" : "📦"}
          message={
            isDelivered
              ? "We'll pick up the item and process your refund once inspected."
              : "This will cancel your order and a refund will be initiated if payment was made online."
          }
          confirmLabel={
            acting
              ? "Please wait…"
              : isDelivered
                ? "Yes, Return Order"
                : "Yes, Cancel Order"
          }
          onConfirm={handleAction}
          onCancel={() => setShowConfirm(false)}
        />
      )}

      <div className="max-w-3xl mx-auto">
        <button
          className="flex items-center gap-2 text-sm text-[#666] hover:text-[#1a1a1a] mb-6 transition-colors"
          onClick={() => navigate("/account/orders")}
        >
          <ArrowLeft className="w-4 h-4" /> Back to Orders
        </button>

        {/* Header */}
        <div className="bg-white rounded-2xl p-6 shadow-sm mb-4 flex items-center justify-between flex-wrap gap-3">
          <div>
            <p className="text-xs text-[#999] uppercase tracking-wider mb-1">
              Order
            </p>
            <h1 className="text-xl font-semibold text-[#1a1a1a]">
              #{order.id.slice(-10).toUpperCase()}
            </h1>
            <p className="text-sm text-[#999] mt-1">
              Placed on{" "}
              {order.createdAt?.toDate
                ? order.createdAt.toDate().toLocaleDateString("en-IN", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  })
                : order.date || "—"}
            </p>
          </div>
          <span
            className={`rounded-full px-4 py-1.5 text-sm font-semibold capitalize ${STATUS_COLORS[status] || "text-[#888] bg-[#88888818]"}`}
          >
            {STATUS_LABELS[status] || status}
          </span>
        </div>

        {/* Delivery Timeline */}
        <div className="bg-white rounded-2xl p-6 shadow-sm mb-4">
          <h2 className="text-base font-semibold mb-4 text-[#1a1a1a]">
            Delivery Status
          </h2>
          {isTerminal ? (
            <div className="flex items-center gap-3 text-[#ef4444] bg-[#fef2f2] rounded-xl p-4">
              <XCircle className="w-5 h-5 shrink-0" />
              <p className="text-sm font-medium">
                {STATUS_LABELS[status]} — our team will reach out with updates.
              </p>
            </div>
          ) : (
            <div className="flex items-start justify-between relative">
              <div className="absolute top-4 left-0 right-0 h-[2px] bg-[#eee] -z-0" />
              {STEPS.map((step, i) => {
                const Icon = step.icon;
                const done = stepIndex >= 0 && i <= stepIndex;
                return (
                  <div
                    key={step.key}
                    className="flex flex-col items-center gap-2 relative z-10 flex-1"
                  >
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center border-2 ${
                        done
                          ? "bg-[#1a1a1a] border-[#1a1a1a] text-white"
                          : "bg-white border-[#ddd] text-[#ccc]"
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    <span
                      className={`text-[0.7rem] text-center ${done ? "text-[#1a1a1a] font-medium" : "text-[#bbb]"}`}
                    >
                      {step.label}
                    </span>
                  </div>
                );
              })}
            </div>
          )}
          <p className="text-xs text-[#aaa] mt-4 text-center">
            Live tracking will appear here once your order ships — powered by
            Shiprocket (integration coming soon).
          </p>
        </div>

        {/* Items */}
        <div className="bg-white rounded-2xl p-6 shadow-sm mb-4">
          <h2 className="text-base font-semibold mb-4 text-[#1a1a1a]">Items</h2>
          <div className="space-y-3">
            {(order.items || []).map((item, i) => {
              const thumbnail = item.thumbnail || item.image;
              const qty = item.quantity ?? item.qty ?? 1;
              return (
                <div
                  key={item.variantId || item.productId || i}
                  className="flex items-center gap-3 pb-3 border-b border-[#f0f0f0] last:border-0 last:pb-0"
                >
                  {thumbnail ? (
                    <img
                      src={thumbnail}
                      alt={item.name}
                      className="w-14 h-14 rounded-lg object-cover bg-[#f5f4f0]"
                    />
                  ) : (
                    <div className="w-14 h-14 rounded-lg bg-[#f5f4f0] flex items-center justify-center">
                      <Package className="w-5 h-5 text-[#ccc]" />
                    </div>
                  )}
                  <div className="flex-1">
                    <p className="text-sm font-medium text-[#1a1a1a]">
                      {item.name}
                    </p>
                    <p className="text-xs text-[#999]">
                      {item.variantId ? `${item.variantId} · ` : ""}Qty: {qty}
                    </p>
                  </div>
                  <p className="text-sm font-semibold text-[#1a1a1a]">
                    {formatPrice(item.price)}
                  </p>
                </div>
              );
            })}
            {(!order.items || order.items.length === 0) && (
              <p className="text-sm text-[#aaa]">No item details available.</p>
            )}
          </div>
        </div>

        {/* Bill Summary */}
        <div className="bg-white rounded-2xl p-6 shadow-sm mb-4">
          <h2 className="text-base font-semibold mb-4 text-[#1a1a1a] flex items-center gap-2">
            <Receipt className="w-4 h-4" /> Bill Summary
          </h2>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between text-[#666]">
              <span>Subtotal</span>
              <span>{formatPrice(pricing.subtotal)}</span>
            </div>
            <div className="flex justify-between text-[#666]">
              <span>Shipping</span>
              <span>
                {pricing.shipping ? formatPrice(pricing.shipping) : "Free"}
              </span>
            </div>
            {pricing.discount ? (
              <div className="flex justify-between text-[#22c55e]">
                <span>Discount</span>
                <span>-{formatPrice(pricing.discount)}</span>
              </div>
            ) : null}
            <div className="flex justify-between text-[#666]">
              <span>Tax</span>
              <span>{formatPrice(pricing.tax)}</span>
            </div>
            <div className="flex justify-between text-base font-semibold text-[#1a1a1a] pt-2 border-t border-[#f0f0f0] mt-2">
              <span>Total</span>
              <span>{formatPrice(pricing.total)}</span>
            </div>
          </div>

          {payment.method && (
            <div className="flex items-center gap-2 text-xs text-[#999] mt-4 pt-4 border-t border-[#f0f0f0]">
              <Banknote className="w-3.5 h-3.5" />
              <span className="uppercase font-medium">{payment.method}</span>
              {payment.status && (
                <span
                  className={`ml-auto rounded-full px-2.5 py-0.5 font-semibold ${
                    payment.status === "paid"
                      ? "text-[#22c55e] bg-[#22c55e18]"
                      : payment.status === "failed"
                        ? "text-[#ef4444] bg-[#ef444418]"
                        : "text-[#f59e0b] bg-[#f59e0b18]"
                  }`}
                >
                  {PAYMENT_STATUS_LABELS[payment.status] || payment.status}
                </span>
              )}
            </div>
          )}
        </div>

        {/* Delivery Address / Pickup Location */}
        {shipping && (
          <div className="bg-white rounded-2xl p-6 shadow-sm mb-4">
            <h2 className="text-base font-semibold mb-3 text-[#1a1a1a] flex items-center gap-2">
              <MapPin className="w-4 h-4" />{" "}
              {shipping.type === "pickup"
                ? "Store Pickup Location"
                : "Delivery Address"}
            </h2>
            {shipping.type === "pickup" ? (
              <p className="text-sm text-[#333] leading-relaxed">
                <strong>Pragya Print Store</strong> <br />
                {shipping.location || shipping.address}
              </p>
            ) : (
              <p className="text-sm text-[#333] leading-relaxed">
                {customer.name && <strong>{customer.name}</strong>}
                {customer.phone ? ` · ${customer.phone}` : ""}
                {(customer.name || customer.phone) && <br />}
                {shipping.addressLine1 || shipping.address}
                {shipping.addressLine2 ? `, ${shipping.addressLine2}` : ""}
                <br />
                {shipping.city}
                {shipping.state ? `, ${shipping.state}` : ""}
                {shipping.pincode ? ` – ${shipping.pincode}` : ""}
              </p>
            )}
          </div>
        )}

        {/* Cancel / Return */}
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          {isTerminal ? (
            <p className="text-sm text-[#999] text-center">
              No further action available for this order.
            </p>
          ) : canAct ? (
            <>
              <div className="flex items-center gap-2 text-xs text-[#f59e0b] justify-center mb-3">
                <Clock className="w-3.5 h-3.5" />
                {hoursLeft >= 1
                  ? `${Math.floor(hoursLeft)} hour${Math.floor(hoursLeft) !== 1 ? "s" : ""} left to ${isDelivered ? "return" : "cancel"}`
                  : "Less than an hour left"}
              </div>
              <button
                className="w-full bg-[#ef4444] text-white rounded-xl py-3 text-sm font-semibold hover:opacity-90 transition-opacity"
                onClick={() => setShowConfirm(true)}
              >
                {isDelivered ? "Return Order" : "Cancel Order"}
              </button>
            </>
          ) : (
            <p className="text-sm text-[#aaa] text-center">
              Cancellation window has closed (available within 12 hours of
              placing the order).
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default OrderDetail;