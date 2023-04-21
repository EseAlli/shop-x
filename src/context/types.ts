import { Cart } from "@components/Cart/types";

export type ProviderProps = {
  children: string | JSX.Element | JSX.Element[] | (() => JSX.Element);
};

export interface IProduct {
  id: number;
  url: string;
  name: string;
  sku: string;
  selling_price: number;
  orginal_price: string;
  availability: string;
  color: string;
  source: string;
  source_website: string;
  breadcrumbs: string;
  description: string;
  brand: string;
  images: string[];
  country: string;
  language: string;
  average_rating: number;
  reviews_count: number;
  crawled_at: string;
}

export type CartContextType = {
  items: Cart[];
  addToCart: (product: Cart) => void;
  removeFromCart: (id: number) => void;
  toggleCartModal: boolean;
  setCartModal: (cartModal: boolean) => void;
  currentItem: IProduct | null;
  setCurrentItem: (product: IProduct) => void | null;
};
