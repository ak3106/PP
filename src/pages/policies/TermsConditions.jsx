import React from "react";
import { FileText, Scale, ShoppingBag, AlertTriangle } from "lucide-react";

const TermsConditions = () => {
  const lastUpdated = "April 09, 2026";

  return (
    <div className="bg-white text-zinc-900 min-h-screen pb-20">
      {/* Header Section */}
      <div className="bg-zinc-900 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <FileText className="w-16 h-16 text-highlight mx-auto mb-4" />
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl uppercase">
            Terms & Conditions
          </h1>
          <p className="mt-4 text-zinc-400">
            Please read these terms carefully before using our services.
          </p>
          <p className="text-xs text-zinc-500 mt-2 italic">Last Updated: {lastUpdated}</p>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-6 mt-12 leading-relaxed">
        
        <section className="mb-10">
          <h2 className="text-2xl font-bold flex items-center gap-2 mb-4 border-b pb-2 text-zinc-800">
            <Scale className="text-highlight w-6 h-6" /> 1. Agreement to Terms
          </h2>
          <p>
            By accessing or using <strong>www.pragyaprint.com</strong>, you agree to be bound by these Terms and Conditions. If you disagree with any part of these terms, you may not access the service.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold flex items-center gap-2 mb-4 border-b pb-2 text-zinc-800">
            <ShoppingBag className="text-highlight w-6 h-6" /> 2. Custom Printing Services
          </h2>
          <p className="mb-4">
            Pragya Print provides customized printing services. By uploading an image or design, you represent that:
          </p>
          <ul className="list-disc ml-6 space-y-2">
            <li>You own the copyright or have permission to use the design.</li>
            <li>The design does not violate any local laws or contain offensive content.</li>
            <li><strong>Quality Disclaimer:</strong> We print "as is." We are not responsible for pixelation or blurriness resulting from low-resolution files provided by the customer.</li>
          </ul>
        </section>

        <section className="mb-10 bg-yellow-50 p-6 rounded-xl border-l-4 border-yellow-500">
          <h2 className="text-2xl font-bold flex items-center gap-2 mb-4 text-yellow-800">
            <AlertTriangle className="w-6 h-6" /> 3. Pricing and Payments
          </h2>
          <p className="mb-4">
            All prices are listed in <strong>Indian Rupees (INR)</strong> and are inclusive of applicable taxes unless stated otherwise. 
          </p>
          <p>
            Payment must be made in full at the time of ordering. We use <strong>Razorpay</strong> as our secure payment partner. We reserve the right to cancel any order if payment is not successfully authorized.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 border-b pb-2 text-zinc-800">
            4. User Content & Conduct
          </h2>
          <p>
            You are solely responsible for the content you submit for printing. We reserve the right to refuse any order that we deem inappropriate, including but not limited to hate speech or copyrighted material without proof of ownership.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 border-b pb-2 text-zinc-800">
            5. Limitation of Liability
          </h2>
          <p>
            Pragya Print shall not be liable for any indirect, incidental, or consequential damages resulting from the use of our printed products or the inability to use our website.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 border-b pb-2 text-zinc-800">
            6. Governing Law
          </h2>
          <p>
            These Terms shall be governed and construed in accordance with the laws of <strong>India</strong>. Any disputes arising in relation hereto shall be subject to the exclusive jurisdiction of the courts of <strong>Shajapur, Madhya Pradesh</strong>.
          </p>
        </section>

        <div className="mt-12 p-6 bg-zinc-900 text-zinc-400 rounded-lg text-sm">
          <p>Questions about the Terms & Conditions? Contact us at:</p>
          <p className="text-white font-bold mt-2 underline">pragyaprintingpress@yahoo.com</p>
        </div>
      </div>
    </div>
  );
};

export default TermsConditions;