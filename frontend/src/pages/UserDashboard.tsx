import { useEffect, useState } from "react";
import { Package, User, Mail, Phone, Calendar } from "lucide-react";

// ================= TYPES =================
interface UserInfo {
  _id: string;
  name: string;
  email: string;
  phone?: string;
  createdAt: string;
}

interface OrderItem {
  productId: string;
  name: string;
  image: string;
  quantity: number;
  price: number;
}

interface Order {
  _id: string;
  items: OrderItem[];
  totalAmount: number;
  status: "pending" | "paid" | "shipped" | "delivered" | "cancelled";
  createdAt: string;
}

// ================= COMPONENT =================
export default function UserDashboard() {
  const [user, setUser] = useState<UserInfo | null>(null);
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Replace with real API calls
    const fetchData = async () => {
      try {
        setUser({
          _id: "u123",
          name: "John Doe",
          email: "john@example.com",
          phone: "+94 77 123 4567",
          createdAt: "2024-06-01",
        });

        setOrders([
          {
            _id: "o101",
            status: "delivered",
            totalAmount: 28500,
            createdAt: "2025-01-05",
            items: [
              {
                productId: "p1",
                name: "Casio G-Shock GA-100",
                image: "https://via.placeholder.com/80",
                quantity: 1,
                price: 28500,
              },
            ],
          },
          {
            _id: "o102",
            status: "pending",
            totalAmount: 56000,
            createdAt: "2025-01-12",
            items: [
              {
                productId: "p2",
                name: "Fossil Chronograph",
                image: "https://via.placeholder.com/80",
                quantity: 2,
                price: 28000,
              },
            ],
          },
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div className="p-6 text-center">Loading dashboard...</div>;
  }

  return (
    <div className="p-6 max-w-6xl mx-auto space-y-8">
      {/* USER INFO */}
      {user && (
        <div className="bg-white rounded-2xl shadow p-6 grid md:grid-cols-2 gap-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-gray-100 flex items-center justify-center">
              <User className="w-7 h-7 text-gray-600" />
            </div>
            <div>
              <h2 className="text-xl font-semibold">{user.name}</h2>
              <p className="text-sm text-gray-500">Customer</p>
            </div>
          </div>

          <div className="space-y-2 text-sm text-gray-700">
            <p className="flex items-center gap-2"><Mail className="w-4 h-4" /> {user.email}</p>
            {user.phone && (
              <p className="flex items-center gap-2"><Phone className="w-4 h-4" /> {user.phone}</p>
            )}
            <p className="flex items-center gap-2"><Calendar className="w-4 h-4" /> Joined {new Date(user.createdAt).toDateString()}</p>
          </div>
        </div>
      )}

      {/* ORDERS */}
      <div>
        <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
          <Package className="w-6 h-6" /> My Orders
        </h3>

        {orders.length === 0 ? (
          <p className="text-gray-500">You have no orders yet.</p>
        ) : (
          <div className="space-y-6">
            {orders.map((order) => (
              <div key={order._id} className="bg-white rounded-2xl shadow p-6 space-y-4">
                <div className="flex flex-wrap justify-between gap-4">
                  <div>
                    <p className="text-xs text-gray-500">Order ID</p>
                    <p className="font-medium">{order._id}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Date</p>
                    <p className="font-medium">{new Date(order.createdAt).toDateString()}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Status</p>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium 
                      ${order.status === "delivered" ? "bg-green-100 text-green-700" :
                        order.status === "pending" ? "bg-yellow-100 text-yellow-700" :
                        order.status === "cancelled" ? "bg-red-100 text-red-700" :
                        "bg-blue-100 text-blue-700"}`}
                    >
                      {order.status}
                    </span>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Total</p>
                    <p className="font-semibold">LKR {order.totalAmount.toLocaleString()}</p>
                  </div>
                </div>

                <div className="divide-y">
                  {order.items.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-4 py-3">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 rounded-lg object-cover border"
                      />
                      <div className="flex-1">
                        <p className="font-medium">{item.name}</p>
                        <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                      </div>
                      <p className="font-medium">LKR {item.price.toLocaleString()}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
