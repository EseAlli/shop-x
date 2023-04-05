import React from "react";
import CategorySidebar from "@components/Categories/CategorySidebar";
import Empty from "@components/Empty";

const index = () => {
  return (
    <div className="p-3 h-1/2 flex flex-1 w-full">
      <div className="flex flex-col md:flex-row w-full">
        <CategorySidebar />
        <div className="container mx-auto w-8/12 py-5 lg:py-8 flex flex-col">
          <div>
            <h3 className="text-2xl lg:text-3xl font-medium">Wishlist</h3>
          </div>
          <Empty />
        </div>
      </div>
    </div>
  );
};

export default index;
