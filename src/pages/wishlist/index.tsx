import React from "react";
import CategorySidebar from "@components/Categories/CategorySidebar";
import Empty from "@components/Empty";

const index = () => {
  return (
    <div className="p-3 h-1/2 flex flex-1 w-full">
      <div className="flex flex-col md:flex-row w-full">
        <CategorySidebar />
        <div className="container mx-auto w-full md:w-8/12 py-5 lg:py-8 flex flex-col">
          <div>
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-3 md:mb-1">
              Wishlist
            </h3>
          </div>
          <Empty
            header="Your wishlist is empty"
            body="Click on the heart to add an item to your wishlist or log into your
            account."
          />
        </div>
      </div>
    </div>
  );
};

export default index;
