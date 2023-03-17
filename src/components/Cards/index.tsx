import Image from "next/image";
import Link from "next/link";
import React from "react";
import kid from "../../../public/kid.avif";

export const CCard = ({ content }: any) => {
  return (
    <div className="text-black bg-[#f2f2f2] px-8 py-4 text-center">
      <p className="capitalize">{content}</p>
    </div>
  );
};

export const ImageCard = ({ details }: any) => {
  const { image: src, name, brand, price } = details;

  return (
    <div className="hover:cursor-pointer">
      <Image
        src={src}
        height={400}
        width={400}
        alt="women-popular"
        style={{
          height: "500px",
          width: "500px",
          objectFit: "cover",
        }}
      />
      <div className="mt-2">
        <p className="uppercase text-xs font-semibold">{name}</p>
        <p className="font-thin text-sm">${price}</p>
        <p className="text-xs uppercase">{brand}</p>
      </div>
    </div>
  );
};

export const ProductCard = ({}) => {
  return (
    <Link href="/p">
      <div className="hover:cursor-pointer">
        <Image
          src={kid}
          height={400}
          width={400}
          alt="kid"
          style={{
            minHeight: "400px",
            height: "auto",
            width: "500px",
            objectFit: "cover",
          }}
        />
        <div className="container mx-auto px-3">
          <div className="my-2">
            <p className="text-[10px] font-semibold uppercase">Brand it</p>
            <p className="text-[12px]">Cool Jacket</p>
            <div className="text-[10px] my-2">
              <p>$ 43.90</p>
              <p className="line-through">$ 49.90</p>
            </div>
            <div className="flex gap-1">
              <div className="p-1.5 rounded-full bg-black w-px h-px"></div>
              <div className="p-1.5 rounded-full bg-slate-500 w-px h-px"></div>
              <div className="p-1.5 rounded-full bg-black w-px h-px"></div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
