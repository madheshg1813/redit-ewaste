import { Truck, Lock, Leaf, IndianRupee, Building, GraduationCap, Banknote, Building2 } from 'lucide-react';

const reasons = [
    { title: 'Free Pickup', desc: 'Doorstep collection for all orders', icon: Truck },
    { title: '100% Security', desc: 'Guaranteed data destruction', icon: Lock },
    { title: 'Green Certificate', desc: 'TNPCB approved recycling', icon: Leaf },
    { title: 'Best Value', desc: 'Highest market rates assured', icon: IndianRupee },
];

const industries = [
    { title: 'IT Companies', icon: Building2 },
    { title: 'Educational Inst.', icon: GraduationCap },
    { title: 'Banking & Finance', icon: Banknote },
    { title: 'Manufacturing Units', icon: Building },
    { title: 'Government Depts', icon: Leaf }, // Placeholder icon
    { title: 'Telecom Sector', icon: Lock } // Placeholder icon
];

export default function WhyChooseUs() {
    return (
        <section className="py-24 px-4 md:px-8 bg-white">
            <div className="max-w-7xl mx-auto">

                {/* Why Choose Us Header */}
                <div className="text-center mb-16">
                    <span className="text-primary font-bold uppercase tracking-wider text-sm bg-green-50 px-3 py-1 rounded-full">Our Promise</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4">Why Choose Redit E-Waste?</h2>
                </div>

                {/* 4 Cards */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
                    {reasons.map((reason, i) => (
                        <div key={i} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-lg hover:border-green-100 transition-all text-center group">
                            <div className="w-14 h-14 bg-bg-light rounded-full mx-auto mb-4 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                <reason.icon size={24} />
                            </div>
                            <h3 className="font-bold text-lg text-gray-900 mb-1">{reason.title}</h3>
                            <p className="text-sm text-gray-500">{reason.desc}</p>
                        </div>
                    ))}
                </div>

                {/* Industries We Serve */}
                <div className="grid md:grid-cols-2 gap-12 items-center bg-gray-50 rounded-3xl p-8 md:p-12 border border-gray-100">
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-3xl font-bold text-gray-900 mb-4">Industries We Serve</h3>
                            <p className="text-gray-600 leading-relaxed">
                                We provide customized e-waste management solutions for various sectors, ensuring compliance with industry-specific regulations and data security standards.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            {industries.map((ind, i) => (
                                <div key={i} className="flex items-center gap-3 text-gray-800 font-medium">
                                    <div className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center text-primary border border-gray-100">
                                        <ind.icon size={16} />
                                    </div>
                                    <span>{ind.title}</span>
                                </div>
                            ))}
                        </div>

                        <button className="text-primary font-bold hover:text-green-700 hover:underline flex items-center gap-1 group">
                            View Industry Solutions
                            <span className="group-hover:translate-x-1 transition-transform">→</span>
                        </button>
                    </div>

                    <div className="hidden md:block relative h-full min-h-[300px] overflow-hidden rounded-2xl">
                        {/* Placeholder for industry image - using a generic office/tech one */}
                        <img
                            src="/office-image.jpg"
                            alt="Corporate Office Building"
                            className="absolute inset-0 w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                        />
                    </div>
                </div>

            </div>
        </section>
    );
}
