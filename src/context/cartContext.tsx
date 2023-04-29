import React, {
  createContext,
  useState,
  useReducer,
  useCallback,
  useEffect,
} from "react";
import { ProviderProps, CartContextType, IProduct } from "./types";
import { Cart } from "@components/Cart/types";

export const CartContext = createContext<CartContextType | null>(null);

const cartReducer = (
  state: { items: Cart[] },
  action: { type: string; payload: { items: Cart[] } }
) => {
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
  const [currentItem, setCurrentItem] = useState<IProduct | undefined>(
    undefined
  );

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state.items));
    setCartModal(false);
  }, [state.items]);

  const addToCart = useCallback(
    (product: Cart) => {
      const updatedCart = [...state.items, product];
      dispatch({
        type: "ADD",
        payload: {
          items: updatedCart,
        },
      });
    },
    [state.items]
  );

  const removeFromCart = (id: number) => {
    const updatedCart = state.items.filter(
      (currentProduct: Cart) => currentProduct.id !== id
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
