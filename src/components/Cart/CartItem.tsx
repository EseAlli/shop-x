import React from "react";
import { Cart } from "./types";
import Image from "next/image";
import { MdDeleteOutline } from "react-icons/md";
import { HiOutlineHeart } from "react-icons/hi2";

const CartItem = ({ item }: { item: Cart }) => {
  const {
    images,
    name,
    brand,
    color,
    size,
    selling_price: price,
    quantity,
  } = item;
  return (
    <div className="w-full my-3">
      <p>Parcel will be delivered by SHOP-X</p>
      <div className="flex gap-4 my-4 text-sm">
        <Image src={images[0]} alt={name} height={100} width={100} />
        <div className="w-full">
          <div className="flex justify-between">
            <div>
              <p>{brand}</p>
              <p>{name}</p>
              <p>Colour: {color}</p>
              <p>Size: {size}</p>
            </div>
            <div>
              <select
                className="border border-black px-3 py-1 text-base"
                defaultValue={quantity}
              >
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </div>
          </div>
          <div className="flex justify-between mt-4">
            <div className="flex gap-3 text-gray-400">
              <div className="flex items-center gap-1 hover:cursor-pointer">
                <MdDeleteOutline size="1.25rem" /> <span>Remove</span>
              </div>
              <p>|</p>
              <div className="flex items-center gap-1 hover:cursor-pointer">
                <HiOutlineHeart size="1.25rem" />
                <span>Move to wish list</span>
              </div>
            </div>
            <p>${Number(price) * quantity}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
