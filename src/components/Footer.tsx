import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin, MapPin, Phone, Mail } from 'lucide-react';
import { contactInfo } from '@/lib/constants';

interface FooterProps {
    showCta?: boolean;
}

export default function Footer({ showCta = true }: FooterProps) {
    return (
        <footer id="contact" className="bg-[#064E3B] text-gray-300">
            {/* CTA Section - Overlapping */}
            {showCta && (
                <div className="relative -mt-16 z-20 px-4 mb-16">
                    <div className="max-w-5xl mx-auto bg-primary rounded-3xl p-12 text-center shadow-2xl shadow-green-900/20">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Ready to Dispose Your E-Waste Responsibly?</h2>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/contact" className="bg-white text-primary px-8 py-4 rounded-xl font-bold hover:bg-gray-50 transition-colors text-lg shadow-sm">
                                Schedule Pickup
                            </Link>
                            <a href={`tel:${contactInfo.phone.replace(/[^0-9+]/g, '')}`} className="bg-primary-hover border-2 border-white/20 text-white px-8 py-4 rounded-xl font-bold hover:bg-green-800 transition-colors flex items-center justify-center gap-2 text-lg">
                                <Phone size={20} />
                                Call Now
                            </a>
                        </div>
                    </div>
                </div>
            )}

            <div className={`max-w-7xl mx-auto pb-16 px-4 md:px-8 grid md:grid-cols-4 gap-12 border-b border-white/10 ${showCta ? 'pt-8' : 'pt-20'}`}>
                <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-white tracking-tight">Redit E-Waste</h3>
                    <p className="text-sm leading-relaxed text-gray-400">
                        Leading e-waste management company in Chennai committed to sustainable recycling, data security, and environmental protection.
                    </p>
                    <div className="flex gap-4 pt-2">
                        <Link href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors text-white"><Facebook size={18} /></Link>
                        <Link href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors text-white"><Twitter size={18} /></Link>
                        <Link href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors text-white"><Instagram size={18} /></Link>
                        <Link href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors text-white"><Linkedin size={18} /></Link>
                    </div>
                </div>

                <div>
                    <h4 className="text-white font-bold text-lg mb-6">Quick Links</h4>
                    <ul className="space-y-4 text-sm text-gray-400">
                        <li><Link href="/" className="hover:text-primary transition-colors flex items-center gap-2">Home</Link></li>
                        <li><Link href="#about" className="hover:text-primary transition-colors flex items-center gap-2">About Us</Link></li>
                        <li><Link href="#services" className="hover:text-primary transition-colors flex items-center gap-2">Services</Link></li>
                        <li><Link href="/blog" className="hover:text-primary transition-colors flex items-center gap-2">Blog</Link></li>
                        <li><Link href="#contact" className="hover:text-primary transition-colors flex items-center gap-2">Contact</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-white font-bold text-lg mb-6">Services</h4>
                    <ul className="space-y-4 text-sm text-gray-400">
                        <li className="hover:text-primary cursor-pointer transition-colors">E-Waste Collection</li>
                        <li className="hover:text-primary cursor-pointer transition-colors">Data Sanitization</li>
                        <li className="hover:text-primary cursor-pointer transition-colors">Asset Refurbishing</li>
                        <li className="hover:text-primary cursor-pointer transition-colors">Recycling</li>
                    </ul>
                </div>

                <div className="space-y-6">
                    <h4 className="text-white font-bold text-lg mb-6">Contact Us</h4>
                    <a href={contactInfo.mapLink} target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 text-sm text-gray-400 group hover:text-white transition-colors">
                        <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary transition-colors flex-shrink-0 mt-1">
                            <MapPin size={16} className="text-gray-300 group-hover:text-white" />
                        </div>
                        <span className="leading-relaxed">{contactInfo.address}</span>
                    </a>
                    <div className="flex items-center gap-4 text-sm text-gray-400 group">
                        <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary transition-colors flex-shrink-0">
                            <Phone size={16} className="text-gray-300 group-hover:text-white" />
                        </div>
                        <span>{contactInfo.phone}</span>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-gray-400 group">
                        <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary transition-colors flex-shrink-0">
                            <Mail size={16} className="text-gray-300 group-hover:text-white" />
                        </div>
                        <span>{contactInfo.email}</span>
                    </div>
                </div>
            </div>

            {/* Google Map Embed in Footer */}
            <div className="max-w-7xl mx-auto px-4 md:px-8 pb-12 border-b border-white/10">
                <div className="rounded-xl overflow-hidden h-64 md:h-72 border border-white/10 shadow-lg relative bg-white/5 mx-auto">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3881.022137910545!2d80.11439587570497!3d13.410960805116773!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4d81c70292a50f%3A0x50b7f77b1647d652!2sRedit%20E%20Waste%20Recycling!5e0!3m2!1sen!2sin!4v1739139644368!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Redit E-Waste Footer Location"
                        className="grayscale opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                    ></iframe>
                </div>
            </div>

            <div className="py-8 text-center text-sm text-gray-500 bg-black/20">
                <p>
                    &copy; {new Date().getFullYear()} Redit E-Waste Recycling Chennai. All rights reserved.
                    <span className="mx-2">|</span>
                    <a href="/admin" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors">Admin Login</a>
                </p>
            </div>
        </footer >
    );
}
