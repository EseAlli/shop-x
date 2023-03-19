import Layout from "@components/Layout";
import Carousel from "@components/Carousel";
import Categories from "@components/Categories";
import Popular from "@components/Popular";
import { Single as SFeature, DoubleFeature } from "@components/Feature";
import { homeData } from "@db/homeData";

const men = () => {
  const { categories, popular, carousel, feature } = homeData.men;
  const { shoes, bags, accessories } = popular;
  return (
    <>
      <Layout>
        <Carousel items={carousel} autoplay={true} />
        <Categories data={categories} />
        <Popular item={shoes} name="shoes" />
        <SFeature />
        <Popular item={bags} name="bags" />
        <DoubleFeature feature={feature} />
        <Popular item={accessories} name="accessories" />
      </Layout>
    </>
  );
};

export default men;
