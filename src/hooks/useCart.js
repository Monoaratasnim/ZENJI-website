import { useCallback, useMemo, useState } from 'react';

export default function useCart() {
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);

  const cartCount = useMemo(() => cart.reduce((sum, item) => sum + item.qty, 0), [cart]);

  const cartSubtotal = useMemo(() => cart.reduce((sum, item) => sum + item.price * item.qty, 0), [cart]);

  const addToCart = useCallback((product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) => (item.id === product.id ? { ...item, qty: item.qty + 1 } : item));
      }
      return [...prev, { ...product, qty: 1 }];
    });
    setCartOpen(true);
  }, []);

  const removeFromCart = useCallback((id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  }, []);

  const incrementItem = useCallback((id) => {
    setCart((prev) => prev.map((item) => (item.id === id ? { ...item, qty: item.qty + 1 } : item)));
  }, []);

  const decrementItem = useCallback((id) => {
    setCart((prev) => prev.map((item) => (item.id === id ? { ...item, qty: Math.max(1, item.qty - 1) } : item)));
  }, []);

  const clearCart = useCallback(() => {
    setCart([]);
  }, []);

  const openCart = useCallback(() => setCartOpen(true), []);
  const closeCart = useCallback(() => setCartOpen(false), []);

  return {
    cart,
    cartCount,
    cartSubtotal,
    cartOpen,
    addToCart,
    removeFromCart,
    incrementItem,
    decrementItem,
    clearCart,
    openCart,
    closeCart,
  };
}