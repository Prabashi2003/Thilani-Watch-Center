

import { useState } from 'react'
import ReadMore from '../components/ReadMore'
import WatchType from '../components/WatchType'
import ProductCard from '../components/ProductCard';

function Shop() {
  const [showAll, setShowAll] = useState(false);
  const totalWatchTypes = 9;

  return (
    <div>
      <h1 className="text-2xl font-semibold">Men's Watches</h1>
      <ReadMore sentencesToShow={3} className="mt-2">
        {`There are several categories of men's watches to choose from. These include Sports, Hip and Stylish, Casual, Working, Dress, Diamond, and finally Luxury Timepieces. When a man is assessed, everything, from his hair and all the way to his feet, is taken into consideration.

        One of the things that would definitely break or make a man's image is his watch, and nothing can spell style as clearly as a mens luxury watch. There are mens diving watches are available in the market. Diving watches are made with a higher water resistivity factor of around 300 m and even more. Another feature of mens luxury watches is that they are designed with different features which make them convenient for sports applications.

        The Casio Men's Pathfinder Multi-Band Solar Atomic Watch is packed with a bunch of neat gadgets for those trips men love to go on. If you're a rugged sportsman with an adventurer's soul, this watch was made for you.

        Creationwatches offers fantastic men's watch, mens chronograph watch, mens automatic watch and mens eco drive watch. Today, there are numerous brands with their own line of eco-friendly watches. However, Citizen is the very first and biggest manufacturer of eco-friendly watches by the name Eco drive. There are awesome mens monster watches are also available.`}
      </ReadMore>

      {/* Watch type section */}
      <div className="flex flex-wrap gap-7 mt-6">
        {Array.from({ length: showAll ? totalWatchTypes : 6 }).map((_, index) => (
          <WatchType key={index} />
        ))}
      </div>

      {/* Show more / less button */}
      <button
        onClick={() => setShowAll(!showAll)}
        className="mt-6 mx-auto block rounded bg-black px-4 py-2 text-white hover:bg-gray-800"
      >
        {showAll ? "Show Less Categories" : "Show All Categories"}
      </button>


      {/* product showing section */}
      <div className="mt-30">
        <div className="grid grid-cols-12 gap-6">
          {/* Left Banner */}
          <div className="col-span-3">
            Banner
          </div>

          {/* Right Products */}
          <div className="col-span-9">
            <h2 className="mb-4 text-xl font-semibold">
              Popular Men's Watches
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