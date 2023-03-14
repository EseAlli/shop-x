import Image from "next/image";
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
