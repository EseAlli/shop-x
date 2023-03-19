import React from "react";
import item from "../../../public/kid.avif";
import Image from "next/image";
import Carousel from "@components/Carousel";
import Select from "@components/Select";

import { homeData } from "@db/homeData";
import { AiOutlineHeart } from "react-icons/ai";

export const index = () => {
  return <div>index</div>;
};

export const ColourPicker = () => {
  return (
    <div className="my-2 lg:my-4">
      <p>$ 36.90</p>
      <p>Color: Black</p>
      <div>
        <div className="flex flex-wrap gap-2">
          <div className="hover:cursor-pointer ">
            <Image src={item} width={75} height={60} alt="color-black" />
          </div>
          <div className="hover:cursor-pointer ">
            <Image src={item} width={75} height={60} alt="color-black" />
          </div>{" "}
          <div className="hover:cursor-pointer ">
            <Image src={item} width={75} height={60} alt="color-black" />
          </div>{" "}
          <div className="hover:cursor-pointer ">
            <Image src={item} width={75} height={60} alt="color-black" />
          </div>
        </div>
      </div>
    </div>
  );
};

export const ProductDetails = () => {
  const { carousel } = homeData.women;

  return (
    <div className="mx-auto max-w-[95%] mb-4 md:mb-7">
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-7/12">
          <Carousel items={carousel} autoplay={false} />
        </div>
        <div className="w-full md:w-4/12 mx-auto md:py-4 lg:py-7 px-4">
          <div className="flex flex-col gap-2">
            <p className="text-xl md:text-3xl lg:text-4xl tracking-widest">
              name it
            </p>
            <p className="text-sm">Jeans {`"NKMTHEO"`}</p>
            <ColourPicker />

            <div className="w-[60%]">
              <Select defaultOption="Select Size" />
              <div className="flex gap-3 items-center py-1 md:py-3">
                <div className="my-3 w-full">
                  <button className="bg-black text-white w-full py-3 lg:py-4">
                    Add to basket
                  </button>
                  <p className="hidden">Only a few available!</p>
                </div>
                <div>
                  <AiOutlineHeart size="1.25rem" />
                </div>
              </div>
            </div>

            <div>
              <ul className="flex flex-col gap-1 text-sm text-slate-500 uppercase">
                <li>Free Shipping</li>
                <li>30 day return policy</li>
                <li>secure payment</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
