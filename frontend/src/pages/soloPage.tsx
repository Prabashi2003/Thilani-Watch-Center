import ReadMore from '../components/ReadMore'
import ProductCard from '../components/ProductCard';
import FilterSidebar from '../components/FilterSidebar';

function soloPage() {

    return (
        <div>
            <h1 className="text-2xl font-semibold">Orient Watches For Men</h1>
            <ReadMore sentencesToShow={2} className="mt-2">
                {`Orient mens watches are a great choice when you are stepping into mechanical watches – especially, the dress ones - irrespective of whether you want it for any specific dressy event or as a general, everyday wear for your job. Orient watches started with this simple concept playing at the back of their mind but with a difference – they also vowed to make nothing that shall break the bank. Mens Orient watches are thus always a wide selection comprising extreme examples – one one hand there are the dressier options, on the other, it’s for the tough men undergoing tough situations and still coming out of it with a smile !
                  The place where Orient watches really score are they offer the best entry-level options at really low prices. Orient mens watches are a proof that mechanical doesn’t necessarily have to be complex, delicate and expensive but can also be accurate and tough as Hell! Orient watches for men are thus often the first preference for the Pro-s in their respective fields and prized possesions to others.
                  Take any Orient mens watch and you’ll find every part of it was been made in-house i.e. Orient’s own facility in Japan. From the cases and the straps to the movements, everything undergoes the typical Japanese quality control and that helps the brand to give each of its watches its own unique charm. Sensibility in finish and construction – from the simplest three-handers to those with added complications and quirkier design and aesthetics, the lesson every man should learn here is his belt and shoes shine further with an Orient mens watch. Authentic, well-made and a fully in-house built, the Orient watches for men are distinctive and carry an intangible allure that somehow fits all the bills.You’ll feel yours to get better and growing even more appealing with every passing day.`}
            </ReadMore>
            {/* product showing section */}
            <div className="mt-6">
                <div className="grid grid-cols-12 gap-6">
                    {/* Left Banner */}
                    <div className="col-span-3">
                        <FilterSidebar />
                    </div>

                    {/* Right Products */}
                    <div className="col-span-9">

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

export default soloPage