import { ShieldCheck, HardDrive, Trash2, Smartphone } from 'lucide-react';

const services = [
    {
        title: 'Certified Data Sanitization',
        desc: 'Advanced software-based wiping of hard drives and SSDs, ensuring unrecoverable data removal (DoD Standard) without destroying the physical asset.',
        icon: ShieldCheck
    },
    {
        title: 'Physical Destruction',
        desc: 'Complete shredding and physical disintegration of hard drives, tapes, and other storage media for 100% security assurance.',
        icon: Trash2
    },
    {
        title: 'Hard Drive Degaussing',
        desc: 'Using powerful electromagnetic fields to demagnetize storage media, rendering data completely irretrievable instantly.',
        icon: HardDrive
    },
    {
        title: 'IT Asset Disposition',
        desc: 'Maximize value recovery through refurbishment and resale of remarketable IT assets while compliantly recycling the rest.',
        icon: Smartphone
    }
];

export default function LandingServices() {
    return (
        <section className="bg-[#064E3B] text-white py-24 px-4 md:px-8 relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    <div className="space-y-8">
                        <div>
                            <span className="text-secondary font-bold uppercase tracking-wider text-sm mb-2 block">Our Expertise</span>
                            <h2 className="text-4xl md:text-5xl font-bold leading-tight">Comprehensive<br />Data Security Services</h2>
                        </div>
                        <p className="text-gray-300 text-lg leading-relaxed max-w-xl">
                            We don't just recycle; we protect your business. Our specialized services ensure your sensitive data is eliminated securely before any material processing begins.
                        </p>
                        <div className="flex flex-wrap gap-4 pt-4">

                            <span className="bg-white/10 px-4 py-2 rounded-full text-sm font-medium border border-white/20">NAID Compliant</span>
                        </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                        {services.map((service, index) => (
                            <div key={index} className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors group">
                                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mb-4 text-secondary group-hover:scale-110 transition-transform">
                                    <service.icon size={24} />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    {service.desc}
                                </p>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}
