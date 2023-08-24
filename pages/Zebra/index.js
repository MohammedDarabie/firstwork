import Layout from "@/components/Layout";
import Link from "next/link";
import React from "react";

const Zebra = () => {
  return (
    <Layout>
      {/* Store Front Image */}
      <div className="lg:w-[60%] mx-auto  ">
        <img src="./img/store_front.jpg" className="mx-auto w-full"></img>
        <img src="./img/Products/Zebra/1.jpg" className="mx-auto w-full"></img>
      </div>
      {/* ------------------------------------------------------------ */}
      {/*--------------------  Introduction --------------------*/}
      {/* ------------------------------------------------------------ */}
      <div className=" w-[90%] lg:w-[60%] mx-auto my-20">
        {/* Title Description */}
        <div className="  my-10 space-y-4 ">
          <h1 className=" text-2xl lg:text-4xl font-bold text-center">
            BARCODE, RFID AND CARD PRINTING SUPPLIES
          </h1>
        </div>
        {/* Title Logo */}
        <div className=" flex justify-around items-center">
          <h1 className="font-bold text-lg lg:text-2xl">
            Zebra Printing Solutions
          </h1>
          <img
            src="./img/brands/zebra.jpg"
            className="w-[100px] lg:w-[200px]"
            alt="ohaus_logo"
          ></img>
        </div>
        {/* Ohaus Advantage */}
        <div className="my-10 space-y-4">
          <h1 className="capitalize text-2xl lg:text-4xl font-bold text-left">
            ALITY, RELIABLE BARCODE, RFID AND CARD SUPPLIES TO MEET THE DEMANDS
            OF YOUR APPLICATION
          </h1>
          <p className=" text-lg lg:text-xl ">
            Zebra’s barcode, RFID and card supplies have been carefully selected
            to ensure high print quality, durability and read performance, as
            well as reduced printer wear and tear.
          </p>
          <p className=" text-lg lg:text-xl ">
            Benefit from reduced instances of unreadable or missing labels, IT
            service calls and premature printhead failure. Zebra’s broad
            pre-tested barcode supplies offering means we have a solution for
            virtually any application.
          </p>
          <p className=" text-lg lg:text-xl ">
            Zebra’s knowledge, industry partnerships and its RFID manufacturing
            capabilities enables the delivery of a solution to maximise your
            return on investment.
          </p>
          <p className=" text-lg lg:text-xl ">
            Experience high-definition images and barcodes combining Zebra’s
            plastic cards and our True Colours® ribbons. To combat card
            counterfeiting, alteration and duplication, choose from our offering
            of overt, covert, or forensic security features.
          </p>
        </div>
        {/*--------------------- Products 1 ---------------------*/}
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
          <img src="./img/Products/Zebra/2.jpg" className="w-[400px]"></img>
          {/* Product Details */}
          <div className=" space-y-5 my-10">
            <h1 className="text-2xl lg:text-4xl font-bold text-left">
              Industrial Printers
            </h1>
            <h3 className="font-bold text-xl lg:text-2xl">
              Zebra industrial printers are designed for harsh and demanding
              environments. With rugged durability and future-proof
              adaptability, our user-friendly barcode label and RFID printers
              are designed to provide 24/7 reliability. Don’t compromise, choose
              Zebra for your high- to mid-volume applications.
            </h3>
            {/*------------------- download Manual -----------------------------*/}
            <Link
              href="./dataSheets/3-Zebra/industrialPrinters.pdf"
              target="_blank"
            >
              <button>
                <p className="px-3 py-2 bg-blue-700 rounded-lg text-white my-3">
                  Download Manual
                </p>
              </button>
            </Link>
          </div>
        </div>
        {/*--------------------- Products 2 ---------------------*/}
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
          <img src="./img/Products/Zebra/3.jpg" className="w-[400px]"></img>
          {/* Product Details */}
          <div className=" space-y-5 my-10">
            <h1 className="text-2xl lg:text-4xl font-bold text-left">
              Mobile Printers
            </h1>
            <h3 className="font-bold text-xl lg:text-2xl">
              ZZebra mobile printers increase employee productivity and accuracy
              by enabling portable printing of barcode labels, receipts and RFID
              tags at the point of application. We offer a handheld mobile
              printer at every price point for every industry, and accessories
              for a complete portable solution.
            </h3>
             {/*------------------- download Manual -----------------------------*/}
             <Link
              href="./dataSheets/3-Zebra/MobilePrinters.pdf"
              target="_blank"
            >
              <button>
                <p className="px-3 py-2 bg-blue-700 rounded-lg text-white my-3">
                  Download Manual
                </p>
              </button>
            </Link>
          </div>
        </div>
        {/*--------------------- Products 3 ---------------------*/}
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
          <img src="./img/Products/Zebra/4.jpg" className="w-[400px]"></img>
          {/* Product Details */}
          <div className=" space-y-5 my-10">
            <h1 className="text-2xl lg:text-4xl font-bold text-left">
              Card and Badge Printers
            </h1>
            <h3 className="font-bold text-xl lg:text-2xl">
              Zebra card and badge printers make it easy to connect, create and
              print high quality, durable cards for a variety of applications.
              Whether you’re printing ID cards, hospitality badges or financial
              or RFID cards, Zebra printers offer the security, supplies and
              software you need for a full solution.
            </h3>
             {/*------------------- download Manual -----------------------------*/}
             <Link
              href="./dataSheets/3-Zebra/CardandBadgePrinters.pdf"
              target="_blank"
            >
              <button>
                <p className="px-3 py-2 bg-blue-700 rounded-lg text-white my-3">
                  Download Manual
                </p>
              </button>
            </Link>
          </div>
        </div>
        {/*--------------------- Products 4 ---------------------*/}
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
          <img src="./img/Products/Zebra/5.jpg" className="w-[400px]"></img>
          {/* Product Details */}
          <div className=" space-y-5 my-10">
            <h1 className="text-2xl lg:text-4xl font-bold text-left">
              RFID Printers
            </h1>
            <h3 className="font-bold text-xl lg:text-2xl">
              Zebra offers UHF encoding in all our printer categories –
              industrial, desktop, mobile and card – ensuring you have the right
              RFID printer solution for your business. You can rely on accurate
              printed and encoded RAIN RFID labels, tags and cards to deliver
              reliable data.
            </h3>
             {/*------------------- download Manual -----------------------------*/}
             <Link
              href="./dataSheets/3-Zebra/RFIDPrinters.pdf"
              target="_blank"
            >
              <button>
                <p className="px-3 py-2 bg-blue-700 rounded-lg text-white my-3">
                  Download Manual
                </p>
              </button>
            </Link>
          </div>
        </div>
        {/*--------------------- Products 5 ---------------------*/}
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
          <img src="./img/Products/Zebra/6.jpg" className="w-[400px]"></img>
          {/* Product Details */}
          <div className=" space-y-5 my-10">
            <h1 className="text-2xl lg:text-4xl font-bold text-left">
              Print Engines
            </h1>
            <h3 className="font-bold text-xl lg:text-2xl">
              Zebra print engines are the work horses that power your print and
              apply applications. Designed to be integrated into a high speed,
              high throughput packaging or shipping solution, these barcode
              label printers set the standard for reliable operation in any
              environment.
            </h3>
             {/*------------------- download Manual -----------------------------*/}
             <Link
              href="./dataSheets/3-Zebra/PrintEngines.pdf"
              target="_blank"
            >
              <button>
                <p className="px-3 py-2 bg-blue-700 rounded-lg text-white my-3">
                  Download Manual
                </p>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Zebra;
