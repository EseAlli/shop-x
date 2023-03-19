import Layout from "@components/Layout";
import Carousel from "@components/Carousel";
import Categories from "@components/Categories";
import Popular from "@components/Popular";
import { Single as SFeature, DoubleFeature } from "@components/Feature";
import { homeData } from "@db/homeData";

export default function Home() {
  const { categories, popular, carousel, feature } = homeData.women;
  const { dresses, bags, accessories } = popular;
  return (
    <>
      <Layout>
        <Carousel items={carousel} autoplay={true} />
        <Categories data={categories} />
        <Popular item={dresses} name="dresses" />
        <SFeature />
        <Popular item={bags} name="bags" />
        <DoubleFeature feature={feature} />
        <Popular item={accessories} name="accessories" />
      </Layout>
    </>
  );
}
