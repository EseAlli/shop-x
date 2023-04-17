import React, { createContext, useState, useReducer } from "react";
import { ProviderProps, CartContextType, IProduct } from "./types";

export const CartContext = createContext<CartContextType | null>(null);

const cartReducer = (state: any, action: { type: string; payload: any }) => {
  const { type, payload } = action;

  switch (type) {
    case "ADD":
      return {
        ...state,
        items: payload.items,
      };

    case "REMOVE":
      return {
        ...state,
        items: payload.items,
      };

    default:
      throw new Error("No case for that type");
  }
};

export const CartProvider = ({ children }: ProviderProps) => {
  const [state, dispatch] = useReducer(cartReducer, { items: [] });
  const [cartModal, setCartModal] = useState(false);
  const [currentItem, setCurrentItem] = useState<IProduct | null>(null);

  const addToCart = (product: IProduct) => {
    const updatedCart = [...state.items, product];

    dispatch({
      type: "ADD",
      payload: {
        items: updatedCart,
      },
    });
  };

  const removeFromCart = (id: number) => {
    const updatedCart = state.items.filter(
      (currentProduct: IProduct) => currentProduct.id !== id
    );

    dispatch({
      type: "REMOVE",
      payload: {
        items: updatedCart,
      },
    });
  };

  const value = {
    items: state.items,
    addToCart,
    removeFromCart,
    toggleCartModal: cartModal,
    setCartModal,
    currentItem,
    setCurrentItem,
  };

  return (
    <CartContext.Provider value={value}>
      <>{children}</>
    </CartContext.Provider>
  );
};
