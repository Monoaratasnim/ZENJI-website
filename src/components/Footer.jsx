import { useState } from 'react';
import Container from './Container.jsx';

const SHOP_LINKS = [
  { label: 'Drops', href: '#drops' },
  { label: 'Collections', href: '#collections' },
  { label: 'Lookbook', href: '#lookbook' },
  { label: 'Accessories', href: '#collections' },
];

const COMPANY_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Shipping', href: '#' },
  { label: 'Returns', href: '#' },
  { label: 'Contact', href: '#' },
];

export default function Footer() {
  const [joined, setJoined] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    setJoined(true);
    e.currentTarget.reset();
    setTimeout(() => setJoined(false), 4000);
  };

  return (
    <footer className="border-t border-ink/10 pt-16">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 pb-12">
          <div className="md:col-span-1">
            <a href="#hero" aria-label="ZENJI home" className="min-h-11 grid place-items-start">
              <img src="/Outlook-ZENJI mono.png" alt="ZENJI" className="brand-icon" />
            </a>
            <p className="mt-3 text-sm text-ink/50 max-w-xs leading-relaxed">Anime culture × streetwear architecture. Drop hard, live loud.</p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="social-link" aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M16.5 8.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v8.25A2.25 2.25 0 006 16.5h2.25m8.25-8.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-7.5A2.25 2.25 0 018.25 18v-1.5m8.25-8.25h-6a2.25 2.25 0 00-2.25 2.25v6" /></svg>
              </a>
              <a href="#" className="social-link" aria-label="Discord">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7A9.01 9.01 0 0013.635 3.44c-.891.176-1.6.5-2.135.82" /><path strokeLinecap="round" strokeLinejoin="round" d="M3.075 14.853c.544-1.81 1.099-3.284 1.66-4.423a7.5 7.5 0 016.265-3.48 9.25 9.25 0 016.855 3.11" /></svg>
              </a>
              <a href="#" className="social-link" aria-label="X">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" /></svg>
              </a>
            </div>
          </div>

          <div className="md:col-span-1">
            <p className="text-ink/40 text-xs tracking-widest uppercase mb-4">Shop</p>
            <ul className="space-y-3 text-sm">
              {SHOP_LINKS.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="footer-link min-h-11 inline-flex items-center">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-1">
            <p className="text-ink/40 text-xs tracking-widest uppercase mb-4">Company</p>
            <ul className="space-y-3 text-sm">
              {COMPANY_LINKS.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="footer-link min-h-11 inline-flex items-center">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-1">
            <p className="text-ink/40 text-xs tracking-widest uppercase mb-4">Join the Grid</p>
            <p className="text-sm text-ink/60 mb-4">24hr early access, members-only drops, secrets never posted.</p>
            <form onSubmit={handleSubscribe} className="flex flex-col gap-3">
              <input type="email" required placeholder="your@email.com" className="news-input" />
              <button type="submit" className="btn-primary justify-center min-h-11 w-full">Subscribe</button>
            </form>
            {joined && <p className="mt-3 text-xs text-acid">Signal received. Welcome to the grid 🔒</p>}
          </div>
        </div>
      </Container>

      <div className="border-t border-ink/10">
        <Container>
          <div className="py-6 flex flex-col sm:flex-row justify-between gap-3 text-xs text-ink/40">
            <p>© 2026 ZENJI. All rights reserved.</p>
            <p>Forged in the neon realm <span className="text-acid">✦</span> Anime culture × streetwear architecture</p>
          </div>
        </Container>
      </div>
    </footer>
  );
}