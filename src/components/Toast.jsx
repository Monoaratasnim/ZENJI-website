import PropTypes from 'prop-types';

export default function Toast({ message }) {
  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-[100] px-5 py-3 rounded-xl glass-card bg-charcoal/90 text-sm text-ink pointer-events-none opacity-100 translate-y-0 transition-all duration-300 ease-in-out shadow-glow">
      <span className="text-acid font-semibold">{message}</span>
    </div>
  );
}

Toast.propTypes = {
  message: PropTypes.string.isRequired,
};