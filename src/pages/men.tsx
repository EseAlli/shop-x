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
      <Carousel items={carousel} autoplay={true} />
      <Categories data={categories} />
      <Popular products={shoes} name="shoes" />
      <SFeature />
      <Popular products={bags} name="bags" />
      <DoubleFeature feature={feature} />
      <Popular products={accessories} name="accessories" />
    </>
  );
};

export default men;
