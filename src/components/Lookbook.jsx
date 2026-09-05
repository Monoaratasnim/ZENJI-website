import { useRef } from 'react';
import PropTypes from 'prop-types';
import { looks } from '../data/looks.js';
import Reveal from './Reveal.jsx';
import Container from './Container.jsx';
import useReveal from '../hooks/useReveal.js';

function LookCard({ look, index }) {
  const ref = useReveal();

  return (
    <figure ref={ref} className="look-card reveal" style={{ transitionDelay: `${index * 80}ms` }}>
      <img src={look.image} alt={look.title} loading="lazy" className="look-img" />
      <div className="look-overlay">
        <span className="badge-tech self-start">{look.tag}</span>
        <p className="font-display text-xl text-ink mt-2">{look.title}</p>
      </div>
      <div className="look-frame"></div>
    </figure>
  );
}

LookCard.propTypes = {
  look: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.number,
};

export default function Lookbook() {
  const reelRef = useRef(null);

  const scrollBy = (distance) => reelRef.current?.scrollBy({ left: distance, behavior: 'smooth' });

  return (
    <section id="lookbook" className="relative py-20 md:py-28 scroll-mt-20 border-t border-ink/10 overflow-hidden">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
          <Reveal>
            <p className="section-tag">Lookbook</p>
            <h2 className="font-display text-4xl md:text-5xl text-ink mt-3">Street <span className="text-acid">Style</span> Reel</h2>
          </Reveal>
          <div className="flex gap-3">
            <button onClick={() => scrollBy(-300)} className="look-arrow min-h-12 min-w-12" aria-label="Scroll left">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" /></svg>
            </button>
            <button onClick={() => scrollBy(300)} className="look-arrow min-h-12 min-w-12" aria-label="Scroll right">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg>
            </button>
          </div>
        </div>
      </Container>

      <div ref={reelRef} className="flex gap-6 overflow-x-auto px-4 sm:px-6 lg:px-8 pb-4 snap-x snap-mandatory look-scroll">
        {looks.map((look, index) => (
          <LookCard key={look.title} look={look} index={index} />
        ))}
      </div>

      <Container>
        <div className="mt-12">
          <Reveal>
            <p className="text-ink/50 text-sm max-w-lg leading-relaxed">
              Shot on the neon-flicker streets of Shibuya and Harajuku. Each frame overlaid with hand-drawn anime interference — a lookbook you can scroll, but never fully pause.
            </p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}