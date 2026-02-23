import { Truck, Recycle, Smartphone, ShieldCheck, Battery, Zap, Building2, HeartHandshake } from 'lucide-react';

const services = [
    {
        title: 'E-waste Collection',
        description: 'Scheduled door-step pickup of electronic waste from corporate offices and residential complexes.',
        icon: Truck,
    },
    {
        title: 'E-waste Recycling',
        description: 'Environmentally friendly recycling process ensuring zero landfill and maximum material recovery.',
        icon: Recycle,
    },
    {
        title: 'Data Sanitization',
        description: 'Secure data destruction and wiping services to protect your sensitive information.',
        icon: ShieldCheck,
    },
    {
        title: 'IT Asset Disposal',
        description: 'Safe and compliant disposal of obsolete IT assets including servers, laptops, and networking gear.',
        icon: Smartphone,
    },
    {
        title: 'Battery Recycling',
        description: 'Proper disposal of hazardous batteries (Li-ion, Lead-acid) to prevent soil and water contamination.',
        icon: Battery,
    },
    {
        title: 'Hazardous Waste Mgmt',
        description: 'Safe handling and processing of toxic components found in electronic devices.',
        icon: Zap,
    },
    {
        title: 'Office Decommissioning',
        description: 'Comprehensive dismantling and removal of IT infrastructure during office relocations.',
        icon: Building2,
    },
    {
        title: 'CSR Partnerships',
        description: 'Collaborate with businesses to fulfill Corporate Social Responsibility goals through e-waste drives.',
        icon: HeartHandshake,
    },
];

export default function Services() {
    return (
        <section id="services" className="py-24 px-4 md:px-8 bg-white">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-16 space-y-4">
                    <span className="text-primary font-bold uppercase tracking-wider text-sm">What We Do</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 relative inline-block pb-2">
                        Our Services
                        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-20 h-1 bg-primary rounded-full"></span>
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg pt-4">
                        Comprehensive e-waste management solutions tailored for businesses and individuals, ensuring compliance and sustainability.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => (
                        <div key={index} className="bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:border-primary/30 hover:shadow-lg hover:shadow-green-100/50 transition-all group flex flex-col items-start text-left h-full">
                            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-6 text-primary shadow-sm group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                <service.icon size={24} />
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">{service.title}</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
