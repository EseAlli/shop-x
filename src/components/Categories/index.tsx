import { CCard } from "@components/Cards";
import React from "react";

const index = ({ data }: any) => {
  console.log(data);
  return (
    <div className="container mx-auto py-4 px-3 md:px-5">
      <p className="text-xl md:text-2xl font-medium">Categories</p>
      <ul className="grid grid-cols-3 md:grid-cols-5 gap-2 justify-between py-3">
        {data?.map(({ name }: any, index: number) => (
          <li key={index}>
            <CCard content={name} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default index;
