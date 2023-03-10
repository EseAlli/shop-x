import React, { useState } from "react";
import { menuData } from "./menuData";

const PrimaryMenu = () => {
  const [current, setCurrent] = useState("women");
  return (
    <nav className="">
      <nav className="container mx-auto py-3 flex justify-between">
        <ul className="flex gap-2 lg:gap-6 ">
          {menuData.map(({ menu }, index: number) => (
            <li
              key={index}
              className="capitalize text-slate-400 hover:text-black hover:cursor-pointer"
              onClick={() => setCurrent(menu)}
            >
              {menu}
            </li>
          ))}
        </ul>
        <p className="uppercase font-bold">Shop X</p>
        <ul className="flex gap-2">
          <li>Login</li>
          <li>Wishlist</li>
          <li>Cart</li>
        </ul>
      </nav>
      <ul className="bg-[#f2f2f2] flex gap-3 px-20 py-3">
        {menuData.map(({ menu, subMenu }, index: number) => {
          if (menu === current) {
            return subMenu.map((item) => (
              <li className="font-medium hover:cursor-pointer" key={index}>
                {item?.name}
              </li>
            ));
          } else {
            return null;
          }
        })}
      </ul>
    </nav>
  );
};

export default PrimaryMenu;
