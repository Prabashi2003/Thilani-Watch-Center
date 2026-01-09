import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import type { Watch } from "../types/watch";
import { getWatchById } from "../api/watchApi";

const WatchDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [watch, setWatch] = useState<Watch | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWatch = async () => {
      if (!id) return;

      try {
        setLoading(true);
        const data = await getWatchById(id);
                
        // If brand is an object, replace it with its name string
        if (data.brand && typeof data.brand === "object") {
          data.brand = data.brand.name;
        }
        setWatch(data);
        console.log("Fetched watch:", data);
      } catch (error) {
        console.error("Error fetching watch:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchWatch();
  }, [id]);

  if (loading) return <p className="p-4">Loading watch details...</p>;
  if (!watch) return <p className="p-4 text-red-600">Watch not found.</p>;

  return (
    <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white p-8 rounded-2xl shadow-lg">

      {/* LEFT – IMAGE */}
      <div className="flex justify-center items-center">
        <img
          src={watch.images?.[0] || "/assets/images/watchimg.jpg"} // first image or fallback
          alt={watch.name}
          className="max-h-[480px] object-contain rounded-xl"
        />
      </div>

      {/* RIGHT – INFO */}
      <div className="space-y-5">

        {/* Title & Brand */}
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">{watch.name}</h1>
          <p className="text-sm text-gray-500 mt-1">{watch.brand}</p>
        </div>

        {/* Price */}
        <p className="text-3xl font-bold text-teal-700">
          LKR {watch.price.toLocaleString()}
        </p>

        {/* Description */}
        <div className="text-gray-600 leading-relaxed">
          {watch.description.map((desc, i) => (
            <p key={i}>{typeof desc === "string" ? desc : JSON.stringify(desc)}</p>
          ))}
        </div>

        {/* Stock */}
        <p
          className={`text-sm font-medium ${
            watch.stock > 0 ? "text-green-600" : "text-red-600"
          }`}
        >
          {watch.stock > 0
            ? `Only ${watch.stock} left in stock`
            : "Out of stock"}
        </p>

        {/* Quantity + Add to Cart */}
        <div className="flex items-center gap-4 mt-4">
          <div className="flex items-center border rounded-lg">
            <button
              onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              className="px-3 py-2 text-gray-600 hover:bg-gray-100"
            >
              −
            </button>
            <span className="px-4">{quantity}</span>
            <button
              onClick={() => setQuantity((q) => (q < watch.stock ? q + 1 : q))}
              className="px-3 py-2 text-gray-600 hover:bg-gray-100"
            >
              +
            </button>
          </div>

          <button
            disabled={watch.stock === 0}
            className="bg-teal-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-800 transition disabled:opacity-50"
          >
            ADD TO CART
          </button>
        </div>

        {/* Footer Note */}
        <p className="text-xs text-gray-500 pt-2">
          Discounted prices will be applied on checkout
        </p>
      </div>
    </div>
  );
};

export default WatchDetails;
