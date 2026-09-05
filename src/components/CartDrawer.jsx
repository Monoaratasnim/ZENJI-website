import PropTypes from 'prop-types';

export default function CartDrawer({ isOpen, cartItems, subtotal, onClose, onRemove, onIncrement, onDecrement, onCheckout }) {
  return (
    <>
      <div
        onClick={onClose}
        className={`fixed inset-0 z-[60] bg-charcoal/70 backdrop-blur-sm transition-opacity duration-300${isOpen ? '' : ' opacity-0 pointer-events-none'}`}
      ></div>

      <aside className={`fixed top-0 right-0 h-full w-full max-w-md z-[70] bg-charcoal border-l border-ink/10 transition-transform duration-500 ease-in-out flex flex-col nav-blur${isOpen ? '' : ' translate-x-full'}`}>
        <div className="flex items-center justify-between p-6 border-b border-ink/10 min-h-[72px]">
          <h3 className="font-display text-xl text-ink">Your Cart</h3>
          <button onClick={onClose} className="min-h-11 min-w-11 grid place-items-center text-ink/60 transition-all duration-300 ease-in-out hover:text-crimson" aria-label="Close cart">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-5">
          {cartItems.length ? (
            cartItems.map((item) => (
              <div key={item.id} className="flex gap-4 py-4 border-b border-ink/10">
                <img src={item.image} alt={item.title} className="w-16 h-16 object-cover rounded-xl shrink-0" />
                <div className="flex-1">
                  <div className="flex justify-between">
                    <p className="text-sm font-semibold text-ink">{item.title}</p>
                    <button onClick={() => onRemove(item.id)} className="min-h-11 min-w-11 grid place-items-center text-ink/40 hover:text-crimson transition-colors" aria-label="Remove">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                  </div>
                  <p className="text-xs text-ink/50 mt-1">{item.tag}</p>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-acid text-sm font-display">${item.price * item.qty}</span>
                    <div className="flex items-center gap-2">
                      <button onClick={() => onDecrement(item.id)} className="qty-btn min-h-11 min-w-11" aria-label="Decrease quantity">−</button>
                      <span className="text-xs text-ink/70 w-6 text-center">{item.qty}</span>
                      <button onClick={() => onIncrement(item.id)} className="qty-btn min-h-11 min-w-11" aria-label="Increase quantity">+</button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-ink/50 text-center mt-10">Your cart is empty.<br />Time to change that.</p>
          )}
        </div>

        <div className="p-6 border-t border-ink/10">
          <div className="flex justify-between mb-2">
            <span className="text-ink/60 text-sm">Subtotal</span>
            <span className="font-display text-xl text-acid">${subtotal}</span>
          </div>
          <div className="flex justify-between mb-4 text-xs text-ink/40">
            <span>Shipping</span>
            <span>Calculated at checkout</span>
          </div>
          <button onClick={onCheckout} disabled={!cartItems.length} className="btn-primary min-h-11 w-full justify-center disabled:opacity-40 disabled:pointer-events-none">Checkout</button>
        </div>
      </aside>
    </>
  );
}

CartDrawer.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  cartItems: PropTypes.arrayOf(PropTypes.object).isRequired,
  subtotal: PropTypes.number.isRequired,
  onClose: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
  onCheckout: PropTypes.func.isRequired,
};