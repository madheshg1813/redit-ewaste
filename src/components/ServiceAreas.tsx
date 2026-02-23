import Link from 'next/link';
import { serviceAreas, contactInfo } from '@/lib/constants';

export default function ServiceAreas() {
    return (
        <section id="service-areas" className="bg-[#0f172a] text-white pt-20 pb-40 md:py-20 px-4 md:px-8 border-t border-white/10">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-8">Service Areas in Chennai</h2>
                <div className="flex flex-wrap justify-center gap-3 max-w-5xl mx-auto">
                    {serviceAreas.map((area) => (
                        <Link
                            key={area}
                            href={`/chennai/e-waste-recycling-service-in-${area.toLowerCase().replace(/ /g, '-')}`}
                            className="text-sm text-gray-400 hover:text-primary hover:bg-white/5 px-3 py-1.5 rounded-full transition-all border border-transparent hover:border-white/10"
                        >
                            {area}
                        </Link>
                    ))}
                </div>
                <div className="mt-12 pt-8 border-t border-white/5">
                    <p className="text-gray-500 text-sm">Don't see your location? Call us at <a href={`tel:${contactInfo.phone.replace(/[^0-9+]/g, '')}`} className="text-primary hover:underline font-bold">{contactInfo.phone}</a> to confirm service availability.</p>
                </div>
            </div>
        </section>
    );
}
