import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  Instagram,
  Facebook,
  Twitter,
  Linkedin,
  CheckCircle,
} from "lucide-react";
import LazyLoad from "../components/common/LazyLoad";

function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log("Form submitted:", formData);
    setIsSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* ================= HERO ================= */}
      <section className="relative h-[20vh] flex items-center justify-center overflow-hidden text-gray-900">
        {/* Grid Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />

        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-50" />

        {/* Glow Effects - Subtle gray instead of blue */}
        <div className="absolute top-1/8 -left-32 w-96 h-96 bg-gray-200/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-gray-300/15 blur-[120px] rounded-full" />

        {/* Content */}
        <div className="relative z-5 text-center px-8 max-w-4xl animate-fadeIn">

          <h1 className="text-4xl md:text-5xl font-serif font-light mb-6 text-gray-900">
            Contact <span className="text-[#3b82f6] italic font-semibold">Us</span>
          </h1>

          <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            We're here to assist you with any inquiries about our timepieces and services.
          </p>
        </div>
      </section>

      {/* ================= CONTACT INFO CARDS ================= */}
        <LazyLoad>
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                        {
                        icon: Phone,
                        title: "Phone",
                        info: ["+94 78 890 7569", "+94 78 9396 600"],
                        subInfo: "Mon–Fri, 9AM–6PM",
                        },
                        {
                        icon: Mail,
                        title: "Email",
                        info: "thilaniwatchcenter@gmail.com",
                        subInfo: "We'll reply within 24h",
                        },
                        {
                        icon: MapPin,
                        title: "Visit Us",
                        info: "No: 125 New Galle Road, Moratuwa",
                        subInfo: "Sri Lanka",
                        },
                        {
                        icon: Clock,
                        title: "Hours",
                        info: "Mon-Sun: 9AM–9PM",
                        subInfo: "Except Poya Days",
                        },
                    ].map((item, i) => (
                        <div
                        key={i}
                        className="group bg-white rounded-2xl p-8 text-center border-2 border-gray-200
                        hover:border-gray-900 hover:-translate-y-2 
                        transition-all duration-300 shadow-lg hover:shadow-xl"
                        >
                        <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gray-200 flex items-center justify-center
                            group-hover:bg-gray-900 group-hover:scale-110 transition-all duration-300"
                        >
                            <item.icon className="text-gray-900 group-hover:text-white transition-colors" size={28} />
                        </div>

                        <h3 className="text-gray-900 font-semibold text-lg mb-2 tracking-wide">
                            {item.title}
                        </h3>

                        {/* Info */}
                        {Array.isArray(item.info) ? (
                            item.info.map((text, idx) => (
                            <p key={idx} className="text-gray-900 text-sm font-medium">
                                {text}
                            </p>
                            ))
                        ) : (
                            <p className="text-gray-900 text-sm font-medium">{item.info}</p>
                        )}

                        <p className="text-gray-500 text-xs mt-1">{item.subInfo}</p>
                        </div>
                    ))}
                    </div>
                </div>
            </section>
        </LazyLoad>

      {/* ================= CONTACT FORM & MAP ================= */}
      <LazyLoad>
        <section className="py-28 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-16">
              {/* FORM */}
              <div>
                <h2 className="text-4xl md:text-5xl font-serif font-light mb-4 text-gray-900">
                  Send Us a <span className="text-[#3b82f6] font-semibold">Message</span>
                </h2>

                <p className="text-gray-600 mb-10 leading-relaxed">
                  Have a question or inquiry? Fill out the form below and we'll get back to you
                  as soon as possible.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div>
                    <label className="block text-sm text-gray-700 font-medium mb-2 tracking-wide">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-6 py-4 bg-white border-2 border-gray-300 rounded-lg 
                        text-gray-900 placeholder-gray-400 focus:outline-none focus:border-gray-900 
                        transition-all duration-300"
                      placeholder="John Doe"
                    />
                  </div>

                  {/* Email & Phone */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm text-gray-700 font-medium mb-2 tracking-wide">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-6 py-4 bg-white border-2 border-gray-300 rounded-lg 
                          text-gray-900 placeholder-gray-400 focus:outline-none focus:border-gray-900 
                          transition-all duration-300"
                        placeholder="john@example.com"
                      />
                    </div>

                    <div>
                      <label className="block text-sm text-gray-700 font-medium mb-2 tracking-wide">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-6 py-4 bg-white border-2 border-gray-300 rounded-lg 
                          text-gray-900 placeholder-gray-400 focus:outline-none focus:border-gray-900 
                          transition-all duration-300"
                        placeholder="+94 00 000-0000"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block text-sm text-gray-700 font-medium mb-2 tracking-wide">
                      Subject *
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-6 py-4 bg-white border-2 border-gray-300 rounded-lg 
                        text-gray-900 focus:outline-none focus:border-gray-900 
                        transition-all duration-300"
                    >
                      <option value="">Select a subject</option>
                      <option value="product-inquiry">Product Inquiry</option>
                      <option value="purchase">Purchase Assistance</option>
                      <option value="repair">Repair & Maintenance</option>
                      <option value="partnership">Partnership</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm text-gray-700 font-medium mb-2 tracking-wide">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-6 py-4 bg-white border-2 border-gray-300 rounded-lg 
                        text-gray-900 placeholder-gray-400 focus:outline-none focus:border-gray-900 
                        transition-all duration-300 resize-none"
                      placeholder="Tell us how we can help you..."
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitted}
                    className="group w-full inline-flex items-center justify-center gap-3 px-12 py-5 
                      bg-[#3b82f6] text-white font-semibold tracking-widest
                      hover:bg-[#2563eb] hover:shadow-lg
                      disabled:opacity-50 disabled:cursor-not-allowed
                      transition-all duration-300"
                  >
                    {isSubmitted ? (
                      <>
                        <CheckCircle size={20} />
                        MESSAGE SENT
                      </>
                    ) : (
                      <>
                        SEND MESSAGE
                        <Send
                          size={18}
                          className="group-hover:translate-x-1 transition-transform"
                        />
                      </>
                    )}
                  </button>
                </form>
              </div>

              {/* MAP & INFO */}
                <div className="space-y-8">
                    {/* Google Map */}
                    <div className="relative h-[400px] rounded-2xl overflow-hidden border-2 border-gray-300 shadow-xl">
                    <iframe
                        title="Thilani Watch Centre - Map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1977.6273154434104!2d79.88039761606265!3d6.775157185112062!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae24509c8fab27f%3A0x165332b3d90ce90e!2sThilani%20Watch%20Centre!5e0!3m2!1sen!2slk!4v1704258697452!5m2!1sen!2slk"
                        className="absolute inset-0 w-full h-full border-0"
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </div>

                {/* Additional Info */}
                <div className="bg-gray-50 rounded-2xl p-8 border-2 border-gray-300">
                  <h3 className="text-2xl font-serif mb-6 text-gray-900">Visit Our Showroom</h3>

                  <p className="text-gray-700 leading-relaxed mb-6">
                    Experience our exclusive collection in person. Our expert consultants are
                    ready to help you find the perfect timepiece.
                  </p>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-start gap-3">
                      <MapPin className="text-gray-900 mt-1 flex-shrink-0" size={20} />
                      <div>
                        <p className="text-gray-900 font-semibold">Address</p>
                        <p className="text-gray-600 text-sm">
                            No: 125 New Galle Road, Moratuwa
                          <br />
                            Sri Lanka
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Phone className="text-gray-900 mt-1 flex-shrink-0" size={20} />
                      <div>
                        <p className="text-gray-900 font-semibold">Phone</p>
                        <p className="text-gray-600 text-sm">+94 78 890 7569 | +94 9396 600</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Mail className="text-gray-900 mt-1 flex-shrink-0" size={20} />
                      <div>
                        <p className="text-gray-900 font-semibold">Email</p>
                        <p className="text-gray-600 text-sm">thilaniwatchcenter@gmail.com</p>
                      </div>
                    </div>
                  </div>

                  {/* Social Links */}
                  <div>
                    <p className="text-sm text-gray-700 font-medium mb-4 tracking-wide">FOLLOW US</p>
                    <div className="flex gap-4">
                      {[
                        { icon: Instagram, href: "#" },
                        { icon: Facebook, href: "https://www.facebook.com/share/1ZKBoHEsmt/" },
                        { icon: Twitter, href: "#" },
                        { icon: Linkedin, href: "#" },
                      ].map((social, i) => (
                        <a
                          key={i}
                          href={social.href}
                          className="w-12 h-12 rounded-full bg-white border-2 border-gray-900 flex items-center justify-center
                            hover:bg-gray-900 hover:text-white transition-all duration-300
                            text-gray-900"
                        >
                          <social.icon size={20} />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </LazyLoad>

      {/* ================= FAQ SECTION ================= */}
      <LazyLoad>
        <section className="py-28 bg-gray-50">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-serif font-light mb-4 text-gray-900">
                Frequently Asked <span className="text-[#3b82f6] font-semibold">Questions</span>
              </h2>
              <p className="text-gray-600">Quick answers to common inquiries</p>
            </div>

            <div className="space-y-6">
              {[
                {
                  question: "How long does shipping take?",
                  answer:
                    "Standard shipping takes 2-4 business days depending on location.",
                },
                {
                  question: "Do you offer warranty on your timepieces?",
                  answer:
                    "Yes, all our timepieces come with a comprehensive warranty depending on the model. We also offer extended warranty options.",
                },
                {
                  question: "What payment methods do you accept?",
                  answer:
                    "We accept all major credit cards, bank transfers, and offer flexible financing options for qualified buyers.",
                },
              ].map((item, i) => (
                <details
                  key={i}
                  className="group bg-white rounded-xl border-2 border-gray-300 
                    hover:border-gray-900 transition-all duration-300"
                >
                  <summary className="cursor-pointer px-8 py-6 flex justify-between items-center">
                    <h3 className="font-semibold text-gray-900 text-lg pr-4">{item.question}</h3>
                    <span className="text-gray-900 text-2xl group-open:rotate-45 transition-transform">
                      +
                    </span>
                  </summary>
                  <div className="px-8 pb-6">
                    <p className="text-gray-600 leading-relaxed">{item.answer}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>
      </LazyLoad>

      {/* ================= CTA SECTION ================= */}
      <LazyLoad>
        <section className="py-28 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
          {/* Background Effects */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#3b82f6]/10 blur-[150px] rounded-full" />

          <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-6xl font-serif font-light mb-6 text-white">
              Ready to Find Your <span className="text-[#3b82f6] font-semibold">Perfect Timepiece</span>?
            </h2>

            <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
              Visit our showroom to view our greatest collection today.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="inline-flex items-center justify-center gap-3 px-12 py-5 bg-[#3b82f6] text-white hover:bg-[#2563eb] font-semibold tracking-widest transition-all">
                EXPLORE COLLECTION
              </button>
            </div>
          </div>
        </section>
      </LazyLoad>
    </div>
  );
}

export default ContactUs;