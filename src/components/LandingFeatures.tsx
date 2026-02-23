import { Award, Lock, Leaf, Banknote, Wallet, ShieldCheck } from 'lucide-react';

const features = [
    {
        title: 'TNPCB Certified',
        desc: 'Authorized recycling facility compliant with Tamil Nadu Pollution Control Board regulations.',
        icon: Award,
        color: 'text-primary'
    },

    {
        title: '100% Data Security',
        desc: 'Certified data destruction and sanitization to protect your sensitive information.',
        icon: Lock,
        color: 'text-primary'
    },
    {
        title: 'Eco-Friendly Disposal',
        desc: 'Zero landfill policy ensuring maximum material recovery and minimal environmental impact.',
        icon: Leaf,
        color: 'text-primary'
    },
    {
        title: 'Best Scrap Value',
        desc: 'Get the most competitive market rates for your old electronic assets and scrap.',
        icon: Banknote,
        color: 'text-primary'
    },
    {
        title: 'Instant Payment',
        desc: 'Immediate payment upon pickup or successful completion of material verification.',
        icon: Wallet,
        color: 'text-primary'
    }
];

export default function LandingFeatures() {
    return (
        <section className="py-20 px-4 md:px-8 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16 space-y-4">
                    <span className="text-primary font-bold uppercase tracking-wider text-sm">Why Choose Us</span>
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900">Certified & Trusted</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                        We adhere to the highest standards of environmental safety and data security.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="bg-bg-light p-8 rounded-2xl border border-green-50 hover:border-primary/30 transition-all hover:shadow-lg hover:shadow-green-100/50 group">
                            <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center mb-6 shadow-sm border border-gray-100 text-primary group-hover:scale-110 transition-transform">
                                <feature.icon size={28} />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                            <p className="text-gray-600 leading-relaxed text-sm">
                                {feature.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
