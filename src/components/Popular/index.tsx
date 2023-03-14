import React, { Fragment } from "react";
import { ImageCard } from "@components/Cards";
import image1 from "../../../public/popular-2.avif";
import Pop from "../../../public/popular-1.avif";
import image2 from "../../../public/popular-3.avif";
import { Props } from "./types";

const index = ({ item, name }: Props) => {
  console.log(item);
  return (
    <div className="2xl:container mx-auto px-2 py-3 md:px-4 lg:px-8 md:my-10 lg:my-24">
      <p className="text-xl md:text-2xl my-2">Popular Right Now</p>
      <p className="capitalize">{name}</p>
      <div className="grid md:grid-flow-col-dense gap-3 mt-6">
        {item.map((i: any, index: number) => (
          <Fragment key={index}>
            <ImageCard details={i} />
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default index;
