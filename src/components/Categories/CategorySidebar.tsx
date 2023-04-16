import React from "react";
import { useRouter } from "next/router";
import { menuData } from "@db/menuData";
import Link from "next/link";

const CategorySidebar = () => {
  const router = useRouter();
  const currentRoute = router.pathname;
  const [, main, sub] = currentRoute.split("/");
  const subMenu = menuData.find((item) => item.menu === main)?.subMenu;

  return (
    <>
      <div className="w-full md:w-[15%] flex justify-end">
        <ul className="lg:mt-10 flex md:flex-col gap-2">
          {subMenu?.map(({ name, url, categories }, index: number) => (
            <>
              <Link
                href={`/${main}/${name.toLowerCase()}`}
                key={index}
                className={url === sub ? `font-bold` : ""}
              >
                {name}
              </Link>
              {url === sub && (
                <ul className="ml-5 grid gap-y-2 text-sm">
                  {categories?.map(({ name, url }, index: number) => (
                    <li key={index}>
                      {name == "Explore All" ? (
                        <Link href={`/${main}/${sub}`}>{name}</Link>
                      ) : (
                        <Link href={`/${main}/${sub}/${url}`}>{name}</Link>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </>
          ))}
        </ul>
      </div>
    </>
  );
};

export default CategorySidebar;
