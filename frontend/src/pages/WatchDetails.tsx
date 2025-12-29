import { useState } from "react";

interface Watch {
  id: string;
  name: string;
  brand: string;
  model: string;
  price: number;
  description: string;
  imageUrl: string;
  specs: string[];
  stock: number;
  warranty: string;
}

const dummyWatch: Watch = {
  id: "14602709",
  name: "Charter Black Rubber Strap Men’s Watch",
  brand: "COACH",
  model: "14602709",
  price: 76200,
  description:
    "A modern chronograph watch with a bold black dial, durable stainless steel case, and a comfortable rubber strap. Designed for everyday elegance and performance.",
  imageUrl:
    "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
  specs: [
    "Black dial with chronograph subdials",
    "44mm stainless steel case",
    "Black rubber strap with buckle closure",
    "Quartz chronograph movement",
    "Scratch-resistant mineral glass",
    "Water-resistant for daily wear",
  ],
  stock: 2,
  warranty: "1 Year",
};

const WatchDetails = () => {
  const [quantity, setQuantity] = useState(1);
  const watch = dummyWatch;

  return (

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white p-8 rounded-2xl shadow-lg">

        {/* LEFT – IMAGE */}
        <div className="flex justify-center items-center">
          <img
            src={watch.imageUrl}
            alt={watch.name}
            className="max-h-[480px] object-contain rounded-xl"
          />
        </div>

        {/* RIGHT – INFO */}
        <div className="space-y-5">

          {/* Title */}
          <div>
            <h1 className="text-2xl font-semibold text-gray-900">
              {watch.name} – {watch.model}
            </h1>
            <p className="text-sm text-gray-500 mt-1">{watch.brand}</p>
          </div>

          {/* Price */}
          <p className="text-3xl font-bold text-teal-700">
            LKR {watch.price.toLocaleString()}
          </p>

          {/* Description */}
          <p className="text-gray-600 leading-relaxed">
            {watch.description}
          </p>

          {/* Specs */}
          <ul className="space-y-2 text-gray-700 text-sm">
            {watch.specs.map((spec, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-teal-600">›</span>
                {spec}
              </li>
            ))}
            <li className="flex items-start gap-2">
              <span className="text-teal-600">›</span>
              Model: {watch.model}
            </li>
          </ul>

          {/* Warranty */}
          <p className="text-sm text-gray-700">
            <strong>Warranty:</strong> {watch.warranty}
          </p>

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

          {/* Quantity + Button */}
          <div className="flex items-center gap-4 mt-4">
            <div className="flex items-center border rounded-lg">
              <button
                onClick={() =>
                  setQuantity((q) => Math.max(1, q - 1))
                }
                className="px-3 py-2 text-gray-600 hover:bg-gray-100"
              >
                −
              </button>
              <span className="px-4">{quantity}</span>
              <button
                onClick={() =>
                  setQuantity((q) =>
                    q < watch.stock ? q + 1 : q
                  )
                }
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
