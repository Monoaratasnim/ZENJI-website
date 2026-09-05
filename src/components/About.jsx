import Reveal from './Reveal.jsx';
import Container from './Container.jsx';

const VALUES = [
  {
    number: '01',
    title: 'Anti-Generic',
    text: 'We burn the template. No knockoffs, no repeats, no filler drops.',
  },
  {
    number: '02',
    title: 'Boutique Made',
    text: 'Small runs. Obsessive detailing. Each garment numbered by hand.',
  },
  {
    number: '03',
    title: 'Built Loud',
    text: 'Fabric that fights back. Prints that talk back. Energy that carries.',
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-20 md:py-28 scroll-mt-20 border-t border-ink/10">
      <Container>
        <div className="text-center max-w-4xl mx-auto">
          <Reveal>
            <p className="section-tag justify-center">About</p>
            <h2 className="font-display text-4xl md:text-6xl text-ink mt-3 leading-tight">
              Built in the <span className="text-acid">Neon</span> Realm<br />
              of the <span className="text-stroke">Gutter</span>
            </h2>
          </Reveal>
          <Reveal>
            <p className="mt-8 text-ink/70 text-lg leading-relaxed max-w-2xl mx-auto">
              ZENJI fuses the precision of Japanese street tailoring with the raw energy of anime culture. We're not a brand — we're a frequency. Tune in, gear up, and move through the city like the main character.
            </p>
          </Reveal>
          <Reveal>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16 text-left">
              {VALUES.map((value) => (
                <div key={value.number} className="manifesto-card group">
                  <span className="font-display text-5xl text-stroke2">{value.number}</span>
                  <h3 className="font-display text-xl text-ink mt-4">{value.title}</h3>
                  <p className="text-sm text-ink/60 mt-2 leading-relaxed">{value.text}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}