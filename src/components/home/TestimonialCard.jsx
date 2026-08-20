import React from "react";

const TestimonialCard = ({ testi }) => (
  <div className="rounded-xl border border-[rgba(44,78,52,0.12)] bg-white p-6 sm:p-7">
    <div className="mb-2 font-heading text-4xl leading-none text-[#C8973A]">
      &ldquo;
    </div>
    <div className="mb-3 text-sm tracking-[2px] text-[#C8973A]">★★★★★</div>
    <p className="mb-5 font-body text-sm italic leading-relaxed text-[#2C4E34] sm:text-base">
      {testi.text}
    </p>
    <div className="flex items-center gap-3">
      <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[rgba(44,78,52,0.14)] bg-[#EDEAE1] font-heading text-xs font-medium text-[rgba(44,78,52,0.7)]">
        {testi.initials}
      </div>
      <div>
        <div className="font-heading text-sm font-medium text-[#2C4E34]">
          {testi.name}
        </div>
        <div className="font-body text-xs text-[rgba(44,78,52,0.58)]">
          {testi.role}
        </div>
      </div>
    </div>
  </div>
);

export default TestimonialCard;