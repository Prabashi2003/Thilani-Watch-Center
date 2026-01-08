import { useEffect, useState } from "react";
import type { Iuser } from "../types/user";
import { getAllUsers, deleteUser } from "../api/userAPI";

const Customers = () => {
  const [users, setUsers] = useState<Iuser[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const data = await getAllUsers();
      setUsers(data);
    } catch (error) {
      console.error(error);
      alert("Failed to fetch users");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this user?")) return;

    try {
      await deleteUser(id);
      alert("User deleted successfully");
      fetchUsers();
    } catch (error) {
      console.error(error);
      alert("Failed to delete user");
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Header */}
      <div className="mb-6 flex flex-col md:flex-row md:justify-between md:items-center">
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-1">Customers</h2>
          <p className="text-gray-500">Customer directory and profiles.</p>
        </div>

      </div>

      {/* Table */}
      {loading ? (
        <p className="text-gray-600">Loading...</p>
      ) : users.length === 0 ? (
        <p className="text-gray-600">No customers found.</p>
      ) : (
        <div className="overflow-x-auto shadow rounded-lg">
          <table className="min-w-full bg-white border rounded-lg">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="py-3 px-6 text-left text-gray-700 uppercase tracking-wider">Name</th>
                <th className="py-3 px-6 text-left text-gray-700 uppercase tracking-wider">Email</th>
                <th className="py-3 px-6 text-left text-gray-700 uppercase tracking-wider">Role</th>
                <th className="py-3 px-6 text-left text-gray-700 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, idx) => (
                <tr
                  key={user._id}
                  className={`border-b ${idx % 2 === 0 ? "bg-gray-50" : "bg-white"} hover:bg-gray-100 transition`}
                >
                  <td className="py-3 px-6 font-medium text-gray-800">{user.name}</td>
                  <td className="py-3 px-6 text-gray-600">{user.email}</td>
                  <td className="py-3 px-6 text-gray-600 capitalize">{user.role}</td>
                  <td className="py-3 px-6">
                    <div className="flex space-x-2">
                      <button
                        onClick={() => handleDelete(user._id)}
                        className="bg-red-500 text-white px-3 py-1 rounded shadow hover:bg-red-400 transition"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Customers;
