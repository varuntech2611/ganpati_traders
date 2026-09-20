import React, { useState } from 'react';
import { 
  X, 
  Trash2, 
  Plus, 
  Minus, 
  MessageSquare, 
  Send, 
  CheckCircle2, 
  FileText, 
  ShieldCheck, 
  ShoppingBag 
} from 'lucide-react';
import { BUSINESS_INFO } from '../data/products';

export default function QuoteDrawer({ 
  isOpen, 
  onClose, 
  items, 
  onUpdateQuantity, 
  onRemoveItem, 
  onClearQuote 
}) {
  const [buyerName, setBuyerName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [city, setCity] = useState('');
  const [phone, setPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  // Build WhatsApp inquiry message
  const buildWhatsAppMessage = () => {
    let msg = `*GANPATI TRADERS - WHOLESALE INQUIRY*\n`;
    msg += `--------------------------------------\n`;
    if (buyerName) msg += `*Buyer*: ${buyerName}\n`;
    if (companyName) msg += `*Company/Shop*: ${companyName}\n`;
    if (city) msg += `*Destination City*: ${city}\n`;
    if (phone) msg += `*Phone*: ${phone}\n`;
    msg += `--------------------------------------\n`;
    msg += `*REQUESTED WHOLESALE ITEMS:*\n\n`;

    items.forEach((item, index) => {
      msg += `${index + 1}. *${item.name}*\n`;
      msg += `   • Quantity: ${item.quantity} units / master lots\n`;
      msg += `   • Standard MOQ: ${item.moq}\n\n`;
    });

    msg += `Please send best wholesale rate with GST invoice & dispatch time.`;
    return encodeURIComponent(msg);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      // open WhatsApp after brief confirmation
      window.open(`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${buildWhatsAppMessage()}`, '_blank');
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-slate-950/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="absolute inset-0" onClick={onClose}></div>

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col justify-between animate-in slide-in-from-right duration-300">
          
          {/* Drawer Header */}
          <div className="p-5 border-b border-slate-200 flex items-center justify-between bg-slate-900 text-white">
            <div className="flex items-center gap-2.5">
              <ShoppingBag className="w-5 h-5 text-amber-400" />
              <div>
                <h3 className="font-bold text-base">Wholesale Inquiry Cart</h3>
                <p className="text-xs text-slate-400">{items.length} product(s) selected</p>
              </div>
            </div>
            <button
              onClick={onClose}
              aria-label="Close cart"
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Drawer Body */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            {items.length === 0 ? (
              <div className="text-center py-16">
                <FileText className="w-12 h-12 text-slate-300 mx-auto mb-3" />
                <h4 className="font-bold text-slate-800 text-base">Your inquiry list is empty</h4>
                <p className="text-xs text-slate-500 max-w-xs mx-auto mt-1">
                  Browse our catalog and click "Add to Quote" to assemble a wholesale price request.
                </p>
                <button
                  onClick={onClose}
                  className="mt-5 px-5 py-2.5 bg-slate-900 text-white text-xs font-bold rounded-xl hover:bg-slate-800 shadow"
                >
                  Browse Products
                </button>
              </div>
            ) : (
              <>
                {/* Item List */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs text-slate-500 font-semibold border-b border-slate-100 pb-2">
                    <span>Selected Items</span>
                    <button
                      onClick={onClearQuote}
                      className="text-red-600 hover:text-red-700 flex items-center gap-1 text-[11px]"
                    >
                      <Trash2 className="w-3 h-3" /> Clear List
                    </button>
                  </div>

                  {items.map((item) => (
                    <div
                      key={item.id}
                      className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start gap-3"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-14 h-14 rounded-xl object-cover border border-slate-200 shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <h5 className="font-bold text-xs sm:text-sm text-slate-900 truncate">
                          {item.name}
                        </h5>
                        <p className="text-[11px] text-slate-500 mt-0.5">
                          MOQ: {item.moq}
                        </p>

                        <div className="mt-2.5 flex items-center justify-between">
                          {/* Quantity selector */}
                          <div className="flex items-center border border-slate-300 rounded-lg bg-white shadow-2xs">
                            <button
                              onClick={() => onUpdateQuantity(item.id, Math.max(1, item.quantity - 1))}
                              className="p-1 text-slate-600 hover:bg-slate-100"
                              aria-label="Decrease"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="px-2.5 text-xs font-bold text-slate-900">{item.quantity}</span>
                            <button
                              onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                              className="p-1 text-slate-600 hover:bg-slate-100"
                              aria-label="Increase"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>

                          <button
                            onClick={() => onRemoveItem(item.id)}
                            className="text-slate-400 hover:text-red-600 p-1"
                            title="Remove item"
                            aria-label="Remove item"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Buyer Details Form */}
                <form onSubmit={handleFormSubmit} className="pt-3 border-t border-slate-200 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                      Buyer Details (Optional)
                    </span>
                    <span className="text-[11px] text-slate-400">For invoice & transport</span>
                  </div>

                  <div>
                    <input
                      type="text"
                      placeholder="Your Name / Authorized Person"
                      value={buyerName}
                      onChange={(e) => setBuyerName(e.target.value)}
                      className="w-full px-3 py-2 text-xs rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-500/50"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <input
                      type="text"
                      placeholder="Shop / Firm Name"
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      className="w-full px-3 py-2 text-xs rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-500/50"
                    />
                    <input
                      type="text"
                      placeholder="City / Destination State"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      className="w-full px-3 py-2 text-xs rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-500/50"
                    />
                  </div>

                  <div>
                    <input
                      type="tel"
                      placeholder="Contact Mobile Number"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-3 py-2 text-xs rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-500/50"
                    />
                  </div>
                </form>
              </>
            )}
          </div>

          {/* Drawer Footer / Submit CTAs */}
          {items.length > 0 && (
            <div className="p-5 border-t border-slate-200 bg-slate-50 space-y-3">
              <div className="flex items-center justify-between text-xs text-slate-600">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  Official GST Invoicing:
                </span>
                <span className="font-mono font-bold text-slate-800">{BUSINESS_INFO.gstin}</span>
              </div>

              {/* Direct WhatsApp Action Button */}
              <a
                href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${buildWhatsAppMessage()}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Send Wholesale Inquiry on WhatsApp</span>
              </a>

              <p className="text-[11px] text-center text-slate-400">
                You will receive instantaneous rates & consignment dispatch estimates.
              </p>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}

