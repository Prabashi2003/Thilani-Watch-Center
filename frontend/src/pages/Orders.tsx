import { useEffect, useState } from "react";
import {
  getAllOrders,
  updateOrder,
  deleteOrder,
} from "../api/orderApi";
import type { IOrder } from "../types/order";

const Orders = () => {
  const [orders, setOrders] = useState<IOrder[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedOrder, setSelectedOrder] = useState<IOrder | null>(null);
  const [status, setStatus] = useState<IOrder["status"]>("Pending");

  const fetchOrders = async () => {
    setLoading(true);
    const data = await getAllOrders();
    setOrders(data);
    setLoading(false);
  };

  const handleUpdateStatus = async () => {
    if (!selectedOrder) return;
    await updateOrder(selectedOrder._id, { status });
    setSelectedOrder(null);
    fetchOrders();
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this order?")) return;
    await deleteOrder(id);
    fetchOrders();
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  if (loading) return <p className="text-gray-500">Loading orders...</p>;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Orders</h2>

      {/* Orders Table */}
      <div className="overflow-x-auto">
        <table className="w-full border rounded-lg">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 text-left">Order ID</th>
              <th className="p-3 text-left">User</th>
              <th className="p-3 text-left">Total</th>
              <th className="p-3 text-left">Status</th>
              <th className="p-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order._id} className="border-t">
                <td className="p-3 text-sm">{order._id}</td>
                <td className="p-3">{order.userId}</td>
                <td className="p-3 font-semibold">
                  Rs. {order.totalPrice}
                </td>
                <td className="p-3">
                  <span className="px-2 py-1 text-xs rounded bg-blue-100 text-blue-700">
                    {order.status}
                  </span>
                </td>
                <td className="p-3 space-x-3">
                  <button
                    onClick={() => {
                      setSelectedOrder(order);
                      setStatus(order.status);
                    }}
                    className="text-blue-600 hover:underline text-sm"
                  >
                    View / Edit
                  </button>
                  <button
                    onClick={() => handleDelete(order._id)}
                    className="text-red-600 hover:underline text-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Order Details Modal */}
      {selectedOrder && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white w-full max-w-lg rounded-xl p-6">
            <h3 className="text-xl font-bold mb-4">Order Details</h3>

            <p className="text-sm text-gray-600 mb-2">
              <strong>Order ID:</strong> {selectedOrder._id}
            </p>
            <p className="text-sm text-gray-600 mb-4">
              <strong>User:</strong> {selectedOrder.userId}
            </p>

            {/* Ordered Items */}
            <div className="mb-4">
              <h4 className="font-semibold mb-2">Items Ordered</h4>
              <div className="space-y-2">
                {selectedOrder.watches.map((item, index) => (
                  <div
                    key={index}
                    className="flex justify-between text-sm border p-2 rounded"
                  >
                    <span>Watch ID: {item.watchId}</span>
                    <span>Qty: {item.quantity}</span>
                    <span>Rs. {item.price}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Status Update */}
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">
                Order Status
              </label>
              <select
                value={status}
                onChange={(e) =>
                  setStatus(e.target.value as IOrder["status"])
                }
                className="w-full border rounded px-3 py-2"
              >
                <option value="Pending">Pending</option>
                <option value="Processing">Processing</option>
                <option value="Shipped">Shipped</option>
                <option value="Delivered">Delivered</option>
                <option value="Cancelled">Cancelled</option>
              </select>
            </div>

            <div className="flex justify-end gap-3">
              <button
                onClick={() => setSelectedOrder(null)}
                className="px-4 py-2 border rounded"
              >
                Cancel
              </button>
              <button
                onClick={handleUpdateStatus}
                className="px-4 py-2 bg-black text-white rounded"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Orders;
