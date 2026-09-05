import { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';

const SHIPPING_FLAT = 15;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const INITIAL_FORM = { name: '', email: '', address: '', city: '', zip: '' };

const PAY_METHODS = [
  {
    key: 'card',
    label: 'credit card',
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" /></svg>,
  },
  {
    key: 'apple',
    label: 'apple pay',
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-1.5a1.125 1.125 0 01-1.125-1.125V7.5" /><path strokeLinecap="round" strokeLinejoin="round" d="M14.25 4.5H15a2.25 2.25 0 012.25 2.25v13.875c0 .621-.504 1.125-1.125 1.125h-1.5a1.125 1.125 0 01-1.125-1.125V13.5M9.75 17.25h6M9.75 7.5h.75m5.25 3h.75" /></svg>,
  },
  {
    key: 'cyber',
    label: 'cyber pay',
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" /></svg>,
  },
];

export default function CheckoutModal({ isOpen, cartItems, subtotal, onClose, onComplete, showToast }) {
  const [form, setForm] = useState(INITIAL_FORM);
  const [payMethod, setPayMethod] = useState('card');
  const [processing, setProcessing] = useState(false);
  const [placedOrder, setPlacedOrder] = useState(false);
  const cardRef = useRef(null);
  const placedOrderRef = useRef(placedOrder);

  useEffect(() => {
    placedOrderRef.current = placedOrder;
  }, [placedOrder]);

  const orderCount = cartItems.reduce((sum, item) => sum + item.qty, 0);
  const shipping = orderCount === 0 || subtotal > 150 ? 0 : SHIPPING_FLAT;
  const grandTotal = subtotal + shipping;
  const freeShipping = shipping === 0 && subtotal > 0;

  const setField = (key) => (e) => setForm((prev) => ({ ...prev, [key]: e.target.value }));

  const handleClose = () => {
    if (placedOrderRef.current) {
      onComplete();
    }
    setProcessing(false);
    setPlacedOrder(false);
    setForm(INITIAL_FORM);
    setPayMethod('card');
    onClose();
  };

  const handleContinue = () => {
    handleClose();
  };

  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e) => {
      if (e.key === 'Escape') handleClose();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isOpen]);

  useEffect(() => {
    if (placedOrder && cardRef.current) {
      cardRef.current.scrollTop = 0;
    }
  }, [placedOrder]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const fields = e.currentTarget.elements;
    const firstEmpty = ['name', 'email', 'address', 'city', 'zip'].find((key) => {
      const field = fields[key];
      return field && !field.value.trim();
    });
    if (firstEmpty) {
      showToast('Please fill in all shipping details');
      fields[firstEmpty].focus();
      return;
    }
    if (!EMAIL_PATTERN.test(form.email.trim())) {
      showToast('Please enter a valid email address');
      return;
    }
    setProcessing(true);
    setTimeout(() => {
      setProcessing(false);
      setPlacedOrder(true);
    }, 1500);
  };

  return (
    <>
      <div
        onClick={handleClose}
        className={`fixed inset-0 z-[80] backdrop-blur-md bg-charcoal/70 transition-opacity duration-300${isOpen ? '' : ' opacity-0 pointer-events-none'}`}
      ></div>

      <div className={`fixed inset-0 z-[90] overflow-y-auto transition-opacity duration-300${isOpen ? '' : ' opacity-0 pointer-events-none'}`}>
        <div className="min-h-full flex items-start md:items-center justify-center p-4 md:p-6">
          <div ref={cardRef} className={`relative w-full max-w-4xl glass-card bg-charcoal/90 transition-transform duration-300 ease-in-out max-h-[90vh] overflow-y-auto checkout-scroll${isOpen ? '' : ' scale-95'}`}>
            <div className="sticky top-0 z-10 flex items-center justify-between px-6 md:px-8 py-5 border-b border-ink/10 bg-charcoal/90 backdrop-blur-md">
              <h3 className="flex items-center gap-3 font-display text-lg md:text-xl text-ink tracking-wide">
                <img src="/Outlook-ZENJI mono.png" alt="ZENJI" className="brand-icon" />
                <span className="text-crimson">//</span> <span className="text-acid">ORDER CHECKOUT</span>
              </h3>
              <button onClick={handleClose} className="min-h-11 min-w-11 grid place-items-center text-ink/60 transition-all duration-300 ease-in-out hover:text-crimson" aria-label="Close checkout">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
            </div>

            {placedOrder ? (
              <div className="flex flex-col items-center justify-center text-center px-6 py-16 md:py-24">
                <div className="success-badge mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                </div>
                <p className="font-display text-acid text-xl md:text-2xl tracking-wide">ORDER CONFIRMED #ZJ-8092</p>
                <p className="mt-4 text-ink/70 max-w-sm leading-relaxed">Thank you for joining the drop! A confirmation email has been dispatched.</p>
                <button onClick={handleContinue} className="btn-primary min-h-11 justify-center mt-10">Continue Shopping</button>
              </div>
            ) : (
              <form className="grid md:grid-cols-5 gap-8 p-6 md:p-8" noValidate onSubmit={handleSubmit}>
                <div className="md:col-span-3 space-y-8">
                  <div>
                    <p className="field-label">Shipping Details</p>
                    <div className="grid sm:grid-cols-2 gap-4 mt-4">
                      <div className="sm:col-span-2">
                        <label htmlFor="cf-name" className="input-label">Full Name</label>
                        <input id="cf-name" name="name" type="text" className="checkout-input" placeholder="Kaito Nakamura" value={form.name} onChange={setField('name')} />
                      </div>
                      <div className="sm:col-span-2">
                        <label htmlFor="cf-email" className="input-label">Email Address</label>
                        <input id="cf-email" name="email" type="email" className="checkout-input" placeholder="you@example.com" value={form.email} onChange={setField('email')} />
                      </div>
                      <div className="sm:col-span-2">
                        <label htmlFor="cf-address" className="input-label">Shipping Address</label>
                        <input id="cf-address" name="address" type="text" className="checkout-input" placeholder="5-1-1 Shinjuku, Shibuya..." value={form.address} onChange={setField('address')} />
                      </div>
                      <div>
                        <label htmlFor="cf-city" className="input-label">City</label>
                        <input id="cf-city" name="city" type="text" className="checkout-input" placeholder="Tokyo" value={form.city} onChange={setField('city')} />
                      </div>
                      <div>
                        <label htmlFor="cf-zip" className="input-label">Zip Code</label>
                        <input id="cf-zip" name="zip" type="text" className="checkout-input" placeholder="150-0002" value={form.zip} onChange={setField('zip')} />
                      </div>
                    </div>
                  </div>

                  <div>
                    <p className="field-label">Payment Method</p>
                    <div className="grid grid-cols-3 gap-3 mt-4">
                      {PAY_METHODS.map((method) => (
                        <button
                          key={method.key}
                          type="button"
                          onClick={() => setPayMethod(method.key)}
                          className={`pay-tab min-h-11${payMethod === method.key ? ' active' : ''}`}
                        >
                          {method.icon}
                          {method.label}
                        </button>
                      ))}
                    </div>

                    <div className={`pay-panel${payMethod === 'card' ? ' block' : ' hidden'}`}>
                      <div className="grid sm:grid-cols-2 gap-4 mt-5">
                        <div className="sm:col-span-2">
                          <label htmlFor="cf-card" className="input-label">Card Number</label>
                          <input id="cf-card" type="text" className="checkout-input" placeholder="4242 4242 4242 4242" defaultValue="4242 4242 4242 4242" />
                        </div>
                        <div>
                          <label htmlFor="cf-exp" className="input-label">Expiry</label>
                          <input id="cf-exp" type="text" className="checkout-input" placeholder="MM / YY" defaultValue="12 / 28" />
                        </div>
                        <div>
                          <label htmlFor="cf-cvv" className="input-label">CVV</label>
                          <input id="cf-cvv" type="text" className="checkout-input" placeholder="123" defaultValue="123" />
                        </div>
                      </div>
                    </div>

                    <div className={`pay-panel${payMethod === 'apple' ? ' block' : ' hidden'}`}>
                      <p className="text-sm text-ink/60 mt-5">You'll be redirected to the native Apple Pay sheet to authorize your purchase securely.</p>
                    </div>

                    <div className={`pay-panel${payMethod === 'cyber' ? ' block' : ' hidden'}`}>
                      <p className="text-sm text-ink/60 mt-5">Connect a wallet address to complete payment in ZJ-ETH. Funds are locked until the drop ships.</p>
                    </div>
                  </div>
                </div>

                <div className="md:col-span-2">
                  <div className="bg-ink/5 border border-ink/10 rounded-2xl p-5 md:p-6">
                    <p className="flex items-center gap-2 text-sm font-semibold text-ink uppercase tracking-wider mb-5">
                      <span className="w-1.5 h-1.5 bg-acid rounded-full"></span> Order Summary
                    </p>

                    <div className="space-y-4 max-h-48 overflow-y-auto checkout-scroll pr-1">
                      {cartItems.length ? (
                        cartItems.map((item) => (
                          <div key={item.id} className="flex gap-3 items-center">
                            <img src={item.image} alt={item.title} className="w-12 h-12 object-cover rounded-lg shrink-0" />
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-medium text-ink truncate">{item.title}</p>
                              <p className="text-xs text-ink/50">Qty {item.qty}</p>
                            </div>
                            <span className="text-acid text-sm font-display shrink-0">${item.price * item.qty}</span>
                          </div>
                        ))
                      ) : (
                        <p className="text-ink/50 text-sm py-4">No items in cart.</p>
                      )}
                    </div>

                    <div className="mt-6 pt-5 border-t border-ink/10 space-y-3 text-sm">
                      <div className="flex justify-between">
                        <span className="text-ink/60">Subtotal</span>
                        <span className="text-ink font-semibold">${subtotal}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-ink/60">Shipping</span>
                        <span className="text-ink font-semibold">${shipping}</span>
                      </div>
                      <div className="flex justify-between pt-3 border-t border-ink/10">
                        <span className="font-display text-ink">Grand Total</span>
                        <span className="font-display text-acid text-xl">${grandTotal}</span>
                      </div>
                      {freeShipping && <p className="text-xs text-acid/80">🎉 FREE shipping unlocked (drops over $150)</p>}
                    </div>
                  </div>
                </div>

                <div className="md:col-span-5">
                  <button type="submit" disabled={processing} className={`btn-primary min-h-11 w-full justify-center${processing ? ' cursor-wait' : ''}`}>
                    <span>{processing ? 'PROCESSING DROP...' : 'Place Order'}</span>
                    {processing && <span className="co-spinner" aria-hidden="true"></span>}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

CheckoutModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  cartItems: PropTypes.arrayOf(PropTypes.object).isRequired,
  subtotal: PropTypes.number.isRequired,
  onClose: PropTypes.func.isRequired,
  onComplete: PropTypes.func.isRequired,
  showToast: PropTypes.func.isRequired,
};