import Modal from "@components/Modal";
import React, { FC, useContext, useState } from "react";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { CartContext } from "context/cartContext";
import { CartContextType } from "context/types";
import Image from "next/image";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const CartModal: FC<Props> = ({ isOpen, onClose }) => {
  const { currentItem } = useContext(CartContext) as CartContextType;
  const [currentImage, setCurrentImage] = useState(currentItem?.images[0]);
  return (
    <>
      <Modal title="" onClose={onClose} isOpen={isOpen}>
        <div className="grid grid-cols-2 gap-x-10 px-3">
          <div>
            <div>
              <Image
                //@ts-ignore
                src={currentImage}
                height={600}
                width={400}
                alt={`${currentItem?.name}`}
                style={{
                  height: "100%",
                  width: "500px",
                  objectFit: "contain",
                }}
                className="group-hover:hidden"
              />
            </div>

            <div className="flex gap-2 mt-3">
              {currentItem?.images
                .slice(0, 5)
                .map((img: string, index: number) => (
                  <Image
                    key={index}
                    src={img}
                    height={600}
                    width={400}
                    alt={`${currentItem?.name}`}
                    style={{
                      height: "100%",
                      width: "50px",
                      objectFit: "contain",
                    }}
                    className={
                      currentImage === img
                        ? "hover:cursor-pointer border border-black p-1"
                        : "hover:cursor-pointer"
                    }
                    onClick={() => setCurrentImage(img)}
                  />
                ))}
            </div>
          </div>
          <div>
            <div className="flex flex-col gap-y-2">
              <p className="uppercase">{currentItem?.brand}</p>
              <p>{currentItem?.name}</p>
              <p className="my-2">${currentItem?.selling_price}</p>
              <p>Color: {currentItem?.color}</p>
            </div>

            <div className="flex flex-col gap-y-3 mt-3 w-5/6">
              <select className="border border-black p-2 mb-1">
                <option>Select size</option>
                <option>XS</option>
                <option>SM</option>
                <option>MD</option>
              </select>

              <button className="bg-black text-white py-3">Add to cart</button>
              <Link
                href={`p/${currentItem?.id}`}
                className="self-end text-sm font-semibold flex items-center gap-1"
              >
                More details <BsArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default CartModal;
