import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  CheckCircle2, 
  MessageSquare, 
  Building, 
  ShieldCheck, 
  ExternalLink 
} from 'lucide-react';
import { BUSINESS_INFO } from '../data/products';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    firmName: '',
    phone: '',
    email: '',
    requirement: '',
    category: 'Slaughterhouse & Disposables (PVC/Ragjean Aprons, Masks, Caps, Coats)'
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Open WhatsApp with populated message
    const msg = `*NEW COMMERCIAL INQUIRY - GANPATI TRADERS*\n` +
      `--------------------------------------\n` +
      `*Name*: ${formData.name}\n` +
      `*Firm / Abattoir / Plant*: ${formData.firmName || 'Individual'}\n` +
      `*Phone*: ${formData.phone}\n` +
      `*Product Category*: ${formData.category}\n` +
      `*Requirement & Quantity*: ${formData.requirement}\n` +
      `--------------------------------------\n` +
      `Please provide wholesale rate with GST invoice.`;

    setTimeout(() => {
      window.open(`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(msg)}`, '_blank');
    }, 500);
  };

  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent("13/48, Barahsaini Street, Aligarh, Uttar Pradesh 202001")}`;

  return (
    <section id="contact" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-extrabold uppercase tracking-widest text-amber-600 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mt-3">
            Contact Our Aligarh Commercial Desk
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-3">
            Inquire about abattoir supplies, bulk dangri uniforms, cattle ear tags, gumboots, or authentic Meena brand knives.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Contact Cards & Business Info */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Registered Address Card */}
            <div className="p-6 rounded-3xl bg-slate-900 text-white shadow-xl border border-slate-800 space-y-4">
              <div className="flex items-center gap-2 text-amber-400 font-bold text-xs uppercase tracking-wider">
                <Building className="w-4 h-4" />
                <span>Registered Commercial Office & Godown</span>
              </div>
              
              <div>
                <h3 className="text-xl font-bold">{BUSINESS_INFO.legalName}</h3>
                <p className="text-sm text-slate-300 mt-2 flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-1" />
                  <span>
                    {BUSINESS_INFO.address}<br />
                    Pincode: <strong className="text-white">{BUSINESS_INFO.pincode}</strong><br />
                    State: {BUSINESS_INFO.stateName} (State Code: {BUSINESS_INFO.stateCode})
                  </span>
                </p>
              </div>

              <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-xs">
                <span className="text-slate-400 font-medium">GST Identification:</span>
                <span className="font-mono text-emerald-400 font-bold">{BUSINESS_INFO.gstin}</span>
              </div>

              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold text-amber-400 hover:text-amber-300 transition-colors pt-1"
              >
                <span>Open in Google Maps / Directions</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Direct Contact Methods */}
            <div className="grid sm:grid-cols-2 gap-4">
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="p-5 rounded-2xl bg-slate-50 hover:bg-slate-100 border border-slate-200 transition-all block group"
              >
                <div className="w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                  <Phone className="w-5 h-5 text-amber-400" />
                </div>
                <div className="text-xs text-slate-500 font-medium">Call Us Directly</div>
                <div className="font-bold text-slate-900 text-sm mt-0.5">{BUSINESS_INFO.phone}</div>
                <div className="text-[11px] text-emerald-600 font-semibold mt-1">Available 9:30 AM - 8 PM</div>
              </a>

              <a
                href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent('Hello Ganpati Traders, I want to inquire about wholesale rates.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-2xl bg-emerald-50/70 hover:bg-emerald-100/70 border border-emerald-200 transition-all block group"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div className="text-xs text-emerald-800 font-medium">Direct WhatsApp</div>
                <div className="font-bold text-emerald-950 text-sm mt-0.5">Chat Instantly</div>
                <div className="text-[11px] text-emerald-700 font-semibold mt-1">Live Quotations & Catalogs</div>
              </a>
            </div>

            {/* Working Hours Card */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-center gap-3 text-xs text-slate-600">
              <div className="p-2 rounded-lg bg-amber-100 text-amber-800 shrink-0">
                <Clock className="w-4 h-4" />
              </div>
              <div>
                <span className="font-bold text-slate-900 block">Dispatch & Working Hours:</span>
                <span>{BUSINESS_INFO.workingHours} (Sunday by appointment)</span>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Inquiry Form */}
          <div className="lg:col-span-7 bg-slate-50 rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-sm">
            <h3 className="text-xl font-bold text-slate-900">Send a Commercial Wholesale Inquiry</h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Specify your required items (PVC aprons, dangri, gumboots, cattle tags, or Meena knives) and quantities below.
            </p>

            {submitted ? (
              <div className="mt-8 p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3">
                <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h4 className="text-lg font-bold text-emerald-900">Inquiry Sent Successfully!</h4>
                <p className="text-xs text-emerald-700 max-w-sm mx-auto">
                  Your inquiry is opened on WhatsApp so you can continue the chat directly with our commercial sales desk.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-2 text-xs font-bold text-emerald-800 hover:underline"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Mohd. Farhan / Rajesh Gupta"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-amber-500/50"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Shop / Abattoir / Plant / Farm Name
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Al-Noor Meat Processing / Royal Cattle Farm"
                      value={formData.firmName}
                      onChange={(e) => setFormData({ ...formData, firmName: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-amber-500/50"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Mobile / WhatsApp Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 9876543210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-amber-500/50"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Primary Product Category
                    </label>
                    <select
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-amber-500/50"
                    >
                      <option>Slaughterhouse & Disposables (PVC/Ragjean Aprons, Masks, Caps, Coats)</option>
                      <option>Uniforms & Dangri (Boiler Suits, T-Shirt Pajama Sets, Work Coats)</option>
                      <option>Industrial Gumboots & PVC Work Shoes</option>
                      <option>Cold Storage & Winter Wear (Woolen Coats, Monkey Caps)</option>
                      <option>Cattle Ear Tags & Applicator Tools</option>
                      <option>Meena Brand Butcher & Skinning Knives</option>
                      <option>Multiple / Mixed Wholesale Consignment</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Requirement & Estimated Quantities *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Specify exact quantities (e.g. 100 pcs PVC aprons, 50 pairs gumboots, 500 cattle ear tags, 24 pcs Meena knives), destination city..."
                    value={formData.requirement}
                    onChange={(e) => setFormData({ ...formData, requirement: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-amber-500/50"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4 text-amber-400" />
                  <span>Submit Inquiry & Open on WhatsApp</span>
                </button>

                <p className="text-[11px] text-center text-slate-500">
                  By submitting, you agree to receive commercial quotes and catalogs via WhatsApp/Phone.
                </p>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
