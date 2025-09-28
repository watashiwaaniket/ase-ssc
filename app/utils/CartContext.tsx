"use client";
import React, { createContext, ReactNode, useState } from "react";

interface CartNavContextType {
  cartBadge: number;
  setCartBadge: React.Dispatch<React.SetStateAction<number>>;
}

export const CartNavContext = createContext<CartNavContextType>({
    cartBadge: 0,
    setCartBadge: () => {}
});

export const CartNavProvider = ({ children } : {
  children : ReactNode;
}) => {
    const [cartBadge, setCartBadge] = useState(0);

    return (
    <CartNavContext.Provider value={{ cartBadge, setCartBadge }}>
      {children}
    </CartNavContext.Provider>
  );
}

export const useCartNavContext = () => {
  const context = React.useContext(CartNavContext);
  return context
}