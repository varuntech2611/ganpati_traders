import React from 'react';
import { 
  ShieldCheck, 
  MapPin, 
  Phone, 
  Mail, 
  MessageSquare, 
  ArrowUp, 
  Building2 
} from 'lucide-react';
import { BUSINESS_INFO, CATEGORIES } from '../data/products';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 text-xs sm:text-sm border-t border-slate-800">
      
      {/* Top Banner with Quick Highlights */}
      <div className="border-b border-slate-900 py-8 bg-slate-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-6 h-6 text-emerald-400 shrink-0" />
            <div>
              <div className="font-bold text-white text-xs">GST Registered Entity</div>
              <div className="text-[11px] text-slate-400">GSTIN: {BUSINESS_INFO.gstin}</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <MapPin className="w-6 h-6 text-amber-400 shrink-0" />
            <div>
              <div className="font-bold text-white text-xs">Origin & Godown</div>
              <div className="text-[11px] text-slate-400">Barahsaini Street, Aligarh (UP)</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Phone className="w-6 h-6 text-blue-400 shrink-0" />
            <div>
              <div className="font-bold text-white text-xs">Commercial Desk</div>
              <div className="text-[11px] text-slate-400">{BUSINESS_INFO.phone}</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <MessageSquare className="w-6 h-6 text-emerald-400 shrink-0" />
            <div>
              <div className="font-bold text-white text-xs">WhatsApp Rate Inquiry</div>
              <div className="text-[11px] text-slate-400">Fast 15-Minute Response</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Col 1: Brand & Profile (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-slate-900 to-amber-700 flex items-center justify-center text-amber-400 border border-amber-500/30">
                <Building2 className="w-5 h-5 stroke-[2.2]" />
              </div>
              <div>
                <span className="font-extrabold text-xl text-white tracking-tight">
                  GANPATI <span className="text-amber-500">TRADERS</span>
                </span>
                <span className="ml-2 bg-amber-500/20 text-amber-400 text-[10px] font-bold px-1.5 py-0.5 rounded border border-amber-500/30">
                  U.P
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Wholesale trading establishment supplying slaughterhouse & food plant hygiene gear, industrial dangri boiler suits, waterproof gumboots, cattle ear tags with applicators & cutters, and genuine Meena brand knives to enterprises across India.
            </p>

            <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 text-xs space-y-1">
              <div className="text-slate-300 font-semibold">{BUSINESS_INFO.legalName}</div>
              <div className="text-slate-400">{BUSINESS_INFO.address}, PIN: {BUSINESS_INFO.pincode}</div>
              <div className="text-emerald-400 font-mono font-bold">GSTIN: {BUSINESS_INFO.gstin} (State Code 09)</div>
            </div>
          </div>

          {/* Col 2: Product Categories (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-white font-bold text-sm tracking-wide uppercase">
              Core Product Lines
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#catalog" className="hover:text-amber-400 transition-colors">
                  Waterproof PVC & Ragjean Aprons
                </a>
              </li>
              <li>
                <a href="#catalog" className="hover:text-amber-400 transition-colors">
                  Disposable Coats, Masks & Caps
                </a>
              </li>
              <li>
                <a href="#catalog" className="hover:text-amber-400 transition-colors">
                  Industrial Dangri (Boiler Suits)
                </a>
              </li>
              <li>
                <a href="#catalog" className="hover:text-amber-400 transition-colors">
                  Waterproof Gumboots & PVC Shoes
                </a>
              </li>
              <li>
                <a href="#catalog" className="hover:text-amber-400 transition-colors">
                  Cattle Ear Tags, Applicators & Cutters
                </a>
              </li>
              <li>
                <a href="#catalog" className="hover:text-amber-400 transition-colors">
                  Meena Brand Butcher Knives
                </a>
              </li>
              <li>
                <a href="#catalog" className="hover:text-amber-400 transition-colors">
                  Woolen Cold Storage Coats & Caps
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Quick Links & Contact (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-white font-bold text-sm tracking-wide uppercase">
              Registered Office
            </h4>
            <ul className="space-y-2 text-xs">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>13/48, Barahsaini Street, Aligarh, UP – 202001</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a href={`tel:${BUSINESS_INFO.phone}`} className="hover:text-white transition-colors">
                  {BUSINESS_INFO.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <a href={`mailto:${BUSINESS_INFO.email}`} className="hover:text-white transition-colors truncate">
                  {BUSINESS_INFO.email}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-emerald-400 shrink-0" />
                <a 
                  href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-emerald-400 hover:underline"
                >
                  WhatsApp Ordering Desk
                </a>
              </li>
            </ul>

            <div className="pt-2">
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 text-xs transition-colors border border-slate-800"
              >
                <ArrowUp className="w-3.5 h-3.5" />
                <span>Back to top</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="mt-12 pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} <span className="text-slate-300 font-semibold">{BUSINESS_INFO.legalName}</span>. All rights reserved.
          </div>
          <div className="flex items-center gap-4 text-[11px]">
            <span>State: Uttar Pradesh (Code 09)</span>
            <span>•</span>
            <span>Official B2B Wholesaler</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
