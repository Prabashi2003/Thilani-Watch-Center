import { useEffect, useState } from "react";
import ProductCard from '../components/ProductCard';
import FilterSidebar from '../components/FilterSidebar';
import { getAllWatches } from '../api/watchApi'; // make sure your API function is correctly exported
import type { Watch } from '../types/watch';

function Shop() {
  const [watches, setWatches] = useState<Watch[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // Fetch watches from API
  useEffect(() => {
    const fetchWatches = async () => {
      try {
        setLoading(true);
        const data = await getAllWatches();
        setWatches(data);
      } catch (error) {
        console.error("Error fetching watches:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchWatches();
  }, []);

  return (
    <div>
      <div className="">
        <div className="grid grid-cols-12 gap-6">
          {/* Left Banner */}
          <div className="col-span-3">
            <FilterSidebar />
          </div>

          {/* Right Products */}
          <div className="col-span-9">
            <h2 className="mb-4 text-xl font-semibold">
                Watch Collection
            </h2>

            {loading ? (
              <p>Loading watches...</p>
            ) : (
              <div className="flex flex-wrap gap-4">
                {watches.length > 0 ? (
                  watches.map((watch) => (
                    <ProductCard key={watch._id} watch={watch} />
                  ))
                ) : (
                  <p>No watches available.</p>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shop;
