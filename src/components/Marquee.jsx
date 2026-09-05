const SLOTS = Array.from({ length: 6 }, (_, index) => index);

export default function Marquee() {
  return (
    <section className="border-y border-ink/10 bg-crimson/5 overflow-hidden py-3">
      <div className="marquee">
        <div className="marquee-track font-display text-sm md:text-lg tracking-wide text-ink/80 whitespace-nowrap">
          {SLOTS.map((slot) => (
            <span key={slot} className="contents">
              <span className="text-acid mx-6">✦</span>
              <span>FREE INTERNATIONAL SHIPPING ON DROPS OVER $150</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}