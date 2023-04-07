import React from "react";
import { Facebook as Placeholder } from "react-content-loader";

type EmptyProps = {
  header: string;
  body: string;
};

const index = ({ header, body }: EmptyProps) => {
  return (
    <div className="md:h-[60%] flex items-center my-6">
      <div className="flex flex-col md:flex-row w-full justify-between">
        <div className="w-full md:w-2/3">
          <Placeholder />
        </div>
        <div className="flex flex-col gap-2 my-4 md:my-0 w-full md:w-1/3">
          <p className="md:text-xl font-semibold">{header}</p>
          <p>{body}</p>
          <button className="px-5 py-2 border w-1/3 border-black text-sm font-semibold mt-2">
            Log in
          </button>
        </div>
      </div>
    </div>
  );
};

export default index;
