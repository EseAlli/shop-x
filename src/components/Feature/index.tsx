import Image from "next/image";
import React from "react";
import feature from "../../../public/feature.avif";

export const Single = () => {
  return (
    <div className="bg-black text-white">
      <div className="container mx-auto px-3 py-4 md:py-7 lg:py-12">
        <div className="mx-auto w-full md:w-[50%]">
          <p className="uppercase text-xl md:text-4xl lg:text-6xl text-center">
            UP TO 50% OFF MAJOR LAYERS!
          </p>
          <p className="text-center md:text-xl lg:text-2xl my-3">
            COATS, KNITS, BOOTS & MORE
          </p>
          <p className="text-center text-xs font-thin">
            Limited time only. Selected styles marked down as shown.
          </p>
        </div>
      </div>
    </div>
  );
};

export const DoubleFeature = () => {
  return (
    <div>
      <div className="grid grid-cols-2 ">
        <p>1</p>
        <Image
          src={feature}
          alt="feature"
          width={400}
          height={400}
          style={{
            width: "400px",
            height: "400px",
            objectFit: "cover",
          }}
        />
      </div>
    </div>
  );
};
