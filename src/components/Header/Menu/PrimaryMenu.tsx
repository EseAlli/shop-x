import Link from "next/link";
import { useRouter } from "next/router";
import React, { Fragment, useState } from "react";
import { menuData } from "@db/menuData";
import { BsPerson, BsBag } from "react-icons/bs";
import { HiOutlineHeart } from "react-icons/hi2";
import SearchBar from "./SearchBar";
import Image from "next/image";
import Logo from "../../../../public/logo.webp";

const PrimaryMenu = () => {
  const [current, setCurrent] = useState("women");
  const router = useRouter();
  const currentRoute = router.pathname;
  console.log(currentRoute);
  return (
    <>
      <nav className="container mx-auto flex justify-between px-2 items-center">
        <ul className="md:flex gap-4 lg:gap-6 hidden">
          {menuData.map(({ menu, id }) => (
            <Link
              href={`${menu}`}
              key={id}
              className={
                currentRoute === `/${menu}` ||
                (currentRoute === `/` &&
                  current === "women" &&
                  menu === "women")
                  ? "capitalize text-black hover:cursor-pointer font-medium border-black border-b-2 py-3"
                  : "capitalize text-slate-400 hover:text-black hover:cursor-pointer hover:font-medium py-3"
              }
              onClick={() => setCurrent(menu)}
            >
              {menu}
            </Link>
          ))}
        </ul>
        <div>
          <Image src={Logo} width={200} height={150} alt="Shop X" />
        </div>
        <div className="flex md:gap-3 items-center">
          <SearchBar />
          <ul className="flex gap-2 md:gap-4 items-center">
            <li className="flex items-center">
              <BsPerson size="1.35rem" />
            </li>
            <li className="flex items-center">
              <HiOutlineHeart size="1.35rem" />
            </li>
            <li className="flex items-center">
              <BsBag size="1.25rem" />
            </li>
          </ul>
        </div>
      </nav>
      <ul className="bg-[#f2f2f2] md:flex gap-3 px-20 py-3 hidden ">
        {menuData.map(({ menu, subMenu }, index: number) => {
          if (menu === current) {
            return subMenu.map((item) => (
              <div key={index} className="group">
                <li className="font-medium hover:cursor-pointer relative">
                  {item?.name}
                </li>
                <li>
                  <div className="absolute hidden group-hover:flex bg-white p-4 z-50 right-0 left-0">
                    <div className="min-w-[600px] lg:min-w-[900px] mx-auto max-w-6xl">
                      <ul className="grid grid-cols-2 ">
                        {item?.categories?.map(
                          ({ name, sub }, index: number) => (
                            <li key={index}>
                              <p>{name}</p>
                              <ul>
                                {sub?.map(({ name }, index: number) => (
                                  <li className="font-normal" key={index}>
                                    {name}
                                  </li>
                                ))}
                              </ul>
                            </li>
                          )
                        )}
                      </ul>
                    </div>
                  </div>
                </li>
              </div>
            ));
          } else {
            return null;
          }
        })}
      </ul>
    </>
  );
};

export default PrimaryMenu;
