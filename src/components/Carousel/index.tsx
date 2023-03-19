import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from "next/image";
import Link from "next/link";

const index = ({ items, autoplay }: any) => {
  const content = () => {
    return items.map(({ image, tagline, title, url }: any, index: number) => {
      return (
        <div
          key={index}
          className="relative md:max-h-[600px] 2xl:max-h-[725px]"
        >
          <Image
            width={700}
            height={475}
            sizes="100vw"
            style={{
              width: "100%",
              height: "auto",
              maxHeight: "inherit",
              objectFit: "cover",
            }}
            alt="slide"
            src={image}
          />
          <div className="absolute bottom-4 left-4 md:left-14 lg:left-20 xl:left-24 md:bottom-14 flex flex-col gap-2">
            <p className="text-white  md:text-xl">{tagline}</p>
            <p className="text-white md:text-4xl">{title}</p>
            <Link
              href={url}
              className="px-4 font-medium bg-white py-2 self-start"
            >
              Shop
            </Link>
          </div>
        </div>
      );
    });
  };
  var settings = {
    dots: true,
    infinite: true,
    speed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: autoplay || false,
    autoplaySpeed: 9000,
    appendDots: (dots: any) => (
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

export default index;
