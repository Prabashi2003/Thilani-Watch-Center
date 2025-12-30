import React, { useEffect, useState } from 'react';
import { getAllWatches, createWatch, updateWatch, deleteWatch } from '../api/watchApi';
import type { Watch } from '../types/watch';
import { 
  Plus, 
  Search, 
  Edit2, 
  Trash2, 
  Package, 
  Tag, 
  Layers, 
  DollarSign, 
  X,
  PlusCircle,
  AlertCircle
} from 'lucide-react';

const Inventory = () => {
  const [watches, setWatches] = useState<Watch[]>([]);
  const [loading, setLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [currentId, setCurrentId] = useState<string | null>(null);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState<'all' | 'active' | 'inactive'>('all');

  const initialState: Partial<Watch> = {
    name: '', price: undefined, stock: undefined,
    description: [], images: [], category: '', brand: ''
  };

  const [formData, setFormData] = useState<Partial<Watch>>(initialState);

  useEffect(() => { loadInventory(); }, []);

  const loadInventory = async () => {
    try {
      const data = await getAllWatches();
      setWatches(data);
    } catch (err) {
      console.error("Fetch error:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const payload = {
        ...formData,
        description: formData.description || [],
        images: formData.images || []
      };
      if (isEditing && currentId) {
        await updateWatch(currentId, payload);
      } else {
        await createWatch(payload);
      }
      resetForm();
      loadInventory();
    } catch (err) {
      alert("Action failed.");
    }
  };

  const handleEdit = (watch: Watch) => {
    setIsEditing(true);
    setCurrentId(watch._id);
    setFormData({ ...watch });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDelete = async (id: string) => {
    if (window.confirm("Are you sure you want to delete this timepiece?")) {
      await deleteWatch(id);
      loadInventory();
    }
  };

  const resetForm = () => {
    setFormData(initialState);
    setIsEditing(false);
    setCurrentId(null);
  };

  const getName = (field: any) => (field && typeof field === 'object' ? field.name : field || 'N/A');

  const filteredWatches = watches.filter(watch => {
    const matchesSearch = watch.name.toLowerCase().includes(search.toLowerCase());
    const matchesFilter = filter === 'all' ? true : filter === 'active' ? (watch.stock ?? 0) > 0 : watch.stock === 0;
    return matchesSearch && matchesFilter;
  });

  if (loading) return (
    <div className="flex flex-col items-center justify-center min-h-screen text-slate-500">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mb-4"></div>
      <p className="font-medium">Syncing with Vault...</p>
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-50 p-4 md:p-8 font-sans text-slate-900">
      <div className="max-w-6xl mx-auto">
        
        {/* Header & Stats */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-slate-900">Inventory</h1>
            <p className="text-slate-500 mt-1">Manage your Watch collection.</p>
          </div>
          <div className="flex gap-4">
            <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-200 flex items-center gap-3">
              <div className="p-2 bg-indigo-50 text-indigo-600 rounded-lg"><Package size={20}/></div>
              <div><p className="text-xs text-slate-500 uppercase font-bold">Total items</p><p className="text-lg font-bold">{watches.length}</p></div>
            </div>
          </div>
        </div>

        {/* Form Section */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden mb-8">
          <div className="border-b border-slate-100 p-6 flex justify-between items-center bg-slate-50/50">
            <h3 className="text-lg font-semibold flex items-center gap-2">
              {isEditing ? <Edit2 size={18} className="text-indigo-600"/> : <PlusCircle size={18} className="text-emerald-600"/>}
              {isEditing ? "Modify Timepiece" : "Add New Watch"}
            </h3>
            {isEditing && (
              <button onClick={resetForm} className="text-slate-400 hover:text-slate-600 transition">
                <X size={20}/>
              </button>
            )}
          </div>
          
          <form onSubmit={handleSubmit} className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-500 uppercase ml-1">Model Name</label>
                <input 
                  placeholder="e.g. Submariner Date" 
                  value={formData.name} 
                  onChange={e => setFormData({...formData, name: e.target.value})} 
                  required 
                  className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none transition"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-500 uppercase ml-1">Price (Rs.)</label>
                <div className="relative">
                  <input 
                    type="number" 
                    placeholder="0.00" 
                    value={formData.price || ''} 
                    onChange={e => setFormData({...formData, price: Number(e.target.value)})} 
                    required 
                    className="w-full p-3 pl-8 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none transition"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-500 uppercase ml-1">Category</label>
                <input 
                  placeholder="Category ID" 
                  value={formData.category || ''} 
                  onChange={e => setFormData({...formData, category: e.target.value})} 
                  required 
                  className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none transition"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-500 uppercase ml-1">Brand</label>
                <input 
                  placeholder="Brand ID" 
                  value={formData.brand || ''} 
                  onChange={e => setFormData({...formData, brand: e.target.value})} 
                  required 
                  className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none transition"
                />
              </div>

              <div className="space-y-1 md:col-span-2">
                <label className="text-xs font-bold text-slate-500 uppercase ml-1">Stock Level</label>
                <input 
                  type="number" 
                  placeholder="Quantity in vault" 
                  value={formData.stock || ''} 
                  onChange={e => setFormData({...formData, stock: Number(e.target.value)})} 
                  required 
                  className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none transition"
                />
              </div>
            </div>

            {/* Arrays Section (Description & Images) */}
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-4">
               <div>
                  <label className="text-xs font-bold text-slate-500 uppercase flex items-center gap-2 mb-2">
                    <Layers size={14}/> Features
                  </label>
                  {formData.description?.map((desc, index) => (
                    <div key={index} className="flex gap-2 mb-2">
                      <input
                        value={desc}
                        onChange={e => {
                          const newDesc = [...(formData.description || [])];
                          newDesc[index] = e.target.value;
                          setFormData({ ...formData, description: newDesc });
                        }}
                        className="p-2 text-sm border border-slate-200 rounded-lg flex-1 outline-none"
                      />
                      <button type="button" onClick={() => {
                        const newDesc = [...(formData.description || [])];
                        newDesc.splice(index, 1);
                        setFormData({ ...formData, description: newDesc });
                      }} className="text-red-400 hover:text-red-600"><X size={16}/></button>
                    </div>
                  ))}
                  <button type="button" onClick={() => setFormData({...formData, description: [...(formData.description || []), '']})} 
                    className="text-xs font-bold text-indigo-600 hover:text-indigo-700 flex items-center gap-1">
                    <Plus size={14}/> Add Feature
                  </button>
               </div>
            </div>

            <div className="md:col-span-3 flex justify-end gap-3 pt-4 border-t border-slate-100">
               <button type="submit" className="px-8 py-3 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-700 shadow-lg shadow-indigo-100 transition-all active:scale-95">
                 {isEditing ? "Update Timepiece" : "Save to Inventory"}
               </button>
            </div>
          </form>
        </div>

        {/* Search & Filter Bar */}
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-3.5 text-slate-400" size={18}/>
            <input 
              type="text" 
              placeholder="Search by model name..." 
              value={search} 
              onChange={e => setSearch(e.target.value)} 
              className="w-full p-3 pl-12 bg-white border border-slate-200 rounded-2xl focus:ring-2 focus:ring-indigo-500 outline-none shadow-sm transition"
            />
          </div>
          <select 
            value={filter} 
            onChange={e => setFilter(e.target.value as any)} 
            className="p-3 bg-white border border-slate-200 rounded-2xl outline-none shadow-sm font-medium text-slate-600"
          >
            <option value="all">All Statuses</option>
            <option value="active">Available</option>
            <option value="inactive">Sold Out</option>
          </select>
        </div>

        {/* Table Section */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
          <table className="w-full text-left">
            <thead className="bg-slate-50 border-b border-slate-200">
              <tr>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase">Product</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase">Brand/Category</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase">Price</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase">Stock</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredWatches.map(watch => (
                <tr key={watch._id} className="hover:bg-slate-50/50 transition-colors">
                  <td className="px-6 py-4 font-semibold text-slate-800">{watch.name}</td>
                  <td className="px-6 py-4">
                    <div className="flex flex-col">
                      <span className="text-sm text-slate-600">{getName(watch.brand)}</span>
                      <span className="text-xs text-slate-400">{getName(watch.category)}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 font-medium text-slate-700">Rs.{watch.price?.toLocaleString()}</td>
                  <td className="px-6 py-4">
                    {(watch.stock ?? 0) > 0 ? (
                      <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-bold">
                        {watch.stock} In Stock
                      </span>
                    ) : (
                      <span className="px-3 py-1 bg-rose-100 text-rose-700 rounded-full text-xs font-bold">
                        Out of Stock
                      </span>
                    )}
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex justify-end gap-2">
                      <button onClick={() => handleEdit(watch)} className="p-2 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition">
                        <Edit2 size={18}/>
                      </button>
                      <button onClick={() => handleDelete(watch._id)} className="p-2 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition">
                        <Trash2 size={18}/>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {filteredWatches.length === 0 && (
            <div className="p-12 text-center">
              <AlertCircle size={40} className="mx-auto text-slate-200 mb-3"/>
              <p className="text-slate-400 font-medium">No timepieces found matching your criteria.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Inventory;