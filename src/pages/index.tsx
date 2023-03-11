import Layout from "@components/Layout";
import Carousel from "@components/Carousel";
import Categories from "@components/Categories";
import Popular from "@components/Popular";
import { Single as SFeature, DoubleFeature } from "@components/Feature";
import { categories } from "@db/categoryData";
export default function Home() {
  return (
    <>
      <Layout>
        <Carousel />
        <Categories data={categories.women} />
        <Popular />
        <SFeature />
        <Popular />
        <DoubleFeature />
        <Popular />
      </Layout>
    </>
  );
}
