import React from "react";

const CategorySidebar = () => {
  return (
    <>
      <div className="w-full md:w-[10%] flex justify-end">
        <ul className="lg:mt-10 flex md:flex-col gap-2">
          <li>New in</li>
          <li>Clothing</li>
          <li>Shoes</li>
          <li>Accessories</li>
          <li>Trending</li>
          <li>Clearance</li>
        </ul>
      </div>
    </>
  );
};

export default CategorySidebar;
