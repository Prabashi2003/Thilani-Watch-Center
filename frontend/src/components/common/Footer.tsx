import React from 'react';
import {
    FaFacebook,
    FaGoogle,
    FaInstagram,
    FaPhone,
} from 'react-icons/fa';
import { FaMapLocation } from 'react-icons/fa6';
import CreditCards from '../../assets/images/credit-cards.webp';
import { motion } from 'framer-motion';

const Footer = () => {
    return (
        <footer className='bg-slate-900 pt-16 pb-8 text-white border-t border-slate-800'>
            <div className='max-w-7xl mx-auto px-6'>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-12'>
                    
                    {/* Company Details */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className='space-y-6'
                    >
                        <h1 className='text-2xl font-black uppercase tracking-tighter'>
                            Thilani <span className="text-indigo-500">Watch Center</span>
                        </h1>
                        <p className='text-slate-400 text-sm leading-relaxed max-w-[320px]'>
                            Your trusted destination for premium watches that blend timeless elegance with modern design. Discover our curated collection.
                        </p>
                        <div className="space-y-3 text-sm text-slate-300">
                            <p className='flex items-center gap-3 hover:text-indigo-400 transition-colors cursor-pointer'>
                                <FaPhone className="text-indigo-500" />
                                +94 78 890 7569
                            </p>
                            <p className='flex items-center gap-3 hover:text-indigo-400 transition-colors cursor-pointer'>
                                <FaMapLocation className="text-indigo-500" />
                                New Galle Road, Moratuwa, Sri Lanka
                            </p>
                        </div>
                    </motion.div>

                    {/* Quick Access Links */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className='space-y-6'
                    >
                        <h2 className='text-lg font-bold text-white uppercase tracking-wider'>Quick Access</h2>
                        <div className='grid grid-cols-2 gap-2 text-sm text-slate-400'>
                            <ul className='space-y-3'>
                                <li className="hover:text-indigo-400 cursor-pointer transition-colors">Home</li>
                                <li className="hover:text-indigo-400 cursor-pointer transition-colors">About Us</li>
                                <li className="hover:text-indigo-400 cursor-pointer transition-colors">Products</li>
                                <li className="hover:text-indigo-400 cursor-pointer transition-colors">Contact Us</li>
                            </ul>
                            <ul className='space-y-3'>
                                <li className="hover:text-indigo-400 cursor-pointer transition-colors">Blog</li>
                                <li className="hover:text-indigo-400 cursor-pointer transition-colors">FAQs</li>
                                <li className="hover:text-indigo-400 cursor-pointer transition-colors">Privacy Policy</li>
                                <li className="hover:text-indigo-400 cursor-pointer transition-colors">Terms</li>
                            </ul>
                        </div>
                    </motion.div>

                    {/* Socials & Payments */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className='space-y-6'
                    >
                        <h2 className='text-lg font-bold text-white uppercase tracking-wider'>Follow Us</h2>
                        <div className='flex items-center gap-5'>
                            <a href="#" className='p-3 bg-slate-800 rounded-xl hover:bg-indigo-600 transition-all group'>
                                <FaFacebook className='text-xl' />
                            </a>
                            <a href="#" className='p-3 bg-slate-800 rounded-xl hover:bg-indigo-600 transition-all group'>
                                <FaInstagram className='text-xl' />
                            </a>
                            <a href="#" className='p-3 bg-slate-800 rounded-xl hover:bg-indigo-600 transition-all group'>
                                <FaGoogle className='text-xl' />
                            </a>
                        </div>
                        <div className="pt-4">
                            <h3 className='text-xs font-black uppercase text-slate-500 tracking-[0.2em] mb-4'>Secure Payments</h3>
                            <img src={CreditCards} alt="Payment Methods" className='w-full max-w-[240px] opacity-80 hover:opacity-100 transition-opacity ' />
                        </div>
                    </motion.div>
                </div>

                {/* Copyright Section */}
                <div className='mt-16 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4'>
                    <p className='text-slate-500 text-xs font-medium'>
                        &copy; 2026 Thilani Watch Center. All rights reserved.
                    </p>
                    <p className="text-slate-600 text-[10px] uppercase tracking-widest">
                        Designed for Luxury Performance
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;