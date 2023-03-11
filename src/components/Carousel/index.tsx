import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from "next/image";
import woman from "../../../public/slider-women-1.jpg";
import women from "../../../public/slide-women-2.avif";

const index = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="max-h-[40vh]">
      <Slider {...settings}>
        <div>
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
        </div>
        <div>
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
        </div>
        <div>
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
        </div>
      </Slider>
    </div>
  );
};

export default index;
