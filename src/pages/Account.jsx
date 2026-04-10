import { useState, useEffect } from "react";
import { auth, db } from "../firebase";
import {
  doc,
  getDoc,
  updateDoc,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import {
  signOut,
  updateEmail,
  EmailAuthProvider,
  reauthenticateWithCredential,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

// ─── Confirm Dialog ───────────────────────────────────────────────────────────
const ConfirmDialog = ({ message, onConfirm, onCancel }) => (
  <div
    className="fixed inset-0 bg-black/45 z-[1000] flex items-center justify-center p-4 animate-in fade-in duration-150"
    onClick={onCancel}
  >
    <div
      className="bg-white rounded-[20px] p-8 w-full max-w-[380px] text-center shadow-2xl animate-in slide-in-from-bottom-4 duration-200"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="text-[2.2rem] mb-2">🚪</div>
      <h3 className=" text-[1.3rem] font-semibold mb-2 text-[#1a1a1a]">
        Sign out?
      </h3>
      <p className="text-[#666] text-sm mb-6">{message}</p>
      <div className="flex gap-3 justify-center">
        <button
          className="bg-[#f5f4f0] text-[#1a1a1a] rounded-xl px-[1.4rem] py-3 text-sm font-medium hover:bg-[#ebebeb] transition-colors"
          onClick={onCancel}
        >
          Cancel
        </button>
        <button
          className="bg-[#ef4444] text-white rounded-xl px-[1.4rem] py-3 text-sm font-semibold transition-opacity hover:opacity-90"
          onClick={onConfirm}
        >
          Sign Out
        </button>
      </div>
    </div>
  </div>
);

// ─── Address Modal ────────────────────────────────────────────────────────────
const AddressModal = ({ onSave, onClose, existing }) => {
  const [form, setForm] = useState(
    existing || {
      label: "",
      line1: "",
      line2: "",
      city: "",
      state: "",
      pincode: "",
    }
  );

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  return (
    <div
      className="fixed inset-0 bg-black/45 z-[1000] flex items-center justify-center p-4 animate-in fade-in duration-150"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-[20px] p-8 w-full max-w-[520px] text-left shadow-2xl animate-in slide-in-from-bottom-4 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <h3 className=" text-[1.1rem] font-semibold mb-[1.2rem] text-[#1a1a1a]">
          {existing ? "Edit Address" : "Add New Address"}
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-[0.9rem]">
          <div className="flex flex-col gap-1 sm:col-span-2">
            <label className="text-[0.78rem] font-semibold text-[#888] uppercase tracking-wider">
              Label (e.g. Home, Office)
            </label>
            <input
              className="border-[1.5px] border-[#e8e8e8] rounded-xl px-4 py-3 text-sm text-[#1a1a1a] focus:border-[#1a1a1a] outline-none transition-colors"
              placeholder="Home"
              value={form.label}
              onChange={set("label")}
            />
          </div>
          <div className="flex flex-col gap-1 sm:col-span-2">
            <label className="text-[0.78rem] font-semibold text-[#888] uppercase tracking-wider">
              Address Line 1
            </label>
            <input
              className="border-[1.5px] border-[#e8e8e8] rounded-xl px-4 py-3 text-sm text-[#1a1a1a] focus:border-[#1a1a1a] outline-none transition-colors"
              placeholder="Street, Building"
              value={form.line1}
              onChange={set("line1")}
            />
          </div>
          <div className="flex flex-col gap-1 sm:col-span-2">
            <label className="text-[0.78rem] font-semibold text-[#888] uppercase tracking-wider">
              Address Line 2
            </label>
            <input
              className="border-[1.5px] border-[#e8e8e8] rounded-xl px-4 py-3 text-sm text-[#1a1a1a] focus:border-[#1a1a1a] outline-none transition-colors"
              placeholder="Landmark (optional)"
              value={form.line2}
              onChange={set("line2")}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-[0.78rem] font-semibold text-[#888] uppercase tracking-wider">
              City
            </label>
            <input
              className="border-[1.5px] border-[#e8e8e8] rounded-xl px-4 py-3 text-sm text-[#1a1a1a] focus:border-[#1a1a1a] outline-none transition-colors"
              placeholder="Mumbai"
              value={form.city}
              onChange={set("city")}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-[0.78rem] font-semibold text-[#888] uppercase tracking-wider">
              State
            </label>
            <input
              className="border-[1.5px] border-[#e8e8e8] rounded-xl px-4 py-3 text-sm text-[#1a1a1a] focus:border-[#1a1a1a] outline-none transition-colors"
              placeholder="Maharashtra"
              value={form.state}
              onChange={set("state")}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-[0.78rem] font-semibold text-[#888] uppercase tracking-wider">
              Pincode
            </label>
            <input
              className="border-[1.5px] border-[#e8e8e8] rounded-xl px-4 py-3 text-sm text-[#1a1a1a] focus:border-[#1a1a1a] outline-none transition-colors"
              placeholder="400001"
              value={form.pincode}
              onChange={set("pincode")}
            />
          </div>
        </div>
        <div className="flex gap-3 justify-end mt-[1.4rem]">
          <button
            className="bg-[#f5f4f0] text-[#1a1a1a] rounded-xl px-[1.4rem] py-3 text-sm font-medium hover:bg-[#ebebeb] transition-colors"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="bg-[#1a1a1a] text-white rounded-xl px-[1.6rem] py-3 text-sm font-semibold hover:opacity-80 transition-opacity"
            onClick={() => {
              if (!form.label || !form.line1 || !form.city)
                return alert("Fill required fields");
              onSave(form);
            }}
          >
            Save Address
          </button>
        </div>
      </div>
    </div>
  );
};

// ─── Main Account Page ────────────────────────────────────────────────────────
const Account = () => {
  const navigate = useNavigate();
  const { tab } = useParams();
  const user = auth.currentUser;

  const [profile, setProfile] = useState({
    name: "",
    phone: "",
    email: "",
    dob: "",
    gender: "",
  });
  const [addresses, setAddresses] = useState({});
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("profile");
  const [showLogout, setShowLogout] = useState(false);
  const [showAddrModal, setShowAddrModal] = useState(false);
  const [editingAddr, setEditingAddr] = useState(null);
  const [emailEdit, setEmailEdit] = useState(false);
  const [newEmail, setNewEmail] = useState("");
  const [currentPwd, setCurrentPwd] = useState("");
  const [toast, setToast] = useState(null);

  const showToast = (msg, type = "success") => {
    setToast({ msg, type });
    setTimeout(() => setToast(null), 3000);
  };

  // Add this inside your Account component
  useEffect(() => {
    if (tab) {
      setActiveTab(tab);
    } else {
      // Default to profile if no tab is specified in URL
      setActiveTab("profile");
    }
  }, [tab]);

  useEffect(() => {
    if (!user) return;
    (async () => {
      const ref = doc(db, "users", user.uid);
      const snap = await getDoc(ref);
      if (snap.exists()) {
        const data = snap.data();
        setProfile({ ...data, email: user.email });
        setAddresses(data.addresses || {});
        if (data.orderIds?.length) {
          const ordersRef = collection(db, "orders");
          const q = query(ordersRef, where("userId", "==", data.uid));
          const ordSnap = await getDocs(q);
          setOrders(ordSnap.docs.map((d) => ({ id: d.id, ...d.data() })));
        }
      }
    })();
  }, [user]);

  const handleUpdate = async () => {
    try {
      setLoading(true);
      const ref = doc(db, "users", user.uid);
      await updateDoc(ref, {
        name: profile.name,
        dob: profile.dob,
        gender: profile.gender,
      });
      showToast("Profile updated successfully");
    } catch (err) {
      showToast(err.message, "error");
    }
    setLoading(false);
  };

  const handleEmailUpdate = async () => {
    try {
      setLoading(true);
      const credential = EmailAuthProvider.credential(user.email, currentPwd);
      await reauthenticateWithCredential(user, credential);
      await updateEmail(user, newEmail);
      setProfile((p) => ({ ...p, email: newEmail }));
      setEmailEdit(false);
      setCurrentPwd("");
      showToast("Email updated successfully");
    } catch (err) {
      showToast(err.message, "error");
    }
    setLoading(false);
  };

  const saveAddress = async (addrData) => {
    const key = editingAddr?.key || `addr_${Date.now()}`;
    const updated = { ...addresses, [key]: addrData };
    setAddresses(updated);
    setShowAddrModal(false);
    setEditingAddr(null);
    await updateDoc(doc(db, "users", user.uid), { addresses: updated });
    showToast("Address saved");
  };

  const deleteAddress = async (key) => {
    const updated = { ...addresses };
    delete updated[key];
    setAddresses(updated);
    await updateDoc(doc(db, "users", user.uid), { addresses: updated });
    showToast("Address removed");
  };

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/");
  };

  const initials = (profile.name || user?.email || "U")
    .split(" ")
    .map((w) => w[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  const tabs = [
    { key: "profile", label: "Profile", icon: "👤" },
    { key: "orders", label: "Orders", icon: "📦" },
    { key: "addresses", label: "Addresses", icon: "📍" },
  ];

  const statusColor = {
    delivered: "text-[#22c55e] bg-[#22c55e18]",
    processing: "text-[#f59e0b] bg-[#f59e0b18]",
    cancelled: "text-[#ef4444] bg-[#ef444418]",
    shipped: "text-[#3b82f6] bg-[#3b82f618]",
  };

  return (
    <div className="min-h-screen bg-[#f5f4f0] text-[#1a1a1a] px-4 py-8 pb-16">
      {/* ── Toast ── */}
      {toast && (
        <div
          className={`fixed bottom-8 left-1/2 -translate-x-1/2 px-[1.6rem] py-3 rounded-[40px] text-sm font-medium z-[2000] shadow-xl animate-in fade-in slide-in-from-bottom-3 ${toast.type === "error" ? "bg-[#ef4444] text-white" : "bg-[#1a1a1a] text-white"}`}
        >
          {toast.msg}
        </div>
      )}

      {/* ── Logout Confirm ── */}
      {showLogout && (
        <ConfirmDialog
          message="You'll need to sign in again to access your account."
          onConfirm={handleLogout}
          onCancel={() => setShowLogout(false)}
        />
      )}

      {/* ── Address Modal ── */}
      {showAddrModal && (
        <AddressModal
          existing={editingAddr?.data}
          onSave={saveAddress}
          onClose={() => {
            setShowAddrModal(false);
            setEditingAddr(null);
          }}
        />
      )}

      <div className="max-w-6xl mx-auto">
        {/* ── User Banner ── */}
        <div className="bg-[#1a1a1a] rounded-[20px] p-8 flex items-center gap-[1.6rem] mb-8 relative overflow-hidden">
          <div className="absolute -right-[60px] -top-[60px] w-[240px] height-[240px] bg-[radial-gradient(circle,rgba(255,220,80,0.18)_0%,transparent_70%)] rounded-full" />
          <div className="w-[72px] h-[72px] rounded-full bg-gradient-to-br from-[#f5c842] to-[#e8a020] flex items-center justify-center  text-[1.6rem] font-semibold text-[#1a1a1a] shrink-0 z-10">
            {initials}
          </div>
          <div className="flex-1 z-10">
            <p className=" text-[1.5rem] font-semibold text-white mb-1">
              {profile.name || "Welcome back"}
            </p>
            <p className="text-[#888] text-[0.85rem]">
              {profile.email || user?.email}
            </p>
          </div>
          <div className="hidden sm:flex gap-[1.6rem] z-10">
            <div className="text-right">
              <div className=" text-[1.4rem] text-[#f5c842] font-semibold">
                {orders.length}
              </div>
              <div className="text-[0.75rem] text-[#666]">Orders</div>
            </div>
            <div className="text-right">
              <div className=" text-[1.4rem] text-[#f5c842] font-semibold">
                {Object.keys(addresses).length}
              </div>
              <div className="text-[0.75rem] text-[#666]">Saved Addresses</div>
            </div>
          </div>
        </div>

        {/* ── Body ── */}
        <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-[1.6rem] max-w-8xl mx-auto">
          {/* ── Sidebar ── */}
          <aside className="bg-white rounded-2xl p-[1.2rem] shadow-sm h-fit">
            {tabs.map((t) => (
              <button
                key={t.key}
                className={`flex items-center gap-[0.7rem] px-4 py-3 rounded-xl cursor-pointer text-sm font-medium transition-colors w-full text-left border-none ${
                  activeTab === t.key
                    ? "bg-[#1a1a1a] text-white"
                    : "text-[#555] hover:bg-[#f5f4f0] hover:text-[#1a1a1a]"
                }`}
                onClick={() => {
                  // Navigate to /account/orders, /account/addresses, etc.
                  navigate(`/account/${t.key}`);
                }}
              >
                <span>{t.icon}</span> {t.label}
              </button>
            ))}
            <div className="h-[1px] bg-[#f0f0f0] my-[0.8rem]" />
            <button
              className="flex items-center gap-[0.7rem] px-4 py-3 rounded-xl cursor-pointer text-sm font-medium text-[#555] hover:bg-[#f5f4f0] transition-colors w-full text-left"
              onClick={() => navigate("/cart")}
            >
              🛒 My Cart
            </button>
            <button
              className="flex items-center gap-[0.7rem] px-4 py-3 rounded-xl cursor-pointer text-sm font-medium text-[#555] hover:bg-[#f5f4f0] transition-colors w-full text-left"
              onClick={() => navigate("/about")}
            >
              ℹ️ About Us
            </button>
            <button
              className="flex items-center gap-[0.7rem] px-4 py-3 rounded-xl cursor-pointer text-sm font-medium text-[#555] hover:bg-[#f5f4f0] transition-colors w-full text-left"
              onClick={() => navigate("/contact")}
            >
              📞 Contact
            </button>
            <div className="h-[1px] bg-[#f0f0f0] my-[0.8rem]" />
            <button
              className="flex items-center gap-[0.7rem] px-4 py-3 rounded-xl cursor-pointer text-sm font-medium text-[#ef4444] hover:bg-[#fef2f2] transition-colors w-full text-left mt-1"
              onClick={() => setShowLogout(true)}
            >
              🚪 Sign Out
            </button>
          </aside>

          {/* ── Main Panel ── */}
          <main>
            {/* ════ PROFILE TAB ════ */}
            {activeTab === "profile" && (
              <div className="bg-white rounded-2xl p-[1.8rem] shadow-sm animate-in fade-in duration-300">
                <p className=" text-[1.2rem] font-semibold mb-[1.4rem] text-[#1a1a1a]">
                  Personal Information
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1 sm:col-span-2">
                    <label className="text-[0.78rem] font-semibold text-[#888] uppercase tracking-wider">
                      Full Name
                    </label>
                    <input
                      className="border-[1.5px] border-[#e8e8e8] rounded-xl px-4 py-3 text-sm text-[#1a1a1a] focus:border-[#1a1a1a] outline-none transition-colors"
                      placeholder="Your full name"
                      value={profile.name || ""}
                      onChange={(e) =>
                        setProfile({ ...profile, name: e.target.value })
                      }
                    />
                  </div>

                  <div className="flex flex-col gap-1 sm:col-span-2">
                    <label className="text-[0.78rem] font-semibold text-[#888] uppercase tracking-wider">
                      Phone Number
                    </label>
                    <input
                      className="border-[1.5px] border-[#e8e8e8] rounded-xl px-4 py-3 text-sm text-[#aaa] bg-[#f8f8f8] cursor-not-allowed outline-none"
                      value={profile.phone || ""}
                      disabled
                      placeholder="—"
                    />
                  </div>

                  <div className="flex flex-col gap-1 sm:col-span-2">
                    <label className="text-[0.78rem] font-semibold text-[#888] uppercase tracking-wider">
                      Email Address
                    </label>
                    {!emailEdit ? (
                      <div className="flex gap-[0.6rem] items-center">
                        <input
                          className="border-[1.5px] border-[#e8e8e8] rounded-xl px-4 py-3 text-sm text-[#aaa] bg-[#f8f8f8] flex-1 cursor-not-allowed"
                          value={profile.email || ""}
                          disabled
                        />
                        <span
                          className="text-[0.78rem] text-[#888] underline cursor-pointer whitespace-nowrap hover:text-[#1a1a1a]"
                          onClick={() => {
                            setEmailEdit(true);
                            setNewEmail(profile.email || "");
                          }}
                        >
                          Change
                        </span>
                      </div>
                    ) : (
                      <div className="flex flex-col gap-[0.7rem]">
                        <input
                          className="border-[1.5px] border-[#e8e8e8] rounded-xl px-4 py-3 text-sm text-[#1a1a1a] focus:border-[#1a1a1a] outline-none"
                          type="email"
                          placeholder="New email"
                          value={newEmail}
                          onChange={(e) => setNewEmail(e.target.value)}
                        />
                        <input
                          className="border-[1.5px] border-[#e8e8e8] rounded-xl px-4 py-3 text-sm text-[#1a1a1a] focus:border-[#1a1a1a] outline-none"
                          type="password"
                          placeholder="Current password (to confirm)"
                          value={currentPwd}
                          onChange={(e) => setCurrentPwd(e.target.value)}
                        />
                        <div className="flex gap-[0.6rem]">
                          <button
                            className="bg-[#1a1a1a] text-white rounded-xl px-6 py-3 text-sm font-semibold flex-1 disabled:opacity-50"
                            disabled={loading}
                            onClick={handleEmailUpdate}
                          >
                            {loading ? "Saving…" : "Update Email"}
                          </button>
                          <button
                            className="bg-[#f5f4f0] text-[#1a1a1a] rounded-xl px-[1.4rem] py-3 text-sm font-medium hover:bg-[#ebebeb]"
                            onClick={() => setEmailEdit(false)}
                          >
                            Cancel
                          </button>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="flex flex-col gap-1">
                    <label className="text-[0.78rem] font-semibold text-[#888] uppercase tracking-wider">
                      Date of Birth
                    </label>
                    <input
                      className="border-[1.5px] border-[#e8e8e8] rounded-xl px-4 py-3 text-sm text-[#1a1a1a] focus:border-[#1a1a1a] outline-none"
                      type="date"
                      value={profile.dob || ""}
                      onChange={(e) =>
                        setProfile({ ...profile, dob: e.target.value })
                      }
                    />
                  </div>

                  <div className="flex flex-col gap-1">
                    <label className="text-[0.78rem] font-semibold text-[#888] uppercase tracking-wider">
                      Gender
                    </label>
                    <select
                      className="border-[1.5px] border-[#e8e8e8] rounded-xl px-4 py-3 text-sm text-[#1a1a1a] focus:border-[#1a1a1a] outline-none bg-white"
                      value={profile.gender || ""}
                      onChange={(e) =>
                        setProfile({ ...profile, gender: e.target.value })
                      }
                    >
                      <option value="">Select</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                      <option value="prefer_not">Prefer not to say</option>
                    </select>
                  </div>
                </div>

                <div className="flex justify-end mt-[1.4rem]">
                  <button
                    className="bg-[#1a1a1a] text-white rounded-xl px-[1.6rem] py-3 text-sm font-semibold hover:opacity-80 transition-opacity disabled:opacity-50"
                    onClick={handleUpdate}
                    disabled={loading}
                  >
                    {loading ? "Saving…" : "Save Changes"}
                  </button>
                </div>
              </div>
            )}

            {/* ════ ORDERS TAB ════ */}
            {activeTab === "orders" && (
              <div className="bg-white rounded-2xl p-[1.8rem] shadow-sm animate-in fade-in duration-300">
                <p className=" text-[1.2rem] font-semibold mb-[1.4rem] text-[#1a1a1a]">
                  Order History
                </p>
                {orders.length === 0 ? (
                  <div className="text-center py-12 text-[#aaa] text-sm">
                    <span className="text-[2.4rem] block mb-2">📦</span>
                    No orders yet. Start shopping!
                  </div>
                ) : (
                  <div className="space-y-[0.8rem]">
                    {orders.map((order) => {
                      const status = (
                        order.status || "processing"
                      ).toLowerCase();
                      const statusClass =
                        statusColor[status] || "text-[#888] bg-[#88818]";
                      return (
                        <div
                          key={order.id}
                          className="border-[1.5px] border-[#e8e8e8] rounded-xl p-[1.1rem_1.2rem] flex items-center justify-between gap-4"
                        >
                          <div>
                            <div className="font-semibold text-sm">
                              #{order.id.slice(-10)}
                            </div>
                            <div className="text-[0.78rem] text-[#999] mt-1">
                              {order.createdAt?.toDate
                                ? order.createdAt
                                    .toDate()
                                    .toLocaleDateString("en-IN", {
                                      day: "numeric",
                                      month: "short",
                                      year: "numeric",
                                    })
                                : order.date || "—"}
                            </div>
                          </div>
                          <span
                            className={`rounded-[20px] px-[0.8rem] py-1 text-[0.75rem] font-semibold capitalize ${statusClass}`}
                          >
                            {status}
                          </span>
                          <div>
                            <div className=" text-[1.1rem] font-semibold text-right">
                              ₹{order.pricing.total ?? "—"}
                            </div>
                            <div className="text-[0.78rem] text-[#999] text-right">
                              {order.items?.length ?? 0} item
                              {order.items?.length !== 1 ? "s" : ""}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            )}

            {/* ════ ADDRESSES TAB ════ */}
            {activeTab === "addresses" && (
              <div className="bg-white rounded-2xl p-[1.8rem] shadow-sm animate-in fade-in duration-300">
                <div className="flex justify-between items-center mb-[1.2rem]">
                  <p className=" text-[1.2rem] font-semibold text-[#1a1a1a]">
                    Saved Addresses
                  </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {Object.entries(addresses).map(([key, addr]) => (
                    <div
                      key={key}
                      className="border-[1.5px] border-[#e8e8e8] rounded-xl p-4 relative group"
                    >
                      <div className="font-semibold text-[0.82rem] tracking-wider uppercase text-[#888] mb-2">
                        {addr.label}
                      </div>
                      <div className="text-[0.88rem] text-[#333] leading-relaxed">
                        {addr.line1}
                        {addr.line2 ? `, ${addr.line2}` : ""}
                        <br />
                        {addr.city}, {addr.state} – {addr.pincode}
                      </div>
                      <div className="absolute top-[0.8rem] right-[0.8rem] flex gap-[0.3rem]">
                        <button
                          className="bg-[#f5f4f0] rounded-lg w-8 h-8 flex items-center justify-center text-[0.85rem] hover:bg-[#ebebeb] transition-colors"
                          title="Edit"
                          onClick={() => {
                            setEditingAddr({ key, data: addr });
                            setShowAddrModal(true);
                          }}
                        >
                          ✏️
                        </button>
                        <button
                          className="bg-[#f5f4f0] rounded-lg w-8 h-8 flex items-center justify-center text-[0.85rem] hover:bg-[#fef2f2] transition-colors"
                          title="Delete"
                          onClick={() => deleteAddress(key)}
                        >
                          🗑️
                        </button>
                      </div>
                    </div>
                  ))}
                  <button
                    className="border-[1.5px] border-dashed border-[#ccc] rounded-xl flex items-center justify-center min-h-[110px] cursor-pointer text-[#aaa] text-[0.88rem] gap-2 hover:border-[#1a1a1a] hover:text-[#1a1a1a] transition-all bg-transparent"
                    onClick={() => {
                      setEditingAddr(null);
                      setShowAddrModal(true);
                    }}
                  >
                    ＋ Add New Address
                  </button>
                </div>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};

export default Account;
