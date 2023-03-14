import React from "react";
import { ImageCard } from "@components/Cards";
import image1 from "../../../public/popular-2.avif";
import Pop from "../../../public/popular-1.avif";
import image2 from "../../../public/popular-3.avif";

const index = () => {
  return (
    <div className="2xl:container mx-auto px-2 py-3 md:px-4 lg:px-8 md:my-10 lg:my-24">
      <p className="text-xl md:text-2xl my-2">Popular Right Now</p>
      <div className="grid md:grid-flow-col-dense gap-3 mt-6">
        <ImageCard src={Pop} />
        <ImageCard src={image1} />
        <ImageCard src={image2} />
      </div>
    </div>
  );
};

export default index;
