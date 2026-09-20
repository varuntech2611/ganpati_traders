import React from 'react';
import { 
  ShieldCheck, 
  ArrowRight, 
  PhoneCall, 
  Truck, 
  Award, 
  Package, 
  CheckCircle2, 
  MapPin, 
  Clock, 
  MessageSquare,
  Sparkles
} from 'lucide-react';
import { BUSINESS_INFO } from '../data/products';

export default function Hero({ onExploreClick, onOpenQuote }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white pt-12 pb-20 sm:pt-16 sm:pb-28">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"></div>
      
      {/* Glow effects */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Hero Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Verified Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800/90 border border-amber-500/30 text-amber-300 text-xs sm:text-sm font-semibold backdrop-blur-sm shadow-inner">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Government Registered B2B Trading House • Aligarh</span>
              <span className="hidden sm:inline-block px-1.5 py-0.2 text-[10px] uppercase font-bold bg-amber-500/20 text-amber-300 rounded border border-amber-500/40">
                GST: {BUSINESS_INFO.gstin}
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.15] text-white">
              Slaughterhouse Supplies, <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-500">
                Uniforms, Gumboots
              </span> <br />
              & Meena Brand Knives (Knifes)
            </h1>

            {/* Sub-headline */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Trusted wholesale supplier for abattoirs, meat processing plants, cold storages, and livestock farms. Supplying heavy <strong className="text-white">PVC & Ragjean aprons, complete disposables (masks, caps, coats, shoe covers), industrial dangri coveralls, gumboots, cattle ear tags with applicators & cutters, and authentic Meena knives (knifes)</strong> with verified GST billing.
            </p>

            {/* Quick Feature Checklist */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 max-w-xl mx-auto lg:mx-0 text-left">
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Abattoir & Plant Hygiene</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Pan-India Transport</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-300 col-span-2 sm:col-span-1">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Wholesale Master Lots</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <a
                href="#catalog"
                onClick={onExploreClick}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-bold px-7 py-3.5 rounded-xl shadow-lg shadow-amber-500/20 hover:shadow-amber-500/30 transition-all hover:-translate-y-0.5"
              >
                <span>Browse Products & Rates</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(
                  `Hello Ganpati Traders, I am interested in wholesale rates for slaughterhouse uniforms, aprons, gumboots, cattle tags, and Meena knives. Please share your catalog.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-slate-800/80 hover:bg-slate-700/90 text-white font-semibold px-6 py-3.5 rounded-xl border border-slate-700 hover:border-slate-600 transition-all"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp Rate Inquiry</span>
              </a>
            </div>

            {/* Address Tagline */}
            <div className="pt-2 flex items-center justify-center lg:justify-start gap-2 text-xs text-slate-400">
              <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span>Registered Office: 13/48, Barahsaini Street, Aligarh (UP – 202001)</span>
            </div>
          </div>

          {/* Business Credential & Product Highlights Card */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md bg-gradient-to-b from-slate-800/90 to-slate-900/95 border border-slate-700/80 rounded-2xl p-6 sm:p-7 shadow-2xl backdrop-blur-xl">
              
              {/* Card Header */}
              <div className="flex items-center justify-between border-b border-slate-700/60 pb-4 mb-5">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-widest text-amber-400">Commercial Trading House</span>
                  <h3 className="text-xl font-bold text-white tracking-tight">{BUSINESS_INFO.legalName}</h3>
                </div>
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 font-extrabold text-lg">
                  GT
                </div>
              </div>

              {/* Business Identification Details */}
              <div className="space-y-3.5 text-sm">
                <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800 flex items-start justify-between gap-3">
                  <div>
                    <span className="text-slate-400 text-xs block">Goods & Services Tax Identification</span>
                    <span className="font-mono text-emerald-400 font-bold text-base tracking-wider">{BUSINESS_INFO.gstin}</span>
                  </div>
                  <span className="inline-flex items-center gap-1 text-[11px] text-emerald-400 font-semibold bg-emerald-950/80 border border-emerald-800 px-2 py-0.5 rounded-md">
                    <ShieldCheck className="w-3 h-3" /> Active
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2.5 text-xs">
                  <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800">
                    <span className="text-slate-400 block mb-0.5">Origin & Dispatch</span>
                    <span className="text-white font-semibold">Aligarh (Code 09, UP)</span>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800">
                    <span className="text-slate-400 block mb-0.5">Commercial Pincode</span>
                    <span className="text-white font-semibold">{BUSINESS_INFO.pincode}</span>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800">
                  <span className="text-slate-400 text-xs block mb-1.5 font-medium">Core Trading Product Lines</span>
                  <div className="flex flex-wrap gap-1.5">
                    <span className="text-[11px] bg-slate-800 text-amber-300 font-medium px-2 py-0.5 rounded border border-amber-500/20">PVC & Ragjean Aprons</span>
                    <span className="text-[11px] bg-slate-800 text-slate-200 px-2 py-0.5 rounded">Disposable Coats & Masks</span>
                    <span className="text-[11px] bg-slate-800 text-slate-200 px-2 py-0.5 rounded">Bouffant Caps & Shoe Covers</span>
                    <span className="text-[11px] bg-slate-800 text-emerald-300 font-medium px-2 py-0.5 rounded border border-emerald-500/20">Industrial Dangri & Uniforms</span>
                    <span className="text-[11px] bg-slate-800 text-slate-200 px-2 py-0.5 rounded">Gumboots & PVC Shoes</span>
                    <span className="text-[11px] bg-slate-800 text-amber-300 font-medium px-2 py-0.5 rounded border border-amber-500/20">Cattle Ear Tags & Applicators</span>
                    <span className="text-[11px] bg-slate-800 text-amber-400 font-bold px-2 py-0.5 rounded border border-amber-400/30">Meena Brand Knives (Knifes)</span>
                    <span className="text-[11px] bg-slate-800 text-slate-200 px-2 py-0.5 rounded">Woolen Cold Storage Wear</span>
                  </div>
                </div>
              </div>

              {/* Quick Call Out */}
              <div className="mt-5 pt-4 border-t border-slate-700/60 flex items-center justify-between text-xs text-slate-300">
                <span className="flex items-center gap-1.5">
                  <Truck className="w-4 h-4 text-amber-400" />
                  Interstate Freight & Bins
                </span>
                <span className="text-emerald-400 font-semibold">Bulk Master Cartons</span>
              </div>
            </div>
          </div>

        </div>

        {/* Feature Highlights Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 pt-12 border-t border-slate-800/80">
          <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-900/40 border border-slate-800/60">
            <div className="p-2.5 rounded-lg bg-amber-500/10 text-amber-400 shrink-0">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Abattoir Specialists</h4>
              <p className="text-xs text-slate-400 mt-0.5">Blood, chemical & grease proof hygiene gear</p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-900/40 border border-slate-800/60">
            <div className="p-2.5 rounded-lg bg-emerald-500/10 text-emerald-400 shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Full GST Compliance</h4>
              <p className="text-xs text-slate-400 mt-0.5">Official B2B invoices with complete ITC credit</p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-900/40 border border-slate-800/60">
            <div className="p-2.5 rounded-lg bg-blue-500/10 text-blue-400 shrink-0">
              <Truck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Nationwide Freight</h4>
              <p className="text-xs text-slate-400 mt-0.5">Daily transport to processing plants in India</p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-900/40 border border-slate-800/60">
            <div className="p-2.5 rounded-lg bg-purple-500/10 text-purple-400 shrink-0">
              <Package className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Original Meena Brand</h4>
              <p className="text-xs text-slate-400 mt-0.5">Hallmarked butcher & skinning knives (knifes)</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
