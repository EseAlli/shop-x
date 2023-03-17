import { ProductCard } from "@components/Cards";
import React from "react";

const index = () => {
  return (
    <>
      <div className="container mx-auto p-3">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-[15%]">
            <ul className="lg:mt-10 flex flex-col gap-2">
              <li>Babies</li>
              <li>Girls</li>
              <li>Boys</li>
            </ul>
          </div>

          <div className="w-full md:w-[85%] my-3 md:px-4">
            <div className="lg:my-4">
              <p>Kids</p>
              <p className="text-xs my-2">Kids</p>
            </div>
            <hr />
            <div className="grid lg:grid-cols-4 gap-x-2 gap-y-5 my-2">
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard /> <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
