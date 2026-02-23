import { MapPin, Phone, Mail, MessageSquare } from 'lucide-react';
import { contactInfo } from '@/lib/constants';

export default function ContactDetails() {
    return (
        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 h-full">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
                Whether you have a question about our services, pricing, or want to schedule a pickup, our team is ready to answer all your questions.
            </p>

            <div className="space-y-6">
                <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                        <MapPin size={24} />
                    </div>
                    <div>
                        <h4 className="font-bold text-gray-900 mb-1">Our Location</h4>
                        <a href={contactInfo.mapLink} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary transition-colors text-sm leading-relaxed max-w-xs block">
                            {contactInfo.address}
                        </a>
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                        <Phone size={24} />
                    </div>
                    <div>
                        <h4 className="font-bold text-gray-900 mb-1">Phone Number</h4>
                        <a href={`tel:${contactInfo.phone}`} className="text-gray-600 hover:text-primary transition-colors text-sm">
                            {contactInfo.phone}
                        </a>
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                        <Mail size={24} />
                    </div>
                    <div>
                        <h4 className="font-bold text-gray-900 mb-1">Email Address</h4>
                        <a href={`mailto:${contactInfo.email}`} className="text-gray-600 hover:text-primary transition-colors text-sm">
                            {contactInfo.email}
                        </a>
                    </div>
                </div>

                <div className="pt-6 mt-6 border-t border-gray-100">
                    <a
                        href={`https://wa.me/${contactInfo.phone.replace(/[^0-9]/g, '')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-3 w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-4 rounded-xl transition-all shadow-lg hover:shadow-green-200 transform hover:-translate-y-1"
                    >
                        <MessageSquare size={24} fill="white" />
                        Chat on WhatsApp
                    </a>
                </div>
            </div>
        </div>
    );
}
