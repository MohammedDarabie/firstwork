import React from "react";
import { BsLinkedin, BsWhatsapp, BsTwitter } from "react-icons/bs";

const Header = () => {
  return (
    <header className="flex p-[20px] items-center ">
      {/* LOGO */}
      <div className="flex-1">
        <img
          src="./img/itec-logo.jpg"
          alt="logo"
          className="w-[74px] lg:w-[120px] cursor-pointer"
          onClick={() => {}}
        ></img>
      </div>
      {/* NAVBAR */}
      <ul className="flex space-x-2 lg:space-x-16 mr-9">
        <li
          className="text-sm lg:text-xl cursor-pointer hover:text-blue-700"
        >
          About ITEC
        </li>
        <li className=" text-sm lg:text-xl cursor-pointer hover:text-blue-700">
          Solution and Products
        </li>
        <li className=" text-sm lg:text-xl cursor-pointer hover:text-blue-700">
          Brands
        </li>
        <li className=" text-sm lg:text-xl cursor-pointer hover:text-blue-700">
          Customers
        </li>
        <li className="text-sm lg:text-xl cursor-pointer hover:text-blue-700">
          Contact Us
        </li>
      </ul>
      {/* Socials */}
      <div className="flex space-x-3">
        <BsWhatsapp className=" text-3xl cursor-pointer text-green-600" />
        <BsLinkedin className=" text-3xl cursor-pointer text-blue-600" />
        <BsTwitter className="text-3xl cursor-pointer text-blue-600" />
      </div>
    </header>
  );
};

export default Header;
