import Layout from "@components/Layout";
import Carousel from "@components/Carousel";
import Categories from "@components/Categories";
import { categories } from "@db/categoryData";
export default function Home() {
  return (
    <>
      <Layout>
        <Carousel />
        <Categories data={categories.women} />
      </Layout>
    </>
  );
}
