import React from "react";
import delivery from "../assets/images/delivery.png";
import { motion } from "framer-motion";

const Delivery: React.FC = () => {
  return (
    <div className="container my-20 ml-auto mr-auto">
      <div className="bg-gray-300 rounded-2xl p-10 md:p-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          
          {/* Description */}
          <div className="space-y-6">
            <motion.h1
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: 0.2,
              }}
              className="text-4xl font-bold text-darkGray font-serif"
            >
              Island Wide Delivery Available
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: 0.4,
              }}
              className="text-gray-600 max-w-md"
            >
              Fast and reliable island-wide delivery to your doorstep.
            </motion.p>

            <motion.button 
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: 0.6,
              }}
              className="bg-black text-white p-5 rounded-md"
            >
              Shop Now
            </motion.button>
          </div>

          {/* Image */}
          <div className="flex justify-center md:justify-end">
            <motion.img
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: 0.6,
              }}
              src={delivery as string}
              alt="Delivery"
              className="w-[260px] sm:w-[340px] md:w-[420px] object-contain"
            />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Delivery;
