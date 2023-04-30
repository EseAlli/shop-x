import React, { useState } from "react";
import { RxCaretDown, RxCaretUp } from "react-icons/rx";

const Total = ({ totalPrice }: { totalPrice: number }) => {
  const [showVoucher, setShowVoucher] = useState(false);
  return (
    <>
      <div className="bg-white p-5">
        <p className="font-semibold text-xl">Total</p>
        <div className="grid gap-y-5 mt-2">
          <div className="flex items-center justify-between">
            <p>Subtotal</p>
            <p>${totalPrice}</p>
          </div>
          <div className="flex items-center justify-between">
            <p>Delivery</p>
            <p>$0.00</p>
          </div>
          <hr />
          <div className="flex items-center justify-between mt-1">
            <p className="font-semibold">Total (VAT included)</p>
            <p>${totalPrice}</p>
          </div>
          <button className="w-full bg-black text-white py-3 my-5">
            Proceed to Checkout
          </button>
        </div>
      </div>
      <div className="my-3 bg-white p-5">
        <div className="w-full">
          <p className="flex w-full items-center justify-between">
            Add a voucher (Optional){" "}
            <span
              className="hover:cursor-pointer focus:rotate-180"
              onClick={() => setShowVoucher(!showVoucher)}
            >
              {showVoucher ? (
                <RxCaretUp size="1.5rem" />
              ) : (
                <RxCaretDown size="1.5rem" />
              )}
            </span>
          </p>
        </div>

        {showVoucher && (
          <div className="w-full my-7 ">
            <label className="text-sm">
              Enter or paste a discount code here
            </label>
            <input className="border border-gray-300 w-3/4 py-1 mt-1" />
          </div>
        )}
      </div>
    </>
  );
};

export default Total;
