import { ShoppingCart, Heart } from "lucide-react";
import { useState } from "react";

import img from '../assets/images/watchimg.jpg';
import { Link } from "react-router-dom";
import type { Watch } from "../types/watch";
interface ProductCardProps {
  watch: Watch;
}

const ProductCard: React.FC<ProductCardProps> = ({ watch }) => {
  const [wishlisted, setWishlisted] = useState(false);

  const handleAddToCart = () => {
    alert("Product added to cart 🛒");
  };

  const handleWishlist = () => {
    alert("Product added to Wish listed !");
    setWishlisted(!wishlisted);
  };

  return (
    <>

      <div className="group relative rounded-xl border bg-white p-4 shadow-sm transition hover:shadow-lg">

        {/* Wishlist */}
        <button
          onClick={handleWishlist}
          className={`absolute right-3 top-3 z-20 transition ${wishlisted ? "text-red-500" : "text-gray-400"
            } hover:scale-110`}
        >
          <Heart size={18} fill={wishlisted ? "red" : "none"} />
        </button>

        {/* Image */}
        <div className="relative flex h-44 items-center justify-center overflow-hidden">

          <Link to={`/watchInfo/${watch._id}`}>
            <img
              src={img}
              alt="Watch"
              className="max-h-full object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          {/* Add to Cart */}
          <button
            onClick={handleAddToCart}
            className="absolute bottom-3 z-10 flex items-center justify-center rounded-full bg-black p-3 text-white opacity-0 translate-y-4 transition-all duration-300 hover:bg-gray-800 group-hover:translate-y-0 group-hover:opacity-100"
          >
            <ShoppingCart size={18} />
          </button>
        </div>

        {/* Info */}
        
        <Link to={`/watchInfo/${watch._id}`}>
        <div className="mt-4">
          <p className="text-sm font-semibold">{watch.name}</p>
          <p className="mt-1 text-sm text-gray-600 line-clamp-2">
            {watch.description[0]}
          </p>
          <div className="mt-2 flex items-center gap-2">
            <span className="font-semibold">Rs.{watch.price}.00</span>
          </div>
        </div>
        </Link>
      </div>

    </>
  );
}

export default ProductCard;
