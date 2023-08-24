import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#441f18]  ">
      <div className=" grid grid-cols-1  lg:grid-cols-4 gap-10 text-white pt-20 pb-20 w-[70%] mx-auto">
        {/* First Column */}
        <div className="w-[75%]">
          <h1 className="text-2xl opacity-60 pb-5">
            INVENTION <br /> TECHNOLOGY TRADING <br /> COMPANY
          </h1>
          <p className="text-lg">
            ITEC is a main partner of success to many factories and industrial
            cities, by offering industrial equipment, weighing, packaging,
            printing, coding and marking solutions that fulfil all industries
            requirements.
          </p>
        </div>
        {/* Second Column */}
        <div className="w-[75%]">
          <h1 className="text-2xl font-bold pb-5">Solutions</h1>
          <ul className="space-y-2 font-semibold ">
            <Link href="/Linx">
              <li className="cursor-pointer">Printing and Coding</li>
            </Link>
            <Link href="/Prisma">
              <li className="cursor-pointer">Inspection and Quality Control</li>
            </Link>
            <Link href="/Ohaus">
              <li className="cursor-pointer">Scales and Balances</li>
            </Link>
            <Link href="/Filma">
              <li className="cursor-pointer">Wrapping and Packaging</li>
            </Link>
          </ul>
        </div>
        {/* Third Column */}
        <div className="w-[75%]">
          <h1 className="text-2xl font-bold pb-5">Brands</h1>
          <ul className="space-y-2 font-semibold ">
            <Link href="/Linx">
              <li className="cursor-pointer">LINX</li>
            </Link>
            <Link href="/Rn-Mark">
              <li className="cursor-pointer">RN Mark</li>
            </Link>
            <Link href="/Zebra">
              <li className="cursor-pointer">Zebra</li>
            </Link>
            <Link href="/Extend">
              <li className="cursor-pointer">Extend</li>
            </Link>
            <Link href="/Ohaus">
              <li className="cursor-pointer">Ohaus</li>
            </Link>
            <Link href="/Prisma">
              <li className="cursor-pointer">Prisma</li>
            </Link>
            <Link href="/Filma">
              <li className="cursor-pointer">Filma</li>
            </Link>
          </ul>
        </div>
        {/* Fourth COlumn */}
        <div className="w-[75%]">
          <h1 className="text-2xl font-bold pb-5">ITEC</h1>
          <ul className="space-y-2 font-semibold ">
            <Link href="/">
              <li className="cursor-pointer">Home</li>
            </Link>
            <Link href="/about">
              <li className="cursor-pointer">About</li>
            </Link>
            <Link href="/home/#brands">
              <li className="cursor-pointer">Brands</li>
            </Link>
            <Link href="/">
              <li className="cursor-pointer">Contact Us</li>
            </Link>
            <Link href="/">
              <li className="cursor-pointer">WhatsApp</li>
            </Link>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
