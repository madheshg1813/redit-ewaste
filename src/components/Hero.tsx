import Link from 'next/link';
import { ArrowRight, Recycle, Phone } from 'lucide-react';
import { contactInfo } from '@/lib/constants';

export default function Hero() {
    return (
        <section className="bg-bg-light py-12 md:py-24 px-4 md:px-8 relative overflow-hidden">

            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-8 text-center md:text-left z-10">

                    {/* Top Pill Badge */}
                    <div className="inline-flex items-center gap-2 bg-[#dcfce7] text-primary px-4 py-2 rounded-full text-sm font-semibold border border-green-200 shadow-sm mx-auto md:mx-0">
                        <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                        Government Approved | TNPCB Certified
                    </div>

                    <h1 className="text-4xl md:text-7xl font-extrabold text-gray-900 leading-[1.1] tracking-tight">
                        Chennai's Trusted <br />
                        <span className="text-primary">E-Waste Management</span> Company
                    </h1>

                    <p className="text-gray-600 text-base md:text-xl leading-relaxed max-w-xl mx-auto md:mx-0 font-normal">
                        Responsible recycling solutions for IT companies, corporates & households across Tamil Nadu.
                        We ensure secure data destruction and eco-friendly disposal of electronic waste.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-3 pt-2 w-full md:w-auto">
                        <Link href="/contact" className="bg-primary text-white px-8 py-3.5 rounded-xl font-bold hover:bg-green-700 transition-all shadow-lg shadow-green-200/50 flex items-center justify-center gap-2 w-full sm:w-auto">
                            Schedule Free Pickup
                            <ArrowRight size={20} />
                        </Link>
                        <a href={`tel:${contactInfo.phone.replace(/[^0-9+]/g, '')}`} className="bg-white border-2 border-primary text-primary px-8 py-3.5 rounded-xl font-bold hover:bg-green-50 transition-colors w-full sm:w-auto text-center flex items-center justify-center gap-2">
                            <Phone size={18} className="md:hidden" />
                            Get a Quote
                        </a>
                    </div>

                    {/* Trust Badges - Horizontal List */}
                    <div className="pt-8 flex flex-wrap items-center justify-center md:justify-start gap-4 md:gap-6">
                        {['Zero Landfill'].map((badge, i) => (
                            <div key={i} className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-100 shadow-sm text-sm font-semibold text-gray-700">
                                <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center text-primary">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                                </div>
                                {badge}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="relative z-10 w-full md:w-auto flex justify-center md:block">
                    {/* Main Hero Image */}
                    <div className="relative w-full aspect-[4/3] bg-gray-200 rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white group">
                        <img
                            src="/hero-image.jpg"
                            alt="E-Waste Recycling Facility"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />

                        {/* Floating Stats Badge */}
                        <div className="absolute bottom-6 left-6 right-auto bg-white/95 backdrop-blur-md p-4 rounded-xl border border-white/50 shadow-lg flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center text-primary">
                                <Recycle size={24} />
                            </div>
                            <div>
                                <p className="font-extrabold text-gray-900 text-xl">50,000+ <span className="text-sm font-normal text-gray-500">kg</span></p>
                                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">E-Waste Recycled</p>
                            </div>
                        </div>
                    </div>
                    {/* Decorative blob behind image */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/5 rounded-full blur-3xl -z-10"></div>
                </div>
            </div>
        </section>
    );
}
