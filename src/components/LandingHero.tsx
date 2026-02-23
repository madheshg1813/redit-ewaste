import Link from 'next/link';
import { Phone, CheckCircle2, MessageCircle } from 'lucide-react';
import { contactInfo } from '@/lib/constants';

interface LandingHeroProps {
    serviceType: 'recycling' | 'scrapping';
    location: string;
}

export default function LandingHero({ serviceType, location }: LandingHeroProps) {
    // The user wants the SAME content for all pages, only H1 changes location.

    // Determine title based on service type but keep structure identical
    const title = serviceType === 'recycling'
        ? <>E-Waste Recycling<br />Service in <span className="text-primary">{location}</span></>
        : <>E-Waste Scrap<br />Buyers in <span className="text-primary">{location}</span></>;

    return (
        <section className="bg-[#effdf5] py-16 md:py-24 px-4 md:px-8 relative overflow-hidden">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

                {/* Left Content */}
                <div className="space-y-8 relative z-10 text-center md:text-left">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 bg-[#dcfce7] text-primary px-4 py-2 rounded-full text-sm font-semibold w-fit mx-auto md:mx-0">
                        <CheckCircle2 size={16} className="fill-current" />
                        TNPCB Certified Facility
                    </div>

                    {/* H1 Title */}
                    <h1 className="text-4xl md:text-6xl font-extrabold text-[#064E3B] leading-[1.1] tracking-tight">
                        {title}
                    </h1>

                    {/* Description Paragraph (from screenshot) */}
                    <p className="text-gray-600 text-lg leading-relaxed max-w-xl mx-auto md:mx-0">
                        Looking for professional e-waste {serviceType === 'scrapping' ? 'scrap buying' : 'recycling'} in <span className="font-semibold text-gray-900">{location}</span>?
                        Redit E-Waste offers government-approved, environmentally responsible electronic waste disposal services for homes, offices, and industries.
                        We ensure 100% data security and zero landfill disposal with certified documentation.
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 pt-2 justify-center md:justify-start">
                        <Link href="/contact" className="bg-primary hover:bg-green-700 text-white px-8 py-4 rounded-lg font-bold transition-all shadow-lg shadow-green-200/50 flex items-center justify-center gap-2">
                            <Phone size={20} />
                            Schedule Free Pickup
                        </Link>

                        <a
                            href={`https://wa.me/${contactInfo.phone.replace(/[^0-9]/g, '')}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white border-2 border-primary text-primary hover:bg-green-50 px-8 py-4 rounded-lg font-bold transition-colors flex items-center justify-center gap-2"
                        >
                            <MessageCircle size={20} />
                            WhatsApp Us
                        </a>
                    </div>
                </div>

                {/* Right Image */}
                <div className="relative z-10 w-full md:w-auto flex justify-center md:block">
                    {/* Image Container with Custom Shape/Background */}
                    <div className="relative w-full aspect-[4/3] bg-[#dcfce7] rounded-[2.5rem] p-4 group">
                        <div className="relative w-full h-full rounded-[2rem] overflow-hidden shadow-xl">
                            <img
                                src="/hero-image.jpg"
                                alt={`E-Waste Management in ${location}`}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>

                        {/* Floating badge (optional, kept for flair) */}
                        <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-4 rounded-xl border border-white/50 shadow-lg">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                                    <CheckCircle2 size={24} />
                                </div>
                                <div>
                                    <p className="font-bold text-gray-900 text-sm">Government Authorized</p>
                                    <p className="text-xs text-gray-500">Safe & Secure Disposal</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
