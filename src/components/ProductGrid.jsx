import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ProductCard from './ProductCard.jsx';

const INITIAL_COUNT = 8;

export default function ProductGrid({ products, onAddToCart }) {
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);

  const visibleProducts = products.slice(0, visibleCount);
  const hasMore = products.length > visibleCount;

  useEffect(() => {
    setVisibleCount(INITIAL_COUNT);
  }, [products]);

  const loadMore = () => setVisibleCount(products.length);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
      {visibleProducts.length ? (
        visibleProducts.map((product, index) => (
          <ProductCard key={product.id} product={product} index={index} onAddToCart={onAddToCart} />
        ))
      ) : (
        <div className="col-span-full text-center py-20">
          <p className="font-display text-2xl text-ink/60">No matches found</p>
          <p className="text-sm text-ink/40 mt-2">Try a different filter or search term.</p>
        </div>
      )}
      {hasMore && (
        <div className="col-span-full flex justify-center py-8">
          <button
            type="button"
            onClick={loadMore}
            className="px-8 py-4 font-mono text-sm tracking-[0.2em] text-[#CCFF00] border border-[#CCFF00] hover:bg-[#CCFF00] hover:text-[#0F0F12] transition-all duration-300"
          >
            VIEW ALL COLLECTIONS
          </button>
        </div>
      )}
    </div>
  );
}

ProductGrid.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
  onAddToCart: PropTypes.func.isRequired,
};