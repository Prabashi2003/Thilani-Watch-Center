import React, { useRef } from "react";
import { Watch, Gem, ShoppingBag, ChevronRight, Star } from "lucide-react";
import LazyLoad from "../components/common/LazyLoad";
import useScrollProgress from "../hooks/useScrollProgress";

import watchCollectionImg from "../assets/icons/1.jpg";
import tagHeuerImg from "../assets/icons/2.jpg";
import casioImg from "../assets/icons/3.jpg";
import tissotImg from "../assets/icons/4.jpg";
import mechanismImg from "../assets/icons/5.jpg";
import skeletonWatchImg from "../assets/icons/7.png";

function Home() {
  const sigRef = useRef<HTMLDivElement | null>(null);
  const progress = useScrollProgress(sigRef);
  const angle = (progress - 0.5) * 48;

  return (
    <div className="min-h-screen bg-dark font-montserrat overflow-x-hidden">

      {/* ================= HERO ================= */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden text-white rounded-2xl">
        {/* Grid Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(212,175,55,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(212,175,55,0.04)_1px,transparent_1px)] bg-[size:50px_50px]" />

        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center brightness-[0.35]"
          style={{ backgroundImage: `url(${watchCollectionImg})` }}
        />

        {/* Glow */}
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-gold/20 blur-[120px] rounded-full" />

        {/* Content */}
        <div className="relative z-10 text-center px-8 py-14 max-w-5xl backdrop-blur-xl bg-black/40 border border-gold/20 rounded-3xl shadow-[0_0_120px_rgba(212,175,55,0.2)] animate-fadeIn">
          <h1 className="text-5xl md:text-7xl font-serif font-light mb-6">
            Timeless <span className="text-gold italic">Elegance</span>
          </h1>

          <p className="text-zinc-300 max-w-2xl mx-auto mb-12 text-lg leading-relaxed">
            Discover a world where precision engineering meets timeless luxury craftsmanship.
          </p>

          <button className="group inline-flex items-center gap-4 px-14 py-4 bg-gold text-dark font-semibold tracking-widest
            hover:scale-105 hover:shadow-[0_0_40px_rgba(212,175,55,0.7)]
            transition-all duration-300">
            EXPLORE COLLECTION
            <ChevronRight className="group-hover:translate-x-2 transition" />
          </button>
        </div>
      </section>

      {/* ================= STATS ================= */}
      <LazyLoad>
        <section className="py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6">

            {/* Section Title */}
            <div className="text-center mb-20">
              <h2 className="text-3xl md:text-5xl font-serif font-light mb-4">
                Trusted Worldwide
              </h2>
              <p className="text-neutral-500 max-w-xl mx-auto">
                Built on heritage, precision, and uncompromising quality.
              </p>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
              {[
                { value: "150+", label: "Luxury Models" },
                { value: "40+", label: "Years of Heritage" },
                { value: "25K+", label: "Happy Clients" },
                { value: "5.0", label: "Global Rating" },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="group bg-white rounded-2xl p-10 text-center 
            shadow-[0_20px_40px_rgba(0,0,0,0.06)] 
            hover:-translate-y-2 hover:shadow-[0_30px_60px_rgba(0,0,0,0.1)]
            transition-all duration-300"
                >
                  <div className="text-5xl font-serif mb-3">
                    {stat.value}
                  </div>

                  <div className="w-10 h-[2px] bg-black mx-auto mb-4 opacity-20 group-hover:opacity-60 transition" />

                  <div className="text-sm text-neutral-500 tracking-widest uppercase">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>
      </LazyLoad>


      {/* ================= COLLECTIONS ================= */}
      <LazyLoad>
        <section className="py-20 bg-dark2">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-center text-4xl md:text-6xl font-serif font-light mb-20">
              Featured Collections
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-14 place-items-center">
              {[
                { img: tagHeuerImg, title: "Swiss Precision" },
                { img: casioImg, title: "Modern Luxury" },
                { img: tissotImg, title: "Heritage Series" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="group relative flex flex-col items-center cursor-pointer"
                >
                  {/* Glow */}
                  <div className="absolute inset-0 rounded-full bg-gold/30 blur-2xl opacity-0 group-hover:opacity-100 transition" />

                  <div className="relative w-72 h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border border-gold/30">
                    <img
                      src={item.img}
                      className="w-full h-full object-cover scale-100 group-hover:scale-110 transition duration-700"
                    />
                  </div>

                  <h3 className="mt-8 text-2xl font-serif font-semibold tracking-wide">
                    {item.title}
                  </h3>

                  <span className="mt-2 text-gold opacity-0 group-hover:opacity-100 transition tracking-widest text-sm">
                    VIEW COLLECTION →
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </LazyLoad>

      {/* ================= CRAFTSMANSHIP ================= */}
      <LazyLoad>
        <section className="py-28 bg-dark">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl md:text-6xl font-serif font-light mb-6">
                The Art of <span className="text-gold">Precision</span>
              </h2>

              <p className="text-zinc-400 mb-6 leading-relaxed">
                Every timepiece is a masterpiece, crafted with uncompromising attention to detail.
              </p>

              <button className="inline-flex items-center gap-3 px-10 py-4 border-2 border-gold text-gold
                hover:bg-gold hover:text-dark transition-all">
                DISCOVER MORE
                <ChevronRight size={18} />
              </button>
            </div>

            <div className="relative">
              <img src={mechanismImg} className="rounded-xl shadow-xl" />
              <div className="absolute -top-10 -right-10 w-40 h-40 border border-gold/30" />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 border border-gold/30" />
            </div>
          </div>
        </section>
      </LazyLoad>

      {/* ================= FEATURES ================= */}
      <LazyLoad>
        <section className="py-28 bg-dark2">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-16 text-center">
            {[
              { icon: Watch, title: "Swiss Movement" },
              { icon: Gem, title: "Premium Materials" },
              { icon: ShoppingBag, title: "Lifetime Warranty" },
            ].map(({ icon: Icon, title }, i) => (
              <div key={i} className="group">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gold/10 flex items-center justify-center
                  group-hover:scale-110 transition">
                  <Icon className="text-gold" size={32} />
                </div>

                <h3 className="font-serif text-2xl mb-3">{title}</h3>

                <p className="text-zinc-400 leading-relaxed">
                  Precision engineered excellence for generations.
                </p>
              </div>
            ))}
          </div>
        </section>
      </LazyLoad>

      {/* ================= SIGNATURE ================= */}
      <LazyLoad>
        <section className="py-28 bg-dark">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
            <div ref={sigRef} className="flex justify-center">
              <img
                src={skeletonWatchImg}
                style={{ transform: `rotate(${angle}deg)` }}
                className="transition-transform duration-200 drop-shadow-[0_0_40px_rgba(212,175,55,0.6)]"
              />
            </div>

            <div>
              <span className="inline-block mb-6 px-4 py-1 border border-gold/30 text-gold text-xs tracking-widest">
                SIGNATURE COLLECTION
              </span>

              <h2 className="text-4xl md:text-6xl font-serif font-light mb-6">
                Skeleton <span className="text-gold">Masterpiece</span>
              </h2>

              <p className="text-zinc-400 mb-10 leading-relaxed">
                A breathtaking view into mechanical artistry and timeless innovation.
              </p>

              <div className="grid grid-cols-2 gap-10 mb-10">
                <div>
                  <div className="text-4xl font-serif text-gold">42mm</div>
                  <div className="text-xs text-zinc-500 uppercase">Case Diameter</div>
                </div>
                <div>
                  <div className="text-4xl font-serif text-gold">48h</div>
                  <div className="text-xs text-zinc-500 uppercase">Power Reserve</div>
                </div>
              </div>

              <button className="inline-flex items-center gap-3 px-12 py-4 bg-gold text-dark font-semibold
                hover:shadow-[0_0_40px_rgba(212,175,55,0.7)] transition">
                VIEW DETAILS
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </section>
      </LazyLoad>


      {/* ================= FEEDBACK ================= */}
      <LazyLoad>
        <section className="py-32 bg-[#f8f8f8]">
          <div className="max-w-7xl mx-auto px-6">

            {/* Title */}
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-6xl font-serif font-light mb-4">
                What Our Clients Say
              </h2>
              <p className="text-neutral-600 max-w-xl mx-auto">
                Trusted by collectors and professionals around the world.
              </p>
            </div>

            {/* Feedback Cards */}
            <div className="grid md:grid-cols-3 gap-12">
              {[
                {
                  name: "James Carter",
                  role: "Watch Collector",
                  feedback:
                    "The craftsmanship is outstanding. This isn’t just a watch, it’s a legacy piece.",
                },
                {
                  name: "Sophia Laurent",
                  role: "Luxury Stylist",
                  feedback:
                    "Minimal, elegant, and powerful. The design speaks without trying too hard.",
                },
                {
                  name: "Daniel Wu",
                  role: "Entrepreneur",
                  feedback:
                    "Exceptional quality and attention to detail. Worth every moment.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl p-10 shadow-lg hover:shadow-xl transition"
                >
                  {/* Stars */}
                  <div className="flex mb-6">
                    {[...Array(5)].map((_, idx) => (
                      <Star key={idx} className="text-black" fill="currentColor" />
                    ))}
                  </div>

                  {/* Feedback */}
                  <p className="text-neutral-700 text-lg leading-relaxed mb-8">
                    “{item.feedback}”
                  </p>

                  {/* User */}
                  <div>
                    <div className="font-semibold text-black">{item.name}</div>
                    <div className="text-sm text-neutral-500 tracking-widest uppercase">
                      {item.role}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </LazyLoad>


    </div>
  );
}

export default Home;
