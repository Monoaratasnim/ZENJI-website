import PropTypes from 'prop-types';
import Container from './Container.jsx';
import CountdownTimer from './CountdownTimer.jsx';
import ProductGrid from './ProductGrid.jsx';
import Reveal from './Reveal.jsx';
import { drops } from '../data/drops.js';

const DROP_ENDS_AT = Date.now() + 2 * 24 * 60 * 60 * 1000 + 14 * 60 * 60 * 1000 + 38 * 60 * 1000;

export default function Drops({ onAddToCart }) {
  return (
    <section id="drops" className="relative py-20 md:py-28 scroll-mt-20 border-t border-ink/10 overflow-hidden">
      <div className="absolute inset-0 radial-glow pointer-events-none"></div>
      <Container>
        <div className="relative">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-6 mb-10">
              <div>
                <p className="section-tag">Live Drop · Drop 01</p>
                <h2 className="font-display text-4xl md:text-5xl text-ink mt-3">
                  LIMITED <span className="text-stroke">DROPS</span> <span className="text-crimson">//</span>{' '}
                  <span className="text-acid">LIVE NOW</span>
                </h2>
              </div>
              <span className="inline-flex items-center gap-2 border border-acid/40 bg-acid/5 px-4 py-1.5 text-xs tracking-[0.3em] text-acid uppercase">
                <span className="inline-block w-1.5 h-1.5 bg-crimson rounded-full animate-pulse"></span>
                Live
              </span>
            </div>
          </Reveal>

          <Reveal>
            <div className="glass-card relative overflow-hidden mb-12 p-6 md:p-8">
              <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                <div className="flex items-center gap-3 shrink-0">
                  <span className="relative flex w-3 h-3">
                    <span className="absolute inline-flex w-full h-full rounded-full bg-acid opacity-60 animate-ping"></span>
                    <span className="relative inline-flex w-3 h-3 rounded-full bg-acid"></span>
                  </span>
                  <span className="badge-crimson">LIMITED QUANTITIES</span>
                </div>
                <p className="flex-1 text-sm md:text-base text-ink/70 leading-relaxed">
                  Every design is cut to a numbered run. When the clock hits zero, these pieces are gone forever — no
                  restocks, no reprints.
                </p>
                <CountdownTimer target={DROP_ENDS_AT} />
              </div>
            </div>
          </Reveal>

          <ProductGrid products={drops} onAddToCart={onAddToCart} />
        </div>
      </Container>
    </section>
  );
}

Drops.propTypes = {
  onAddToCart: PropTypes.func.isRequired,
};