import React, { useState, useMemo, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import {
  Truck,
  MapPin,
  DollarSign,
  CreditCard,
  ShoppingBag,
  CheckCircle,
  Home,
  User,
  Plus,
  Pencil,
  Trash2,
  X,
  ChevronRight,
  Package,
  Tag,
  Phone,
  Building2,
  Hash,
  MapPinned,
  Loader2,
} from "lucide-react";
import Button from "../components/UI/Button";
import Input from "../components/UI/Input";
import { useCart } from "../context/CartContext";
import { db, functions } from "../firebase";
import {
  doc,
  getDoc,
  updateDoc,
  collection,
  addDoc,
  arrayUnion,
  serverTimestamp,
} from "firebase/firestore";
import { httpsCallable } from "firebase/functions";
import { loadRazorpayScript } from "../utils/razorpayService";

// ─── Indian States List ───────────────────────────────────────────────────────
const INDIAN_STATES = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
  "Andaman and Nicobar Islands",
  "Chandigarh",
  "Dadra and Nagar Haveli",
  "Daman and Diu",
  "Delhi",
  "Jammu and Kashmir",
  "Ladakh",
  "Lakshadweep",
  "Puducherry",
];

// ─── Empty address template ───────────────────────────────────────────────────
const EMPTY_ADDRESS = {
  label: "",
  addressLine1: "",
  addressLine2: "",
  city: "",
  state: "",
  pincode: "",
  name: "",
  phone: "",
};

const Field = ({
  label,
  name,
  placeholder,
  maxLength,
  icon: Icon,
  optional,
  value,
  onChange,
  error,
}) => (
  <div>
    <label className="block text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-1.5">
      {Icon && <Icon className="inline w-3.5 h-3.5 mr-1" />}
      {label}
      {optional && (
        <span className="text-zinc-400 normal-case font-normal ml-1">
          (optional)
        </span>
      )}
    </label>
    <input
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      maxLength={maxLength}
      className={`w-full px-4 py-2.5 rounded-xl border text-sm outline-none transition-all focus:ring-2 focus:ring-primary ${
        error ? "border-red-400 bg-red-50" : "border-zinc-200 bg-white"
      }`}
    />
    {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
  </div>
);
// ─── Address Form Modal ───────────────────────────────────────────────────────
const AddressFormModal = ({ initial, onSave, onClose, isSaving }) => {
  const [form, setForm] = useState(initial || EMPTY_ADDRESS);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
    setErrors((p) => ({ ...p, [name]: undefined }));
  };

  const validate = () => {
    const err = {};
    if (!form.label.trim())
      err.label = "Label is required (e.g. Home, Office).";
    if (!form.name.trim()) err.name = "Name is required.";
    if (!form.phone.match(/^\d{10}$/))
      err.phone = "Valid 10-digit phone required.";
    if (!form.addressLine1.trim())
      err.addressLine1 = "Address Line 1 is required.";
    if (!form.city.trim()) err.city = "City is required.";
    if (!form.state) err.state = "Please select a state.";
    if (!form.pincode.match(/^\d{6}$/))
      err.pincode = "Valid 6-digit pincode required.";
    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) onSave(form);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-white w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden animate-slide-up">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b bg-zinc-50">
          <h3 className="text-lg font-bold text-zinc-800">
            {initial?.label ? "Edit Address" : "Add New Address"}
          </h3>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-zinc-200 transition-colors"
          >
            <X className="w-5 h-5 text-zinc-500" />
          </button>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="p-6 space-y-4 max-h-[75vh] overflow-y-auto"
        >
          <Field
            label="Label"
            name="label"
            placeholder="e.g. Home, Office, Parents"
            icon={Tag}
            value={form.label}
            onChange={handleChange}
            error={errors.label}
          />

          <div className="grid grid-cols-2 gap-3">
            <Field
              label="Full Name"
              name="name"
              placeholder="Recipient name"
              icon={User}
              value={form.name}
              onChange={handleChange}
              error={errors.name}
            />
            <Field
              label="Phone"
              name="phone"
              placeholder="10-digit number"
              maxLength={10}
              icon={Phone}
              value={form.phone}
              onChange={handleChange}
              error={errors.phone}
            />
          </div>

          <Field
            label="Address Line 1"
            name="addressLine1"
            placeholder="Flat / House No., Building, Street"
            icon={MapPinned}
            value={form.addressLine1}
            onChange={handleChange}
            error={errors.addressLine1}
          />

          <Field
            label="Address Line 2"
            name="addressLine2"
            placeholder="Area, Landmark (optional)"
            icon={Building2}
            optional
            value={form.addressLine2}
            onChange={handleChange}
            error={errors.addressLine2}
          />

          <div className="grid grid-cols-2 gap-3">
            <Field
              label="City"
              name="city"
              placeholder="City"
              value={form.city}
              onChange={handleChange}
              error={errors.city}
            />
            <Field
              label="Pincode"
              name="pincode"
              placeholder="6-digit pincode"
              maxLength={6}
              icon={Hash}
              value={form.pincode}
              onChange={handleChange}
              error={errors.pincode}
            />
          </div>

          {/* State dropdown */}
          <div>
            <label className="block text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-1.5">
              State
            </label>
            <select
              name="state"
              value={form.state}
              onChange={handleChange}
              className={`w-full px-4 py-2.5 rounded-xl border text-sm outline-none transition-all focus:ring-2 focus:ring-primary bg-white ${
                errors.state ? "border-red-400 bg-red-50" : "border-zinc-200"
              }`}
            >
              <option value="">Select State</option>
              {INDIAN_STATES.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
            {errors.state && (
              <p className="text-red-500 text-xs mt-1">{errors.state}</p>
            )}
          </div>

          {/* Actions */}
          <div className="pt-2 flex gap-3">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-4 py-2.5 rounded-xl border border-zinc-200 text-sm font-semibold text-z
              inc-600 hover:bg-zinc-50 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSaving}
              className="flex-1 px-4 py-2.5 rounded-xl bg-zinc-800 text-white text-sm font-semibold hover:bg-zinc-900 transition-colors disabled:opacity-60 flex items-center justify-center gap-2"
            >
              {isSaving ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" /> Saving...
                </>
              ) : (
                "Save Address"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

// ─── Address Card ─────────────────────────────────────────────────────────────
const AddressCard = ({ address, selected, onSelect, onEdit, onDelete }) => (
  <div
    onClick={onSelect}
    className={`relative p-4 rounded-2xl border-2 cursor-pointer transition-all group ${
      selected
        ? "border-zinc-900 bg-green-50/20 shadow-lg shadow-accent/5"
        : "border-zinc-200 bg-white hover:border-primary/40 hover:shadow-sm"
    }`}
  >
    <div className="flex items-start gap-3">
      {/* Radio dot */}
      <div
        className={`mt-0.5 w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-all ${
          selected ? "border-primary bg-primary" : "border-zinc-300"
        }`}
      >
        {selected && <div className="w-2 h-2 rounded-full bg-white" />}
      </div>

      <div className="flex-1 min-w-0 pr-16">
        <div className="flex items-center gap-2 mb-1">
          <span
            className={`text-xs font-bold px-2 py-0.5 rounded-full uppercase tracking-wide ${
              selected
                ? "bg-primary text-white"
                : "bg-zinc-100 text-zinc-500"
            }`}
          >
            {address.label}
          </span>
        </div>
        <p className="font-semibold text-zinc-800 text-sm">{address.name}</p>
        <p className="text-zinc-500 text-xs mt-0.5 leading-relaxed">
          {address.addressLine1}
          {address.addressLine2 ? `, ${address.addressLine2}` : ""},{" "}
          {address.city}, {address.state} – {address.pincode}
        </p>
        <p className="text-zinc-400 text-xs mt-1 flex items-center gap-1">
          <Phone className="w-3 h-3" /> {address.phone}
        </p>
      </div>
    </div>

    {/* Edit / Delete */}
    <div className="absolute top-3 right-3 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
      <button
        onClick={(e) => {
          e.stopPropagation();
          onEdit();
        }}
        className="p-1.5 rounded-lg bg-white border border-zinc-200 hover:bg-green-50 hover:border-primary transition-colors shadow-sm"
        title="Edit"
      >
        <Pencil className="w-3.5 h-3.5 text-primary" />
      </button>
      <button
        onClick={(e) => {
          e.stopPropagation();
          onDelete();
        }}
        className="p-1.5 rounded-lg bg-white border border-zinc-200 hover:bg-red-50 hover:border-red-300 transition-colors shadow-sm"
        title="Delete"
      >
        <Trash2 className="w-3.5 h-3.5 text-red-500" />
      </button>
    </div>
  </div>
);

// ─── Payment Option ───────────────────────────────────────────────────────────
const PaymentOption = ({
  id,
  title,
  subtitle,
  icon,
  selected,
  setSelected,
}) => (
  <label
    className={`flex items-center p-4 rounded-2xl cursor-pointer border-2 transition-all ${
      selected === id
        ? "border-zinc-900 bg-green-50/20 shadow-sm"
        : "border-zinc-100 bg-zinc-50 hover:border-zinc-300"
    }`}
  >
    <input
      type="radio"
      name="payment"
      value={id}
      checked={selected === id}
      onChange={() => setSelected(id)}
      className="sr-only"
    />
    <div
      className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-all ${
        selected === id ? "border-primary bg-primary" : "border-zinc-300"
      }`}
    >
      {selected === id && <div className="w-2 h-2 rounded-full bg-white" />}
    </div>
    <div className="ml-3 flex-1">
      <p className="font-semibold text-sm text-zinc-800">{title}</p>
      {subtitle && <p className="text-xs text-zinc-400 mt-0.5">{subtitle}</p>}
    </div>
    <span
      className={`ml-2 ${selected === id ? "text-accent" : "text-zinc-300"}`}
    >
      {icon}
    </span>
  </label>
);

// ─── Main Checkout Component ──────────────────────────────────────────────────
const Checkout = ({ user }) => {
  const navigate = useNavigate();
  const { cart, dispatchCart } = useCart();

  // Address state
  const [addresses, setAddresses] = useState([]);
  const [selectedAddressIdx, setSelectedAddressIdx] = useState(null);
  const [loadingAddresses, setLoadingAddresses] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [editingIdx, setEditingIdx] = useState(null);
  const [isSavingAddress, setIsSavingAddress] = useState(false);

  // Order state
  const [paymentMethod, setPaymentMethod] = useState("cod");
  const [isPlacingOrder, setIsPlacingOrder] = useState(false);
  const [orderStatus, setOrderStatus] = useState(null);
  const [orderError, setOrderError] = useState("");

  // ── Redirect if not logged in ──
  useEffect(() => {
    if (user === null) {
      localStorage.setItem("redirect_after_login", "/checkout");
      navigate("/login");
    }
  }, [user, navigate]);

  // ── Load saved addresses from Firestore ──
  useEffect(() => {
    if (!user?.uid) return;
    const fetchAddresses = async () => {
      setLoadingAddresses(true);
      try {
        const snap = await getDoc(doc(db, "users", user.uid));
        if (snap.exists()) {
          const data = snap.data();
          const saved = data.addresses
            ? Object.entries(data.addresses).map(([id, addr]) => ({
                id,
                ...addr,
              }))
            : [];
          setAddresses(saved);
          if (saved.length > 0) setSelectedAddressIdx(0);
        }
      } catch (err) {
        console.error("Failed to load addresses:", err);
      } finally {
        setLoadingAddresses(false);
      }
    };
    fetchAddresses();
  }, [user]);

  // ── Persist address map to Firestore ──
  const persistAddresses = useCallback(
    async (updatedList) => {
      const addressMap = {};
      updatedList.forEach(({ id, ...rest }) => {
        addressMap[id] = rest;
      });
      await updateDoc(doc(db, "users", user.uid), { addresses: addressMap });
    },
    [user],
  );

  // ── Add / Edit address ──
  const handleSaveAddress = async (formData) => {
    setIsSavingAddress(true);
    try {
      let updated;
      if (editingIdx !== null) {
        updated = addresses.map((addr, i) =>
          i === editingIdx ? { ...addr, ...formData } : addr,
        );
      } else {
        const newId = `addr_${Date.now()}`;
        updated = [...addresses, { id: newId, ...formData }];
      }
      await persistAddresses(updated);
      setAddresses(updated);
      if (editingIdx === null) setSelectedAddressIdx(updated.length - 1);
      setShowModal(false);
      setEditingIdx(null);
    } catch (err) {
      console.error("Failed to save address:", err);
      alert("Could not save address. Please try again.");
    } finally {
      setIsSavingAddress(false);
    }
  };

  // ── Delete address ──
  const handleDeleteAddress = async (idx) => {
    if (!window.confirm("Remove this address?")) return;
    const updated = addresses.filter((_, i) => i !== idx);
    try {
      await persistAddresses(updated);
      setAddresses(updated);
      if (selectedAddressIdx === idx) {
        setSelectedAddressIdx(updated.length > 0 ? 0 : null);
      } else if (selectedAddressIdx > idx) {
        setSelectedAddressIdx((p) => p - 1);
      }
    } catch (err) {
      console.error("Failed to delete address:", err);
    }
  };

  // ── Calculations ──
  const SUB_TOTAL = useMemo(
    () => cart.reduce((acc, item) => acc + item.price * item.quantity, 0),
    [cart],
  );
  const TAX_RATE = 0.05;
  const TAX_AMOUNT = SUB_TOTAL * TAX_RATE;
  const actualShipping = useMemo(
    () => (cart.length === 0 ? 0 : paymentMethod === "store" ? 0 : 100),
    [cart, paymentMethod],
  );
  const GRAND_TOTAL = SUB_TOTAL + TAX_AMOUNT + actualShipping;
  const fmt = (n) => `₹${Math.round(n).toLocaleString("en-IN")}`;

  // ── Razorpay loader ──
  // ── Save order ──
  // ── Save order ──
  const saveOrderToFirestore = async (razorpayDetails = null) => {
    try {
      const selectedAddress = addresses[selectedAddressIdx];
      
      // 1. Create the order document
      const docRef = await addDoc(collection(db, "orders"), {
        userId: user.uid,
        customer: {
          name: user.name || user.displayName || "",
          email: user.email || "",
        },
        shipping:
          paymentMethod === "store"
            ? { type: "pickup", location: "Madhya Pradesh" }
            : { type: "delivery", ...selectedAddress },
        payment: {
          method: paymentMethod,
          status: razorpayDetails ? "paid" : "pending",
          orderId: razorpayDetails?.razorpay_order_id || null,
          transactionId: razorpayDetails?.razorpay_payment_id || "N/A",
        },
        items: cart.map((item) => ({ ...item })),
        pricing: {
          subtotal: SUB_TOTAL,
          tax: TAX_AMOUNT,
          shipping: actualShipping,
          total: GRAND_TOTAL,
          currency: "INR",
        },
        status: "placed",
        createdAt: serverTimestamp(),
      });

      // 2. Append the new order ID to the user's orders array
      const userDocRef = doc(db, "users", user.uid);
      await updateDoc(userDocRef, {
        orderIds: arrayUnion(docRef.id)
      });

      // 3. Clear cart and update UI
      dispatchCart({ type: "CLEAR_CART" });
      setOrderStatus("success");
    } catch (error) {
      console.error("Order Error:", error);
      setOrderError("Something went wrong. Please try again.");
    } finally {
      setIsPlacingOrder(false);
    }
  };

  // ── Place order handler ──
  const handlePlaceOrder = async () => {
    setOrderError("");

    if (paymentMethod !== "store" && selectedAddressIdx === null) {
      setOrderError(
        "Please select a delivery address before placing your order.",
      );
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    setIsPlacingOrder(true);

    if (paymentMethod === "online") {
      const isLoaded = await loadRazorpayScript();
      if (!isLoaded) {
        setOrderError("Razorpay could not be loaded. Check your connection and try again.");
        setIsPlacingOrder(false);
        return;
      }

      const key = import.meta.env.VITE_RAZORPAY_KEY_ID;
      if (!key) {
        setOrderError("Online payments are not configured yet. Please contact support.");
        setIsPlacingOrder(false);
        return;
      }

      try {
        const createOrder = httpsCallable(functions, "createRazorpayOrder");
        const { data: order } = await createOrder({
          amount: Math.round(GRAND_TOTAL * 100),
          currency: "INR",
          receipt: `order_${user.uid.slice(0, 8)}_${Date.now()}`,
        });
        let paymentCompleted = false;

        const rzp = new window.Razorpay({
          key,
          order_id: order.order_id,
          amount: order.amount,
          currency: order.currency,
          name: "Pragya Print",
          description: "Order Payment",
          image:
            "https://res.cloudinary.com/dal56whd6/image/upload/v1776772004/logo_pragya_print.png",
          handler: async (response) => {
            paymentCompleted = true;
            try {
              const verifyPayment = httpsCallable(
                functions,
                "verifyRazorpayPayment",
              );
              const { data: verification } = await verifyPayment(response);

              if (!verification.verified) {
                throw new Error("Payment signature verification failed.");
              }

              await saveOrderToFirestore(response);
            } catch (error) {
              console.error("Payment verification failed:", error);
              setOrderError("We could not verify your payment. Please contact support before retrying.");
              setIsPlacingOrder(false);
            }
          },
          prefill: {
            name: addresses[selectedAddressIdx]?.name || user?.name || "",
            email: user?.email || "",
            contact: addresses[selectedAddressIdx]?.phone || "",
          },
          theme: { color: "#4f46e5" },
          modal: {
            ondismiss: () => {
              if (!paymentCompleted) {
                setOrderError("Payment was cancelled.");
                setIsPlacingOrder(false);
              }
            },
          },
        });
        rzp.on("payment.failed", (res) => {
          setOrderError(
            "Payment failed: " +
              (res.error?.description || "Something went wrong. Please try again."),
          );
          setIsPlacingOrder(false);
        });
        rzp.open();
      } catch (error) {
        console.error("Could not start Razorpay checkout:", error);
        setOrderError("Could not start online payment. Please try again.");
        setIsPlacingOrder(false);
      }
    } else {
      await saveOrderToFirestore();
    }
  };

  // ── Guards ──
  if (user === null)
    return (
      <div className="text-center py-20 text-zinc-400">Redirecting...</div>
    );

  if (cart.length === 0 && orderStatus !== "success") {
    return (
      <div className="max-w-md mx-auto text-center py-28 px-4">
        <div className="w-20 h-20 bg-zinc-100 rounded-full flex items-center justify-center mx-auto mb-5">
          <ShoppingBag className="w-9 h-9 text-zinc-300" />
        </div>
        <h2 className="text-2xl font-bold text-zinc-700 mb-2">
          Your cart is empty
        </h2>
        <p className="text-zinc-400 text-sm mb-6">
          Add some items before checking out.
        </p>
        <button
          onClick={() => navigate("/")}
          className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-white rounded-xl font-semibold hover:bg-yellow-500 transition-colors"
        >
          <Home className="w-4 h-4" /> Go Shopping
        </button>
      </div>
    );
  }

  if (orderStatus === "success") {
    return (
      <div className="max-w-lg mx-auto px-4 py-24 text-center">
        <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-12 h-12 text-green-500" />
        </div>
        <h1 className="text-3xl font-extrabold text-zinc-800 mb-3">
          Order Placed!
        </h1>
        <p className="text-zinc-500 mb-8">
          Thank you! Your order has been received and is being processed.
        </p>
        <button
          onClick={() => navigate("/")}
          className="inline-flex items-center gap-2 px-7 py-3 bg-primary text-white rounded-xl font-semibold hover:bg-green-900 transition-colors"
        >
          <Home className="w-4 h-4" /> Back to Home
        </button>
      </div>
    );
  }

  // ── Main Render ──
  return (
    <>
      {showModal && (
        <AddressFormModal
          initial={editingIdx !== null ? addresses[editingIdx] : null}
          onSave={handleSaveAddress}
          onClose={() => {
            setShowModal(false);
            setEditingIdx(null);
          }}
          isSaving={isSavingAddress}
        />
      )}

      <div className="max-w-6xl mx-auto px-4 py-10">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-extrabold text-zinc-900 tracking-tight">
            Checkout
          </h1>
          <p className="text-zinc-400 text-sm mt-1">
            Review your order and complete payment
          </p>
        </div>

        {/* Error banner */}
        {orderError && (
          <div className="mb-6 flex items-center gap-3 px-4 py-3 bg-red-50 border border-red-200 text-red-700 rounded-xl text-sm font-medium">
            ⚠ {orderError}
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* ── Left Column ── */}
          <div className="lg:col-span-2 space-y-6">
            {/* STEP 1: Delivery Address */}
            <div className="bg-white rounded-2xl border border-zinc-200 shadow-sm overflow-hidden">
              <div className="px-6 py-4 border-b border-zinc-100 flex items-center justify-between">
                <h2 className="font-bold text-zinc-800 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-primary" />
                  Delivery Address
                </h2>
                <button
                  onClick={() => {
                    setEditingIdx(null);
                    setShowModal(true);
                  }}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary-600 hover:text-green-900 transition-colors"
                >
                  <Plus className="w-4 h-4" /> Add New
                </button>
              </div>

              <div className="p-6">
                {loadingAddresses ? (
                  <div className="flex items-center justify-center py-10 gap-3 text-zinc-400">
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span className="text-sm">Loading your addresses...</span>
                  </div>
                ) : addresses.length === 0 ? (
                  <div className="text-center py-10">
                    <div className="w-14 h-14 bg-green-50/20 rounded-full flex items-center justify-center mx-auto mb-3">
                      <MapPinned className="w-7 h-7 text-primary" />
                    </div>
                    <p className="text-zinc-900 font-semibold mb-1">
                      No saved addresses
                    </p>
                    <p className="text-zinc-400 text-sm mb-4">
                      Add an address to continue with delivery.
                    </p>
                    <button
                      onClick={() => {
                        setEditingIdx(null);
                        setShowModal(true);
                      }}
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-white rounded-xl text-sm font-semibold hover:bg-green-900 transition-colors"
                    >
                      <Plus className="w-4 h-4" /> Add New Address
                    </button>
                  </div>
                ) : (
                  <div className="space-y-3">
                    {addresses.map((addr, idx) => (
                      <AddressCard
                        key={addr.id}
                        address={addr}
                        selected={selectedAddressIdx === idx}
                        onSelect={() => setSelectedAddressIdx(idx)}
                        onEdit={() => {
                          setEditingIdx(idx);
                          setShowModal(true);
                        }}
                        onDelete={() => handleDeleteAddress(idx)}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* STEP 2: Payment Method */}
            <div className="bg-white rounded-2xl border border-zinc-200 shadow-sm overflow-hidden">
              <div className="px-6 py-4 border-b border-zinc-100">
                <h2 className="font-bold text-zinc-800 flex items-center gap-2">
                  <CreditCard className="w-5 h-5 text-primary" />
                  Payment Method
                </h2>
              </div>
              <div className="p-6 space-y-3">
                <PaymentOption
                  id="cod"
                  title="Cash on Delivery"
                  subtitle="Pay when your order arrives"
                  icon={<Truck className="w-5 h-5" />}
                  selected={paymentMethod}
                  setSelected={setPaymentMethod}
                />
                <PaymentOption
                  id="store"
                  title="Pay at Store / Pickup"
                  subtitle="Free shipping — collect from our Madhya Pradesh store"
                  icon={<MapPin className="w-5 h-5" />}
                  selected={paymentMethod}
                  setSelected={setPaymentMethod}
                />
                <PaymentOption
                  id="online"
                  title="Pay Online via Razorpay"
                  subtitle="UPI, Cards, Net Banking, Wallets"
                  icon={<CreditCard className="w-5 h-5" />}
                  selected={paymentMethod}
                  setSelected={setPaymentMethod}
                />
              </div>
            </div>
          </div>

          {/* ── Right: Order Summary ── */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl border border-zinc-200 shadow-sm sticky top-24 overflow-hidden">
              <div className="px-6 py-4 border-b border-zinc-100">
                <h2 className="font-bold text-zinc-800 flex items-center gap-2">
                  <Package className="w-5 h-5 text-primary" />
                  Order Summary
                </h2>
              </div>

              {/* Cart items */}
              <div className="px-6 py-4 space-y-3 border-b border-zinc-100 max-h-48 overflow-y-auto">
                {cart.map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    {item.image && (
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-10 h-10 rounded-lg object-cover border border-zinc-100 flex-shrink-0"
                      />
                    )}
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-semibold text-zinc-700 truncate">
                        {item.name}
                      </p>
                      <p className="text-xs text-zinc-400">
                        Qty: {item.quantity}
                      </p>
                    </div>
                    <p className="text-xs font-bold text-zinc-700 flex-shrink-0">
                      {fmt(item.price * item.quantity)}
                    </p>
                  </div>
                ))}
              </div>

              {/* Pricing breakdown */}
              <div className="px-6 py-4 space-y-2.5">
                <div className="flex justify-between text-sm text-zinc-500">
                  <span>Subtotal</span>
                  <span className="font-medium text-zinc-700">
                    {fmt(SUB_TOTAL)}
                  </span>
                </div>
                <div className="flex justify-between text-sm text-zinc-500">
                  <span>Tax (5%)</span>
                  <span className="font-medium text-zinc-700">
                    {fmt(TAX_AMOUNT)}
                  </span>
                </div>
                <div className="flex justify-between text-sm text-zinc-500">
                  <span>Shipping</span>
                  <span
                    className={`font-medium ${actualShipping === 0 ? "text-green-600" : "text-zinc-700"}`}
                  >
                    {actualShipping === 0 ? "FREE" : fmt(actualShipping)}
                  </span>
                </div>
                <div className="flex justify-between text-base font-extrabold text-zinc-900 border-t border-green-900/20 pt-3 mt-1">
                  <span>Total</span>
                  <span>{fmt(GRAND_TOTAL)}</span>
                </div>
              </div>

              {/* Selected address preview */}
              {paymentMethod !== "store" &&
                selectedAddressIdx !== null &&
                addresses[selectedAddressIdx] && (
                  <div className="mx-6 mb-4 p-3 bg-green-50/30 rounded-xl border border-primary">
                    <p className="text-xs font-semibold text-zinc-900 mb-0.5 uppercase tracking-wide">
                      Delivering to
                    </p>
                    <p className="text-xs text-zinc-700 leading-relaxed">
                      {addresses[selectedAddressIdx].name} ·{" "}
                      {addresses[selectedAddressIdx].addressLine1},{" "}
                      {addresses[selectedAddressIdx].city}
                    </p>
                  </div>
                )}

              {/* CTA */}
              <div className="px-6 pb-6">
                <button
                  onClick={handlePlaceOrder}
                  disabled={isPlacingOrder}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-primary hover:bg-green-900 disabled:bg-green-400 text-white font-bold rounded-xl transition-colors text-sm shadow-lg shadow-accent/20"
                >
                  {isPlacingOrder ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" /> Processing...
                    </>
                  ) : (
                    <>
                      {`Pay ${fmt(GRAND_TOTAL)}`}{" "}
                      <ChevronRight className="w-4 h-4" />
                    </>
                  )}
                </button>
                <p className="text-center text-xs text-zinc-400 mt-3">
                  🔒 Secured with 256-bit encryption
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .animate-slide-up { animation: slide-up 0.2s ease-out; }
      `}</style>
    </>
  );
};

export default Checkout;
