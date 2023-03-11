import React from "react";

export const CCard = ({ content }: any) => {
  return (
    <div className="text-black bg-[#f2f2f2] px-8 py-4 text-center">
      <p className="capitalize">{content}</p>
    </div>
  );
};
