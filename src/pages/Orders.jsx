import { useEffect, useState } from "react";
import { auth, db } from "../firebase";
import {
  collection,
  query,
  where,
  getDocs,
  orderBy,
} from "firebase/firestore";

const Orders = () => {
  const user = auth.currentUser;

  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  // ---------------------------------------
  // FETCH ORDERS
  // ---------------------------------------
  useEffect(() => {
    const fetchOrders = async () => {
      if (!user) return;

      try {
        const q = query(
          collection(db, "orders"),
          where("userId", "==", user.uid),
          orderBy("createdAt", "desc")
        );

        const snapshot = await getDocs(q);

        const data = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setOrders(data);
      } catch (err) {
        console.error(err);
      }

      setLoading(false);
    };

    fetchOrders();
  }, [user]);

  // ---------------------------------------
  // FORMAT DATE
  // ---------------------------------------
  const formatDate = (timestamp) => {
    if (!timestamp) return "";

    const date = timestamp.toDate();
    return date.toLocaleDateString("en-IN");
  };

  // ---------------------------------------
  // LOADING
  // ---------------------------------------
  if (loading) {
    return (
      <div className="min-h-[60vh] flex justify-center items-center">
        Loading your orders...
      </div>
    );
  }

  // ---------------------------------------
  // EMPTY STATE
  // ---------------------------------------
  if (orders.length === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col justify-center items-center text-center">
        <h2 className="text-xl font-semibold mb-2">
          No Orders Yet
        </h2>
        <p className="text-gray-500">
          Start shopping to see your orders here.
        </p>
      </div>
    );
  }

  // ---------------------------------------
  // UI
  // ---------------------------------------
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-8">
        My Orders
      </h1>

      <div className="space-y-6">
        {orders.map((order) => (
          <div
            key={order.id}
            className="bg-white p-5 rounded-xl shadow"
          >
            {/* TOP */}
            <div className="flex justify-between items-center mb-4">
              <div>
                <p className="font-semibold">
                  Order ID: {order.id}
                </p>
                <p className="text-sm text-gray-500">
                  {formatDate(order.createdAt)}
                </p>
              </div>

              <span
                className={`px-3 py-1 rounded-full text-sm font-semibold"
                 ${
                  order.status === "delivered"
                    ? "bg-green-100 text-green-600"
                    : order.status === "shipped"
                    ? "bg-blue-100 text-blue-600"
                    : "bg-yellow-100 text-yellow-600"
                }`}
              >
                {order.status}
              </span>
            </div>

            {/* ITEMS */}
            <div className="space-y-3">
              {order.items.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between text-sm border-b pb-2"
                >
                  <div>
                    <p className="font-medium">{item.name}</p>
                    <p className="text-gray-500">
                      {item.size} | {item.pages} pages
                    </p>
                  </div>

                  <p>
                    ₹{item.price} × {item.quantity}
                  </p>
                </div>
              ))}
            </div>
            {/* TOTAL */}
            <div className="flex justify-between mt-4 font-bold">
              <span>Total</span>
              <span>₹{order.totalAmount}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;