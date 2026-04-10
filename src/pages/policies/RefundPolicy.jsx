import React from "react";
import { RotateCcw, Ban, AlertCircle, CheckCircle2 } from "lucide-react";

const RefundPolicy = () => {
  const lastUpdated = "April 09, 2026";

  return (
    <div className="bg-white text-zinc-900 min-h-screen pb-20">
      {/* Header Section */}
      <div className="bg-zinc-900 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <RotateCcw className="w-16 h-16 text-highlight mx-auto mb-4" />
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl uppercase">
            Refund & Cancellation
          </h1>
          <p className="mt-4 text-zinc-400">
            Our commitment to fairness regarding your orders and payments.
          </p>
          <p className="text-xs text-zinc-500 mt-2 italic">Last Updated: {lastUpdated}</p>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-6 mt-12 leading-relaxed">
        
        {/* Cancellation Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold flex items-center gap-2 mb-4 border-b pb-2 text-zinc-800">
            <Ban className="text-highlight w-6 h-6" /> 1. Cancellation Policy
          </h2>
          <p className="mb-4">
            At Pragya Print, we begin processing your custom orders almost immediately to ensure fast delivery.
          </p>
          <ul className="space-y-3">
            <li className="flex gap-3 items-start">
              <CheckCircle2 className="text-green-600 w-5 h-5 mt-1 flex-shrink-0" />
              <span><strong>Before Printing:</strong> You can cancel your order within <strong>12 hours</strong> of placement for a full refund.</span>
            </li>
            <li className="flex gap-3 items-start">
              <AlertCircle className="text-red-500 w-5 h-5 mt-1 flex-shrink-0" />
              <span><strong>After Printing Starts:</strong> Once a design has moved to the printing press, we cannot accept cancellations or offer refunds as the product is uniquely customized for you.</span>
            </li>
          </ul>
        </section>

        {/* Returns & Refunds Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold flex items-center gap-2 mb-4 border-b pb-2 text-zinc-800">
            <RotateCcw className="text-highlight w-6 h-6" /> 2. Returns & Replacements
          </h2>
          <p className="mb-4 font-semibold text-zinc-700 underline">
            We only accept returns or provide replacements in the following cases:
          </p>
          <ul className="list-disc ml-6 space-y-2 mb-4">
            <li>The product received is physically damaged or defective.</li>
            <li>The print quality has a manufacturing error (e.g., ink bleeding, wrong size).</li>
            <li>The item received is different from what was ordered.</li>
          </ul>
          <div className="bg-zinc-100 p-4 rounded-lg border-l-4 border-zinc-800 text-sm">
            <strong>Requirement:</strong> To claim a return, you must provide an <strong>unboxing video</strong> or clear photos of the defect within <strong>48 hours</strong> of delivery to our email.
          </div>
        </section>

        {/* Refund Process Section */}
        <section className="mb-12 bg-zinc-900 text-white p-8 rounded-2xl">
          <h2 className="text-2xl font-bold mb-4 border-b border-zinc-700 pb-2 text-highlight">
            3. Refund Timeline
          </h2>
          <p className="mb-4">
            Once your return/cancellation is approved, the refund will be initiated immediately.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-zinc-700 p-4 rounded-lg">
              <h4 className="font-bold text-highlight mb-1">Method</h4>
              <p className="text-sm text-zinc-400">Refunds are credited back to the <strong>original payment method</strong> (Razorpay) used during checkout.</p>
            </div>
            <div className="border border-zinc-700 p-4 rounded-lg">
              <h4 className="font-bold text-highlight mb-1">Timeframe</h4>
              <p className="text-sm text-zinc-400">It typically takes <strong>5-7 working days</strong> for the amount to reflect in your bank account/statement.</p>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 border-b pb-2 text-zinc-800">
            4. Non-Refundable Scenarios
          </h2>
          <p>Refunds will not be issued if:</p>
          <ul className="list-disc ml-6 mt-2 space-y-2 text-sm text-zinc-600">
            <li>The user provided a low-resolution or poor-quality image.</li>
            <li>The user made a typo or spelling error in the design.</li>
            <li>The package is lost due to an incorrect shipping address provided by the user.</li>
          </ul>
        </section>

        <div className="text-center p-6 border-2 border-dashed border-zinc-200 rounded-xl">
          <p className="text-zinc-600">Need to initiate a return?</p>
          <p className="text-xl font-bold text-zinc-900 mt-1">pragyaprintingpress@yahoo.com</p>
        </div>
      </div>
    </div>
  );
};

export default RefundPolicy;