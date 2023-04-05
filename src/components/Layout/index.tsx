import React from "react";
import Header from "@components/Header";
import Footer from "@components/Footer";
import { Props } from "./types";

const Index = ({ children }: Props) => {
  return (
    <>
      <Header />
      <div className="min-h-[calc(100vh-250px)] h-full flex flex-col">
        <>{children}</>
      </div>
      <Footer />
    </>
  );
};

export default Index;
