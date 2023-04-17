import React, { useState, useContext } from "react";
import CategorySidebar from "@components/Categories/CategorySidebar";
import { Props } from "./types";
import CartModal from "@components/Cart/CartModal";
import { CartContext } from "context/cartContext";
import { CartContextType } from "context/types";

const InnerLayout = ({ children }: Props) => {
  const { toggleCartModal, setCartModal } = useContext(
    CartContext
  ) as CartContextType;
  const onClose = () => {
    setCartModal(false);
  };
  return (
    <div className="p-3 h-1/2 flex flex-1 w-full">
      <div className="flex flex-col md:flex-row w-full">
        <CategorySidebar />
        <div className="container mx-auto w-full md:w-9/12 py-5 lg:py-8 flex flex-col">
          <>{children}</>
        </div>
      </div>
      <CartModal isOpen={toggleCartModal} onClose={onClose} />
    </div>
  );
};

export default InnerLayout;
