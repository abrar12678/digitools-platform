import React from 'react';
import { FaYoutube, FaFacebookF } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';

const Footer = () => {
    return (
        <footer className="bg-[#0F172A] text-slate-300">
            <div className="mx-4 sm:mx-8 md:mx-16 lg:mx-50 py-12 md:py-16 lg:py-25">
                <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr]">
                    <div>
                        <h2 className="text-3xl font-bold text-white">DigiTools</h2>
                        <p className="mt-4 max-w-sm text-sm leading-7 text-slate-400">
                            Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">Product</h3>
                        <ul className="mt-6 space-y-3 text-sm">
                            <li className="cursor-pointer text-slate-300 hover:text-white">Features</li>
                            <li className="cursor-pointer text-slate-300 hover:text-white">Pricing</li>
                            <li className="cursor-pointer text-slate-300 hover:text-white">Templates</li>
                            <li className="cursor-pointer text-slate-300 hover:text-white">Integrations</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">Company</h3>
                        <ul className="mt-6 space-y-3 text-sm">
                            <li className="cursor-pointer text-slate-300 hover:text-white">About</li>
                            <li className="cursor-pointer text-slate-300 hover:text-white">Blog</li>
                            <li className="cursor-pointer text-slate-300 hover:text-white">Careers</li>
                            <li className="cursor-pointer text-slate-300 hover:text-white">Press</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">Resources</h3>
                        <ul className="mt-6 space-y-3 text-sm text-slate-300">
                            <li className="cursor-pointer hover:text-white">Documentation</li>
                            <li className="cursor-pointer hover:text-white">Help Center</li>
                            <li className="cursor-pointer hover:text-white">Community</li>
                            <li className="cursor-pointer hover:text-white">Contact</li>
                        </ul>

                        <div className="mt-8">
                            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">Social Links</p>
                            <div className="mt-4 flex items-center gap-3">
                                <button className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 text-white hover:bg-slate-700 transition-colors duration-300">
                                    <FaYoutube size={16} />
                                </button>
                                <button className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 text-white hover:bg-slate-700 transition-colors duration-300">
                                    <FaFacebookF size={14} />
                                </button>
                                <button className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 text-white hover:bg-slate-700 transition-colors duration-300">
                                    <FiX size={18} />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-12 border-t border-slate-700 pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-sm text-slate-500">
                    <p>© 2026 Digitools. All rights reserved.</p>
                    <div className="flex flex-wrap items-center gap-4">
                        <span className="cursor-pointer hover:text-white">Privacy Policy</span>
                        <span className="cursor-pointer hover:text-white">Terms of Service</span>
                        <span className="cursor-pointer hover:text-white">Cookies</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;