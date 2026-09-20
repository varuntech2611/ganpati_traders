import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import GSTBadge from './components/GSTBadge';
import ProductCatalog from './components/ProductCatalog';
import ProductModal from './components/ProductModal';
import QuoteDrawer from './components/QuoteDrawer';
import AboutSection from './components/AboutSection';
import WhyUsSection from './components/WhyUsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import WhatsAppFloatingBtn from './components/WhatsAppFloatingBtn';
import { CheckCircle } from 'lucide-react';

export default function App() {
  const [quoteItems, setQuoteItems] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage('');
    }, 3000);
  };

  const handleAddToQuote = (product, quantity = 1) => {
    setQuoteItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [
        ...prev,
        {
          id: product.id,
          name: product.name,
          moq: product.moq,
          image: product.image,
          quantity: quantity,
        },
      ];
    });

    showToast(`Added "${product.name}" to inquiry list`);
  };

  const handleUpdateQuantity = (id, newQuantity) => {
    if (newQuantity <= 0) {
      handleRemoveItem(id);
      return;
    }
    setQuoteItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity: newQuantity } : item))
    );
  };

  const handleRemoveItem = (id) => {
    setQuoteItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleClearQuote = () => {
    setQuoteItems([]);
  };

  const totalQuoteCount = quoteItems.reduce((acc, curr) => acc + curr.quantity, 0);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-amber-400 selection:text-slate-950">
      
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-20 right-5 z-50 bg-slate-900 text-white px-4 py-3 rounded-2xl shadow-2xl border border-slate-700 flex items-center gap-2.5 text-xs font-semibold animate-in slide-in-from-top-4 duration-200">
          <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Main Navigation */}
      <Navbar
        quoteCount={totalQuoteCount}
        onOpenQuote={() => setIsQuoteOpen(true)}
      />

      {/* Main Landing Sections */}
      <main className="flex-1">
        <Hero
          onExploreClick={() => {
            const el = document.getElementById('catalog');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
          onOpenQuote={() => setIsQuoteOpen(true)}
        />

        {/* GST & Regulatory Verification Ribbon */}
        <GSTBadge />

        {/* Product Catalog Grid */}
        <ProductCatalog
          onSelectProduct={(product) => setSelectedProduct(product)}
          onAddToQuote={(product) => handleAddToQuote(product, 1)}
          quoteItems={quoteItems}
        />

        {/* Value Proposition / Why Choose Us */}
        <WhyUsSection />

        {/* Business Legacy & Heritage in Aligarh */}
        <AboutSection />

        {/* Contact, Godown Location & Inquiry Form */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Slide-over Inquiry / Quote Cart */}
      <QuoteDrawer
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
        items={quoteItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearQuote={handleClearQuote}
      />

      {/* Product Specification Modal */}
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onAddToQuote={handleAddToQuote}
          isItemInQuote={quoteItems.some((item) => item.id === selectedProduct.id)}
        />
      )}

      {/* Floating WhatsApp Action Button */}
      <WhatsAppFloatingBtn />

    </div>
  );
}

