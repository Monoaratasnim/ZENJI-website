import PropTypes from 'prop-types';
import ProductCard from './ProductCard.jsx';

export default function ProductGrid({ products, onAddToCart }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
      {products.length ? (
        products.map((product, index) => (
          <ProductCard key={product.id} product={product} index={index} onAddToCart={onAddToCart} />
        ))
      ) : (
        <div className="col-span-full text-center py-20">
          <p className="font-display text-2xl text-ink/60">No matches found</p>
          <p className="text-sm text-ink/40 mt-2">Try a different filter or search term.</p>
        </div>
      )}
    </div>
  );
}

ProductGrid.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
  onAddToCart: PropTypes.func.isRequired,
};