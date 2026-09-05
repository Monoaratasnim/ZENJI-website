import { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import Container from './Container.jsx';

const NAV_LINKS = [
  { label: 'Drops', href: '#drops', accent: true },
  { label: 'Collections', href: '#collections' },
  { label: 'Lookbook', href: '#lookbook' },
  { label: 'About', href: '#about' },
];

export default function Navbar({ cartCount, searchQuery, onSearchChange, onOpenCart }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const mobileMenuRef = useRef(null);
  const searchInputRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!mobileMenuRef.current) return;
    mobileMenuRef.current.style.maxHeight = mobileOpen ? `${mobileMenuRef.current.scrollHeight}px` : '0px';
  }, [mobileOpen]);

  useEffect(() => {
    if (searchOpen) searchInputRef.current?.focus();
  }, [searchOpen]);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 nav-blur${scrolled ? ' nav-on-scroll' : ''}`}>
      <Container>
        <nav className="grid grid-cols-[1fr_auto_1fr] items-center py-4">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setMobileOpen((open) => !open)}
              className="lg:hidden -ml-2 min-h-11 min-w-11 grid place-items-center text-ink transition-all duration-300 ease-in-out hover:text-acid"
              aria-label="Menu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" /></svg>
            </button>
            <a href="#hero" aria-label="ZENJI home" className="min-h-11 grid place-items-center">
              <img src="/Outlook-ZENJI.png" alt="ZENJI" className="brand-logo" />
            </a>
          </div>

          <ul className="hidden lg:flex items-center gap-8 text-sm font-medium tracking-wide">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <a href={link.href} className={link.accent ? 'nav-link text-acid' : 'nav-link'}>{link.label}</a>
              </li>
            ))}
          </ul>

          <div className="flex items-center justify-end gap-2">
            <button onClick={() => setSearchOpen((open) => !open)} className="min-h-11 min-w-11 grid place-items-center text-ink transition-all duration-300 ease-in-out hover:text-acid" aria-label="Search">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" /></svg>
            </button>
            <button onClick={onOpenCart} className="relative min-h-11 min-w-11 grid place-items-center text-ink transition-all duration-300 ease-in-out hover:text-acid" aria-label="Cart">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" /></svg>
              {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-2.5 w-5 h-5 rounded-full bg-crimson text-ink text-[10px] grid place-items-center font-bold">{cartCount}</span>
              )}
            </button>
          </div>
        </nav>
      </Container>

      <div className={`border-t border-ink/10 bg-charcoal/95 backdrop-blur-xl${searchOpen ? '' : ' hidden'}`}>
        <Container>
          <div className="py-6 mx-auto max-w-2xl">
            <input
              ref={searchInputRef}
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Search hoodies, tees, pants, accessories..."
              className="w-full bg-ink/5 border border-ink/15 focus:border-acid focus:ring-1 focus:ring-acid outline-none px-5 py-4 rounded-lg text-ink placeholder:text-ink/40 transition-colors"
            />
            <p className="mt-3 text-xs text-ink/50">Start typing to filter the collection.</p>
          </div>
        </Container>
      </div>

      <div ref={mobileMenuRef} className="lg:hidden overflow-hidden max-h-0 transition-all duration-500 ease-in-out bg-charcoal/95 backdrop-blur-xl">
        <Container>
          <div className="pt-6">
            <img src="/Outlook-ZENJI mono.png" alt="ZENJI" className="brand-icon" />
          </div>
          <ul className="flex flex-col py-6 gap-2 text-lg">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="mobile-link" onClick={() => setMobileOpen(false)}>{link.label}</a>
              </li>
            ))}
          </ul>
        </Container>
      </div>
    </header>
  );
}

Navbar.propTypes = {
  cartCount: PropTypes.number.isRequired,
  searchQuery: PropTypes.string.isRequired,
  onSearchChange: PropTypes.func.isRequired,
  onOpenCart: PropTypes.func.isRequired,
};