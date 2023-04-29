import React, { Fragment } from "react";
import { ImageCard } from "@components/Cards";
import { Props } from "./types";

const index = ({ products: items, name }: Props) => {
  return (
    <div className="2xl:container mx-auto px-2 py-3 md:px-4 lg:px-8 md:my-10 lg:my-24">
      <p className="text-xl md:text-2xl my-2">Popular Right Now</p>
      <p className="capitalize">{name}</p>
      <div className="grid md:grid-flow-col-dense gap-3 mt-6">
        {items.map((product, index: number) => (
          <Fragment key={index}>
            <ImageCard details={product} />
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default index;
