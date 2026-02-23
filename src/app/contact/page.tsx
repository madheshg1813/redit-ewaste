import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactDetails from '@/components/ContactDetails';
import ContactForm from '@/components/ContactForm';
import { contactInfo } from '@/lib/constants';

export const metadata = {
    title: 'Contact Us | Redit E-Waste Recycling Chennai',
    description: 'Get in touch with Redit E-Waste for certified e-waste recycling and scrap buying services in Chennai. Request a free pickup today.',
};

export default function ContactPage() {
    return (
        <main className="min-h-screen font-sans bg-bg-light">
            <Header />

            {/* Hero Section */}
            <section className="bg-[#064E3B] text-white py-16 md:py-24 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 md:px-8 text-center relative z-10">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Contact Us</h1>
                    <p className="text-gray-300 max-w-2xl mx-auto text-lg">
                        Have e-waste to dispose of? We are just a call or message away.
                        Schedule a pickup or get a quote for your electronic scrap.
                    </p>
                </div>
                {/* Decorative elements */}
                <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid.svg')] opacity-10"></div>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[800px] h-[400px] bg-primary/20 rounded-full blur-[100px]"></div>
            </section>

            {/* Contact Content */}
            <section className="pt-16 pb-32 md:pt-24 md:pb-48 px-4 md:px-8 mb-20">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
                    {/* Left Column: Form */}
                    <div>
                        <ContactForm />
                    </div>

                    {/* Right Column: Info & Map */}
                    <div className="space-y-8">
                        <ContactDetails />

                        {/* Map Embed */}
                        <div className="bg-white p-2 rounded-2xl shadow-lg border border-gray-100 h-[300px] overflow-hidden relative z-0 group">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3881.022137910545!2d80.11439587570497!3d13.410960805116773!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4d81c70292a50f%3A0x50b7f77b1647d652!2sRedit%20E%20Waste%20Recycling!5e0!3m2!1sen!2sin!4v1739139644368!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Redit E-Waste Location"
                                className="pointer-events-none"
                            ></iframe>
                            <a
                                href={contactInfo.mapLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="absolute inset-0 z-10 bg-black/5 group-hover:bg-black/20 transition-colors flex items-center justify-center"
                                aria-label="View on Google Maps"
                            >
                                <span className="bg-white text-gray-900 px-4 py-2 rounded-lg font-bold shadow-lg opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0 text-sm flex items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg>
                                    View on Google Maps
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <Footer showCta={false} />
        </main>
    );
}
