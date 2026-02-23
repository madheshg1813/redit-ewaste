import { Truck, Users, ShieldCheck, Recycle } from 'lucide-react';

const stats = [
    { label: 'KG Collected', value: '50,000+', icon: Recycle },
    { label: 'Corporate Clients', value: '200+', icon: Users },
    { label: 'Data Security', value: '100%', icon: ShieldCheck },
    { label: 'Landfill Waste', value: '0%', icon: Truck },
];

export default function Statistics() {
    return (
        <section className="bg-primary py-16 px-4 md:px-8 text-white">
            <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/20">
                {stats.map((stat, index) => (
                    <div key={index} className="flex flex-col items-center text-center space-y-2 px-4">
                        <stat.icon size={40} className="opacity-90 mb-2 text-secondary" />
                        <span className="text-4xl md:text-5xl font-bold tracking-tight">{stat.value}</span>
                        <span className="text-sm md:text-base opacity-90 font-medium uppercase tracking-wide">{stat.label}</span>
                    </div>
                ))}
            </div>
        </section>
    );
}
