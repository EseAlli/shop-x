import Pop3 from "../../public/popular-2.avif";
import Pop1 from "../../public/popular-1.avif";
import Pop2 from "../../public/popular-3.avif";
import slidewomen1 from "../../public/slider-women-1.jpg";
import slidewomen2 from "../../public/slide-women-2.avif";
import slidewomen3 from "../../public/slider-women-1.jpg";
import slidemen1 from "../../public/slide-men-2.avif";
import slidemen2 from "../../public/slide-men-1.avif";
import slidemen3 from "../../public/slide-men-2.avif";
import popman1 from "../../public/popmen-1.avif";
import popman2 from "../../public/popmen-2.avif";
import popman3 from "../../public/popmen-3.avif";
import menfeature from "../../public/feature-men.avif";
import womenfeature from "../../public/feature.avif";
export const homeData = {
  women: {
    categories: [
      {
        name: "dresses",
      },
      {
        name: "jeans",
      },
      {
        name: "shoes",
      },
      {
        name: "bags",
      },
      {
        name: "tops",
      },
    ],
    popular: {
      dresses: [
        {
          id: 25,
          name: "Lily's Jacket",
          price: 35.67,
          brand: "HDMI",
          image: Pop1,
        },
        {
          id: 28,
          name: "Lily's Jacket",
          price: 35.67,
          brand: "HDMI",
          image: Pop2,
        },
        {
          id: 29,
          name: "Lily's Jacket",
          price: 35.67,
          brand: "HDMI",
          image: Pop3,
        },
      ],
      bags: [
        {
          id: 25,
          name: "Lily's Jacket",
          price: 35.67,
          brand: "HDMI",
          image: Pop3,
        },
        {
          id: 28,
          name: "Lily's Jacket",
          price: 35.67,
          brand: "HDMI",
          image: Pop2,
        },
        {
          id: 29,
          name: "Lily's Jacket",
          price: 35.67,
          brand: "HDMI",
          image: Pop1,
        },
      ],
      accessories: [
        {
          id: 25,
          name: "Lily's Jacket",
          price: 35.67,
          brand: "HDMI",
          image: Pop1,
        },
        {
          id: 28,
          name: "Lily's Jacket",
          price: 35.67,
          brand: "HDMI",
          image: Pop3,
        },
        {
          id: 29,
          name: "Lily's Jacket",
          price: 35.67,
          brand: "HDMI",
          image: Pop2,
        },
      ],
    },
    carousel: [
      {
        image: slidewomen1,
        tagline: "Fresh palettes",
        title: "Pretty pastels",
        url: "/",
      },
      {
        image: slidewomen2,
        tagline: "Fresh palettes",
        title: "Pretty pastels",
        url: "/",
      },
      {
        image: slidewomen3,
        tagline: "Fresh palettes",
        title: "Pretty pastels",
        url: "/",
      },
    ],
    feature: {
      tagline: "Sleek fits",
      title: "Curated coats guide",
      image: womenfeature,
    },
  },
  men: {
    categories: [
      {
        name: "t-shirt",
      },
      {
        name: "jeans",
      },
      {
        name: "shoes",
      },
      {
        name: "bags",
      },
      {
        name: "sweats",
      },
    ],
    popular: {
      shoes: [
        {
          id: 25,
          name: "John's Trainer",
          price: 35.67,
          brand: "HDMI",
          image: popman1,
        },
        {
          id: 28,
          name: "John's Trainer",
          price: 35.67,
          brand: "HDMI",
          image: popman2,
        },
        {
          id: 29,
          name: "John's Trainer",
          price: 35.67,
          brand: "HDMI",
          image: popman3,
        },
      ],
      bags: [
        {
          id: 25,
          name: "John's Trainer",
          price: 35.67,
          brand: "HDMI",
          image: popman3,
        },
        {
          id: 28,
          name: "John's Trainer",
          price: 35.67,
          brand: "HDMI",
          image: popman1,
        },
        {
          id: 29,
          name: "John's Trainer",
          price: 35.67,
          brand: "HDMI",
          image: popman2,
        },
      ],
      accessories: [
        {
          id: 25,
          name: "John's Trainer",
          price: 35.67,
          brand: "HDMI",
          image: popman2,
        },
        {
          id: 28,
          name: "John's Trainer",
          price: 35.67,
          brand: "HDMI",
          image: popman1,
        },
        {
          id: 29,
          name: "John's Trainer",
          price: 35.67,
          brand: "HDMI",
          image: popman3,
        },
      ],
    },
    carousel: [
      {
        image: slidemen1,
        tagline: "Fresh fits",
        title: "Pretty cool",
        url: "/",
      },
      {
        image: slidemen2,
        tagline: "Fresh fits",
        title: "Pretty cool",
        url: "/",
      },
      {
        image: slidemen3,
        tagline: "Fresh fits",
        title: "Pretty cool",
        url: "/",
      },
    ],
    feature: {
      tagline: "Sleek feets",
      title: "Feet named kickback",
      image: menfeature,
    },
  },
};
