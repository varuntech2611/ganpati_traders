import React from 'react';
import { 
  BadgePercent, 
  ShieldCheck, 
  Truck, 
  PackageCheck, 
  Headphones, 
  Layers, 
  ArrowUpRight 
} from 'lucide-react';
import { BUSINESS_INFO } from '../data/products';

export default function WhyUsSection() {
  const reasons = [
    {
      icon: <BadgePercent className="w-6 h-6 text-amber-500" />,
      title: "Direct Wholesale Margins",
      description: "Direct-from-source wholesale prices allowing retail store owners, distributors, and contractors to maximize their commercial profit margins."
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-emerald-500" />,
      title: "100% Verified GST Billing",
      description: `Official GST tax invoices with registered GSTIN: ${BUSINESS_INFO.gstin} and precise HSN codes, enabling smooth Input Tax Credit (ITC) claiming.`
    },
    {
      icon: <Truck className="w-6 h-6 text-blue-500" />,
      title: "Pan-India Freight Logistics",
      description: "Daily booking through verified transport agencies across UP, Delhi NCR, Rajasthan, Bihar, Maharashtra, Gujarat, and South India."
    },
    {
      icon: <PackageCheck className="w-6 h-6 text-purple-500" />,
      title: "Strict Hygiene & Material Quality",
      description: "Heavy waterproof PVC aprons resistant to animal fats and blood, durable cotton drill dangri suits, and original stamped Meena brand butcher knives."
    },
    {
      icon: <Layers className="w-6 h-6 text-rose-500" />,
      title: "Custom Lots & Master Cartons",
      description: "Flexible MOQs whether ordering 50 pairs of gumboots, 1,000 disposable mob caps, 500 cattle ear tags, or dozen packs of workwear."
    },
    {
      icon: <Headphones className="w-6 h-6 text-indigo-500" />,
      title: "Instant WhatsApp Quotations",
      description: "Skip lengthy quotation delays. Message our sales desk on WhatsApp for live price quotes, freight estimates, and order tracking."
    }
  ];

  return (
    <section id="why-us" className="py-20 bg-slate-100/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-extrabold uppercase tracking-widest text-amber-600 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
            The B2B Advantage
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mt-3">
            Why Hundreds of Dealers Choose Ganpati Traders
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-3">
            We understand the stringent requirements of slaughterhouses, meat processing plants, dairy farms, and cold storage facilities.
          </p>
        </div>

        {/* 6-Grid Feature Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {reasons.map((item, index) => (
            <div
              key={index}
              className="bg-white p-7 rounded-3xl border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 group hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform shadow-2xs">
                {item.icon}
              </div>
              <h3 className="text-lg font-bold text-slate-900 group-hover:text-amber-600 transition-colors">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-2.5 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Wholesale Call to Action Banner */}
        <div className="mt-14 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 text-white rounded-3xl p-8 sm:p-10 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-black">
              Ready to procure wholesale abattoir supplies, workwear or Meena knives?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
              Connect with our Aligarh trade desk today for current catalog pricing, sample cartons, and bulk transport dispatch schedules.
            </p>
          </div>
          <a
            href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent('Hello Ganpati Traders, I am a retailer/contractor interested in stocking your products. Please send catalog & prices.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-extrabold px-6 py-3.5 rounded-xl shadow-lg shadow-amber-500/20 hover:scale-105 transition-all text-xs sm:text-sm"
          >
            <span>Request Wholesale Rate Card</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}

