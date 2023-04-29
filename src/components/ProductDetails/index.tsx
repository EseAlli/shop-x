import React from "react";
import Image, { StaticImageData } from "next/image";
import Select from "@components/Select";
import { AiOutlineHeart } from "react-icons/ai";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { IProduct } from "context/types";

export const ProductCarousel = ({ images }: { images: string[] }) => {
  const content = () => {
    return images.map((image, index: number) => {
      return (
        <div key={index} className="relative">
          <Image
            width={700}
            height={475}
            sizes="100vw"
            style={{
              width: "100%",
              height: "auto",
              maxHeight: "inherit",
              objectFit: "contain",
            }}
            alt="slide"
            src={image}
          />
        </div>
      );
    });
  };
  var settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    appendDots: (dots: string) => (
      <div
        style={{
          backgroundColor: "transparent",
          borderRadius: "10px",
          padding: "10px",
        }}
      >
        <ul style={{ marginTop: "-70px" }}> {dots} </ul>
      </div>
    ),
  };
  return (
    <>
      <Slider {...settings}>{content()}</Slider>
    </>
  );
};

export const ColourPicker = ({
  sellingPrice,
  color,
}: {
  sellingPrice: string;
  color: string;
}) => {
  return (
    <div className="my-2 lg:my-4">
      <p>$ {sellingPrice}</p>
      <p>Color: {color}</p>
      {/* <div>
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
      </div> */}
    </div>
  );
};

export const ProductDetails = ({ product }: { product: IProduct }) => {
  return (
    <div className="mx-auto max-w-[95%] mb-4 md:mb-7">
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-7/12">
          {product?.images && <ProductCarousel images={product?.images} />}
        </div>
        <div className="w-full md:w-4/12 mx-auto md:py-4 lg:py-7 px-4">
          <div className="flex flex-col gap-2">
            <p className="text-xl md:text-3xl lg:text-4xl tracking-widest">
              {product?.brand}
            </p>
            <p className="text-sm">{product?.name}</p>
            <ColourPicker
              sellingPrice={product?.selling_price.toString()}
              color={product?.color}
            />

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
