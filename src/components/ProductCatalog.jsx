import React, { useState, useMemo } from 'react';
import { 
  Search, 
  Filter, 
  Plus, 
  Eye, 
  MessageSquare, 
  Package, 
  Check, 
  Star, 
  ShieldAlert, 
  Layers 
} from 'lucide-react';
import { PRODUCTS, CATEGORIES, BUSINESS_INFO } from '../data/products';

export default function ProductCatalog({ 
  onSelectProduct, 
  onAddToQuote, 
  quoteItems 
}) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Filtered product list
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      const matchesCategory = activeCategory === 'all' || product.category === activeCategory;
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch = 
        !query ||
        product.name.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query) ||
        product.specs.some(s => s.value.toLowerCase().includes(query) || s.label.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const isInQuote = (productId) => {
    return quoteItems.some(item => item.id === productId);
  };

  return (
    <section id="catalog" className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs font-bold uppercase tracking-wider mb-3">
            <Layers className="w-3.5 h-3.5 text-amber-700" />
            <span>Wholesale Inventory</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Commercial Hardware & Industrial Catalog
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-3">
            Explore our bulk product ranges manufactured and sourced in Aligarh. Add items to your inquiry list or connect directly on WhatsApp for live wholesale rates.
          </p>
        </div>

        {/* Filter Bar & Search */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8 bg-white p-3 sm:p-4 rounded-2xl border border-slate-200/80 shadow-sm">
          
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all ${
                    isActive
                      ? 'bg-slate-900 text-white shadow-sm'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  {cat.name}
                </button>
              );
            })}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="Search locks, aprons, bolts..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-all bg-slate-50/50 focus:bg-white"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-700"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProducts.map((product) => {
              const added = isInQuote(product.id);

              return (
                <div
                  key={product.id}
                  className="bg-white rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden group hover:-translate-y-1"
                >
                  {/* Image & Badges */}
                  <div className="relative aspect-[4/3] bg-slate-100 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    
                    {/* Badge */}
                    {product.badge && (
                      <span className="absolute top-3 left-3 bg-slate-900/90 backdrop-blur-sm text-amber-300 text-xs font-bold px-2.5 py-1 rounded-lg border border-amber-500/30 shadow-sm">
                        {product.badge}
                      </span>
                    )}

                    {/* Quick View overlay button */}
                    <button
                      onClick={() => onSelectProduct(product)}
                      className="absolute inset-0 bg-slate-950/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white font-semibold text-sm"
                    >
                      <span className="bg-white/20 backdrop-blur-md px-4 py-2 rounded-xl border border-white/30 flex items-center gap-1.5 hover:bg-white/30">
                        <Eye className="w-4 h-4" /> Quick Specs
                      </span>
                    </button>
                  </div>

                  {/* Body Content */}
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      {/* Rating & MOQ */}
                      <div className="flex items-center justify-between text-xs mb-2">
                        <div className="flex items-center gap-1 text-amber-500 font-semibold">
                          <Star className="w-3.5 h-3.5 fill-amber-400 stroke-amber-400" />
                          <span>{product.rating}</span>
                          <span className="text-slate-400">({product.reviewsCount})</span>
                        </div>
                        <span className="text-slate-500 font-medium bg-slate-100 px-2 py-0.5 rounded text-[11px]">
                          MOQ: {product.moq}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 
                        onClick={() => onSelectProduct(product)}
                        className="font-bold text-lg text-slate-900 group-hover:text-amber-600 transition-colors cursor-pointer leading-snug line-clamp-1"
                      >
                        {product.name}
                      </h3>

                      {/* Description */}
                      <p className="text-xs text-slate-600 mt-2 line-clamp-2 leading-relaxed">
                        {product.description}
                      </p>

                      {/* Specs Highlights */}
                      <div className="mt-4 pt-3 border-t border-slate-100 space-y-1.5 text-xs text-slate-600">
                        {product.specs.slice(0, 3).map((spec, i) => (
                          <div key={i} className="flex justify-between items-center">
                            <span className="text-slate-500">{spec.label}:</span>
                            <span className="font-semibold text-slate-800 text-right">{spec.value}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="mt-5 pt-3 border-t border-slate-100 flex items-center gap-2">
                      <button
                        onClick={() => onAddToQuote(product)}
                        className={`flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl text-xs font-bold transition-all ${
                          added
                            ? 'bg-emerald-50 text-emerald-700 border border-emerald-300'
                            : 'bg-slate-900 hover:bg-slate-800 text-white shadow-sm'
                        }`}
                      >
                        {added ? (
                          <>
                            <Check className="w-4 h-4 text-emerald-600" />
                            <span>In Inquiry List</span>
                          </>
                        ) : (
                          <>
                            <Plus className="w-4 h-4 text-amber-400" />
                            <span>Add to Quote</span>
                          </>
                        )}
                      </button>

                      <a
                        href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(
                          `Hello Ganpati Traders, I want wholesale pricing for: "${product.name}" (MOQ: ${product.moq}). Please quote best price.`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 rounded-xl border border-slate-200 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 transition-colors"
                        title="Inquire via WhatsApp"
                      >
                        <MessageSquare className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          /* Empty Search State */
          <div className="text-center py-16 bg-white rounded-3xl border border-slate-200 p-8">
            <Package className="w-12 h-12 text-slate-400 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-slate-800">No products matched your criteria</h3>
            <p className="text-sm text-slate-500 max-w-sm mx-auto mt-1">
              Try searching with different keywords or switch categories. Need custom fabrication or unlisted hardware? Contact us directly.
            </p>
            <div className="mt-5 flex justify-center gap-3">
              <button
                onClick={() => {
                  setActiveCategory('all');
                  setSearchQuery('');
                }}
                className="px-4 py-2 rounded-xl bg-slate-900 text-white text-xs font-semibold hover:bg-slate-800"
              >
                Reset Filters
              </button>
              <a
                href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent('Hello Ganpati Traders, I am searching for a specific item not in your online list.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl border border-slate-300 text-slate-700 text-xs font-semibold hover:bg-slate-50"
              >
                Ask on WhatsApp
              </a>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}

