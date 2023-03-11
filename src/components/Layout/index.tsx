import React from "react";
import Header from "@components/Header";
import Footer from "@components/Footer";
import { Props } from "./types";

const Index = ({ children }: Props) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Index;
