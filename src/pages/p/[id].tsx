import React from "react";
import Layout from "@components/Layout";
import { ProductDetails } from "@components/ProductDetails";
import { homeData } from "@db/homeData";
import { products } from "@db/productsData";
import { useRouter } from "next/router";

const ProductInfo = () => {
  const { carousel } = homeData.women;
  const router = useRouter();
  const { id } = router.query;
  const product = products.find((product) => product.id === Number(id));
  return (
    <>
      <Layout>
        <ProductDetails product={product} />
      </Layout>
    </>
  );
};

export default ProductInfo;
