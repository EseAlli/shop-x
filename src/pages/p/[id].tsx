import React from "react";
import { ProductDetails } from "@components/ProductDetails";
import { homeData } from "@db/homeData";
import { products } from "@db/productsData";
import { useRouter } from "next/router";

const ProductInfo = () => {
  const router = useRouter();
  const { id } = router.query;
  const product = products?.find((product) => product.id === Number(id));
  return <>{product && <ProductDetails product={product} />}</>;
};

export default ProductInfo;
