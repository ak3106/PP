import React from "react";
import { ShieldCheck, Lock, Eye, Database } from "lucide-react";

const PrivacyPolicy = () => {
  const lastUpdated = "April 09, 2026";

  return (
    <div className="bg-white text-zinc-900 min-h-screen pb-20">
      {/* Header Section */}
      <div className="bg-zinc-900 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <ShieldCheck className="w-16 h-16 text-highlight mx-auto mb-4" />
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-4 text-zinc-400">
            Last Updated: {lastUpdated}
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-6 mt-12 leading-relaxed">
        <section className="mb-10">
          <h2 className="text-2xl font-bold flex items-center gap-2 mb-4 border-b pb-2">
            <Eye className="text-highlight w-6 h-6" /> 1. Introduction
          </h2>
          <p>
            Welcome to <strong>Pragya Print</strong> (www.pragyaprint.com). We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website and tell you about your privacy rights.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold flex items-center gap-2 mb-4 border-b pb-2">
            <Database className="text-highlight w-6 h-6" /> 2. Data We Collect
          </h2>
          <p className="mb-4">
            We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
          </p>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>Identity Data:</strong> includes first name, last name, username or similar identifier.</li>
            <li><strong>Contact Data:</strong> includes billing address, delivery address, email address and telephone numbers.</li>
            <li><strong>Transaction Data:</strong> includes details about payments to and from you and other details of products and services you have purchased from us.</li>
          </ul>
        </section>

        <section className="mb-10 bg-zinc-50 p-6 rounded-xl border-l-4 border-highlight">
          <h2 className="text-2xl font-bold flex items-center gap-2 mb-4">
            <Lock className="text-highlight w-6 h-6" /> 3. Payment Security (Razorpay)
          </h2>
          <p className="mb-4">
            For a seamless shopping experience, we use <strong>Razorpay</strong> as our third-party payment gateway. 
          </p>
          <p className="font-semibold text-zinc-700">
            Important Security Disclosure:
          </p>
          <ul className="list-disc ml-6 mt-2 space-y-2 text-zinc-700 italic">
            <li>Pragya Print does not store your raw card details (Card Number, CVV, Expiry).</li>
            <li>All payment data is encrypted through the Payment Card Industry Data Security Standard (PCI-DSS) when processing payments.</li>
            <li>Your purchase transaction data is only used as long as is necessary to complete your purchase transaction.</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold flex items-center gap-2 mb-4 border-b pb-2">
            4. How We Use Your Information
          </h2>
          <p>
            We use your data only to:
          </p>
          <ul className="list-decimal ml-6 mt-2 space-y-2">
            <li>Process and deliver your printing orders.</li>
            <li>Manage our relationship with you (notifying you about changes to our terms or privacy policy).</li>
            <li>Improve our website, products, and customer service.</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold flex items-center gap-2 mb-4 border-b pb-2">
            5. Contact Information
          </h2>
          <p>
            If you have any questions about this privacy policy or our privacy practices, please contact our privacy officer at:
          </p>
          <div className="mt-4 p-4 bg-zinc-100 rounded-lg">
            <p className="font-bold">Pragya Print</p>
            <p>Email: pragyaprintingpress@yahoo.com</p>
            <p>Address: A.B. Road, Traffic Point, Bus stand, Shajapur, MP 465001</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;