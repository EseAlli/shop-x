import InnerLayout from "@components/Layout/innerLayout";
import React, { useState, useCallback, useRef } from "react";
import { ProductCard } from "@components/Cards";
import { products } from "@db/productsData";
import Pagination from "@components/Pagination";
import { paginate } from "helper/paginate";

const Clothing = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageTopRef = useRef(null);
  const pageSize = 32;
  const onPageChange = useCallback((page: number) => {
    setCurrentPage(page);
    //@ts-ignore
    pageTopRef?.current?.scrollIntoView();
  }, []);
  const paginatedProducts = paginate(products, currentPage, pageSize);
  return (
    <InnerLayout>
      <h3 className="mb-3 font-semibold">Clothing</h3>
      <hr />
      <div
        className="grid lg:grid-cols-4 gap-x-2 gap-y-5 my-2"
        ref={pageTopRef}
      >
        {paginatedProducts.map((product: any, index: number) => (
          <ProductCard key={index} product={product} add={false} />
        ))}
      </div>
      <Pagination
        items={products.length}
        currentPage={currentPage}
        pageSize={pageSize}
        onPageChange={onPageChange}
      />
    </InnerLayout>
  );
};

export default Clothing;
