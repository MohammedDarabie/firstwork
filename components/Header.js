import Link from "next/link";
import React, { useState } from "react";
import { BsLinkedin, BsWhatsapp, BsTwitter } from "react-icons/bs";
//
// import Container from "react-bootstrap/Container";
// import Navbar from "react-bootstrap/Navbar";
// import Nav from "react-bootstrap/Nav";
// import NavDropdown from "react-bootstrap/NavDropdown";

// import Navbar from "./submenu/navbar";

const Header = () => {
  const [showSubMenu, setShowSubMenu] = useState(false); // State for submenu visibility
  const [showSubSubMenu, setShowSubSubMenu] = useState(false); // State for sub-submenu visibility

  const toggleSubMenu = () => {
    setShowSubMenu(!showSubMenu);
    setShowSubSubMenu(false); // Close sub-submenu when main submenu is toggled
  };

  const toggleSubSubMenu = () => {
    setShowSubSubMenu(!showSubSubMenu);
  };
  return (
    // <header className="flex p-[20px] items-center ">
    //   {/* LOGO */}
    //   <div className="flex-1">
    //     <Link href="/">
    //       <img
    //         src="./img/itec-logo.jpg"
    //         alt="logo"
    //         className="w-[74px] lg:w-[120px] cursor-pointer"
    //       ></img>
    //     </Link>
    //   </div>
    //   {/* NAVBAR */}
    //   <ul className="flex space-x-2 lg:space-x-16 mr-9">
    //     <li className="text-sm lg:text-xl cursor-pointer hover:text-blue-700">
    //       <Link href="/about">About ITEC</Link>
    //     </li>
    //     <li className=" text-sm lg:text-xl cursor-pointer hover:text-blue-700">
    //       Solution and Products
    //     </li>
    //     <li className=" text-sm lg:text-xl cursor-pointer hover:text-blue-700">
    //       Brands
    //     </li>
    //     <li className=" text-sm lg:text-xl cursor-pointer hover:text-blue-700">
    //       Customers
    //     </li>
    //     <li className="text-sm lg:text-xl cursor-pointer hover:text-blue-700">
    //       Contact Us
    //     </li>
    //   </ul>
    //   {/* Socials */}
    //   <div className="flex space-x-3">
    //     <BsWhatsapp className=" text-3xl cursor-pointer text-green-600" />
    //     <BsLinkedin className=" text-3xl cursor-pointer text-blue-600" />
    //     <BsTwitter className="text-3xl cursor-pointer text-blue-600" />
    //   </div>
    // </header>

    // <header className="flex flex-col lg:flex-row p-4 lg:p-[20px] items-center">
    //   {/* LOGO */}
    //   <div className="lg:flex-1">
    //     <Link href="/">
    //       <img
    //         src="./img/itec-logo.jpg"
    //         alt="logo"
    //         className="w-[74px] lg:w-[120px] cursor-pointer"
    //       ></img>
    //     </Link>
    //   </div>
    //   {/* NAVBAR */}
    //   <ul className="flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-16 lg:mr-9">
    //     <li className="text-sm lg:text-xl cursor-pointer hover:text-blue-700">
    //       <Link href="/about">About ITEC</Link>
    //     </li>
    //     <li className="text-sm lg:text-xl cursor-pointer hover:text-blue-700">
    //       <Navbar></Navbar>
    //     </li>
    //     <li
    //       className={`text-sm lg:text-xl cursor-pointer relative ${
    //         showSubMenu ? "text-blue-700" : "hover:text-blue-700"
    //       }`}
    //       onClick={toggleSubMenu} // Toggle submenu on click
    //     >
    //       Solution and Products
    //       {showSubMenu && (
    //         <ul className="absolute left-0 top-full mt-2 bg-white shadow-lg p-4 rounded-md">
    //           <li
    //             className={`text-sm cursor-pointer ${
    //               showSubSubMenu ? "text-blue-700" : "hover:text-blue-700"
    //             }`}
    //             onClick={toggleSubSubMenu} // Toggle sub-submenu on click
    //           >
    //             First Element
    //             {showSubSubMenu && (
    //               <aside className="absolute top-0 right-full mt-0 bg-white shadow-lg p-4 rounded-md">
    //                 <ul>
    //                   <li className="text-sm cursor-pointer hover:text-blue-700 py-1">
    //                     Sub-item 1
    //                   </li>
    //                   <li className="text-sm cursor-pointer hover:text-blue-700 py-1">
    //                     Sub-item 2
    //                   </li>
    //                   <li className="text-sm cursor-pointer hover:text-blue-700 py-1">
    //                     Sub-item 3
    //                   </li>
    //                 </ul>
    //               </aside>
    //             )}
    //           </li>
    //           <li className="text-sm cursor-pointer hover:text-blue-700 py-2">
    //             Second Element
    //           </li>
    //           <li className="text-sm cursor-pointer hover:text-blue-700 py-2">
    //             Third Element
    //           </li>
    //           <li className="text-sm cursor-pointer hover:text-blue-700 py-2">
    //             Fourth Element
    //           </li>
    //         </ul>
    //       )}
    //     </li>
    //     <li className=" text-sm lg:text-xl cursor-pointer hover:text-blue-700">
    //       Brands
    //     </li>
    //     <li className=" text-sm lg:text-xl cursor-pointer hover:text-blue-700">
    //       Customers
    //     </li>
    //     <li className="text-sm lg:text-xl cursor-pointer hover:text-blue-700">
    //       Contact Us
    //     </li>
    //   </ul>
    //   {/* Socials */}
    //   <div className="flex space-x-3 mt-2 lg:mt-0">
    //     <BsWhatsapp className=" text-3xl cursor-pointer text-green-600" />
    //     <BsLinkedin className=" text-3xl cursor-pointer text-blue-600" />
    //     <BsTwitter className="text-3xl cursor-pointer text-blue-600" />
    //   </div>
    // </header>
    <header className="flex flex-col lg:flex-row p-4 lg:p-[20px] items-center">
      <div className="">
        <Link href="/">
          <img
            src="./img/itec-logo.jpg"
            alt="logo"
            className="w-[74px] lg:w-[120px] cursor-pointer"
          ></img>
        </Link>
      </div>
      <nav
        role="navigation"
        className="menu flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-16 lg:mr-9"
      >
        <label for="menu">
          {/* Menu <i class="fa fa-bars"></i> */}
          <svg
            className="w-6 h-6 text-gray-800"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </label>
        <input type="checkbox" id="menu" />
        <ul className="flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-16 lg:mr-9">
          <li className="text-sm lg:text-xl cursor-pointer hover:text-blue-700">
            <Link href="/about">About ITEC</Link>
          </li>
          <li class="menu-hasdropdown text-sm lg:text-xl cursor-pointer hover:text-blue-700">
            <a href="#">
              {/* <Link href=""> */}
              Solution and Products
              <label title="toggle menu" for="about" className="chev">
                {/* <i class="fa fa-caret-down"></i> */}
                <svg
                  className="w-6 h-6 text-gray-800"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  style={{ position: "absolute", top: "-16px" }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </label>
              {/* </Link> */}
            </a>
            <input type="checkbox" id="about" />
            <ul class="menu-dropdown">
              <li class="menu-hasdropdown menu-hasflyout">
                <a>
                  Printing Solutions
                  <label title="toggle menu" for="services">
                    <i class="fa fa-caret-down menu-downicon"></i>
                    <i class="fa fa-caret-right menu-righticon"></i>
                  </label>
                </a>
                <input type="checkbox" id="services" />
                <ul class="menu-dropdown">
                  <li>
                    <a href="/Linx">LINX</a>
                  </li>
                  <li>
                    <a href="/Rn-Mark">RN Mark</a>
                  </li>
                  <li>
                    <a href="/Zebra">Zebra</a>
                  </li>
                </ul>
              </li>
              <li class="menu-hasdropdown menu-hasflyout">
                <a>
                  Wrapping and Taping
                  <label title="toggle menu" for="services2">
                    <i class="fa fa-caret-down menu-downicon"></i>
                    <i class="fa fa-caret-right menu-righticon"></i>
                  </label>
                </a>
                <input type="checkbox" id="services2" />
                <ul class="menu-dropdown">
                  <li>
                    <a href="/Filma">Filma</a>
                  </li>
                  <li>
                    <a href="/Extend">Extend</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="/Prisma">Inspection and Quality Control</a>
              </li>
              <li>
                <a href="/Ohaus">Scales and Balances</a>
              </li>
              {/* <li class="menu-hasdropdown menu-hasflyout">
                <a>
                  Services
                  <label title="toggle menu" for="services">
                    <i class="fa fa-caret-down menu-downicon"></i>
                    <i class="fa fa-caret-right menu-righticon"></i>
                  </label>
                </a>
                <input type="checkbox" id="services" />
                <ul class="menu-dropdown">
                  <li>
                    <a href="">Service 1</a>
                  </li>
                  <li>
                    <a href="">Service 2</a>
                  </li>
                  <li>
                    <a href="">Service 3</a>
                  </li>
                </ul>
              </li> */}
            </ul>
          </li>
          <li className="text-sm lg:text-xl cursor-pointer hover:text-blue-700">
            <a href="/home/#brands">Brands</a>
          </li>
          <li className="text-sm lg:text-xl cursor-pointer hover:text-blue-700">
            <a href="/home/#customers">Customers</a>
          </li>
          {/* <li className="text-sm lg:text-xl cursor-pointer hover:text-blue-700">
            <a href="#">Contact Us</a>
          </li> */}
        </ul>
      </nav>
      <div className="flex space-x-3 mt-2 lg:mt-0">
        <Link href="https://wa.me/966557912129">
          <BsWhatsapp className=" text-3xl cursor-pointer text-green-600" />
        </Link>
        <BsLinkedin className=" text-3xl cursor-pointer text-blue-600" />
        <Link href="https://twitter.com/ITEC_SA_" target="_blank">
          <BsTwitter className="text-3xl cursor-pointer text-blue-600" />
        </Link>
      </div>
    </header>
  );
};

export default Header;
