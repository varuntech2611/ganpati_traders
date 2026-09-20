import React, { useState, useEffect } from 'react';
import { 
  ShieldCheck, 
  PhoneCall, 
  MessageSquare, 
  ShoppingCart, 
  Menu, 
  X, 
  Lock, 
  Building2, 
  MapPin, 
  FileText 
} from 'lucide-react';
import { BUSINESS_INFO } from '../data/products';

export default function Navbar({ quoteCount, onOpenQuote }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Products Catalog', href: '#catalog' },
    { name: 'About Us', href: '#about' },
    { name: 'Why Choose Us', href: '#why-us' },
    { name: 'GST & Credentials', href: '#credentials' },
    { name: 'Contact & Godown', href: '#contact' },
  ];

  return (
    <>
      {/* Top Utility Bar */}
      <div className="bg-slate-900 text-slate-300 text-xs py-2 px-4 border-b border-slate-800 transition-colors">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-4 flex-wrap">
            <span className="flex items-center gap-1.5 text-amber-400 font-medium">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>GSTIN: <span className="text-white font-mono font-semibold tracking-wide">{BUSINESS_INFO.gstin}</span></span>
            </span>
            <span className="hidden sm:inline-block text-slate-500">|</span>
            <span className="flex items-center gap-1 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-amber-400" />
              <span>{BUSINESS_INFO.address}, Aligarh (202001)</span>
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="hidden md:flex items-center gap-1.5 text-slate-300">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>Mon - Sat: 9:30 AM – 8:00 PM</span>
            </span>
            <a 
              href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent('Hello Ganpati Traders, I want to inquire about wholesale rates.')}`}
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-emerald-400 hover:text-emerald-300 transition-colors font-medium"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-slate-200/80 py-3' 
          : 'bg-white border-b border-slate-100 py-4'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo & Brand Identity */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-slate-900 via-slate-800 to-amber-700 flex items-center justify-center text-amber-400 shadow-md shadow-amber-900/10 group-hover:scale-105 transition-transform">
              <Building2 className="w-6 h-6 stroke-[2.2]" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-xl sm:text-2xl text-slate-900 tracking-tight leading-none group-hover:text-blue-900 transition-colors">
                  GANPATI <span className="text-amber-600">TRADERS</span>
                </span>
                <span className="bg-amber-100 text-amber-900 text-[10px] font-bold px-1.5 py-0.5 rounded border border-amber-200 tracking-wide">
                  U.P
                </span>
              </div>
              <p className="text-[11px] text-slate-500 font-medium tracking-wide uppercase mt-0.5">
                Aligarh • Slaughterhouse Supplies & Uniforms
              </p>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-semibold text-slate-700 hover:text-amber-600 transition-colors py-1"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="flex items-center gap-3">
            {/* Quote Inquiry Cart Button */}
            <button
              onClick={onOpenQuote}
              aria-label="View Inquiry Cart"
              className="relative p-2.5 rounded-xl border border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-800 transition-all hover:scale-105 shadow-sm"
            >
              <ShoppingCart className="w-5 h-5 text-slate-700" />
              {quoteCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-amber-500 text-slate-950 font-extrabold text-xs w-5 h-5 rounded-full flex items-center justify-center shadow-md animate-bounce">
                  {quoteCount}
                </span>
              )}
            </button>

            {/* Direct Call / Contact CTA */}
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="hidden sm:inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white text-xs sm:text-sm font-semibold px-4 py-2.5 rounded-xl shadow-sm hover:shadow transition-all"
            >
              <PhoneCall className="w-4 h-4 text-amber-400" />
              <span>Call Now</span>
            </a>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top duration-200">
            <div className="space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-2.5 rounded-lg text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-amber-600"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="mt-4 pt-4 border-t border-slate-100 grid grid-cols-2 gap-2">
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="flex items-center justify-center gap-2 bg-slate-900 text-white font-medium text-sm py-2.5 rounded-xl shadow"
              >
                <PhoneCall className="w-4 h-4 text-amber-400" />
                <span>Call Business</span>
              </a>
              <a
                href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent('Hello Ganpati Traders, I am looking for a wholesale price quote.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-emerald-600 text-white font-medium text-sm py-2.5 rounded-xl shadow"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
            </div>

            <div className="mt-4 p-3 bg-slate-50 rounded-xl border border-slate-100 text-xs text-slate-600">
              <p className="font-semibold text-slate-800">GANPATI TRADERS (U.P)</p>
              <p className="mt-0.5">{BUSINESS_INFO.address}, Aligarh</p>
              <p className="mt-1 font-mono text-emerald-700 font-medium">GSTIN: {BUSINESS_INFO.gstin}</p>
            </div>
          </div>
        )}
      </header>
    </>
  );
}

