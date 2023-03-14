import Layout from "@components/Layout";
import Carousel from "@components/Carousel";
import Categories from "@components/Categories";
import Popular from "@components/Popular";
import { Single as SFeature, DoubleFeature } from "@components/Feature";
// import { categories } from "@db/categoryData";
import { homeData } from "@db/homeData";
export default function Home() {
  const { categories, popular } = homeData.women;
  const { dresses, bags, accessories } = popular;

  return (
    <>
      <Layout>
        <Carousel />
        <Categories data={categories} />
        <Popular item={dresses} name="dresses" />
        <SFeature />
        <Popular item={bags} name="bags" />
        <DoubleFeature />
        <Popular item={accessories} name="accessories" />
      </Layout>
    </>
  );
}
