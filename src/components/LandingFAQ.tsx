'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
    {
        question: 'How do I schedule a free e-waste pickup?',
        answer: 'Simply click the "Schedule Free Pickup" button or call/WhatsApp us directly. Provide your location and details about the e-waste quantity, and our team will arrange a convenient time for collection.'
    },
    {
        question: 'Is there a minimum quantity for pickup?',
        answer: 'For free doorstep pickup, we generally require a minimum quantity (e.g., 50kg or multiple large appliances). For smaller quantities, drop-off options or paid collection might be available.'
    },
    {
        question: 'Do you provide a Data Destruction Certificate?',
        answer: 'Yes, we provide a government-compliant Data Destruction Certificate and Green Recycling Certificate for all corporate and bulk pickups, ensuring your compliance with e-waste regulations.'
    },
    {
        question: 'What types of electronic waste do you accept?',
        answer: 'We accept almost all electronic items including computers, laptops, servers, printers, mobile phones, batteries, cables, UPS units, and household appliances like ACs and fridges.'
    },
];

export default function LandingFAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-20 px-4 md:px-8 bg-bg-light">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Frequently Asked Questions</h2>
                    <p className="text-gray-600 mt-4">Common questions about our e-waste recycling process.</p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="bg-white rounded-xl border border-gray-100 overflow-hidden shadow-sm transition-all hover:shadow-md">
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full px-6 py-4 flex items-center justify-between text-left focus:outline-none"
                            >
                                <span className="font-semibold text-gray-900 text-lg pr-4">{faq.question}</span>
                                {openIndex === index ? (
                                    <ChevronUp className="text-primary flex-shrink-0" />
                                ) : (
                                    <ChevronDown className="text-gray-400 flex-shrink-0" />
                                )}
                            </button>

                            <div
                                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-48 opacity-100 pb-6' : 'max-h-0 opacity-0'
                                    }`}
                            >
                                <p className="text-gray-600 leading-relaxed text-sm md:text-base border-t border-gray-50 pt-4">
                                    {faq.answer}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
