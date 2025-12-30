import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { 
  LayoutDashboard, 
  Watch as WatchIcon, 
  Package, 
  Users, 
  BarChart3, 
  LogOut, 
  Menu, 
  X 
} from "lucide-react";

const SidebarLayout = () => {
  const [isOpen, setIsOpen] = useState(true);

  const menuItems = [
    { icon: <LayoutDashboard size={20} />, label: "Overview", to: "/dashboard" },
    { icon: <WatchIcon size={20} />, label: "Inventory", to: "/dashboard/inventory" },
    { icon: <Package size={20} />, label: "Orders", to: "/dashboard/orders" },
    { icon: <Users size={20} />, label: "Customers", to: "/dashboard/customers" },
    { icon: <BarChart3 size={20} />, label: "Analytics", to: "/dashboard/analytics" },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* SIDEBAR */}
      <aside 
        className={`${
          isOpen ? "w-64" : "w-20"
        } bg-white border-r border-gray-200 transition-all duration-300 ease-in-out flex flex-col fixed h-full z-50`}
      >
        {/* LOGO SECTION */}
        <div className="h-20 flex items-center justify-between px-6 border-b border-gray-100">
          {isOpen && <span className="text-xl font-bold text-indigo-600 tracking-tight">ADMIN Panel</span>}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 hover:bg-gray-100 rounded-lg text-gray-500"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* NAV LINKS */}
        <nav className="flex-1 px-4 py-6 space-y-2">
          {menuItems.map((item, index) => (
            <NavLink key={index} to={item.to} end={item.to === "/dashboard"}>
              {({ isActive }) => (
                <div className={`w-full flex items-center gap-4 p-3 rounded-xl transition-all ${isActive ? 'bg-indigo-50 text-indigo-600' : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'}`}>
                  <div className={isActive ? 'text-indigo-600' : 'text-gray-400 group-hover:text-gray-900'}>
                    {item.icon}
                  </div>
                  {isOpen && <span className="font-medium">{item.label}</span>}
                </div>
              )}
            </NavLink>
          ))}
        </nav>

        {/* BOTTOM SECTION */}
        <div className="p-4 border-t border-gray-100">
          <button className="w-full flex items-center gap-4 p-3 text-gray-500 hover:text-red-600 hover:bg-red-50 rounded-xl transition-all">
            <LogOut size={20} />
            {isOpen && <span className="font-medium">Logout</span>}
          </button>
        </div>
      </aside>

      {/* MAIN CONTENT AREA */}
      <main className={`${isOpen ? "ml-64" : "ml-20"} flex-1 transition-all duration-300`}>
        {/* Top Navbar for the Main Content */}
        <header className="h-20 bg-white/80 backdrop-blur-md border-b border-gray-200 flex items-center justify-end px-8 sticky top-0 z-40">
           <div className="flex items-center gap-4">
             <div className="text-right">
               <p className="text-sm font-bold text-gray-900">Admin User</p>
               <p className="text-xs text-gray-500">Super Admin</p>
             </div>
             <div className="h-10 w-10 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold">
               A
             </div>
           </div>
        </header>

        <div className="p-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default SidebarLayout;