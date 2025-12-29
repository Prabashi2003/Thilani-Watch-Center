import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

function FilterSidebar() {
  const [brandOpen, setBrandOpen] = useState(true);
  const [genderOpen, setGenderOpen] = useState(false);
  const [bandTypeOpen, setBandTypeOpen] = useState(false);
  const [bandMaterialOpen, setBandMaterialOpen] = useState(false);
  const [waterResistanceOpen, setWaterResistanceOpen] = useState(false);
  const [styleOpen, setStyleOpen] = useState(false);
  const [movementOpen, setMovementOpen] = useState(false);
  const [priceOpen, setPriceOpen] = useState(false);

  const brands = [
    "Seiko Watches",
    "Orient Watches",
    "Casio Watches",
    "Citizen Watches",
    "Invicta Watches",
    "Fossil Watches",
    "Michael Kors Watches",
    "Tissot Watches",
    "Garmin Watches",
  ];

  return (
    <div className="w-full md:w-100 border bg-white rounded-xl shadow-lg p-4 space-y-6">
      {/* Filtered By */}
      <div className="flex justify-between items-center text-sm font-semibold pb-2 mb-3">
        <span>Filtered By:</span>
      </div>

      {/* Selected Filter Example */}
      <div className="flex flex-wrap gap-2 mb-4">
        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium hover:bg-blue-200 cursor-pointer transition">
          Orient Men's Watches ×
        </span>
      </div>

      {/* Shop By Brand */}
      <div className="filter-section">
        <button
          onClick={() => setBrandOpen(!brandOpen)}
          className="flex w-full justify-between items-center text-sm font-medium mb-2 hover:text-blue-600 transition"
        >
          Shop By Brand
          {brandOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
        </button>

        {brandOpen && (
          <div className="space-y-3 border-t pt-3">
            <input
              type="text"
              placeholder="Find a Brand"
              className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            />
            <div className="flex flex-col max-h-40 overflow-y-auto space-y-1">
              {brands.map((brand) => (
                <label
                  key={brand}
                  className="flex items-center gap-2 text-sm cursor-pointer hover:text-blue-600 transition"
                >
                  <input
                    type="checkbox"
                    className="accent-blue-600 w-4 h-4"
                  />
                  {brand}
                </label>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Other Filters */}
      <FilterSection
        title="Shop By Gender"
        open={genderOpen}
        setOpen={setGenderOpen}
        options={["Men", "Women", "Unisex"]}
      />
      <FilterSection
        title="Shop By Band Type"
        open={bandTypeOpen}
        setOpen={setBandTypeOpen}
        options={["Metal", "Leather", "Rubber"]}
      />
      <FilterSection
        title="Shop By Band Material"
        open={bandMaterialOpen}
        setOpen={setBandMaterialOpen}
        options={["Stainless Steel", "Leather", "Silicone"]}
      />
      <FilterSection
        title="Shop By Water Resistance"
        open={waterResistanceOpen}
        setOpen={setWaterResistanceOpen}
        options={["30m", "50m", "100m", "200m"]}
      />
      <FilterSection
        title="Shop By Style"
        open={styleOpen}
        setOpen={setStyleOpen}
        options={["Classic", "Sport", "Diver"]}
      />
      <FilterSection
        title="Shop By Movement"
        open={movementOpen}
        setOpen={setMovementOpen}
        options={["Automatic", "Quartz", "Mechanical"]}
      />
      <FilterSection
        title="Price Range"
        open={priceOpen}
        setOpen={setPriceOpen}
        options={["$0-$100", "$100-$300", "$300-$500", "$500+"]}
      />
    </div>
  );
}

// Reusable Collapsible Filter Section
interface FilterSectionProps {
  title: string;
  open: boolean;
  setOpen: (value: boolean) => void;
  options: string[];
}

function FilterSection({ title, open, setOpen, options }: FilterSectionProps) {
  return (
    <div className="filter-section">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full justify-between items-center text-sm font-medium mb-2 hover:text-blue-600 transition"
      >
        {title}
        {open ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
      </button>
      {open && (
        <div className="flex flex-col space-y-1 text-sm border-t pt-2">
          {options.map((option) => (
            <label
              key={option}
              className="flex items-center gap-2 cursor-pointer hover:text-blue-600 transition"
            >
              <input type="checkbox" className="accent-blue-600 w-4 h-4" />
              {option}
            </label>
          ))}
        </div>
      )}
    </div>
  );
}

export default FilterSidebar;
