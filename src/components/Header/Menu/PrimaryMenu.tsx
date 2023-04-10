import { useCallback } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { Fragment, useState } from "react";
import { menuData } from "@db/menuData";
import { BsPerson, BsBag } from "react-icons/bs";
import { HiOutlineHeart } from "react-icons/hi2";
import SearchBar from "./SearchBar";
import Image from "next/image";
import Logo from "../../../../public/logo.webp";
import AuthModal from "@components/Auth";

const PrimaryMenu = () => {
  const [current, setCurrent] = useState("women");
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const currentRoute = router.pathname;
  const onClose = () => {
    setIsOpen(false);
  };
  const handleNav = useCallback(
    (menu: string) => {
      router.push(`/${menu}`);
    },
    [router]
  );
  return (
    <>
      <nav className="flex justify-between px-2 md:px-8 lg:px-14 xl:px-16 items-center">
        <ul className="md:flex gap-4 lg:gap-6 xl:gap-10 hidden">
          {menuData.map(({ menu, id }) => (
            <Link
              href={``}
              key={id}
              className={
                currentRoute === `/${menu}` ||
                (currentRoute === `/` &&
                  current === "women" &&
                  menu === "women")
                  ? "capitalize text-black hover:cursor-pointer font-medium border-black border-b-2  py-5 text-sm"
                  : "capitalize text-slate-400 hover:text-black hover:cursor-pointer hover:font-medium py-5 text-sm"
              }
              onClick={() => {
                setCurrent(menu);
                handleNav(menu);
              }}
            >
              {menu}
            </Link>
          ))}
        </ul>
        <div>
          <Image
            src={Logo}
            width={120}
            height={150}
            alt="Shop X"
            style={{
              paddingBlock: "1rem",
            }}
          />
        </div>
        <div className="flex md:gap-3 items-center md:py-3">
          <SearchBar />
          <ul className="flex gap-2 md:gap-4 items-center ">
            <li
              className="flex items-center hover:cursor-pointer"
              onClick={() => setIsOpen(true)}
            >
              <BsPerson size="1.35rem" />
            </li>
            <li className="flex items-center hover:cursor-pointer">
              <Link href="/wishlist">
                <HiOutlineHeart size="1.35rem" />
              </Link>
            </li>
            <li className="flex items-center hover:cursor-pointer">
              <Link href="/cart">
                <BsBag size="1.25rem" />
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <ul className="bg-[#f2f2f2] md:flex gap-3 lg:gap-6 xl:gap-9 px-16 py-3 lg:py-4 hidden ">
        {menuData.map(({ menu, subMenu }, index: number) => {
          if (menu === current) {
            return subMenu.map((sub) => (
              <div key={index} className="group">
                <li className="font-medium hover:cursor-pointer relative text-sm">
                  <Link
                    href={`/${current}/${sub?.url}`}
                    onClick={() => console.log(current)}
                  >
                    {sub?.name}
                  </Link>
                </li>
                <li>
                  <div className="absolute hidden group-hover:flex bg-white p-4 z-50 right-0 left-0 shadow-md">
                    <div className="mx-auto w-full px-12 h-[280px] py-3">
                      <ul className="grid  grid-cols-3">
                        <li>
                          <ul className="grid grid-cols-2 gap-y-1 gap-x-0">
                            <p className="uppercase text-xs mb-2 text-slate-400 col-span-2">
                              shop by category
                            </p>
                            {sub?.categories?.map(
                              ({ name, url }, index: number) => (
                                <li key={index}>
                                  <Link
                                    href={
                                      name !== "Explore All"
                                        ? `/${current}/${sub.url}/${url}`
                                        : `/${current}/${sub.url}`
                                    }
                                    className="text-xs"
                                  >
                                    {name}
                                  </Link>
                                </li>
                              )
                            )}
                          </ul>
                        </li>
                        <li className="grid gap-y-2">
                          <p className="uppercase text-xs text-slate-400 mb-3">
                            top brands
                          </p>
                          {sub?.topBrands?.map(({ name }, index: number) => (
                            <ul key={index}>
                              <li>
                                <p className="text-xs">{name}</p>
                              </li>
                            </ul>
                          ))}
                        </li>
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
      <AuthModal onClose={onClose} isOpen={isOpen} />
    </>
  );
};

export default PrimaryMenu;
