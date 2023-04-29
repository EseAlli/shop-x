import React from "react";

const index = ({ defaultOption }: { defaultOption: string }) => {
  return (
    <select className="border w-full py-2 md:py-3 px-2 border-black">
      <option>{defaultOption}</option>
      <option>30</option>
      <option>40</option>
      <option>50</option>
    </select>
  );
};

export default index;
