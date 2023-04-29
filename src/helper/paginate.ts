import { IProduct } from "context/types";

export const paginate = (
  items: IProduct[],
  pageNumber: number,
  pageSize: number
) => {
  const startIndex = (pageNumber - 1) * pageSize;
  return items?.slice(startIndex, startIndex + pageSize);
};
