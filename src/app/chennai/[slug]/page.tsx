import { notFound } from 'next/navigation';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import LandingHero from '@/components/LandingHero';
import LandingFeatures from '@/components/LandingFeatures';
import LandingServices from '@/components/LandingServices';
import LandingFAQ from '@/components/LandingFAQ';
import Process from '@/components/Process';
import { serviceAreas } from '@/lib/constants';

// Helper to parse slug
function parseSlug(slug: string) {
    console.log('Parsing slug:', slug); // DEBUG
    const recyclingPrefix = 'e-waste-recycling-service-in-';
    const scrappingPrefix = 'e-waste-scrap-buyers-in-';

    if (slug.startsWith(recyclingPrefix)) {
        const rawLocation = slug.replace(recyclingPrefix, '');
        // Convert "anna-nagar" -> "Anna Nagar"
        const location = rawLocation.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
        return { serviceType: 'recycling' as const, location };
    }

    if (slug.startsWith(scrappingPrefix)) {
        const rawLocation = slug.replace(scrappingPrefix, '');
        const location = rawLocation.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
        return { serviceType: 'scrapping' as const, location };
    }

    // Fallback for base pages
    if (slug === 'e-waste-recycling') return { serviceType: 'recycling' as const, location: 'Chennai' };
    if (slug === 'e-waste-scrap-buyers') return { serviceType: 'scrapping' as const, location: 'Chennai' };

    console.log('Slug matched nothing'); // DEBUG
    return null;
}
// ... (omitted generateStaticParams) ...
// ... (omitted generateMetadata) ...

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    console.log('Page received slug:', slug); // DEBUG
    const data = parseSlug(slug);

    if (!data) {
        console.log('Data not found for slug:', slug); // DEBUG
        notFound();
    }

    return (
        <main className="min-h-screen font-sans">
            <Header />
            <LandingHero serviceType={data.serviceType} location={data.location} />

            {/* Trust Features (6-card grid) */}
            <LandingFeatures />

            {/* Process Flow */}
            <Process />

            {/* Dark Services Section */}
            <LandingServices />

            {/* FAQ Section */}
            <LandingFAQ />

            <div className="bg-white py-12 px-4 md:px-8 border-t border-gray-100">
                <div className="max-w-7xl mx-auto">
                    <h3 className="text-xl font-bold text-gray-900 mb-6">Service Areas in Chennai</h3>
                    <div className="flex flex-wrap gap-3">
                        {serviceAreas.map((area) => (
                            <Link
                                key={area}
                                href={`/chennai/e-waste-recycling-service-in-${area.toLowerCase().replace(/ /g, '-')}`}
                                className="text-sm text-gray-600 hover:text-primary hover:underline"
                            >
                                {area}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
