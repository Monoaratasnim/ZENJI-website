import Container from './Container.jsx';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center pt-8 sm:pt-12 lg:pt-16 pb-16 overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mt-16 sm:mt-20 lg:mt-24">
          <div className="relative z-10 order-2 lg:order-1 lg:col-span-7">
            <span className="inline-flex items-center gap-2 border border-acid/40 bg-acid/5 px-4 py-1.5 text-xs tracking-[0.3em] text-acid uppercase mb-8">
              <span className="inline-block w-1.5 h-1.5 bg-acid animate-pulse rounded-full"></span>
              Drop 01 — Now Live
            </span>

            <h1 className="font-display leading-[1.02] text-3xl sm:text-5xl lg:text-6xl xl:text-7xl">
              <span className="block text-ink">ANIME CULTURE</span>
              <span className="block text-acid my-1">&times;</span>
              <span className="block text-stroke">STREETWEAR</span>
              <span className="block text-crimson mt-1">ARCHITECTURE</span>
            </h1>

            <p className="mt-8 max-w-md text-ink/70 text-base md:text-lg leading-relaxed">
              Limited, numbered and built for the ones who move in silence but land like thunder. Every piece engineered like a panel from your favourite manga — nothing generic. Ever.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a href="#drops" className="btn-primary glitch" data-text="EXPLORE DROP 01">
                <span className="glitch-inner">EXPLORE DROP 01</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
              </a>
              <a href="#lookbook" className="min-h-11 inline-flex items-center text-ink/70 transition-all duration-300 ease-in-out hover:text-acid underline underline-offset-8 decoration-acid/40">
                View Lookbook
              </a>
            </div>
          </div>

          <div className="relative z-10 order-1 lg:order-2 lg:col-span-5">
            <div className="glass-card product-float relative overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1578587018452-892bacefd3f2?auto=format&fit=crop&q=80&w=1200"
                alt="ZENJI streetwear editorial shot"
                className="w-full h-full max-h-[500px] lg:max-h-[600px] aspect-[4/5] object-cover object-top rounded-2xl product-img-zoom"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-charcoal/40"></div>
              <span className="absolute top-4 left-4 bg-acid text-charcoal text-xs font-bold px-3 py-1 tracking-widest">DROP 01</span>
              <span className="absolute bottom-4 left-4 text-xs text-ink/80 tracking-[0.25em] uppercase">Studio 09 — Toki Kyoto</span>
            </div>
          </div>
        </div>
      </Container>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-ink/40">
        <span className="text-[10px] tracking-[0.4em] uppercase">Scroll</span>
        <div className="w-6 h-10 border border-ink/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-acid rounded-full scroll-dot"></div>
        </div>
      </div>
    </section>
  );
}