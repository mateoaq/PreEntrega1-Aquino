import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const TAX_RATE = 0.21;

  const subtotal = (items) => {
    return items
      .map(({ price, stock }) => price * stock)
      .reduce((sum, i) => sum + i, 0);
  };

  const invoiceSubtotal = subtotal(cartItems);
  const invoiceTaxes = TAX_RATE * invoiceSubtotal;
  const invoiceTotal = invoiceTaxes + invoiceSubtotal;

  const addItems = (item) => {
    setCartItems((prev) => [...prev, item]);
  };

  const resetCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addItems,
        resetCart,
        invoiceTotal,
        invoiceTaxes,
        invoiceSubtotal,
        TAX_RATE,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
