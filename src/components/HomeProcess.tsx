import Link from 'next/link';

export default function HomeProcess() {
    const steps = [
        { title: 'Collection', desc: 'Schedule a pickup and our team collects e-waste from your location.' },
        { title: 'Segregation', desc: 'Waste is sorted based on material type and hazardous components.' },
        { title: 'Dismantling', desc: 'Manual and automated dismantling of complex electronic devices.' },
        { title: 'Recycling', desc: 'Materials are processed for reuse in manufacturing new products.' },
    ];

    return (
        <section className="py-24 px-4 md:px-8 bg-gray-50">
            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

                {/* Left: Content */}
                <div className="space-y-8">
                    <span className="text-secondary tracking-widest uppercase font-bold text-sm bg-primary px-3 py-1 rounded-full text-white w-fit">How It Works</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                        Simple 4-Step <br />
                        <span className="text-primary">E-Waste Disposal</span> Process
                    </h2>
                    <p className="text-gray-600 text-lg leading-relaxed max-w-xl">
                        Our systematic approach ensures authorized, secure, and environmentally friendly disposal of your electronic waste. From collection to final recycling, we handle everything with 100% transparency.
                    </p>

                    <ul className="space-y-4 pt-4">
                        {['Doorstep Collection', 'Data Destruction Certificate', 'Green Recycling Certificate'].map((item, i) => (
                            <li key={i} className="flex items-center gap-3 text-gray-700 font-medium">
                                <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-primary">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                                </div>
                                {item}
                            </li>
                        ))}
                    </ul>

                    <Link href="/contact" className="bg-primary text-white px-8 py-4 rounded-lg font-bold hover:bg-green-700 transition-all shadow-lg shadow-green-200/50 mt-8 inline-block">
                        Start Recycling Now
                    </Link>
                </div>

                {/* Right: 2x2 Grid */}
                <div className="grid sm:grid-cols-2 gap-6 relative">
                    {/* Decorative line/blob */}
                    <div className="absolute inset-0 bg-primary/5 rounded-3xl -z-10 rotate-3 scale-105"></div>

                    {steps.map((step, index) => (
                        <div key={index} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
                            <span className="absolute top-4 right-4 text-6xl font-black text-gray-100 group-hover:text-green-50 transition-colors select-none -z-0">
                                0{index + 1}
                            </span>
                            <div className="relative z-10">
                                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">{step.title}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
                            </div>
                            <div className="absolute bottom-0 left-0 w-full h-1 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
