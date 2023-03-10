import React from "react";
import Header from "@components/Header";
import { Props } from "./types";

const Index = ({ children }: Props) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default Index;
