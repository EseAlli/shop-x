import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from "next/image";
import woman from "../../../public/slider-women-1.jpg";
import women from "../../../public/slide-women-2.avif";
import Link from "next/link";

const index = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    autoplaySpeed: 2000,
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
      <Slider {...settings}>
        <div className="relative">
          <Image
            width={700}
            height={475}
            sizes="100vw"
            style={{
              width: "100%",
              height: "auto",
              maxHeight: "600px",
              objectFit: "cover",
            }}
            alt="slide"
            src={woman}
          />
          <div className="absolute bottom-4 left-4 md:left-14 md:bottom-20 flex flex-col gap-2">
            <p className="text-white  md:text-xl">Fresh palettes</p>
            <p className="text-white md:text-4xl">Pretty pastels</p>
            <Link
              href="/"
              className="px-4 font-medium bg-white py-2 self-start"
            >
              Shop
            </Link>
          </div>
        </div>
        <div className="relative">
          <Image
            width={700}
            height={475}
            sizes="100vw"
            style={{
              width: "100%",
              height: "auto",
              maxHeight: "600px",
              objectFit: "cover",
            }}
            alt="slide"
            src={women}
          />
          <div className="absolute bottom-4 left-4 md:left-14 md:bottom-20 flex flex-col gap-2">
            <p className="text-white  md:text-xl">Fresh palettes</p>
            <p className="text-white md:text-4xl">Pretty pastels</p>
            <Link
              href="/"
              className="px-4 font-medium bg-white py-2 self-start"
            >
              Shop
            </Link>
          </div>
        </div>
        <div className="relative">
          <Image
            width={700}
            height={475}
            sizes="100vw"
            style={{
              width: "100%",
              height: "auto",
              maxHeight: "600px",
              objectFit: "cover",
            }}
            alt="slide"
            src={woman}
          />
          <div className="absolute bottom-4 left-4 md:left-14 md:bottom-20 flex flex-col gap-2">
            <p className="text-white  md:text-xl">Fresh palettes</p>
            <p className="text-white md:text-4xl">Pretty pastels</p>
            <Link
              href="/"
              className="px-4 font-medium bg-white py-2 self-start"
            >
              Shop
            </Link>
          </div>
        </div>
      </Slider>
    </>
  );
};

export default index;
