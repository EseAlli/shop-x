import React from "react";
import CategorySidebar from "@components/Categories/CategorySidebar";
import Empty from "@components/Empty";

const index = () => {
  return (
    <div className="container mx-auto p-3">
      <div className="flex flex-col md:flex-row">
        <CategorySidebar />
        <div>
          <Empty />
        </div>
      </div>
    </div>
  );
};

export default index;
