import PropTypes from 'prop-types';

export default function Container({ className = '', children }) {
  return (
    <div className={`mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
}

Container.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};