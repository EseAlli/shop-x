import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";
import { CartContext } from "context/cartContext";
import { CartContextType, IProduct } from "context/types";
import { useRouter } from "next/router";

export const CCard = ({ content, url }: { content: string; url: string }) => {
  return (
    <Link href={url}>
      <div className="text-black bg-[#f2f2f2] px-8 py-4 text-center">
        <p className="capitalize">{content}</p>
      </div>
    </Link>
  );
};

export const ImageCard = ({ details }: { details: IProduct }) => {
  const { images: src, name, brand, selling_price: price, id } = details;
  const router = useRouter();

  return (
    <div
      className="hover:cursor-pointer"
      onClick={() => {
        router.push(`p/${id}`);
      }}
    >
      <Image
        src={src[0]}
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

export const ProductCard = ({
  product,
  add,
}: {
  product: IProduct;
  add?: boolean;
}) => {
  const { id, images, color, selling_price, brand, name } = product;
  const { setCartModal, setCurrentItem } = useContext(
    CartContext
  ) as CartContextType;

  const addToCart = (product: IProduct) => {
    setCartModal(true);
    setCurrentItem(product);
  };
  return (
    <div className="group hover:max-h-80 z-10">
      <Link href={`/p/${id}`}>
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
        </div>
      </Link>
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
        </div>
        <div
          className={
            add
              ? "flex my-5 w-full"
              : "hidden my-5 w-full group-hover:flex -z-10"
          }
        >
          <button
            className="bg-black text-center text-white w-full py-4 text-sm font-semibold"
            onClick={() => addToCart(product)}
          >
            Add
          </button>
        </div>
      </div>
    </div>
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
