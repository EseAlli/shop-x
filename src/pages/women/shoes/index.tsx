import InnerLayout from "@components/Layout/innerLayout";
import React from "react";
import { ProductCard } from "@components/Cards";
import { products } from "@db/productsData";
import { IProduct } from "context/types";

const Shoes = () => {
  return (
    <InnerLayout>
      <h3 className="mb-3">Clothing</h3>
      <hr />
      <div className="grid lg:grid-cols-4 gap-x-2 gap-y-5 my-2">
        {products.map((product: IProduct, index: number) => (
          <ProductCard key={index} product={product} add={false} />
        ))}
      </div>
    </InnerLayout>
  );
};

export default Shoes;
