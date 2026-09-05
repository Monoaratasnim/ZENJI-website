import { useEffect, useMemo, useState } from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Marquee from './components/Marquee.jsx';
import Drops from './components/Drops.jsx';
import FilterTabs from './components/FilterTabs.jsx';
import ProductGrid from './components/ProductGrid.jsx';
import Lookbook from './components/Lookbook.jsx';
import About from './components/About.jsx';
import Footer from './components/Footer.jsx';
import CartDrawer from './components/CartDrawer.jsx';
import CheckoutModal from './components/CheckoutModal.jsx';
import Toast from './components/Toast.jsx';
import ToTop from './components/ToTop.jsx';
import Reveal from './components/Reveal.jsx';
import Container from './components/Container.jsx';
import useCart from './hooks/useCart.js';
import { products } from './data/products.js';

const categories = ['all', ...new Set(products.map((product) => product.category))];

export default function App() {
  const {
    cart,
    cartCount,
    cartSubtotal,
    cartOpen,
    addToCart,
    removeFromCart,
    incrementItem,
    decrementItem,
    clearCart,
    openCart,
    closeCart,
  } = useCart();

  const [activeFilter, setActiveFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [toast, setToast] = useState('');

  const filteredProducts = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    return products.filter((product) => {
      const categoryMatch = activeFilter === 'all' || product.category === activeFilter;
      const textMatch =
        !query ||
        product.title.toLowerCase().includes(query) ||
        product.tag.toLowerCase().includes(query) ||
        product.category.includes(query);
      return categoryMatch && textMatch;
    });
  }, [activeFilter, searchQuery]);

  const handleCheckout = () => {
    if (!cart.length) {
      setToast('Your cart is empty');
      return;
    }
    closeCart();
    setCheckoutOpen(true);
  };

  useEffect(() => {
    if (!toast) return;
    const timer = setTimeout(() => setToast(''), 2200);
    return () => clearTimeout(timer);
  }, [toast]);

  useEffect(() => {
    const onError = (e) => {
      const img = e.target;
      if (!(img instanceof HTMLImageElement) || img.dataset.placed) return;
      img.dataset.placed = '1';
      const placeholder = document.createElement('div');
      placeholder.className = 'img-placeholder';
      placeholder.setAttribute('role', 'img');
      placeholder.setAttribute('aria-label', 'ZENJI image asset unavailable');
      placeholder.textContent = '[ ZENJI IMAGE ASSET ]';
      const rect = img.getBoundingClientRect();
      if (rect.width) placeholder.style.width = rect.width + 'px';
      if (rect.height) placeholder.style.height = rect.height + 'px';
      if (rect.height && !rect.width) placeholder.style.minHeight = rect.height + 'px';
      img.replaceWith(placeholder);
    };
    document.addEventListener('error', onError, true);
    return () => document.removeEventListener('error', onError, true);
  }, []);

  return (
    <div className="overflow-x-hidden">
      <div className="fixed inset-0 z-0 pointer-events-none grid-overlay" aria-hidden="true"></div>
      <div className="fixed inset-0 z-0 pointer-events-none noise-overlay" aria-hidden="true"></div>

      <Navbar
        cartCount={cartCount}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        onOpenCart={openCart}
      />

      <main id="main">
        <Hero />
        <Marquee />
        <Drops onAddToCart={addToCart} />

        <section id="collections" className="relative py-20 md:py-28 scroll-mt-20 border-t border-ink/10">
          <Container>
            <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
              <Reveal>
                <p className="section-tag">Full Catalog</p>
                <h2 className="font-display text-4xl md:text-5xl text-ink mt-3">
                  EXPLORE ALL <span className="text-stroke">COLLECTIONS</span>
                </h2>
              </Reveal>
            </div>
            <FilterTabs categories={categories} activeFilter={activeFilter} onChange={setActiveFilter} />
            <ProductGrid products={filteredProducts} onAddToCart={addToCart} />
          </Container>
        </section>

        <Lookbook />
        <About />
      </main>

      <Footer />

      <CartDrawer
        isOpen={cartOpen}
        cartItems={cart}
        subtotal={cartSubtotal}
        onClose={closeCart}
        onRemove={removeFromCart}
        onIncrement={incrementItem}
        onDecrement={decrementItem}
        onCheckout={handleCheckout}
      />

      <CheckoutModal
        isOpen={checkoutOpen}
        cartItems={cart}
        subtotal={cartSubtotal}
        onClose={() => setCheckoutOpen(false)}
        onComplete={clearCart}
        showToast={setToast}
      />

      {toast && <Toast message={toast} />}
      <ToTop />
    </div>
  );
}