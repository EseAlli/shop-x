import React from "react";
import Layout from "@components/Layout";
import { ProductDetails } from "@components/ProductDetails";
import { homeData } from "@db/homeData";

const index = () => {
  const { carousel } = homeData.women;
  return (
    <>
      <Layout>
        <ProductDetails />
      </Layout>
    </>
  );
};

export default index;
