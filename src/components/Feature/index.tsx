import Image, { StaticImageData } from "next/image";
import React from "react";

export const Single = () => {
  return (
    <div className="bg-black text-white my-3 md:my-8 xl:my-24">
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

export const DoubleFeature = ({
  feature,
}: {
  feature: { tagline: string; title: string; image: StaticImageData };
}) => {
  return (
    <div className="my-5 md:my-14 xl:my-24 2xl:container mx-auto px-2 md:px-4 lg:px-8">
      <div className="flex ">
        <div className="bg-[#8EBADE] w-[80%] text-white">
          <div className="flex items-center max-w-xl mx-auto h-full px-4">
            <div>
              <p className="md:text-xl">{feature.tagline}</p>
              <p className="text-xl md:text-3xl lg:text-5xl">{feature.title}</p>
              <p className="my-3 md:my-8 py-1 px-5 bg-white uppercase w-24 text-black">
                Story
              </p>
            </div>
          </div>
        </div>
        <Image
          src={feature.image}
          alt="feature"
          width={600}
          height={600}
          style={{
            width: "auto",
            height: "700px",
            objectFit: "contain",
          }}
        />
      </div>
    </div>
  );
};
