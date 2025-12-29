import { useState } from "react";
import Ham from "../../assets/icons/ham.png";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* NAVBAR */}
      <header
       className="mt-10"
      >
        <div className="max-w-7xl mx-auto pl-2 pr-4 sm:pl-4 sm:pr-4 h-16 flex items-center justify-between">
          {/* Logo */}
          <div className="text-2xl font-bold text-gray-900">
            {/* <img 
              src={logo} 
              alt="Brand Logo"    
              className="h-35 sm:h-42 md:h-44 lg:h-46 xl:h-45 w-auto object-contain"
            /> */}
            Thilani Watch Center
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-12 text-gray-800 font-medium text-lg">
            <Link className="hover:text-black" to="/">Home</Link>
            <Link className="hover:text-black" to="/shop">Products</Link>
          </nav>

          {/* Mobile Button */}
          <button
            onClick={() => setOpen(true)}
            className="md:hidden p-2 rounded hover:bg-white/20 cursor-pointer"
          >
            <img src={Ham} />
          </button>

          {/* Desktop Login */}
          <nav className="hidden md:flex space-x-12 text-gray-800 font-medium text-lg">
            <Link className="hover:text-black" to="/login">LOGIN</Link>
          </nav>
          
        </div>
      </header>

      {/* OVERLAY */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/40 z-40"
        />
      )}

      {/* SLIDE MENU */}
      <aside
        className={`fixed top-0 right-0 h-full w-64 z-50 transform transition-transform duration-30
        ${open ? "translate-x-0" : "translate-x-full"}
        bg-white/90 backdrop-blur-lg`}
      >
        <div className="p-4 flex justify-between items-center border-b">
          <span className="font-bold text-lg">Menu</span>
          <button onClick={() => setOpen(false)} className="cursor-pointer">✕</button>
        </div>

        {/* Reduced left/right padding */}
        <nav className="flex flex-col px-2 py-4 space-y-4 text-gray-700 font-medium">
          <Link onClick={() => setOpen(false)} to="/">Home</Link>
          <Link onClick={() => setOpen(false)} to="/shop">Products</Link>
          <br />
          <Link className="hover:text-black" to="/login">LOGIN</Link>
        </nav>
        
      </aside>
    </>
  );
}
