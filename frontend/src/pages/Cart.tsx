import React, { useState } from "react";
import { Trash2, Plus, Minus, ShoppingCart } from "lucide-react";

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Casio G-Shock GA-100",
      price: 28500,
      quantity: 1,
      image: "https://via.placeholder.com/100",
    },
    {
      id: 2,
      name: "Rolex Submariner",
      price: 150000,
      quantity: 2,
      image: "https://via.placeholder.com/100",
    },
  ]);

  const updateQty = (id: number, delta: number) => {
    setCartItems(prev => prev.map(item => 
      item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
    ));
  };

  const removeItem = (id: number) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  if (cartItems.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-slate-500">
        <ShoppingCart size={48} className="mb-4 opacity-20" />
        <h2 className="text-xl font-medium">Your cart is empty</h2>
        <button className="mt-4 text-indigo-600 font-semibold hover:underline">
          Return to Shop
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto p-6 md:p-10">
      <div className="flex items-center gap-3 mb-8">
        <ShoppingCart className="text-slate-800" />
        <h1 className="text-2xl font-bold text-slate-900">Shopping Cart</h1>
        <span className="text-sm bg-slate-100 px-2 py-1 rounded-md text-slate-500 ml-auto">
          {cartItems.length} Items
        </span>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {cartItems.map((item) => (
          <div key={item.id} className="flex flex-col sm:flex-row items-center gap-6 p-5 border border-slate-200 rounded-xl bg-white shadow-sm hover:border-slate-300 transition-colors">
            <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded-lg bg-slate-50" />
            
            <div className="flex-1">
              <h3 className="font-bold text-slate-800 text-lg">{item.name}</h3>
              <p className="text-indigo-600 font-medium">Rs. {item.price.toLocaleString()}</p>
            </div>

            <div className="flex items-center bg-slate-50 rounded-lg p-1 border">
              <button 
                onClick={() => updateQty(item.id, -1)} 
                className="p-2 hover:bg-white rounded-md transition-colors text-slate-600"
              >
                <Minus size={16} />
              </button>
              <span className="w-10 text-center font-bold text-slate-800">{item.quantity}</span>
              <button 
                onClick={() => updateQty(item.id, 1)} 
                className="p-2 hover:bg-white rounded-md transition-colors text-slate-600"
              >
                <Plus size={16} />
              </button>
            </div>

            <div className="w-full sm:w-32 text-right">
              <p className="font-bold text-slate-900 text-lg">
                Rs. {(item.price * item.quantity).toLocaleString()}
              </p>
              <button 
                onClick={() => removeItem(item.id)}
                className="text-xs font-bold text-rose-500 hover:text-rose-700 mt-1 uppercase tracking-wider"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 p-6 bg-slate-50 rounded-2xl flex flex-col items-end">
        <div className="mb-6 text-right">
          <p className="text-slate-500 text-sm font-medium uppercase tracking-widest">Total Balance</p>
          <p className="text-3xl font-black text-slate-900">
            Rs. {total.toLocaleString()}
          </p>
        </div>
        <button className="w-full sm:w-auto bg-slate-900 text-white px-10 py-4 rounded-xl font-bold hover:bg-slate-800 active:scale-95 transition-all shadow-lg shadow-slate-200">
          Checkout Now
        </button>
      </div>
    </div>
  );
};

export default Cart;