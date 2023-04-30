import { CCard } from "@components/Cards";
import React from "react";

const index = ({ data }: { data: { name: string; url: string }[] }) => {
  return (
    <div className="2xl:container mx-auto py-4 px-3 md:px-5 lg:px-8 2xl:px-0 w-full">
      <p className="text-xl md:text-2xl font-medium">Categories</p>
      <ul className="flex overflow-x-scroll md:overflow-hidden md:grid md:grid-cols-5 gap-2 justify-between py-3">
        {data?.map(
          ({ name, url }: { name: string; url: string }, index: number) => (
            <li key={index}>
              <CCard content={name} url={url} />
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default index;
