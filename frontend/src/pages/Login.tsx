import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ email, password });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black">
      <div className="bg-gray-950 text-white p-8 rounded-2xl shadow-2xl w-full max-w-md border border-yellow-600/40">

        <h1 className="text-3xl font-bold text-center text-yellow-500">
          Thilani Watch Center
        </h1>
        <p className="text-center text-gray-400 mb-6">
          Timeless Elegance ⌚
        </p>

        <form onSubmit={handleSubmit}>
          {/* Email */}
          <div className="mb-4">
            <label className="block text-sm text-gray-300 mb-1">
              Email Address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 rounded-lg bg-gray-900 border border-gray-700 focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 outline-none"
            />
          </div>

          {/* Password */}
          <div className="mb-6 relative">
            <label className="block text-sm text-gray-300 mb-1">
              Password
            </label>

            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-2 pr-10 rounded-lg bg-gray-900 border border-gray-700 focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 outline-none"
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-9 text-gray-400 hover:text-yellow-500"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          <button
            type="submit"
            className="w-full bg-yellow-500 text-black font-semibold py-2 rounded-lg hover:bg-yellow-400 transition"
          >
            Login
          </button>
        </form>

        <p className="text-sm text-center text-gray-400 mt-6">
          Don’t have an account?{" "}
          <Link to='/signup'>
          <span className="text-yellow-500 hover:underline cursor-pointer">
            Sign Up
          </span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
