import React from 'react';
import { 
  Building2, 
  MapPin, 
  ShieldCheck, 
  Users, 
  Award, 
  TrendingUp, 
  CheckCircle, 
  Clock 
} from 'lucide-react';
import { BUSINESS_INFO } from '../data/products';

export default function AboutSection() {
  const stats = [
    { label: "Trade Experience", value: "Since 2007", sub: "15+ Years Commercial Trust" },
    { label: "Official GSTIN", value: "09ACAPV9782E1Z1", sub: "Uttar Pradesh State (09)" },
    { label: "Supplied Industries", value: "Abattoirs & Plants", sub: "Meat, Dairy, Cold Storage" },
    { label: "Transport Reach", value: "Pan-India", sub: "Daily Interstate Consignments" },
  ];

  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Story & Narrative */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-800 text-xs font-bold uppercase tracking-wider">
              <Building2 className="w-3.5 h-3.5 text-amber-600" />
              <span>About Ganpati Traders (U.P)</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
              Specialized Wholesale Hub for Slaughterhouses, Workwear & Livestock Supplies
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Operating from the central commercial hub of <strong className="text-slate-900">Barahsaini Street, Aligarh</strong>, <strong>Ganpati Traders</strong> is a trusted wholesale trading enterprise. We specialize in supplying comprehensive hygiene workwear, personal protective equipment, livestock management tools, and industrial butcher knives to modern abattoirs, meat processing facilities, cold storages, cattle farms, and commercial kitchens across India.
            </p>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              We provide a complete one-stop procurement solution for plant hygiene managers, livestock supervisors, and industrial contractors:
            </p>

            {/* Core Values Checklist */}
            <div className="space-y-3 pt-1">
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Slaughterhouse & Food Plant Hygiene Line</h4>
                  <p className="text-xs text-slate-500">Heavy waterproof PVC & ragjean aprons, disposable non-woven coats, 3-ply masks, bouffant mob caps, and anti-skid shoe covers.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Industrial Uniforms, Dangri & Gumboots</h4>
                  <p className="text-xs text-slate-500">Heavy cotton drill dangri boiler suits, T-shirt pajama uniform sets, staff work coats, food-grade white/black gumboots, and PVC shoes.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Livestock Tagging & Original Meena Knives</h4>
                  <p className="text-xs text-slate-500">Laser-numbered TPU cattle ear tags with applicator pliers & safety cutters, plus original stamped Meena brand professional butcher knives.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Cold Storage Thermal Wear</h4>
                  <p className="text-xs text-slate-500">Heavy insulated woolen coats and knitted monkey caps (balaclavas) engineered for blast freezers and sub-zero chillers.</p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Image & Stats Grid */}
          <div className="lg:col-span-6">
            <div className="relative">
              
              {/* Main Visual Image Card */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200">
                <img
                  src="https://images.unsplash.com/photo-1584744982491-665216d95f8b?auto=format&fit=crop&w=1000&q=80"
                  alt="Slaughterhouse and Food Plant Protective Gear"
                  className="w-full h-80 sm:h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent flex flex-col justify-end p-6 sm:p-8 text-white">
                  <span className="text-amber-400 font-mono text-xs font-bold uppercase tracking-wider">
                    Registered Commercial Godown
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold mt-1">
                    13/48, Barahsaini Street, Aligarh (UP)
                  </h3>
                  <p className="text-xs text-slate-300 mt-1">
                    Direct bulk dispatches for abattoirs, food processors, dairy farms, and retail stockists.
                  </p>
                </div>
              </div>

              {/* Floating Stat Badge */}
              <div className="absolute -bottom-6 -left-4 sm:left-6 bg-slate-900 text-white p-4 sm:p-5 rounded-2xl shadow-xl border border-slate-700 max-w-xs">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-amber-500/20 text-amber-400">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xl font-extrabold text-white">100% Verified</div>
                    <div className="text-[11px] text-slate-400">GST: {BUSINESS_INFO.gstin}</div>
                  </div>
                </div>
              </div>

            </div>

            {/* Stats Counters Grid */}
            <div className="grid grid-cols-2 gap-3.5 mt-10">
              {stats.map((item, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                  <div className="text-xs text-slate-500 font-semibold">{item.label}</div>
                  <div className="text-lg sm:text-xl font-black text-slate-900 mt-1">{item.value}</div>
                  <div className="text-[11px] text-amber-600 font-medium mt-0.5">{item.sub}</div>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
