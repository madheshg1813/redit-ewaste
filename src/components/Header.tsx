'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, Phone, Mail, Award, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { serviceAreas, contactInfo } from '@/lib/constants';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <header className="w-full bg-white z-50 relative">
      {/* Top Bar - Dark Emerald Green */}
      <div className="bg-[#064E3B] text-white py-2 px-4 md:px-8 text-xs md:text-sm flex flex-col md:flex-row justify-between items-center gap-2 relative z-[60]">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1 opacity-90">
            <Phone size={14} className="text-secondary" />
            <span>{contactInfo.phone}</span>
          </div>
          <div className="flex items-center gap-1 opacity-90">
            <Mail size={14} className="text-secondary" />
            <span>{contactInfo.email}</span>
          </div>
        </div>
        <div className="flex items-center gap-2 opacity-90">
          <Award size={14} className="text-secondary" />
          <span>TNPCB Certified Company</span>
        </div>
      </div>

      {/* Navbar */}
      <div className="h-20 px-4 md:px-8 flex items-center justify-between max-w-7xl mx-auto w-full sticky top-0 bg-white z-50 shadow-sm">
        {/* Logo Area */}
        <div className="font-bold text-2xl flex items-center gap-2 text-text-title tracking-tight z-50 relative">
          <Link href="/" onClick={() => setIsMenuOpen(false)}>Redit E-Waste</Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-text-title h-full">
          <Link href="/" className="hover:text-primary transition-colors h-full flex items-center">Home</Link>

          {/* Services Nested Menu */}
          <div className="relative group/main h-full flex items-center">
            <Link href="#services" className="flex items-center gap-1 hover:text-primary transition-colors py-2 focus:outline-none">
              Services
              <ChevronDown size={14} className="group-hover/main:rotate-180 transition-transform duration-200" />
            </Link>

            {/* Level 1 Dropdown */}
            <div className="absolute top-full left-0 w-72 bg-white shadow-xl rounded-2xl border border-gray-100 p-2 opacity-0 invisible group-hover/main:opacity-100 group-hover/main:visible transition-all duration-200 -mt-2 group-hover/main:mt-0 z-50 translate-y-2 group-hover/main:translate-y-0">

              {/* Scrapping Item */}
              <div className="group/item relative">
                <Link href="#scrapping" className="flex items-center justify-between p-3 rounded-xl hover:bg-green-50 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-red-50 rounded-lg text-red-600">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 6h18" /><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" /><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" /></svg>
                    </div>
                    <div>
                      <span className="block font-semibold text-gray-900 text-sm">E-Waste Scrapping</span>
                      <span className="block text-[10px] text-gray-500">Disposal services</span>
                    </div>
                  </div>
                  <ChevronDown size={14} className="-rotate-90 text-gray-400 group-hover/item:text-primary" />
                </Link>

                {/* Level 2 Flyout (Scrapping) */}
                <div className="absolute left-full top-0 ml-2 w-72 bg-white shadow-xl rounded-2xl border border-gray-100 p-4 opacity-0 invisible group-hover/item:opacity-100 group-hover/item:visible transition-all duration-200 translate-x-2 group-hover/item:translate-x-0">
                  <h4 className="font-bold text-gray-900 border-b border-gray-100 pb-3 mb-3 text-sm flex items-center gap-2 sticky top-0 bg-white z-10">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
                    Scrapping Service Areas
                  </h4>
                  <div className="flex flex-col gap-1 max-h-80 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-transparent">
                    {serviceAreas.map((area) => (
                      <Link
                        key={`scrap-${area}`}
                        href={`/chennai/e-waste-scrap-buyers-in-${area.toLowerCase().replace(/ /g, '-')}`}
                        className="text-gray-500 hover:text-red-600 hover:bg-red-50 px-3 py-2 rounded-md text-xs transition-colors text-left truncate flex-shrink-0"
                      >
                        {area}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* Recycling Item */}
              <div className="group/item relative mt-1">
                <Link href="#recycling" className="flex items-center justify-between p-3 rounded-xl hover:bg-green-50 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-green-50 rounded-lg text-primary">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 19H4.815a1.83 1.83 0 0 1-1.57-.881 1.785 1.785 0 0 1-.004-1.784L7.196 9.5" /><path d="M11 19h8.203a1.83 1.83 0 0 0 1.556-.89 1.784 1.784 0 0 0 0-1.775l-1.226-2.12" /><path d="m14 16-3 3 3 3" /><path d="M8.293 13.596 7.196 9.5 3.1 7" /><path d="m4.815 19.88 5.707-3.266" /><path d="M14 5h-4" /><path d="M10 5a2 2 0 0 0-2 2v.5" /><path d="M14 5a2 2 0 0 1 2 2v.5" /></svg>
                    </div>
                    <div>
                      <span className="block font-semibold text-gray-900 text-sm">E-Waste Recycling</span>
                      <span className="block text-[10px] text-gray-500">Recovery services</span>
                    </div>
                  </div>
                  <ChevronDown size={14} className="-rotate-90 text-gray-400 group-hover/item:text-primary" />
                </Link>

                {/* Level 2 Flyout (Recycling) */}
                <div className="absolute left-full top-0 ml-2 w-72 bg-white shadow-xl rounded-2xl border border-gray-100 p-4 opacity-0 invisible group-hover/item:opacity-100 group-hover/item:visible transition-all duration-200 translate-x-2 group-hover/item:translate-x-0">
                  <h4 className="font-bold text-gray-900 border-b border-gray-100 pb-3 mb-3 text-sm flex items-center gap-2 sticky top-0 bg-white z-10">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                    Recycling Service Areas
                  </h4>
                  <div className="flex flex-col gap-1 max-h-80 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-transparent">
                    {serviceAreas.map((area) => (
                      <Link
                        key={`recycle-${area}`}
                        href={`/chennai/e-waste-recycling-service-in-${area.toLowerCase().replace(/ /g, '-')}`}
                        className="text-gray-500 hover:text-primary hover:bg-green-50 px-3 py-2 rounded-md text-xs transition-colors text-left truncate flex-shrink-0"
                      >
                        {area}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Link href="/blog" className="hover:text-primary transition-colors h-full flex items-center">Blog</Link>
          <Link href="/contact" className="hover:text-primary transition-colors h-full flex items-center">Contact</Link>
        </nav>

        {/* CTA Button & Mobile Toggle */}
        <div className="flex items-center gap-4 z-50 relative">
          <Link href="/contact" className="bg-primary text-white px-5 py-2.5 rounded-lg font-medium text-sm hover:bg-primary-hover transition-colors hidden md:flex items-center gap-2 shadow-sm shadow-green-200">
            <Phone size={16} />
            Get Free Pickup
          </Link>
          <button
            className="md:hidden p-2 text-text-title"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <Menu size={24} />
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div className={`fixed inset-0 bg-white z-40 flex flex-col pt-32 px-6 md:hidden transition-all duration-300 transform ${isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0 pointer-events-none'} h-[100dvh] overflow-y-auto`}>
          <nav className="flex flex-col gap-6 text-lg font-medium text-text-title pb-10">
            <Link href="/" className="border-b border-gray-100 pb-4" onClick={() => setIsMenuOpen(false)}>Home</Link>

            <div className="flex flex-col border-b border-gray-100 pb-4">
              <button
                className="flex items-center justify-between w-full text-left"
                onClick={() => setIsServicesOpen(!isServicesOpen)}
              >
                Services
                <ChevronDown size={18} className={`transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>

              <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isServicesOpen ? 'max-h-[800px] opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
                <div className="flex flex-col gap-4 pl-2">
                  <Link href="#scrapping" className="text-gray-600 flex items-center gap-2" onClick={() => setIsMenuOpen(false)}>
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
                    E-Waste Scrapping
                  </Link>
                  <Link href="#recycling" className="text-gray-600 flex items-center gap-2" onClick={() => setIsMenuOpen(false)}>
                    <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                    E-Waste Recycling
                  </Link>

                  <div className="mt-2 bg-gray-50 rounded-xl p-4">
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Popular Locations</p>
                    <div className="grid grid-cols-2 gap-2">
                      {serviceAreas.slice(0, 8).map(area => (
                        <Link
                          key={`mobile-area-${area}`}
                          href={`/chennai/e-waste-recycling-service-in-${area.toLowerCase().replace(/ /g, '-')}`}
                          className="text-xs text-gray-500 truncate py-1"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {area}
                        </Link>
                      ))}
                    </div>
                    <Link href="/#service-areas" className="text-xs font-bold text-primary mt-3 block" onClick={() => setIsMenuOpen(false)}>
                      View All Locations →
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <Link href="/blog" className="border-b border-gray-100 pb-4" onClick={() => setIsMenuOpen(false)}>Blog</Link>
            <Link href="/contact" className="border-b border-gray-100 pb-4" onClick={() => setIsMenuOpen(false)}>Contact</Link>

            <div className="mt-auto">
              <Link href="/contact" className="bg-primary text-white w-full py-4 rounded-xl font-bold shadow-lg shadow-green-200/50 flex items-center justify-center gap-2 text-center" onClick={() => setIsMenuOpen(false)}>
                <Phone size={18} />
                Get Free Pickup
              </Link>
              <div className="mt-6 flex justify-center gap-6 text-gray-400 pb-8">
                {/* Social Icons Placeholder */}
              </div>
            </div>
          </nav>
        </div>

      </div>
    </header>
  );
}
