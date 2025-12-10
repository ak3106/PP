import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Camera, Layers, Settings, Briefcase, Printer, CheckCircle, Lightbulb, Image, Zap, Package, Truck, Heart } from 'lucide-react';
import Button from '../components/UI/Button';

/**
 * Portfolio Page Component.
 * Showcases past work, machine capabilities, and commitment to quality with a modern, image-centric design.
 * @returns {JSX.Element}
 */
const Portfolio = () => {
    const navigate = useNavigate();
    
    // --- Gallery Data Structure (Extended) ---
    const QUALITY_SHOWCASE = [
        { title: "Premium Letterheads", tags: ["Offset", "Corporate"], image: "https://placehold.co/600x400/4f46e5/ffffff?text=Corporate+Stationery", icon: Briefcase },
        { title: "Shaadi Patrika (Foil)", tags: ["Bespoke", "Wedding"], image: "https://placehold.co/600x400/dc2626/ffffff?text=Wedding+Invites", icon: Heart },
        { title: "High-Res Posters", tags: ["Digital", "Vibrant"], image: "https://placehold.co/600x400/059669/ffffff?text=Poster+Print+Quality", icon: Layers },
        { title: "Bulk Flyers", tags: ["Volume", "Marketing"], image: "https://placehold.co/600x400/f59e0b/ffffff?text=Bulk+Flyers", icon: Truck },
        { title: "Custom Photo Prints", tags: ["Polaroid", "Memories"], image: "https://placehold.co/600x400/a855f7/ffffff?text=Photo+Prints", icon: Image },
        { title: "Lamination & Binding", tags: ["Finishing", "Durability"], image: "https://placehold.co/600x400/10b981/ffffff?text=Binding+Finishing", icon: Package },
    ];
    
    const MACHINE_CAPABILITY = [
        { title: "Digital Press Excellence", detail: "Perfect color match for low-to-mid volume runs. Instant proofing.", image: "https://placehold.co/600x400/8b5cf6/ffffff?text=Digital+Printer", icon: Zap },
        { title: "Industrial Offset Precision", detail: "Handling massive bulk orders with consistent, sharp color reproduction.", image: "https://placehold.co/600x400/1e40af/ffffff?text=Offset+Machine", icon: Settings },
    ];

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 min-h-[80vh]">
            
            <header className="text-center mb-16 pt-10 pb-8 bg-indigo-50 rounded-3xl shadow-xl">
                <h1 className="text-5xl font-extrabold text-gray-900 mb-3 animate-fadeInDown">Our Work, Our Promise</h1>
                <p className="text-xl text-indigo-600 max-w-4xl mx-auto animate-fadeInDown delay-100">
                    See the quality, precision, and machinery that uphold the Pragya Printing Press standard since 1995.
                </p>
            </header>

            {/* 1. Machine & Process Capability - BOLD FEATURE SECTION */}
            <section className="mb-20">
                <h2 className="text-3xl font-bold text-gray-800 mb-10 text-center flex items-center justify-center">
                    <Settings className="w-7 h-7 mr-3 text-red-500" /> Behind the Machines
                </h2>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    {MACHINE_CAPABILITY.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <div key={index} className="bg-white rounded-3xl shadow-2xl border-t-8 border-indigo-500 overflow-hidden transform transition duration-500 hover:scale-[1.01] group">
                                <div className="w-full h-72 overflow-hidden">
                                    <img 
                                        src={item.image} 
                                        alt={item.title} 
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                </div>
                                <div className="p-6 text-center">
                                    <Icon className="w-10 h-10 text-indigo-600 mx-auto mb-3" />
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{item.title}</h3>
                                    <p className="text-gray-600">{item.detail}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* 2. Print Quality Showcase - HORIZONTAL SCROLL GALLERY */}
            <section className="mb-20">
                <h2 className="text-3xl font-bold text-gray-800 mb-10 flex items-center justify-center">
                    <Camera className="w-7 h-7 mr-3 text-indigo-600" /> Past Work Gallery
                </h2>
                
                {/* Horizontal Scroll Wrapper */}
                <div className="overflow-x-scroll pb-6 scrollbar-hide">
                    <div className="flex space-x-6 px-1">
                        {QUALITY_SHOWCASE.map((item, index) => (
                            <div 
                                key={index} 
                                className="w-72 sm:w-80 flex-shrink-0 bg-white rounded-2xl shadow-xl overflow-hidden group border border-gray-100"
                            >
                                <div className="w-full h-48 overflow-hidden">
                                    <img 
                                        src={item.image} 
                                        alt={item.title} 
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                </div>
                                <div className="p-4">
                                    <h3 className="font-extrabold text-xl text-gray-900 mb-1">{item.title}</h3>
                                    <div className="flex flex-wrap gap-2 text-xs text-gray-600 mt-2">
                                        {item.tags.map(tag => (
                                            <span key={tag} className="bg-indigo-50 px-3 py-1 rounded-full font-semibold">{tag}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                        {/* Empty space to allow last item to center */}
                        <div className="w-20 flex-shrink-0"></div> 
                    </div>
                </div>
                
                <div className="text-center mt-8 text-gray-500 text-sm">
                    <span className="inline-block animate-pulse">&larr; Scroll horizontally to explore our projects &rarr;</span>
                </div>
            </section>
            
            {/* 3. Core Service Strengths (Icon-Driven Grid) */}
            <section className="py-10 text-center bg-yellow-50 p-10 rounded-3xl">
                <h2 className="text-3xl font-bold text-gray-800 mb-8 flex items-center justify-center">
                    <Lightbulb className="w-7 h-7 mr-3 text-yellow-600" /> Our Core Strengths
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {[
                        "Confidential Exam Paper Printing",
                        "Premium Wedding Card Design",
                        "High-Volume Offset Printing",
                        "Quick Digital Photocopying"
                    ].map((strength, index) => (
                        <div key={index} className="bg-white p-5 rounded-xl shadow-lg border-b-4 border-green-500 transform transition duration-300 hover:-translate-y-1">
                            <CheckCircle className="w-8 h-8 text-green-600 inline-block mb-3" />
                            <p className="font-bold text-gray-700">{strength}</p>
                        </div>
                    ))}
                </div>
            </section>
            
            {/* Final Call to Action */}
            <div className="mt-16 text-center p-8 bg-indigo-700 rounded-3xl shadow-2xl">
                <h3 className="text-2xl font-bold text-white mb-4">Ready to Print Your Next Project?</h3>
                <Button onClick={() => navigate('/contact')} className="bg-yellow-400 text-gray-900 hover:bg-yellow-300">
                    Get a Quote Today
                </Button>
            </div>
            
            {/* Custom Styles for Scrollbar Hide (as used in About page) */}
            <style>{`
                .scrollbar-hide::-webkit-scrollbar { display: none; }
                .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
            `}</style>
        </div>
    );
};

export default Portfolio;