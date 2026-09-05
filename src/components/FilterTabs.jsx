import PropTypes from 'prop-types';
import useReveal from '../hooks/useReveal.js';

const label = (category) => category.charAt(0).toUpperCase() + category.slice(1);

export default function FilterTabs({ categories, activeFilter, onChange }) {
  const ref = useReveal();

  return (
    <div ref={ref} className="flex flex-wrap gap-3 mb-10 reveal" role="tablist">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onChange(category)}
          className={`filter-tab${activeFilter === category ? ' active' : ''}`}
        >
          {label(category)}
        </button>
      ))}
    </div>
  );
}

FilterTabs.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  activeFilter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};