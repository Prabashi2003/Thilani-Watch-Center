import React from "react";
import {
  Watch,
  Clock,
  Wrench,
  Award,
  MapPin,
  Heart,
  Users,
  CheckCircle,
  Star,
  Shield,
} from "lucide-react";
import LazyLoad from "../components/common/LazyLoad";

import watch1 from "../assets/images/watch1.jpeg";
import watch2 from "../assets/images/watch2.jpeg";
import watch3 from "../assets/images/watch3.jpeg";
import watch4 from "../assets/images/watch4.jpeg";
import watch5 from "../assets/images/watch5.jpeg";
import watch6 from "../assets/images/watch6.jpeg";

function AboutUs() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* ================= HERO ================= */}
      <section className="relative min-h-screen flex items-center bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* LEFT SIDE - Content */}
            <div className="space-y-8 order-2 lg:order-1">
              <div>
                <span className="inline-block px-4 py-2 bg-[#d97706] text-white text-xs tracking-widest font-bold rounded-full mb-6">
                  EST. 1999 • 25+ YEARS OF EXCELLENCE
                </span>
                
                <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 text-gray-900 leading-tight">
                  Thilani<br/>
                  <span className="text-[#d97706]">Watch Center</span>
                </h1>
                
                <p className="text-xl text-gray-600 leading-relaxed mb-8">
                  Your trusted partner for watch sales, repairs, and grandfather clock restoration in Moratuwa, Sri Lanka.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <button className="px-8 py-4 bg-[#d97706] text-white font-semibold hover:bg-[#c27005] transition-all shadow-lg hover:shadow-xl">
                    EXPLORE OUR SERVICES
                  </button>
                  <button className="px-8 py-4 border-2 border-gray-900 text-gray-900 font-semibold hover:bg-gray-900 hover:text-white transition-all">
                    VISIT OUR STORE
                  </button>
                </div>
              </div>

              {/* Quick Info Cards */}
              <div className="grid grid-cols-2 gap-4 pt-8 border-t-2 border-gray-200">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center">
                    <MapPin className="text-[#d97706]" size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">Location</p>
                    <p className="text-xs text-gray-600">New Galle Road</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center">
                    <Award className="text-[#d97706]" size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">Experience</p>
                    <p className="text-xs text-gray-600">25+ Years</p>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE - Visual Element */}
            <div className="relative order-1 lg:order-2">
              {/* Main Circle */}
              <div className="relative w-full aspect-square max-w-[500px] mx-auto">
                {/* Decorative Circles */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#d97706] to-orange-400 opacity-20 animate-pulse" />
                <div className="absolute inset-8 rounded-full bg-gradient-to-br from-orange-200 to-orange-100 flex items-center justify-center">
                  
                  {/* Center Content */}
                  <div className="text-center space-y-6 p-8">
                    <Clock className="text-[#d97706] mx-auto" size={120} strokeWidth={1.5} />
                    
                    <div>
                      <div className="text-6xl font-bold text-gray-900 mb-2">25+</div>
                      <div className="text-lg font-semibold text-[#d97706] tracking-wider">YEARS OF SERVICE</div>
                    </div>

                    <div className="flex justify-center gap-6 pt-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-gray-900">10K+</div>
                        <div className="text-xs text-gray-600">Customers</div>
                      </div>
                      <div className="w-px bg-gray-300" />
                      <div className="text-center">
                        <div className="text-2xl font-bold text-gray-900">50K+</div>
                        <div className="text-xs text-gray-600">Repairs</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full bg-[#d97706] opacity-60 blur-xl animate-pulse" />
                <div className="absolute -bottom-4 -left-4 w-32 h-32 rounded-full bg-orange-300 opacity-40 blur-xl animate-pulse delay-700" />
              </div>

              {/* Address Card - Floating */}
              <div className="absolute -bottom-8 left-0 right-0 mx-auto max-w-sm">
                <div className="bg-white rounded-2xl p-6 shadow-2xl border-2 border-orange-200">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#d97706] flex items-center justify-center flex-shrink-0">
                      <MapPin className="text-white" size={24} />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 mb-1">Visit Us Today</p>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        No 125, New Galle Road<br/>
                        Moratuwa, Sri Lanka
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Background Decoration */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-orange-50 to-transparent -z-10" />
      </section>

      {/* ================= OUR STORY ================= */}
      <LazyLoad>
        <section className="py-28 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <span className="inline-block mb-4 px-4 py-1 bg-orange-100 text-[#d97706] text-xs tracking-widest font-semibold rounded-full">
                  OUR STORY
                </span>

                <h2 className="text-4xl md:text-5xl font-serif font-light mb-6 text-gray-900">
                  A Legacy of <span className="text-[#d97706] font-semibold">Precision</span>
                </h2>

                <p className="text-gray-600 leading-relaxed mb-6">
                  Since 1999, Thilani Watch Center has been the trusted name in Moratuwa for
                  exceptional watch services. What started as a small shop has grown into a beloved
                  institution, serving generations of customers with dedication and expertise.
                </p>

                <p className="text-gray-600 leading-relaxed mb-6">
                  Located at No 125, New Galle Road, we've built our reputation on quality
                  craftsmanship, honest service, and a genuine passion for horology. Every timepiece
                  that passes through our doors receives the same meticulous attention, whether it's
                  a modern wristwatch or a treasured grandfather clock.
                </p>

                <p className="text-gray-600 leading-relaxed">
                  Our 25+ years of experience have equipped us with the knowledge and skills to
                  handle any watch-related need, making us the go-to destination for watch
                  enthusiasts across Sri Lanka.
                </p>
              </div>

              <div className="relative">
                {/* Main Card with Watch Images Grid */}
                <div className="relative bg-white rounded-3xl shadow-2xl p-8 border-2 border-gray-200">
                  {/* Grid of Watch Images */}
                  <div className="grid grid-cols-3 gap-6 mb-6">
                    {/* Replace the paths below with your imported images: { img: watch1, name: "Luxury Watch" } */}
                    {[
                      { img: watch1, name: "Watch 1" },
                      { img: watch2, name: "" },
                      { img: watch3, name: "Watch 3" },
                      { img: watch4, name: "Watch 4" },
                      { img: watch5, name: "Watch 5" },
                      { img: watch6, name: "Watch 6" },
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="group aspect-square rounded-2xl bg-gradient-to-br from-orange-100 to-orange-50 overflow-hidden hover:scale-110 transition-all duration-300 shadow-md hover:shadow-xl"
                      >
                        <img
                          src={item.img}
                          alt={item.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                    ))}
                  </div>

                  {/* Stats Bar */}
                  <div className="bg-gradient-to-r from-[#d97706] to-orange-500 rounded-2xl p-6 text-white text-center">
                    <div className="text-4xl font-bold mb-2">25+</div>
                    <div className="text-sm tracking-wider font-semibold">YEARS OF EXCELLENCE</div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-4 -left-4 w-20 h-20 bg-[#d97706] rounded-full flex items-center justify-center shadow-xl">
                  <Award className="text-white" size={32} />
                </div>

                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl flex items-center justify-center shadow-xl rotate-12">
                  <Clock className="text-white" size={40} strokeWidth={2} />
                </div>

                {/* Background Decoration */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-br from-orange-200 to-orange-100 rounded-3xl -z-10 scale-105 opacity-30" />
              </div>
            </div>
          </div>
        </section>
      </LazyLoad>

      {/* ================= STATS ================= */}
      <LazyLoad>
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: "25+", label: "Years Experience", icon: Award },
                { value: "10K+", label: "Happy Customers", icon: Users },
                { value: "50K+", label: "Watches Serviced", icon: Wrench },
                { value: "100%", label: "Satisfaction Rate", icon: Star },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="group bg-white rounded-2xl p-8 text-center border-2 border-gray-200
                    hover:border-[#d97706] hover:-translate-y-2 
                    transition-all duration-300 shadow-lg"
                >
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-orange-100 flex items-center justify-center group-hover:bg-[#d97706] group-hover:scale-110 transition-all">
                    <stat.icon className="text-[#d97706] group-hover:text-white transition-colors" size={28} />
                  </div>

                  <div className="text-5xl font-serif mb-2 text-[#d97706]">{stat.value}</div>

                  <div className="text-sm text-gray-600 tracking-wide uppercase font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </LazyLoad>

      {/* ================= SERVICES ================= */}
      <LazyLoad>
        <section className="py-28 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-serif font-light mb-4 text-gray-900">
                Our <span className="text-[#d97706] font-semibold">Services</span>
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Comprehensive watch and clock services under one roof
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-10">
              {[
                {
                  icon: Watch,
                  title: "Watch Sales",
                  description:
                    "Curated collection of quality timepieces for every style and budget. From classic designs to modern innovations.",
                  features: ["Authentic Timepieces", "Warranty Included", "Expert Guidance"],
                },
                {
                  icon: Wrench,
                  title: "Watch Repairs",
                  description:
                    "Professional repair services for all watch brands. Our skilled technicians restore your timepieces to perfect working condition.",
                  features: ["Battery Replacement", "Movement Repair", "Water Resistance Testing"],
                },
                {
                  icon: Clock,
                  title: "Grandfather Clocks",
                  description:
                    "Specialized in grandfather clock sales, repairs, and restoration. Keeping these timeless treasures ticking for generations.",
                  features: ["Clock Restoration", "Mechanism Repair", "Maintenance Services"],
                },
              ].map((service, i) => (
                <div
                  key={i}
                  className="group bg-gradient-to-br from-white to-orange-50 rounded-2xl p-8 border-2 border-orange-200
                    hover:border-[#d97706] hover:shadow-2xl hover:-translate-y-2 
                    transition-all duration-300"
                >
                  <div className="w-20 h-20 mb-6 rounded-full bg-[#d97706] flex items-center justify-center group-hover:scale-110 transition-all">
                    <service.icon className="text-white" size={36} />
                  </div>

                  <h3 className="text-2xl font-serif mb-4 text-gray-900">{service.title}</h3>

                  <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>

                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-gray-700">
                        <CheckCircle className="text-[#d97706] flex-shrink-0" size={18} />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      </LazyLoad>

      {/* ================= WHY CHOOSE US ================= */}
      <LazyLoad>
        <section className="py-28 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-serif font-light mb-4 text-gray-900">
                Why Choose <span className="text-[#d97706] font-semibold">Us</span>?
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                What makes Thilani Watch Center the preferred choice in Moratuwa
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Award,
                  title: "25+ Years Experience",
                  description: "Quarter-century of expertise in watch and clock services",
                },
                {
                  icon: Shield,
                  title: "Trusted & Reliable",
                  description: "Built on honesty, transparency, and customer satisfaction",
                },
                {
                  icon: Heart,
                  title: "Passionate Craftsmen",
                  description: "Every repair done with care and attention to detail",
                },
                {
                  icon: Watch,
                  title: "Authentic Products",
                  description: "Only genuine timepieces and quality replacement parts",
                },
                {
                  icon: Users,
                  title: "Family Business",
                  description: "Personal service that treats every customer like family",
                },
                {
                  icon: MapPin,
                  title: "Convenient Location",
                  description: "Easy to find on New Galle Road, Moratuwa",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl p-8 border-2 border-gray-200 hover:border-[#d97706] transition-all duration-300 hover:shadow-xl"
                >
                  <div className="w-14 h-14 mb-4 rounded-full bg-orange-100 flex items-center justify-center">
                    <item.icon className="text-[#d97706]" size={24} />
                  </div>

                  <h3 className="text-xl font-semibold mb-3 text-gray-900">{item.title}</h3>

                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </LazyLoad>

      {/* ================= VALUES ================= */}
      <LazyLoad>
        <section className="py-28 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-20 items-center">
              <div className="relative order-2 md:order-1">
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-orange-100 to-orange-50 p-12 flex items-center justify-center border-4 border-orange-200 shadow-2xl">
                  <div className="text-center">
                    <Watch className="text-[#d97706] mx-auto mb-6" size={100} strokeWidth={1} />
                    <p className="text-2xl font-serif text-gray-900 italic">
                      "Time is precious, we treat it that way"
                    </p>
                  </div>
                </div>
              </div>

              <div className="order-1 md:order-2">
                <h2 className="text-4xl md:text-5xl font-serif font-light mb-6 text-gray-900">
                  Our <span className="text-[#d97706] font-semibold">Values</span>
                </h2>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900 flex items-center gap-2">
                      <CheckCircle className="text-[#d97706]" size={20} />
                      Quality First
                    </h3>
                    <p className="text-gray-600 leading-relaxed pl-7">
                      We never compromise on the quality of our work or products. Every service is
                      performed to the highest standards.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900 flex items-center gap-2">
                      <CheckCircle className="text-[#d97706]" size={20} />
                      Customer Trust
                    </h3>
                    <p className="text-gray-600 leading-relaxed pl-7">
                      Building lasting relationships through honest advice, fair pricing, and
                      reliable service.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900 flex items-center gap-2">
                      <CheckCircle className="text-[#d97706]" size={20} />
                      Craftsmanship
                    </h3>
                    <p className="text-gray-600 leading-relaxed pl-7">
                      Traditional techniques combined with modern expertise to deliver exceptional
                      results.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900 flex items-center gap-2">
                      <CheckCircle className="text-[#d97706]" size={20} />
                      Community Focus
                    </h3>
                    <p className="text-gray-600 leading-relaxed pl-7">
                      Proudly serving the Moratuwa community and beyond for over two decades.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </LazyLoad>

      {/* ================= LOCATION ================= */}
      <LazyLoad>
        <section className="py-28 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-serif font-light mb-4 text-gray-900">
                Visit Our <span className="text-[#d97706] font-semibold">Store</span>
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Located in the heart of Moratuwa on New Galle Road
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="bg-white rounded-2xl p-10 border-2 border-orange-200 shadow-xl">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-14 h-14 rounded-full bg-[#d97706] flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-serif mb-2 text-gray-900">
                      Thilani Watch Center
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      No 125, New Galle Road
                      <br />
                      Moratuwa, Sri Lanka
                    </p>
                  </div>
                </div>

                <div className="space-y-4 pt-6 border-t-2 border-gray-200">
                  <div className="flex items-center gap-3">
                    <Clock className="text-[#d97706]" size={20} />
                    <div>
                      <p className="font-semibold text-gray-900">Opening Hours</p>
                      <p className="text-sm text-gray-600">Monday - Saturday: 9:00 AM - 7:00 PM</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Watch className="text-[#d97706]" size={20} />
                    <div>
                      <p className="font-semibold text-gray-900">Services Available</p>
                      <p className="text-sm text-gray-600">
                        Walk-ins welcome, appointments preferred for repairs
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative h-[400px] rounded-2xl overflow-hidden border-2 border-gray-300 shadow-xl">
                {/* Map Placeholder */}
                <div className="absolute inset-0 bg-gray-100 flex items-center justify-center">
                  <iframe
                        title="Thilani Watch Centre - Map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1977.6273154434104!2d79.88039761606265!3d6.775157185112062!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae24509c8fab27f%3A0x165332b3d90ce90e!2sThilani%20Watch%20Centre!5e0!3m2!1sen!2slk!4v1704258697452!5m2!1sen!2slk"
                        className="absolute inset-0 w-full h-full border-0"
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </div>
              </div>
            </div>
          </div>
        </section>
      </LazyLoad>

      {/* ================= CTA ================= */}
      <LazyLoad>
        <section className="py-28 bg-gradient-to-br from-orange-50 to-white relative overflow-hidden">
          {/* Background Effects */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(217,119,6,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(217,119,6,0.06)_1px,transparent_1px)] bg-[size:50px_50px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#d97706]/15 blur-[150px] rounded-full" />

          <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-6xl font-serif font-light mb-6 text-gray-900">
              Ready to Experience Our{" "}
              <span className="text-[#d97706] font-semibold">Expertise</span>?
            </h2>

            <p className="text-gray-600 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
              Visit us today or get in touch. We're here to help with all your watch and clock
              needs.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="inline-flex items-center justify-center gap-3 px-12 py-5 bg-[#d97706] text-white font-semibold tracking-widest hover:bg-[#c27005] hover:shadow-[0_0_40px_rgba(217,119,6,0.4)] transition-all">
                VISIT OUR STORE
              </button>

              <button className="inline-flex items-center justify-center gap-3 px-12 py-5 border-2 border-[#d97706] text-[#d97706] hover:bg-[#d97706] hover:text-white font-semibold tracking-widest transition-all">
                CONTACT US
              </button>
            </div>
          </div>
        </section>
      </LazyLoad>
    </div>
  );
}

export default AboutUs;