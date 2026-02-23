export default function Process() {
    const steps = [
        { title: 'Collection', desc: 'Schedule a pickup and our team collects e-waste from your location.' },
        { title: 'Segregation', desc: 'Waste is sorted based on material type and hazardous components.' },
        { title: 'Dismantling', desc: 'Manual and automated dismantling of complex electronic devices.' },
        { title: 'Recycling', desc: 'Materials are processed for reuse in manufacturing new products.' },
    ];

    return (
        <section className="py-20 px-4 md:px-8 bg-white">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#064E3B]">Working Process</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Our systematic approach ensures efficiency and environmental safety.
                    </p>
                </div>

                <div className="grid md:grid-cols-4 gap-8 relative">
                    {/* Connecting line for desktop */}
                    <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gray-100 -z-10 bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>

                    {steps.map((step, index) => (
                        <div key={index} className="flex flex-col items-center text-center relative">
                            <div className="w-24 h-24 bg-white border-4 border-green-50 rounded-full flex items-center justify-center mb-6 shadow-sm z-10 text-2xl font-bold text-primary">
                                {index + 1}
                            </div>
                            <h3 className="text-xl font-bold text-[#064E3B] mb-3">{step.title}</h3>
                            <p className="text-gray-600 text-sm">{step.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
