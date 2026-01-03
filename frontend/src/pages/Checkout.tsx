import { useState } from "react";

const CheckoutPage = () => {
  const [billingInfo, setBillingInfo] = useState({
    fullName: "",
    email: "",
    address: "",
    city: "",
    state: "",
    zip: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBillingInfo({ ...billingInfo, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Billing Info:", billingInfo);
    alert("Order placed! Payment: Cash on Delivery");
  };

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
        
        {/* Billing Form */}
        <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
          <h2 className="text-xl font-bold mb-8 text-slate-800 border-b pb-4">Billing Information</h2>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-semibold text-slate-600 mb-1">Full Name</label>
              <input
                type="text"
                name="fullName"
                value={billingInfo.fullName}
                onChange={handleInputChange}
                className="w-full border border-slate-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-600 mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={billingInfo.email}
                onChange={handleInputChange}
                className="w-full border border-slate-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-600 mb-1">Address</label>
              <input
                type="text"
                name="address"
                value={billingInfo.address}
                onChange={handleInputChange}
                className="w-full border border-slate-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
                required
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-semibold text-slate-600 mb-1">City</label>
                <input
                  type="text"
                  name="city"
                  value={billingInfo.city}
                  onChange={handleInputChange}
                  className="w-full border border-slate-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-600 mb-1">State</label>
                <input
                  type="text"
                  name="state"
                  value={billingInfo.state}
                  onChange={handleInputChange}
                  className="w-full border border-slate-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-600 mb-1">ZIP</label>
                <input
                  type="text"
                  name="zip"
                  value={billingInfo.zip}
                  onChange={handleInputChange}
                  className="w-full border border-slate-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
                  required
                />
              </div>
            </div>

            {/* Payment Info */}
            <div className="mt-8 pt-6 border-t border-slate-100">
              <h2 className="text-lg font-bold mb-2 text-slate-800">Payment Method</h2>
              <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                <p className="text-sm text-slate-700 font-medium">Cash on Delivery (COD)</p>
                <p className="text-xs text-slate-500 mt-1">Payment will be collected upon delivery.</p>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-slate-900 text-white py-4 rounded-lg font-bold hover:bg-slate-800 transition shadow-md active:scale-[0.99]"
            >
              Place Order
            </button>
          </form>
        </div>

        {/* Order Summary */}
        <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm h-fit">
          <h2 className="text-xl font-bold mb-6 text-slate-800">Order Summary</h2>
          <div className="space-y-4">
            <div className="flex justify-between text-slate-600">
              <p>Product 1</p>
              <p className="font-semibold text-slate-900">$50.00</p>
            </div>
            <div className="flex justify-between text-slate-600">
              <p>Product 2</p>
              <p className="font-semibold text-slate-900">$30.00</p>
            </div>
            <div className="flex justify-between border-t pt-4 text-lg">
              <p className="font-bold text-slate-800">Total</p>
              <p className="font-bold text-indigo-600">$80.00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;