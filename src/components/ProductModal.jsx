import React, { useState, useEffect } from 'react';
import { 
  X, 
  Check, 
  MessageSquare, 
  Plus, 
  Minus, 
  Star, 
  ShieldCheck, 
  Package, 
  Truck, 
  Sparkles 
} from 'lucide-react';
import { BUSINESS_INFO } from '../data/products';

export default function ProductModal({ 
  product, 
  onClose, 
  onAddToQuote, 
  isItemInQuote 
}) {
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!product) return null;

  const handleAdd = () => {
    onAddToQuote(product, quantity);
  };

  const whatsappInquiryUrl = `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(
    `Hello Ganpati Traders,\n\nI want to inquire about wholesale rates for:\n*Product*: ${product.name}\n*Quantity*: ${quantity} Lots/Cartons\n*MOQ*: ${product.moq}\n\nPlease share your current best B2B price and transport delivery time.`
  )}`;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      
      {/* Modal Container */}
      <div 
        className="relative bg-white rounded-3xl max-w-3xl w-full shadow-2xl border border-slate-200 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close details"
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-slate-900/60 hover:bg-slate-900 text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid md:grid-cols-12 max-h-[85vh] overflow-y-auto">
          
          {/* Product Image Column */}
          <div className="md:col-span-5 bg-slate-900 p-6 flex flex-col justify-between relative overflow-hidden">
            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-lg border border-slate-800">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              {product.badge && (
                <span className="absolute top-3 left-3 bg-amber-500 text-slate-950 text-xs font-extrabold px-3 py-1 rounded-lg shadow">
                  {product.badge}
                </span>
              )}
            </div>

            {/* Quality Note */}
            <div className="mt-4 p-3 rounded-xl bg-slate-800/80 border border-slate-700/80 text-xs text-slate-300 space-y-1.5">
              <div className="flex items-center gap-1.5 text-amber-400 font-bold">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Aligarh Commercial Grade</span>
              </div>
              <p className="text-[11px] text-slate-400">
                100% genuine wholesale dispatch with official GST tax invoice.
              </p>
            </div>
          </div>

          {/* Product Details Column */}
          <div className="md:col-span-7 p-6 sm:p-8 flex flex-col justify-between">
            <div className="space-y-4">
              
              {/* Reviews & MOQ tag */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1 text-amber-500 text-xs font-bold">
                  <Star className="w-4 h-4 fill-amber-400" />
                  <span>{product.rating}</span>
                  <span className="text-slate-400">({product.reviewsCount} customer reviews)</span>
                </div>
                <span className="text-emerald-700 bg-emerald-50 border border-emerald-200 text-xs font-bold px-2.5 py-0.5 rounded-full">
                  In Wholesale Stock
                </span>
              </div>

              {/* Title */}
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight leading-snug">
                {product.name}
              </h3>

              {/* Description */}
              <p className="text-sm text-slate-600 leading-relaxed">
                {product.description}
              </p>

              {/* Technical Specifications Table */}
              <div className="border border-slate-200 rounded-2xl overflow-hidden text-xs">
                <div className="bg-slate-100 px-4 py-2 font-bold text-slate-700 uppercase tracking-wider text-[11px]">
                  Technical Specifications
                </div>
                <div className="divide-y divide-slate-100 bg-slate-50/50">
                  {product.specs.map((spec, idx) => (
                    <div key={idx} className="px-4 py-2 grid grid-cols-12 gap-2">
                      <span className="col-span-5 text-slate-500 font-medium">{spec.label}</span>
                      <span className="col-span-7 text-slate-900 font-semibold">{spec.value}</span>
                    </div>
                  ))}
                  <div className="px-4 py-2 grid grid-cols-12 gap-2 bg-amber-50/60">
                    <span className="col-span-5 text-amber-900 font-semibold">Packaging Unit:</span>
                    <span className="col-span-7 text-amber-950 font-bold">{product.packaging}</span>
                  </div>
                  <div className="px-4 py-2 grid grid-cols-12 gap-2 bg-amber-50/60">
                    <span className="col-span-5 text-amber-900 font-semibold">Minimum Order:</span>
                    <span className="col-span-7 text-amber-950 font-bold">{product.moq}</span>
                  </div>
                </div>
              </div>

              {/* Quantity Selector for Bulk Quotation */}
              <div className="flex items-center justify-between pt-2">
                <span className="text-xs font-bold text-slate-700">Select Lots / Quantity:</span>
                <div className="flex items-center border border-slate-300 rounded-xl overflow-hidden bg-white shadow-sm">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-2 text-slate-600 hover:bg-slate-100 transition-colors"
                    aria-label="Decrease quantity"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="px-4 text-xs font-bold text-slate-900">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-2 text-slate-600 hover:bg-slate-100 transition-colors"
                    aria-label="Increase quantity"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

            </div>

            {/* Action Buttons */}
            <div className="mt-6 pt-5 border-t border-slate-200 flex flex-col sm:flex-row gap-3">
              <button
                onClick={handleAdd}
                className={`flex-1 py-3 px-4 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all ${
                  isItemInQuote
                    ? 'bg-emerald-600 text-white shadow-md'
                    : 'bg-slate-900 hover:bg-slate-800 text-white shadow-md'
                }`}
              >
                {isItemInQuote ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>Updated in Quote Cart</span>
                  </>
                ) : (
                  <>
                    <Plus className="w-4 h-4 text-amber-400" />
                    <span>Add to Inquiry List</span>
                  </>
                )}
              </button>

              <a
                href={whatsappInquiryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-5 rounded-xl font-bold text-xs sm:text-sm bg-emerald-600 hover:bg-emerald-700 text-white flex items-center justify-center gap-2 shadow-md transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Instant WhatsApp Price</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}

