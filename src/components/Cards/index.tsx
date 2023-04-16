import Image from "next/image";
import Link from "next/link";
import React from "react";

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

export const ProductCard = ({ product, add }: any) => {
  const { id, images, color, selling_price, brand, name } = product;
  return (
    <Link href={`/p/${id}`} className="group hover:max-h-80 z-10">
      <div className="hover:cursor-pointer">
        <Image
          src={images[0]}
          height={600}
          width={400}
          alt={name}
          style={{
            height: "100%",
            width: "500px",
            objectFit: "contain",
          }}
          className="group-hover:hidden"
        />
        <Image
          src={images[1]}
          height={600}
          width={400}
          alt={name}
          style={{
            height: "100%",
            width: "500px",
            objectFit: "contain",
          }}
          className="group-hover:block hidden"
        />
        <div className="container mx-auto px-3 group-hover:-translate-y-20 transition group-hover:delay-200 group-hover:bg-white group-hover:py-2">
          <div className="my-2">
            <p className="text-[10px] font-semibold uppercase">{brand}</p>
            <p className="text-[12px]">{name}</p>
            <div className="text-[10px] my-2">
              <p>$ {selling_price}</p>
              {/* <p className="line-through">$ 49.90</p> */}
            </div>
            <div className="flex gap-1">
              <div className="p-1.5 rounded-full bg-black w-px h-px"></div>
              <div className="p-1.5 rounded-full bg-slate-500 w-px h-px"></div>
              <div className="p-1.5 rounded-full bg-black w-px h-px"></div>
            </div>

            <div
              className={
                add
                  ? "flex my-5 w-full"
                  : "hidden my-5 w-full group-hover:flex -z-10"
              }
            >
              <button className="bg-black text-center text-white w-full py-4 text-sm font-semibold">
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export const ProductGallery = () => {
  return (
    <div className="max-w-[90%] mx-auto">
      <div className="grid grid-flow-col">
        <p>1</p>
        <p>1</p>
        <p>1</p>
      </div>
    </div>
  );
};
