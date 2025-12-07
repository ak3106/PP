// import React, { useState, useEffect, useRef } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Briefcase, Clock, Zap, CheckCircle, MapPin, Layers, User, Star, TrendingUp, Heart } from 'lucide-react';
// import Button from '../components/UI/Button';

// // --- Timeline Data (Key Milestones) ---
// const TIMELINE_EVENTS = [
//     { year: 1995, title: "The Local Foundation", description: "Pragya Printing Press opens its doors as a small, family-run print shop, initially focusing on essential local services and bulk photocopying.", icon: Clock },
//     { year: 2005, title: "Digital Integration & Expansion", description: "Introduction of our first high-speed digital offset printer, allowing us to handle complex custom orders like multi-page exam papers and high-volume stationery.", icon: Zap },
//     { year: 2015, title: "The Shaadi Patrika Standard", description: "Established as the go-to provider for premium wedding invitations in the region, recognized for specialized paper stocks, embossing, and foil finishes.", icon: Heart },
//     { year: 2025, title: "Goes E-Commerce: PragyaPrint.com", description: "Launch of our hybrid online store, offering ready-made posters, polaroids, and merchandise, seamlessly blending 30 years of local quality with nationwide digital reach.", icon: Layers },
// ];

// // --- Internal Scroll Simulation Hook for Sticky Timeline ---
// /**
//  * Simulates detecting which timeline event should be active based on scroll position.
//  * NOTE: This is a simplified implementation for the single-file Canvas environment.
//  * In production, you would use Intersection Observer for better performance.
//  */
// const useTimelineScroll = (timelineRef) => {
//     const [activeEvent, setActiveEvent] = useState(0);

//     useEffect(() => {
//         const handleScroll = () => {
//             if (!timelineRef.current) return;

//             const timelineTop = timelineRef.current.offsetTop;
//             const scrollY = window.scrollY;
//             const containerHeight = timelineRef.current.clientHeight;

//             // Define trigger points based on the total height available for scrolling the timeline
//             const scrollableRange = containerHeight - window.innerHeight / 2;
//             const scrollFraction = Math.max(0, scrollY - timelineTop) / scrollableRange;

//             // Map scroll fraction to index (4 events: 0, 1, 2, 3)
//             let eventIndex = Math.floor(scrollFraction * TIMELINE_EVENTS.length);

//             // Cap the index
//             setActiveEvent(Math.max(0, Math.min(TIMELINE_EVENTS.length - 1, eventIndex)));
//         };

//         window.addEventListener('scroll', handleScroll);
//         // Clean up listener on component unmount
//         return () => window.removeEventListener('scroll', handleScroll);
//     }, [timelineRef]);

//     return activeEvent;
// };

// /**
//  * About Us Page component, detailing the history, mission, and hybrid model of Pragya Printing Press.
//  * @returns {JSX.Element}
//  */
// const About = () => {
//     const navigate = useNavigate();
//     const timelineRef = useRef(null);
//     const activeEventIndex = useTimelineScroll(timelineRef);

//     // --- Component Definition ---

//     // Timeline Item Component (renders the individual event)
//     const TimelineItem = ({ event, index, isActive }) => {
//         const Icon = event.icon;
//         return (
//             <div
//                 className={`p-6 md:p-8 rounded-2xl shadow-xl transition-all duration-500 mb-16 border
//                            ${isActive
//                                 ? 'bg-white border-indigo-500 shadow-indigo-200/50 transform scale-[1.01]'
//                                 : 'bg-gray-50 border-gray-100 opacity-70'}`
//                            }
//             >
//                 <div className="flex items-center space-x-4 mb-3">
//                     <Icon className={`w-8 h-8 transition-colors ${isActive ? 'text-indigo-600' : 'text-gray-500'}`} />
//                     <h3 className={`text-2xl font-extrabold ${isActive ? 'text-indigo-800' : 'text-gray-700'}`}>{event.year}</h3>
//                 </div>
//                 <h4 className="text-xl font-bold text-gray-900 mb-2">{event.title}</h4>
//                 <p className="text-gray-600">{event.description}</p>
//             </div>
//         );
//     };

//     return (
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 min-h-[150vh]">

//             <header className="text-center mb-12 py-10 bg-gradient-to-r from-indigo-50 to-white rounded-3xl shadow-lg">
//                 <p className="text-sm font-semibold uppercase text-indigo-600 mb-2 animate-fadeInDown">Our Legacy. Our Promise.</p>
//                 <h1 className="text-5xl font-extrabold text-gray-900 mb-4 animate-fadeInDown delay-100">
//                     30 Years of Print Excellence
//                 </h1>
//                 <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//                     Pragya Printing Press is a family-run business blending decades of local trust with modern digital e-commerce speed.
//                 </p>
//             </header>

//             {/* 1. Core Values/Hybrid Model */}
//             <section className="py-10">
//                 <h2 className="text-3xl font-bold text-gray-800 text-center mb-10">
//                     The Pragya Print Hybrid Advantage
//                 </h2>
//                 <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//                     {/* Value Card 1: E-commerce Speed */}
//                     <div className="p-6 bg-white rounded-2xl shadow-xl border-t-4 border-indigo-500 transform hover:scale-[1.03] transition duration-300">
//                         <Zap className="w-10 h-10 text-indigo-600 mb-4" />
//                         <h3 className="text-xl font-bold text-gray-900 mb-2">E-Commerce Speed</h3>
//                         <p className="text-gray-600 text-sm">Ready-made products (Posters, Mugs, Stickers) for quick browsing, direct purchase, and fast delivery.</p>
//                     </div>
//                     {/* Value Card 2: Local Quality */}
//                     <div className="p-6 bg-white rounded-2xl shadow-xl border-t-4 border-indigo-500 transform hover:scale-[1.03] transition duration-300">
//                         <Briefcase className="w-10 h-10 text-indigo-600 mb-4" />
//                         <h3 className="text-xl font-bold text-gray-900 mb-2">Local Custom Service</h3>
//                         <p className="text-gray-600 text-sm">For complex needs—Shaadi Patrika, bulk prints—our physical shop ensures personalized consultation and quality control.</p>
//                     </div>
//                     {/* Value Card 3: Quality Guarantee */}
//                     <div className="p-6 bg-white rounded-2xl shadow-xl border-t-4 border-indigo-500 transform hover:scale-[1.03] transition duration-300">
//                         <CheckCircle className="w-10 h-10 text-indigo-600 mb-4" />
//                         <h3 className="text-xl font-bold text-gray-900 mb-2">Unwavering Quality</h3>
//                         <p className="text-gray-600 text-sm">Industrial-grade printers and premium materials guarantee sharp details and vibrant colors for every order.</p>
//                     </div>
//                 </div>
//             </section>

//             {/* 2. Owner Details Section */}
//             <section className="py-16">
//                 <h2 className="text-3xl font-bold text-gray-800 text-center mb-10">
//                     Meet the Founder
//                 </h2>
//                 <div className="max-w-xl mx-auto bg-white p-8 rounded-3xl shadow-2xl border-t-8 border-yellow-500 text-center">
//                     <img
//                         src="https://placehold.co/100x100/fcd34d/44403c?text=Owner"
//                         alt="Owner Profile"
//                         className="w-24 h-24 rounded-full mx-auto mb-4 object-cover ring-4 ring-yellow-500"
//                     />
//                     <h3 className="text-2xl font-bold text-gray-900 mb-2">Mr. Rajesh Gupta</h3>
//                     <p className="text-indigo-600 font-semibold mb-4">Founder & Master Printer</p>
//                     <p className="text-gray-700 leading-relaxed">
//                         Rajesh started Pragya with a single vision: to bring reliable, high-quality printing to the local community. His dedication to craftsmanship remains the guiding principle of our hybrid business today.
//                     </p>
//                     <div className="mt-4 text-gray-500 flex justify-center space-x-4">
//                         <MapPin className='w-5 h-5'/> <span>Based in City/Local Area</span>
//                     </div>
//                 </div>
//             </section>

{
  /* 3. Animated Sticky Timeline (25+ Years) */
}
// <section ref={timelineRef} className="py-16 min-h-[1500px]"> {/* Min-height ensures enough scroll space */}
//     <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
//         Our Timeline: Key Milestones
//     </h2>

//     <div className="relative grid grid-cols-1 md:grid-cols-3 gap-10">

//         {/* Left Column: Sticky Vertical Line and Year Markers */}
//         <div className="md:col-span-1 sticky top-32 h-96 hidden md:block">
//             <div className="relative h-full w-full">
//                 {/* Vertical Line - Background */}
//                 <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gray-200 h-full rounded-full"></div>

//                 {/* Vertical Line - Progress (Simulated based on active event) */}
//                 <div
//                     className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-indigo-600 transition-all duration-500 ease-out rounded-full"
//                     style={{ height: `${(activeEventIndex / (TIMELINE_EVENTS.length - 1)) * 100}%` }}
//                 ></div>

//                 {/* Sticky Markers */}
//                 {TIMELINE_EVENTS.map((event, index) => (
//                     <div
//                         key={index}
//                         className={`absolute left-1/2 -translate-x-1/2 flex flex-col items-center justify-center transition-all duration-300 ease-in-out`}
//                         style={{ top: `${(index / (TIMELINE_EVENTS.length - 1)) * 90}%` }}
//                     >
//                         <div className={`w-8 h-8 rounded-full border-4 transition-all duration-300 flex items-center justify-center shadow-lg
//                                         ${activeEventIndex >= index
//                                             ? 'bg-indigo-600 border-indigo-200'
//                                             : 'bg-white border-gray-300'}`
//                                         }
//                         >
//                             <Star className={`w-4 h-4 transition-colors ${activeEventIndex >= index ? 'text-white' : 'text-gray-500'}`} />
//                         </div>
//                         <span className={`mt-2 font-bold transition-colors text-lg ${activeEventIndex >= index ? 'text-indigo-800' : 'text-gray-500'}`}>
//                             {event.year}
//                         </span>
//                     </div>
//                 ))}
//             </div>
//         </div>

//         {/* Right Column: Timeline Content (Requires significant vertical space for scroll) */}
//         <div className="md:col-span-2 space-y-16" style={{ paddingTop: '100px', paddingBottom: '300px' }}>
//             {TIMELINE_EVENTS.map((event, index) => (
//                 <TimelineItem
//                     key={event.year}
//                     event={event}
//                     index={index}
//                     isActive={activeEventIndex === index}
//                 />
//             ))}
//         </div>
//     </div>
// </section>

//             {/* 4. Final Call to Action */}
//             <section className="mt-12 text-center p-10 bg-gray-800 rounded-3xl shadow-2xl">
//                 <h2 className="text-3xl font-bold text-white mb-4">Let's Create Something Great Together</h2>
//                 <p className="text-lg text-indigo-300 mb-6">
//                     Start an online order, or contact us directly for custom and bulk services.
//                 </p>
//                 <div className="flex justify-center space-x-4">
//                     <Button
//                         onClick={() => navigate('/contact')}
//                         className="bg-yellow-400 text-gray-900 hover:bg-yellow-300 px-8 py-3"
//                     >
//                         Contact Our Team
//                     </Button>
//                     <Button
//                         onClick={() => navigate('/services')}
//                         variant="outline"
//                         className="border-white text-white hover:bg-indigo-600/50"
//                     >
//                         Explore Services
//                     </Button>
//                 </div>
//             </section>
//         </div>
//     );
// };

// export default About;
import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import {
  Briefcase,
  Clock,
  Zap,
  CheckCircle,
  MapPin,
  Star,
  TrendingUp,
  DollarSign,
  Globe,
} from "lucide-react";
import { motion, useInView } from "framer-motion";
import Button from "../components/UI/Button";

// --- Timeline Data ---
const TIMELINE_EVENTS = [
  {
    year: 1995,
    title: "Founding & First Press",
    description:
      "Pragya Printing Press opens its doors as a small, local print shop.",
    icon: Clock,
  },
  {
    year: 2018,
    title: "Sustainable Ink Adoption",
    description:
      "Began phasing in eco-friendly and water-based inks for reduced environmental impact.",
    icon: Globe,
  },
  {
    year: 2021,
    title: "E-Commerce Planning Phase",
    description:
      "Initiated planning and market research to launch an online platform for ready-made products.",
    icon: TrendingUp,
  },
  {
    year: 2023,
    title: "Online Product Prototyping",
    description:
      "Developed initial product lines (Posters, Polaroids, Mugs) optimized for digital customization.",
    icon: Star,
  },
  {
    year: 2025,
    title: "PragyaPrint.com Launch",
    description:
      "Official launch of the hybrid e-commerce store, connecting local legacy with nationwide reach.",
    icon: DollarSign,
  },
];

// --- Timeline Scroll Detection (clean + accurate) ---
const useTimelineScroll = (timelineRef) => {
  const [activeEvent, setActiveEvent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return;

      const items = timelineRef.current.querySelectorAll(".timeline-item");
      let currentIndex = 0;

      items.forEach((item, index) => {
        const rect = item.getBoundingClientRect();
        const triggerPoint = window.innerHeight * 0.45;

        if (rect.top <= triggerPoint) {
          currentIndex = index;
        }
      });

      setActiveEvent(
        Math.max(0, Math.min(TIMELINE_EVENTS.length - 1, currentIndex))
      );
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [timelineRef]);

  return activeEvent;
};

// --- Framer Variants ---
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const About = () => {
  const navigate = useNavigate();
  const timelineRef = useRef(null);
  const activeEventIndex = useTimelineScroll(timelineRef);

  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-100px" });

  const valuesRef = useRef(null);
  const valuesInView = useInView(valuesRef, { once: true, margin: "-100px" });

  const founderRef = useRef(null);
  const founderInView = useInView(founderRef, { once: true, margin: "-100px" });

  const ctaRef = useRef(null);
  const ctaInView = useInView(ctaRef, { once: true, margin: "-100px" });

  // --- Timeline Item ---
  const TimelineItem = ({ event, isActive }) => {
    const Icon = event.icon;

    return (
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
        className="relative mb-16 timeline-item"
      >
        <div
          className={`p-6 md:p-8 rounded-3xl shadow-xl border transition-all duration-500 ${
            isActive
              ? "bg-white border-indigo-600 shadow-2xl"
              : "bg-gray-50 border-gray-200 opacity-70 hover:opacity-100"
          }`}
        >
          <div className="flex items-center space-x-4 mb-3">
            <div
              className={`w-12 h-12 rounded-2xl flex items-center justify-center shadow-md ring-2 ${
                isActive
                  ? "bg-indigo-600 ring-indigo-300"
                  : "bg-indigo-50 ring-indigo-100"
              }`}
            >
              <Icon
                className={`w-7 h-7 ${
                  isActive ? "text-white" : "text-indigo-500"
                }`}
              />
            </div>
            <h3
              className={`text-2xl font-extrabold tracking-tight ${
                isActive ? "text-indigo-900" : "text-gray-700"
              }`}
            >
              {event.year}
            </h3>
          </div>

          <h4 className="text-xl font-bold text-gray-900 mb-2">
            {event.title}
          </h4>
          <p className="text-gray-600 leading-relaxed">{event.description}</p>
        </div>
      </motion.div>
    );
  };

  return (
    <motion.div
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
      variants={fadeIn}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.5 }}
    >
      {/* Background */}
      <div className="pointer-events-none fixed inset-0 -z-10 bg-gradient-to-b from-indigo-50 via-white to-gray-50" />

      {/* HEADER */}
      <motion.header
        ref={headerRef}
        variants={fadeUp}
        initial="hidden"
        animate={headerInView ? "visible" : "hidden"}
        transition={{ duration: 0.7 }}
        className="text-center mb-12 py-10 bg-white/70 backdrop-blur-md rounded-3xl shadow-xl border border-indigo-100 relative overflow-hidden"
      >
        <motion.p
          variants={fadeUp}
          className="text-sm font-semibold uppercase tracking-[0.25em] text-indigo-600 mb-3"
        >
          Our Legacy. Our Promise.
        </motion.p>

        <motion.h1
          variants={fadeUp}
          transition={{ delay: 0.1 }}
          className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4"
        >
          30 Years of Print Excellence
        </motion.h1>

        <motion.p
          variants={fadeUp}
          transition={{ delay: 0.2 }}
          className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto text-justify"
        >
          Family-run Pragya Printing Press, established on 7 December 1994, has
          been delivering trusted printing solutions for over three decades.
          What sets Pragya Printing Press apart is the trust we’ve built with
          our commitment and care — that’s the promise we continue to stand by.
        </motion.p>
      </motion.header>

      {/* VALUES */}
      <section className="py-10">
        <motion.h2
          ref={valuesRef}
          variants={fadeUp}
          initial="hidden"
          animate={valuesInView ? "visible" : "hidden"}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-gray-800 text-center mb-10"
        >
          The Pragya Print Hybrid Advantage
        </motion.h2>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={valuesInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {[
            {
              icon: Zap,
              title: "E-Commerce Speed",
              text: "Ready-made products for quick browsing, direct purchase, and fast delivery.",
            },
            {
              icon: Briefcase,
              title: "Local Custom Service",
              text: "For complex needs like Shaadi Patrika & bulk prints — our shop offers personalized consultation.",
            },
            {
              icon: CheckCircle,
              title: "Unmatched Quality",
              text: "Industrial-grade printers & premium materials ensure vibrant and precise printing.",
            },
          ].map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                variants={fadeUp}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -6, scale: 1.03 }}
                className="p-6 bg-white/80 backdrop-blur-md rounded-2xl shadow-lg border border-indigo-100/70"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600 mb-4 shadow-sm">
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">{item.text}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      {/* FOUNDER */}
      <section className="py-16">
        <motion.h2
          ref={founderRef}
          variants={fadeUp}
          initial="hidden"
          animate={founderInView ? "visible" : "hidden"}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-gray-800 text-center mb-10"
        >
          Meet the Founder
        </motion.h2>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={founderInView ? "visible" : "hidden"}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-6xl mx-auto bg-white/80 backdrop-blur-md p-8 rounded-3xl shadow-2xl border border-yellow-200 text-center"
        >
          <motion.img
            src="https://placehold.co/100x100/fcd34d/44403c?text=Owner"
            alt="Owner"
            className="w-24 h-24 rounded-full mx-auto mb-4 object-cover ring-4 ring-yellow-500 shadow-md"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={founderInView ? { opacity: 1, scale: 1 } : {}}
          />

          <h3 className="text-2xl font-bold text-gray-900 mb-1">
            Mr. Bhushan Sharma
          </h3>
          <p className="text-indigo-600 font-semibold mb-4">
            Founder & Director
          </p>

          <p className="text-gray-700 leading-relaxed max-w-2xl mx-auto">
            Bhushan started Pragya with a single vision: to bring reliable,
            high-quality printing to the community. His dedication to
            craftsmanship still guides every part of our hybrid business today.
          </p>

          <div className="mt-4 flex justify-center items-center text-gray-500">
            <MapPin className="w-5 h-5 mr-2" /> Based in Shajapur
          </div>
        </motion.div>
      </section>

      {/* TIMELINE */}
      <section ref={timelineRef} className="py-16">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
          Our Timeline: Key Milestones
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Sticky Rail */}
          <div className="hidden md:block md:col-span-1">
            <div className="sticky top-32 h-96 relative">

              {/* Background Line */}
              <div className="absolute left-1/2 -translate-x-1/2 w-1 bg-gray-200 h-full rounded-full"></div>

              {/* Progress Line */}
              <motion.div
                className="absolute left-1/2 -translate-x-1/2 w-1 bg-indigo-600 rounded-full"
                animate={{
                  height: `${(activeEventIndex / (TIMELINE_EVENTS.length - 1)) * 90}%`,
                }}
                transition={{ duration: 0.4 }}
              />

              {/* Markers */}
              {TIMELINE_EVENTS.map((event, index) => (
                <div
                  key={index}
                  className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center"
                  style={{
                    top: `${(index / (TIMELINE_EVENTS.length - 1)) * 90}%`,
                  }}
                >
                  <div
                    className={`w-8 h-8 rounded-full border-4 flex items-center justify-center transition-all 
                    ${
                      activeEventIndex >= index
                        ? "bg-indigo-600 border-indigo-200 scale-125"
                        : "bg-white border-gray-300"
                    }`}
                  >
                    <Star
                      className={`w-4 h-4 ${
                        activeEventIndex >= index
                          ? "text-white"
                          : "text-gray-500"
                      }`}
                    />
                  </div>

                  <span
                    className={`mt-2 font-bold ${
                      activeEventIndex >= index
                        ? "text-indigo-800"
                        : "text-gray-500"
                    }`}
                  >
                    {event.year}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Timeline Items */}
          <div className="md:col-span-2 space-y-16 timeline-content pt-20 pb-32">
            {TIMELINE_EVENTS.map((event, index) => (
              <TimelineItem
                key={event.year}
                event={event}
                isActive={activeEventIndex === index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section ref={ctaRef} className="mt-12">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={ctaInView ? "visible" : "hidden"}
          transition={{ duration: 0.6 }}
          className="text-center p-10 bg-gradient-to-r from-gray-900 via-indigo-900 to-gray-900 rounded-3xl shadow-2xl text-white"
        >
          <h2 className="text-3xl font-bold mb-4">
            Let’s Create Something Great Together
          </h2>
          <p className="text-lg text-indigo-200 mb-6 max-w-xl mx-auto">
            Start an online order, or contact us directly for custom and bulk
            services.
          </p>

          <div className="flex justify-center gap-4">
            <motion.div whileHover={{ y: -2, scale: 1.02 }}>
              <Button
                onClick={() => navigate("/contact")}
                className="bg-yellow-400 text-gray-900 px-8 py-3 shadow-lg"
              >
                Contact Our Team
              </Button>
            </motion.div>

            <motion.div whileHover={{ y: -2, scale: 1.02 }}>
              <Button
                onClick={() => navigate("/services")}
                variant="outline"
                className="border-white text-white px-8 py-3"
              >
                Explore Services
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </motion.div>
  );
};

export default About;
