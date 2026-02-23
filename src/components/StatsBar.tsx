import { Recycle, Users, ShieldCheck, Leaf } from 'lucide-react';

const stats = [
    { label: 'KG E-Waste Collected', value: '50,000+', icon: Recycle },
    { label: 'Corporate Clients', value: '200+', icon: Users },
    { label: 'Data Security', value: '100%', icon: ShieldCheck },
    { label: 'Landfill Waste', value: '0%', icon: Leaf },
];

export default function StatsBar() {
    return (
        <section className="bg-[#064E3B] text-white py-12">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center md:text-left divide-y md:divide-y-0 md:divide-x divide-white/10">
                    {stats.map((stat, index) => (
                        <div key={index} className="px-4 py-2 flex flex-col items-center md:items-start space-y-2">
                            <div className="flex items-center gap-3 mb-1">
                                <stat.icon className="text-secondary opacity-80" size={24} />
                                <span className="text-3xl md:text-4xl font-extrabold text-white">{stat.value}</span>
                            </div>
                            <span className="text-sm md:text-base text-gray-300 font-medium uppercase tracking-wide">{stat.label}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
