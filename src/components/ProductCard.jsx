import PropTypes from 'prop-types';
import useReveal from '../hooks/useReveal.js';

export default function ProductCard({ product, index = 0, onAddToCart }) {
  const ref = useReveal();

  return (
    <article
      ref={ref}
      className="glass-card product-card reveal p-3 sm:p-4"
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className="relative overflow-hidden rounded-xl">
        <img src={product.image} alt={product.title} loading="lazy" className="w-full aspect-[3/4] object-cover product-img-zoom" />
        {product.soldOut ? (
          <div className="absolute inset-0 bg-charcoal/60 backdrop-blur-[2px] grid place-items-center">
            <span className="badge-crimson rotate-[-6deg] scale-110">SOLD OUT</span>
          </div>
        ) : product.stock ? (
          <span className="absolute top-3 left-3">
            <span className="badge-crimson">ONLY {product.stock} PIECES MADE</span>
          </span>
        ) : (
          <span className="absolute top-3 left-3">
            <span className="badge-acid">LIMITED DROP</span>
          </span>
        )}
        <span className="absolute bottom-3 left-3 badge-tech">{product.tag}</span>
      </div>

      <div className="pt-4 flex justify-between items-start gap-2">
        <div>
          <h3 className="font-semibold text-ink leading-snug text-sm">{product.title}</h3>
          <p className="text-xs text-ink/50 mt-1 capitalize">Drop 01 · {product.category}</p>
        </div>
        <span className="font-display text-acid text-lg">${product.price}</span>
      </div>

      <div className="pt-4">
        {product.soldOut ? (
          <button disabled className="btn-ghost w-full justify-center min-h-11 brightness-50 cursor-not-allowed">Sold Out</button>
        ) : (
          <button onClick={() => onAddToCart(product)} className="quick-add group min-h-11">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" /></svg>
            Quick Add
          </button>
        )}
      </div>
    </article>
  );
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    tag: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    soldOut: PropTypes.bool,
    stock: PropTypes.number,
  }).isRequired,
  index: PropTypes.number,
  onAddToCart: PropTypes.func.isRequired,
};