import Layout from "@/components/Layout";
import Link from "next/link";
import React from "react";

const RNMark = () => {
  return (
    <Layout>
      {/* Store Front Image */}
      <div className="lg:w-[60%] mx-auto  ">
        <img src="./img/store_front.jpg" className="mx-auto w-full"></img>
      </div>
      {/* ------------------------------------------------------------ */}
      {/*--------------------  Introduction --------------------*/}
      {/* ------------------------------------------------------------ */}
      <div className=" w-[90%] lg:w-[60%] mx-auto my-20">
        {/* Title Description */}
        <div className="  my-10 space-y-4 ">
          <h1 className=" text-2xl lg:text-4xl font-bold text-center">
            Industrial Printers, Coders, and Markers
          </h1>
        </div>
        {/* Title Logo */}
        <div className=" flex justify-around items-center">
          <h1 className="font-bold text-lg lg:text-2xl">
            RN Mark Printing Solutions
          </h1>
          <img
            src="./img/brands/rn_mark.jpg"
            className="w-[100px] lg:w-[200px]"
            alt="ohaus_logo"
          ></img>
        </div>
        {/* Ohaus Advantage */}
        <div className="my-10 space-y-4">
          <h1 className="text-2xl lg:text-4xl font-bold text-left">
            RN Mark makes it fast and simple to code & mark important
            information.
          </h1>
          <p className=" text-lg lg:text-xl ">
            RN Mark Inc is a Canadian manufacturer based out of Richmond Hill,
            Ontario. For over 20 years we’ve had the pleasure of designing and
            providing affordable, high-performance, maintenance-free industrial
            inkjet printers for coding and marking to companies across the
            globe.
          </p>
        </div>
        {/*--------------------- Products 1 ---------------------*/}
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
          <img src="./img/Products/RN/1.png" className="w-[400px]"></img>
          {/* Product Details */}
          <div className=" space-y-5 my-10">
            <h1 className="text-2xl lg:text-4xl font-bold text-left">
              RNJet EP-6H+ Egg Printer
            </h1>
            <h3 className="font-bold text-xl lg:text-2xl">
              Industrial Inkjet Printing on Eggs
            </h3>
            <p className="text-md lg:text-lg">
              Ready for your production line.
            </p>
            <p className="text-md lg:text-lg">
              RNJet EP-6H+ is an affordable, high speed, high-resolution
              industrial printer for egg printing. Using USDA approved
              food-grade inks, it can print text, logos, counters, barcodes,
              time, and dates on eggshells with superior print resolution.
            </p>
            <p className="text-md lg:text-lg">
              The RNJet EP-6H+ is a stand-alone printer with 7″ touchscreen LCD,
              that can easily integrate into your production line. Connecting
              through RS-232, Ethernet, or USB, it can be controlled and
              operated from anywhere in the production facility.
            </p>
            {/*------------------- download Manual -----------------------------*/}
            <Link
              href="./dataSheets/2-RNMark/RNJetEP-6H+EggPrinter.pdf"
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
          <img src="./img/Products/RN/2.png" className="w-[400px]"></img>
          {/* Product Details */}
          <div className=" space-y-5 my-10">
            <h1 className="text-2xl lg:text-4xl font-bold text-left">
              RNJet 100
            </h1>
            <h3 className="font-bold text-xl lg:text-2xl">
              Industrial Inline Inkjet Printer
            </h3>
            <h3 className="font-bold text-xl lg:text-2xl">
              Doesn’t need any attention, cause it just keeps going!
            </h3>
            <h3 className="font-bold text-xl lg:text-2xl">
              Small Character Coding and Marking Printer.
            </h3>
            <p className="text-md lg:text-lg">
              The RNJet 100 is a high-resolution, small character industrial
              printer which offers remarkable product coding and marking
              performance.
            </p>
            <p className="text-md lg:text-lg">
              Using oil and solvent-based inks it can print text, logos,
              counters, barcodes, time, Dynamic Data-base and dates on a variety
              of porous & non-porous surfaces with superior print resolution.
            </p>
            {/*------------------- download Manual -----------------------------*/}
            <Link href="./dataSheets/2-RNMark/RNJet100.pdf" target="_blank">
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
          <img src="./img/Products/RN/3.png" className="w-[400px]"></img>
          {/* Product Details */}
          <div className=" space-y-5 my-10">
            <h1 className="text-2xl lg:text-4xl font-bold text-left">
              Date Coder RNJet H1+
            </h1>
            <h3 className="font-bold text-xl lg:text-2xl">
              Industrial Thermal Inkjet TIJ printer
            </h3>
            <h3 className="font-bold text-xl lg:text-2xl">
              No Mess, No Maintenance, Fast Dry, Small Character Coding and
              Marking Printer.{" "}
            </h3>
            <h3 className="font-bold text-xl lg:text-2xl">
              Delivering results to challenging marking requirements.
            </h3>
            <p className="text-md lg:text-lg">
              The RNJet H1+ is a high-resolution, high speed, small character
              industrial thermal printer / Date Coder, which offers fast dry
              product coding and marking with proven performance. Using solvent
              and water-based inks it can print text, logos, counters, barcodes,
              time codes, dates and more on a variety of porous & non-porous
              surfaces with superior print resolution.
            </p>
            {/*------------------- download Manual -----------------------------*/}
            <Link
              href="./dataSheets/2-RNMark/DateCoderRNJetH1+.pdf"
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

export default RNMark;
