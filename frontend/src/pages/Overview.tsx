import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion"; // Add this for smooth UI
import { getAllWatches } from "../api/watchApi";
import { getAllBrands, createBrand, updateBrand, deleteBrand } from "../api/brandApi";
import { Watch, Award, Plus, Trash2, Edit3, Check, X, Globe, Search, ArrowRight } from "lucide-react";
import type { Brand } from "../types/Brand";

const Overview = () => {
  const [watchCount, setWatchCount] = useState(0);
  const [brands, setBrands] = useState<Brand[]>([]);
  const [loading, setLoading] = useState(true);
  const [formLoading, setFormLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const [newBrandName, setNewBrandName] = useState("");
  const [newBrandCountry, setNewBrandCountry] = useState("");
  const [editBrandId, setEditBrandId] = useState<string | null>(null);
  const [editBrandName, setEditBrandName] = useState("");
  const [editBrandCountry, setEditBrandCountry] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const [watches, brandsData] = await Promise.all([getAllWatches(), getAllBrands()]);
        setWatchCount(watches.length);
        setBrands(brandsData);
      } catch (error) {
        console.error("Fetch error:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleAddBrand = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newBrandName.trim()) return;
    try {
      setFormLoading(true);
      const created = await createBrand({ name: newBrandName.trim(), country: newBrandCountry.trim() });
      setBrands((prev) => [...prev, created]);
      setNewBrandName("");
      setNewBrandCountry("");
    } catch (error) { console.error(error); } finally { setFormLoading(false); }
  };

  const handleUpdateBrand = async (id: string) => {
    try {
      const updated = await updateBrand(id, { name: editBrandName, country: editBrandCountry });
      setBrands((prev) => prev.map((b) => (b._id === id ? updated : b)));
      setEditBrandId(null);
    } catch (error) { console.error(error); }
  };

  const handleDeleteBrand = async (id: string) => {
    if (!window.confirm("Delete this brand?")) return;
    try {
      await deleteBrand(id);
      setBrands((prev) => prev.filter((b) => b._id !== id));
    } catch (error) { console.error(error); }
  };

  const filteredBrands = brands.filter(b => 
    b.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) return (
    <div className="flex h-[80vh] flex-col items-center justify-center space-y-4">
      <div className="h-12 w-12 animate-spin rounded-full border-4 border-slate-100 border-t-indigo-600"></div>
      <p className="text-slate-400 font-medium animate-pulse">Syncing catalog...</p>
    </div>
  );

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }} 
      animate={{ opacity: 1, y: 0 }} 
      className="max-w-7xl mx-auto space-y-8 p-6 lg:p-10"
    >
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h2 className="text-4xl font-black text-slate-900 tracking-tight italic uppercase">
            Control <span className="text-indigo-600">Center</span>
          </h2>
          <p className="text-slate-500 font-medium mt-1">Manage global brand partnerships and inventory analytics.</p>
        </div>
        <div className="relative group">
          <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-indigo-500 transition-colors" />
          <input 
            type="text" 
            placeholder="Search brands..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 pr-4 py-2 bg-slate-100 border-none rounded-full text-sm focus:ring-2 focus:ring-indigo-500 outline-none w-full md:w-64 transition-all"
          />
        </div>
      </header>

      {/* STATS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Stat label="Total Watches" count={watchCount} icon={<Watch />} color="from-blue-600 to-indigo-600" />
        <Stat label="Partner Brands" count={brands.length} icon={<Award />} color="from-amber-500 to-orange-600" />
      </div>

      {/* BRANDS SECTION */}
      <section className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 overflow-hidden">
        <div className="p-6 border-b border-slate-50 bg-slate-50/30 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-amber-500 text-white rounded-lg shadow-lg shadow-amber-200">
              <Award size={20} />
            </div>
            <h3 className="font-bold text-xl text-slate-800 tracking-tight">Global Partners</h3>
          </div>
          <span className="text-xs font-bold px-3 py-1 bg-slate-200 text-slate-600 rounded-full uppercase tracking-widest">
            {filteredBrands.length} Listed
          </span>
        </div>

        <div className="p-8 space-y-8">
          {/* Add Form */}
          <form onSubmit={handleAddBrand} className="group flex flex-col md:flex-row gap-3 p-2 bg-slate-50 rounded-2xl border border-slate-100 focus-within:border-indigo-200 focus-within:bg-white transition-all">
            <input
              placeholder="Brand Name"
              value={newBrandName}
              onChange={(e) => setNewBrandName(e.target.value)}
              className="flex-1 bg-transparent px-4 py-2 outline-none font-medium text-slate-700"
            />
            <div className="h-6 w-[1px] bg-slate-200 self-center hidden md:block" />
            <input
              placeholder="Country"
              value={newBrandCountry}
              onChange={(e) => setNewBrandCountry(e.target.value)}
              className="md:w-1/4 bg-transparent px-4 py-2 outline-none font-medium text-slate-700"
            />
            <button 
              className="bg-slate-900 hover:bg-indigo-600 text-white px-6 py-2 rounded-xl font-bold flex items-center justify-center gap-2 transition-all active:scale-95 disabled:opacity-50" 
              disabled={formLoading}
            >
              <Plus size={18} /> Add <span className="hidden lg:inline">Partner</span>
            </button>
          </form>

          {/* Brands List */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <AnimatePresence mode="popLayout">
              {filteredBrands.map((b) => (
                <motion.div
                  layout
                  key={b._id}
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  className="relative p-5 border border-slate-100 rounded-2xl hover:border-indigo-200 hover:shadow-md transition-all bg-white group overflow-hidden"
                >
                  {editBrandId === b._id ? (
                    <div className="space-y-3 relative z-10">
                      <input value={editBrandName} onChange={(e) => setEditBrandName(e.target.value)} className="w-full text-sm p-2 bg-slate-50 rounded-lg outline-none ring-1 ring-slate-200 focus:ring-indigo-500" />
                      <input value={editBrandCountry} onChange={(e) => setEditBrandCountry(e.target.value)} className="w-full text-sm p-2 bg-slate-50 rounded-lg outline-none ring-1 ring-slate-200 focus:ring-indigo-500" />
                      <div className="flex gap-2">
                        <button onClick={() => handleUpdateBrand(b._id)} className="flex-1 bg-emerald-500 text-white p-2 rounded-lg hover:bg-emerald-600 transition-colors"><Check size={16} className="mx-auto" /></button>
                        <button onClick={() => setEditBrandId(null)} className="flex-1 bg-slate-100 text-slate-500 p-2 rounded-lg hover:bg-slate-200 transition-colors"><X size={16} className="mx-auto" /></button>
                      </div>
                    </div>
                  ) : (
                    <>
                      <div className="flex justify-between items-start relative z-10">
                        <div className="flex gap-4 items-center">
                          <div className="p-3 bg-indigo-50 text-indigo-600 rounded-2xl group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
                            <Globe size={20} />
                          </div>
                          <div>
                            <p className="font-extrabold text-slate-800 leading-none">{b.name}</p>
                            <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold mt-2">
                              {b.country || "Global"}
                            </p>
                          </div>
                        </div>
                        <div className="flex flex-col gap-1 translate-x-10 group-hover:translate-x-0 opacity-0 group-hover:opacity-100 transition-all">
                          <IconBtn onClick={() => { setEditBrandId(b._id); setEditBrandName(b.name); setEditBrandCountry(b.country || ""); }}>
                            <Edit3 size={16} className="text-indigo-600" />
                          </IconBtn>
                          <IconBtn onClick={() => handleDeleteBrand(b._id)}>
                            <Trash2 size={16} className="text-rose-500" />
                          </IconBtn>
                        </div>
                      </div>
                      <div className="absolute -right-4 -bottom-4 text-slate-50 group-hover:text-indigo-50/50 transition-colors pointer-events-none">
                        <Globe size={80} />
                      </div>
                    </>
                  )}
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {filteredBrands.length === 0 && (
            <div className="text-center py-20 border-2 border-dashed border-slate-100 rounded-3xl">
              <div className="bg-slate-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-slate-300">
                <Search size={32} />
              </div>
              <h4 className="text-slate-400 font-bold uppercase tracking-tighter">No partners found</h4>
            </div>
          )}
        </div>
      </section>
    </motion.div>
  );
};

const Stat = ({ label, count, icon, color }: any) => (
  <div className="relative group overflow-hidden bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-500">
    <div className="relative z-10 flex justify-between items-center">
      <div>
        <p className="text-xs text-slate-400 uppercase font-black tracking-widest mb-1">{label}</p>
        <p className="text-5xl font-black text-slate-900 tracking-tighter tabular-nums">{count}</p>
      </div>
      <div className={`p-4 bg-gradient-to-br ${color} text-white rounded-2xl shadow-lg transform group-hover:rotate-12 transition-transform duration-300`}>
        {icon}
      </div>
    </div>
    <div className="absolute -right-2 -bottom-2 opacity-[0.03] group-hover:opacity-[0.07] transition-opacity">
      {icon && <div className="scale-[4]">{icon}</div>}
    </div>
  </div>
);

const IconBtn = ({ children, onClick }: any) => (
  <button
    onClick={onClick}
    className="p-2 rounded-xl bg-slate-50 hover:bg-white hover:shadow-sm border border-transparent hover:border-slate-100 transition-all active:scale-90"
  >
    {children}
  </button>
);

export default Overview;