import { Link } from "react-router-dom";
import img from "../assets/images/watchimg.jpg";

function WatchType() {
  return (
    <div className="group w-64 rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      
      {/* Image */}
      <div className="overflow-hidden rounded-lg flex items-center justify-center">
         <img
          src={img}
          alt="Seiko Men's Watches"
          className="max-h-full max-w-full object-contain transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="mt-4 text-center">
        <h3 className="text-lg font-semibold text-gray-900">
          Seiko Men's Watches
        </h3>

        <p className="mt-1 text-sm text-gray-500">
          491 Products
        </p>

        {/* Optional Button */}
        <button className="mt-4 w-full rounded-lg bg-black py-2 text-sm font-medium text-white transition hover:bg-gray-800 cursor-pointer">
          <Link to="/soloPage">
              View Collection
          </Link>
        </button>
      </div>
    </div>
  );
}

export default WatchType;
