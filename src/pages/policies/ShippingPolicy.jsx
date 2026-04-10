import React from "react";
import { Truck, Clock, Package, MapPin } from "lucide-react";

const ShippingPolicy = () => {
  const lastUpdated = "April 09, 2026";

  return (
    <div className="bg-white text-zinc-900 min-h-screen pb-20">
      {/* Header Section */}
      <div className="bg-zinc-900 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Truck className="w-16 h-16 text-highlight mx-auto mb-4" />
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl uppercase">
            Shipping Policy
          </h1>
          <p className="mt-4 text-zinc-400">
            How we get your custom prints from our press to your doorstep.
          </p>
          <p className="text-xs text-zinc-500 mt-2 italic">Last Updated: {lastUpdated}</p>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-6 mt-12 leading-relaxed">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-zinc-50 p-6 rounded-xl border border-zinc-200">
            <Clock className="text-highlight mb-3" />
            <h3 className="font-bold text-lg mb-2">Processing Time</h3>
            <p className="text-sm text-zinc-600">
              Orders are typically processed and printed within <strong>2-4 business days</strong>. Custom or bulk orders may take slightly longer.
            </p>
          </div>
          <div className="bg-zinc-50 p-6 rounded-xl border border-zinc-200">
            <Truck className="text-highlight mb-3" />
            <h3 className="font-bold text-lg mb-2">Delivery Time</h3>
            <p className="text-sm text-zinc-600">
              Once shipped, transit takes <strong>3-7 business days</strong> depending on your location in India.
            </p>
          </div>
        </div>

        <section className="mb-10">
          <h2 className="text-2xl font-bold flex items-center gap-2 mb-4 border-b pb-2 text-zinc-800">
            <Package className="text-highlight w-6 h-6" /> 1. Shipping Coverage
          </h2>
          <p>
            We currently ship to almost all pincodes within <strong>India</strong>. We partner with reliable courier services like Delhivery, BlueDart, and DTDC to ensure your prints arrive safely.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold flex items-center gap-2 mb-4 border-b pb-2 text-zinc-800">
            <MapPin className="text-highlight w-6 h-6" /> 2. Shipping Charges
          </h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>Shipping charges are calculated based on the weight of the product and the delivery location.</li>
            <li>The final shipping cost will be displayed at the checkout page before you make the payment via Razorpay.</li>
            <li>We may offer free shipping on orders above a certain value, as indicated on our website banners.</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 border-b pb-2 text-zinc-800">
            3. Order Tracking
          </h2>
          <p>
            Once your order is dispatched, you will receive an email and/or SMS with a tracking number and a link to the courier partner's website. Please allow 24 hours for the tracking information to update.
          </p>
        </section>

        <section className="mb-10 bg-blue-50 p-6 rounded-xl border-l-4 border-blue-500 text-blue-900">
          <h2 className="text-xl font-bold mb-2">Delivery Delays</h2>
          <p className="text-sm">
            While we strive to meet our timelines, deliveries may occasionally be delayed due to unforeseen circumstances like extreme weather, strikes, or public holidays. We will keep you informed via email in such cases.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 border-b pb-2 text-zinc-800">
            4. Incorrect Address
          </h2>
          <p>
            Pragya Print is not responsible for non-delivery if the address provided by the customer is incorrect or incomplete. If an order is returned to us due to an incorrect address, a re-shipping fee will be applicable.
          </p>
        </section>

        <div className="mt-12 p-6 bg-zinc-100 rounded-lg text-sm text-zinc-600">
          <p>For any shipping-related queries, please mail us at:</p>
          <p className="text-zinc-900 font-bold mt-1">pragyaprintingpress@yahoo.com</p>
        </div>
      </div>
    </div>
  );
};

export default ShippingPolicy;