import React from "react";
import { Props } from "./types";

const Pagination = ({ items, pageSize, currentPage, onPageChange }: Props) => {
  const pagesCount = Math.ceil(items / pageSize); // 100/10

  if (pagesCount === 1) return null;
  const pages = Array.from({ length: pagesCount }, (_, i) => i + 1);
  console.log(pages);

  return (
    <div className="w-full">
      <ul className="flex items-center justify-end ">
        <li
          className={
            currentPage > 1
              ? "text-lg mx-2 hover:cursor-pointer"
              : "text-lg mx-2 opacity-5 hover:cursor-not-allowed"
          }
          onClick={() => onPageChange(currentPage - 1)}
        >{`<`}</li>
        {pages.map((page: number) => (
          <li
            key={page}
            className={
              page === currentPage
                ? "bg-black text-white px-2"
                : "bg-white border-black border px-2 hover:cursor-pointer"
            }
          >
            <a onClick={() => onPageChange(page)}>{page}</a>
          </li>
        ))}
        <li
          className={
            currentPage === pages[pages.length - 1]
              ? "text-lg mx-2 opacity-5 hover:cursor-not-allowed"
              : "text-lg mx-2 hover:cursor-pointer"
          }
          onClick={() => onPageChange(currentPage + 1)}
        >{`>`}</li>
      </ul>
    </div>
  );
};

export default Pagination;
