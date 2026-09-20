import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Copy, 
  Check, 
  FileCheck2, 
  Building, 
  MapPin, 
  Receipt, 
  Truck 
} from 'lucide-react';
import { BUSINESS_INFO } from '../data/products';

export default function GSTBadge() {
  const [copied, setCopied] = useState(false);

  const handleCopyGST = () => {
    navigator.clipboard.writeText(BUSINESS_INFO.gstin);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="credentials" className="py-14 bg-slate-900 text-white relative overflow-hidden border-y border-slate-800">
      {/* Background Accent */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 border border-slate-700/80 rounded-3xl p-6 sm:p-10 shadow-2xl">
          
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Verification Badge & Description */}
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-700 text-emerald-400 text-xs font-bold uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4" />
                <span>Verified Commercial Registration</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                100% Tax Compliant & GST Registered Enterprise
              </h2>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                We operate under stringent regulatory standards. All wholesale consignments from <strong className="text-white">GANPATI TRADERS (U.P)</strong> are issued with legitimate GST tax invoices, valid HSN classifications, and automated e-Way bills for smooth, hassle-free interstate transport.
              </p>

              {/* GSTIN Copy Pill */}
              <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center gap-3">
                <div className="flex items-center gap-3 bg-slate-800/90 border border-slate-700 px-4 py-3 rounded-2xl w-full sm:w-auto">
                  <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider">GSTIN:</span>
                  <span className="text-amber-400 font-mono font-bold text-lg tracking-wider select-all">
                    {BUSINESS_INFO.gstin}
                  </span>
                  <button
                    onClick={handleCopyGST}
                    aria-label="Copy GSTIN"
                    className="p-1.5 rounded-lg hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
                    title="Copy GSTIN"
                  >
                    {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {copied && (
                  <span className="text-xs text-emerald-400 font-medium animate-in fade-in duration-200">
                    Copied to clipboard!
                  </span>
                )}
              </div>
            </div>

            {/* Right Column: Key Compliance Highlights Grid */}
            <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              
              <div className="bg-slate-800/60 border border-slate-700/60 p-4 rounded-2xl">
                <div className="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center mb-2.5">
                  <Receipt className="w-4 h-4" />
                </div>
                <h3 className="font-bold text-sm text-white">Input Tax Credit (ITC)</h3>
                <p className="text-xs text-slate-400 mt-1">
                  Claim complete B2B ITC on all wholesale hardware & protective supplies.
                </p>
              </div>

              <div className="bg-slate-800/60 border border-slate-700/60 p-4 rounded-2xl">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-2.5">
                  <Truck className="w-4 h-4" />
                </div>
                <h3 className="font-bold text-sm text-white">e-Way Bill Ready</h3>
                <p className="text-xs text-slate-400 mt-1">
                  Compliant transit documentation for consignments exceeding ₹50,000.
                </p>
              </div>

              <div className="bg-slate-800/60 border border-slate-700/60 p-4 rounded-2xl">
                <div className="w-8 h-8 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center mb-2.5">
                  <Building className="w-4 h-4" />
                </div>
                <h3 className="font-bold text-sm text-white">State Code: {BUSINESS_INFO.stateCode}</h3>
                <p className="text-xs text-slate-400 mt-1">
                  Uttar Pradesh jurisdiction registered with central & state GST boards.
                </p>
              </div>

              <div className="bg-slate-800/60 border border-slate-700/60 p-4 rounded-2xl">
                <div className="w-8 h-8 rounded-lg bg-purple-500/10 text-purple-400 flex items-center justify-center mb-2.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <h3 className="font-bold text-sm text-white">Barahsaini St., Aligarh</h3>
                <p className="text-xs text-slate-400 mt-1">
                  Physical showroom & commercial godown accessible for inspection.
                </p>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

