import React, { useContext } from "react";
import Empty from "@components/Empty";
import { ProductCard } from "@components/Cards";
import { CartContext } from "context/cartContext";
import { CartContextType } from "context/types";

const Cart = () => {
  const products = [
    {
      id: 1,
      url: "https://www.adidas.com/us/beach-shorts/FJ5089.html",
      name: "Beach Shorts",
      sku: "FJ5089",
      selling_price: 40,
      original_price: "",
      currency: "USD",
      availability: "InStock",
      color: "Black",
      category: "Clothing",
      source: "adidas United States",
      source_website: "https://www.adidas.com",
      breadcrumbs: "Women/Clothing",
      description:
        "Splashing in the surf. Making memories with your friends. Beach days are the best days. These shorts are made of stretchy woven fabric. An elastic waistband that features the adidas logo brings a sporty look to your day at the beach.",
      brand: "adidas",
      images: [
        "https://assets.adidas.com/images/w_600,f_auto,q_auto/139affb83f16488cb899aafd00b3e2b9_9366/Beach_Shorts_Black_FJ5089_01_laydown.jpg",
        "https://assets.adidas.com/images/w_600,f_auto,q_auto/c235a4db563143b18db4aafd00b3ef38_9366/Beach_Shorts_Black_FJ5089_02_laydown.jpg",
      ],
      country: "USA",
      language: "en",
      average_rating: 4.5,
      reviews_count: 35,
      crawled_at: "2021-10-23 17:50:17.331255",
    },
    {
      id: 2,
      url: "https://www.adidas.com/us/five-ten-kestrel-lace-mountain-bike-shoes/BC0770.html",
      name: "Five Ten Kestrel Lace Mountain Bike Shoes",
      sku: "BC0770",
      selling_price: 150,
      original_price: "",
      currency: "USD",
      availability: "InStock",
      color: "Grey",
      category: "Shoes",
      source: "adidas United States",
      source_website: "https://www.adidas.com",
      breadcrumbs: "Women/Shoes",
      description:
        "Lace up and get after it. The Five Ten Kestrel Lace Mountain Bike Shoes offer efficient pedal power with low-profile style. The wide platform is compatible with all clipless pedals and offers high-friction grip on and off the bike. You'll find the find comfort and versatility for extended trail rides and afterwork hot laps alike.",
      brand: "adidas",
      images: [
        "https://assets.adidas.com/images/w_600,f_auto,q_auto/2b04943c525e4909a7a5a9fa0116153d_9366/Five_Ten_Kestrel_Lace_Mountain_Bike_Shoes_Grey_BC0770_01_standard.jpg",
        "https://assets.adidas.com/images/w_600,f_auto,q_auto/64ef0f437ce249fe980da9fa01164284_9366/Five_Ten_Kestrel_Lace_Mountain_Bike_Shoes_Grey_BC0770_02_standard_hover.jpg",
        "https://assets.adidas.com/images/w_600,f_auto,q_auto/12746d2167c348b2a583a9fa01169669_9366/Five_Ten_Kestrel_Lace_Mountain_Bike_Shoes_Grey_BC0770_03_standard.jpg",
        "https://assets.adidas.com/images/w_600,f_auto,q_auto/91b253099ece4b6c8b5fa9fa0116a5a1_9366/Five_Ten_Kestrel_Lace_Mountain_Bike_Shoes_Grey_BC0770_04_standard.jpg",
        "https://assets.adidas.com/images/w_600,f_auto,q_auto/a2b39ff910204553af50a9fa0116b3a0_9366/Five_Ten_Kestrel_Lace_Mountain_Bike_Shoes_Grey_BC0770_05_standard.jpg",
        "https://assets.adidas.com/images/w_600,f_auto,q_auto/9294030e3be54f83854aa9fa01162719_9366/Five_Ten_Kestrel_Lace_Mountain_Bike_Shoes_Grey_BC0770_06_standard.jpg",
        "https://assets.adidas.com/images/w_600,f_auto,q_auto/f2cc280368794b2c9a9ca9fa0116c094_9366/Five_Ten_Kestrel_Lace_Mountain_Bike_Shoes_Grey_BC0770_41_detail.jpg",
        "https://assets.adidas.com/images/w_600,f_auto,q_auto/39426096737d4102b7ada9fa0116cceb_9366/Five_Ten_Kestrel_Lace_Mountain_Bike_Shoes_Grey_BC0770_42_detail.jpg",
        "https://assets.adidas.com/images/w_600,f_auto,q_auto/9f384bc43cf84ce9845ca9fa0116d8b3_9366/Five_Ten_Kestrel_Lace_Mountain_Bike_Shoes_Grey_BC0770_43_detail.jpg",
      ],
      country: "USA",
      language: "en",
      average_rating: 4.8,
      reviews_count: 4,
      crawled_at: "2021-10-23 17:50:17.423830",
    },
    {
      id: 3,
      url: "https://www.adidas.com/us/mexico-away-jersey/GC7946.html",
      name: "Mexico Away Jersey",
      sku: "GC7946",
      selling_price: 70,
      original_price: "",
      currency: "USD",
      availability: "InStock",
      color: "White",
      category: "Clothing",
      source: "adidas United States",
      source_website: "https://www.adidas.com",
      breadcrumbs: "Kids/Clothing",
      description:
        "Clean and crisp, this adidas Mexico Away Jersey for juniors displays a design that began life in an artist's studio. Soft, quick-drying fabric keeps you comfortable. Standing out on the chest, a team badge lets fans show pride in their soccer team.",
      brand: "adidas",
      images: [
        "https://assets.adidas.com/images/w_600,f_auto,q_auto/4b12d5462aec410faee9ab1000feb34f_9366/Mexico_Away_Jersey_White_GC7946_01_laydown.jpg",
        "https://assets.adidas.com/images/w_600,f_auto,q_auto/be2b4748ccd04e88b0e7ab1000fec081_9366/Mexico_Away_Jersey_White_GC7946_02_laydown_hover.jpg",
        "https://assets.adidas.com/images/w_600,f_auto,q_auto/e538f94d0fd742868052ab1000fecdbb_9366/Mexico_Away_Jersey_White_GC7946_41_detail.jpg",
        "https://assets.adidas.com/images/w_600,f_auto,q_auto/7f1492f2985841dbb59cab1000fedc44_9366/Mexico_Away_Jersey_White_GC7946_42_detail.jpg",
        "https://assets.adidas.com/images/w_600,f_auto,q_auto/d3485a6cd3fd42c19083ab1000fee858_9366/Mexico_Away_Jersey_White_GC7946_43_detail.jpg",
      ],
      country: "USA",
      language: "en",
      average_rating: 4.9,
      reviews_count: 42,
      crawled_at: "2021-10-23 17:50:17.530834",
    },
    {
      id: 4,
      url: "https://www.adidas.com/us/five-ten-hiangle-pro-competition-climbing-shoes/FV4744.html",
      name: "Five Ten Hiangle Pro Competition Climbing Shoes",
      sku: "FV4744",
      selling_price: 160,
      original_price: "",
      currency: "USD",
      availability: "InStock",
      color: "Black",
      category: "Shoes",
      source: "adidas United States",
      source_website: "https://www.adidas.com",
      breadcrumbs: "Five Ten/Shoes",
      description:
        "The Hiangle Pro takes on the classic shape of the original Hiangle with the addition of a seamless outsole wrapping around the toes, allowing for maximum rubber contact when tackling the most challenging boulder problems.",
      brand: "adidas",
      images: [
        "https://assets.adidas.com/images/w_600,f_auto,q_auto/a50bf634157248c99dbcac02007a8d9f_9366/Five_Ten_Hiangle_Pro_Competition_Climbing_Shoes_Black_FV4744_01_standard.jpg",
        "https://assets.adidas.com/images/w_600,f_auto,q_auto/3c802934504e4b7fb3a3ac02007a9c73_9366/Five_Ten_Hiangle_Pro_Competition_Climbing_Shoes_Black_FV4744_02_standard_hover.jpg",
        "https://assets.adidas.com/images/w_600,f_auto,q_auto/862a51ddd0df402e94e7ac02007aa392_9366/Five_Ten_Hiangle_Pro_Competition_Climbing_Shoes_Black_FV4744_03_standard.jpg",
        "https://assets.adidas.com/images/w_600,f_auto,q_auto/a7f417bf88b44b07a792ac02007aab1d_9366/Five_Ten_Hiangle_Pro_Competition_Climbing_Shoes_Black_FV4744_04_standard.jpg",
        "https://assets.adidas.com/images/w_600,f_auto,q_auto/18556e5bfa6d4438b363ac02007ab2a4_9366/Five_Ten_Hiangle_Pro_Competition_Climbing_Shoes_Black_FV4744_05_standard.jpg",
        "https://assets.adidas.com/images/w_600,f_auto,q_auto/a78cc40417304c9ba71eac02007a9527_9366/Five_Ten_Hiangle_Pro_Competition_Climbing_Shoes_Black_FV4744_06_standard.jpg",
        "https://assets.adidas.com/images/w_600,f_auto,q_auto/3bb67ff00e764e0ba5e8ac020080e925_9366/Five_Ten_Hiangle_Pro_Competition_Climbing_Shoes_Black_FV4744_09_standard.jpg",
        "https://assets.adidas.com/images/w_600,f_auto,q_auto/cfbc398cd1fe4e6eb283ac02007aba39_9366/Five_Ten_Hiangle_Pro_Competition_Climbing_Shoes_Black_FV4744_41_detail.jpg",
        "https://assets.adidas.com/images/w_600,f_auto,q_auto/2a09443d57c344719997ac02007ac15c_9366/Five_Ten_Hiangle_Pro_Competition_Climbing_Shoes_Black_FV4744_42_detail.jpg",
        "https://assets.adidas.com/images/w_600,f_auto,q_auto/9f8beb8acfcb4d40a540ac02007ac719_9366/Five_Ten_Hiangle_Pro_Competition_Climbing_Shoes_Black_FV4744_43_detail.jpg",
        "https://assets.adidas.com/images/w_600,f_auto,q_auto/2cef972779b941fa877eac8d011dca97_9366/Five_Ten_Hiangle_Pro_Competition_Climbing_Shoes_Black_FV4744_HM1.jpg",
        "https://assets.adidas.com/images/w_600,f_auto,q_auto/9bbdc255ddd74d7cbe45ac8d011dcc07_9366/Five_Ten_Hiangle_Pro_Competition_Climbing_Shoes_Black_FV4744_HM2.jpg",
        "https://assets.adidas.com/images/w_600,f_auto,q_auto/8d704616e0fa45a3ac06ac8d011dca28_9366/Five_Ten_Hiangle_Pro_Competition_Climbing_Shoes_Black_FV4744_HM3.jpg",
        "https://assets.adidas.com/images/w_600,f_auto,q_auto/c6221d2435b8455eaa7aac8d011dcc7a_9366/Five_Ten_Hiangle_Pro_Competition_Climbing_Shoes_Black_FV4744_HM4.jpg",
      ],
      country: "USA",
      language: "en",
      average_rating: 3.7,
      reviews_count: 7,
      crawled_at: "2021-10-23 17:50:17.615054",
    },
  ];
  const { items } = useContext(CartContext) as CartContextType;
  console.log(items);
  return (
    <div className="container mx-auto px-4 lg:px-0 my-2 md:my-5">
      <div>
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold">Cart</h2>
      </div>
      <div className="max-w-4xl mx-auto md:my-5 lg:my-24">
        <Empty header="Your Basket is Empty" body="Add Products or Login" />
      </div>

      <div className="my-8 lg:py-52">
        <h2 className=" md:text-xl font-semibold">Last Viewed</h2>
        <div className="grid lg:grid-cols-4 gap-x-2 gap-y-5 my-2">
          {products.map((product: any, index: number) => (
            <ProductCard key={index} product={product} add={true} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cart;
