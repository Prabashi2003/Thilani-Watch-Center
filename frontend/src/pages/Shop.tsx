import ProductCard from '../components/ProductCard';
import FilterSidebar from '../components/FilterSidebar';

function Shop() {
  return (
    <div>
      {/* product showing section */}
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

            <div className="flex flex-wrap gap-4">
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
            </div>
          </div>
        </div>

      </div>



    </div>
  )
}

export default Shop