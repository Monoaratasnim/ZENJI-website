import PropTypes from 'prop-types';
import useReveal from '../hooks/useReveal.js';

export default function Reveal({ className = '', children }) {
  const ref = useReveal();

  return (
    <div ref={ref} className={`reveal ${className}`}>
      {children}
    </div>
  );
}

Reveal.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};