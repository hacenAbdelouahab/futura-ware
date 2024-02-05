import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

export default function NavBar() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex text-white justify-between items-center h-24 max-w-[1240px] mx-auto px-4">
      <h1 className="w-full text-3xl font-bold text-[#00df9a] uppercase">
        FuturaWare
      </h1>
      <ul className="hidden md:flex">
        <li className="p-4 hover:text-[#00df9a] transition cursor-pointer">
          HOME
        </li>
        <li className="p-4 hover:text-[#00df9a] transition cursor-pointer">
          SERVICES
        </li>
        <li className="p-4 hover:text-[#00df9a] transition cursor-pointer">
          PRODUCTS
        </li>
        <li className="p-4 hover:text-[#00df9a] transition cursor-pointer">
          ABOUT
        </li>
        <li className="p-4 hover:text-[#00df9a] transition cursor-pointer">
          CONTACT
        </li>
      </ul>
      <div className="cursor-pointer block md:hidden" onClick={handleNav}>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div
        className={
          nav
            ? "fixed md:hidden top-0 left-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
            : "fixed md:hidden left-[-100%]"
        }
      >
        <h1 className="w-full text-3xl font-bold text-[#00df9a] uppercase m-4">
          FuturaWare
        </h1>
        <ul className="p-4">
          <li className="border-b border-gray-600 p-4">HOME</li>
          <li className="border-b border-gray-600 p-4">SERVICES</li>
          <li className="border-b border-gray-600 p-4">PRODUCTS</li>
          <li className="border-b border-gray-600 p-4">ABOUT</li>
          <li className="p-4">CONTACT</li>
        </ul>
      </div>
    </div>
  );
}
