import { ShoppingCart } from 'lucide-react';

const CarWidget = ({ count }) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
      <ShoppingCart size={24} />
      <span>{count}</span>
    </div>
  );
};

export default CarWidget;
import { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartCount, setCartCount] = useState(0);

  const addToCart = () => setCartCount(prev => prev + 1);
  const removeFromCart = () => setCartCount(prev => Math.max(prev - 1, 0));

  return (
    <CartContext.Provider value={{ cartCount, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext)
  
