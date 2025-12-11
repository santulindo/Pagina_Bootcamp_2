import React, { createContext, useReducer, useContext } from 'react';
import { cartReducer } from './cartReducer';
import { CartState, Product } from './CartTypes';

interface CartContextProps {
  state: CartState;
  addToCart: (product: Product) => void;
  removeFromCart: (id: string) => void;
  increaseQty: (id: string) => void;
  decreaseQty: (id: string) => void;
  clearCart: () => void;
}

const initialState: CartState = {
  items: [],
  total: 0,
};

const CartContext = createContext<CartContextProps | null>(null);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addToCart = (product: Product) =>
    dispatch({ type: 'ADD_TO_CART', payload: product });

  const removeFromCart = (id: string) =>
    dispatch({ type: 'REMOVE_FROM_CART', payload: id });

  const increaseQty = (id: string) =>
    dispatch({ type: 'INCREASE_QUANTITY', payload: id });

  const decreaseQty = (id: string) =>
    dispatch({ type: 'DECREASE_QUANTITY', payload: id });

  const clearCart = () => dispatch({ type: 'CLEAR_CART' });

  return (
    <CartContext.Provider
      value={{
        state,
        addToCart,
        removeFromCart,
        increaseQty,
        decreaseQty,
        clearCart,
      }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context)
    throw new Error('useCart must be used inside <CartProvider>');
  return context;
};
