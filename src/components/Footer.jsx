import React from 'react';
import { Mail, Phone, MapPin, Globe } from 'lucide-react';

/**
 * The application footer component.
 * Provides key links, contact info, and copyright details.
 * * @param {object} props - Component props
 * @param {function} props.navigate - Function to change the current route/page.
 * @returns {JSX.Element}
 */
const Footer = ({ navigate }) => {
    const navLinks = [
        { name: 'Home', path: 'home' },
        { name: 'Products', path: 'products' },
        { name: 'Services', path: 'services' },
        { name: 'Portfolio', path: 'portfolio' },
        { name: 'About Us', path: 'about' },
        { name: 'Contact', path: 'contact' },
    ];

    return (
        <footer className="bg-gray-900 text-white mt-12 border-t border-indigo-700/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
                    
                    {/* Column 1: Branding & Mission */}
                    <div>
                        <h3 className="text-2xl font-extrabold text-indigo-400 mb-3 tracking-wider">PRAGYA PRINT</h3>
                        <p className="text-sm text-gray-400 leading-relaxed">
                            30 years of local trust meeting modern e-commerce. Your partner for quality printing, from polaroids to professional stationery.
                        </p>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4 text-indigo-300">Quick Links</h4>
                        <ul className="space-y-3 text-sm">
                            {navLinks.map(link => (
                                <li key={link.path}>
                                    <a 
                                        onClick={() => navigate(link.path)} 
                                        className="text-gray-400 hover:text-indigo-300 transition-colors duration-150 cursor-pointer flex items-center"
                                    >
                                        <Globe className="w-4 h-4 mr-2" />
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Contact Details */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4 text-indigo-300">Get In Touch</h4>
                        <ul className="space-y-3 text-sm text-gray-400">
                            <li className="flex items-center">
                                <Mail className="w-4 h-4 mr-3 text-indigo-400" /> 
                                <a href="mailto:support@pragyaprint.com" className="hover:text-indigo-300 transition">support@pragyaprint.com</a>
                            </li>
                            <li className="flex items-center">
                                <Phone className="w-4 h-4 mr-3 text-indigo-400" /> 
                                <a href="tel:+919876543210" className="hover:text-indigo-300 transition">+91 98765 43210</a>
                            </li>
                            <li className="flex items-start">
                                <MapPin className="w-4 h-4 mr-3 mt-1 text-indigo-400 flex-shrink-0" /> 
                                <span>Shop 101, Main Market Rd, City, Pincode 123456</span>
                            </li>
                        </ul>
                    </div>
                    
                    {/* Column 4: Social & Newsletter Placeholder */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4 text-indigo-300">Connect</h4>
                        {/* Dummy Social Icons */}
                        <div className="flex space-x-4 text-gray-400">
                            <a href="#" className="hover:text-indigo-400 transition transform hover:scale-110" title="Facebook">FB</a>
                            <a href="#" className="hover:text-indigo-400 transition transform hover:scale-110" title="Instagram">Insta</a>
                            <a href="#" className="hover:text-indigo-400 transition transform hover:scale-110" title="Twitter/X">X</a>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-10 pt-6 border-t border-gray-700 text-center text-sm text-gray-500">
                    &copy; {new Date().getFullYear()} Pragya Printing Press. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;