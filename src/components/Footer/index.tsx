import React from "react";

const index = () => {
  return (
    <footer className=" bg-">
      <div className="bg-[#f2f2f2] py-3  text-xs">
        <div className="grid-cols-4 grid container mx-auto p-2">
          <div>
            <p className="uppercase font-bold text-sm tracking-widest text-slate-700">
              help and information
            </p>
            <ul className="font-thin text-slate-600 flex flex-col gap-2 my-2">
              <li>Help</li>
              <li>Track Order</li>
              <li>Delivery & returns</li>
              <li>Sitemap</li>
            </ul>
          </div>
          <div>
            <p className="uppercase font-bold text-sm tracking-widest text-slate-700">
              about shop x
            </p>
            <ul className="font-thin text-slate-600 flex flex-col gap-2 my-2">
              <li>About us</li>
              <li>Careers at Shop X</li>
              <li>Cooperate responsibilty</li>
              <li>{"Investor's site"}</li>
            </ul>
          </div>
          <div>
            <p className="uppercase font-bold text-sm tracking-widest text-slate-700">
              more from shop x
            </p>
            <ul className="font-thin text-slate-600 flex flex-col gap-2 my-2">
              <li>Mobile and Shop X apps</li>
              <li>Shop X Marketplace</li>
              <li>Gift Vouchers</li>
              <li>Black Friday</li>
              <li>Shop X x Thrift+</li>
            </ul>
          </div>
          <div>
            <p className="uppercase font-bold text-sm tracking-widest text-slate-700">
              secure shopping
            </p>
            <ul className="font-thin text-slate-600 flex flex-col gap-2 my-2">
              <li>Your data is safe with us</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-gray-200">
        <div className="flex justify-between px-4 items-center py-1 ">
          <p className="flex items-center text-xs text-slate-500">
            © 2023 SHOP X INC{" "}
          </p>
          <ul className="flex gap-2 text-xs text-slate-500">
            <li>Privacy Policy</li>
            <li>Ts&Cs</li>
            <li>Accesibility</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default index;
