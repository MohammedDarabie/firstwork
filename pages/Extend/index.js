import Layout from "@/components/Layout";
import React from "react";

const Extend = () => {
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
            Wrapping and Tapping
          </h1>
          <p className=" text-2xl lg:text-4xl font-bold text-left">
            Packaging Machines and accessories
          </p>
        </div>
        {/* Title Logo */}
        <div className=" flex justify-around items-center ">
          <h1 className="font-bold text-lg lg:text-2xl">
            Extend Packaging Solutions
          </h1>
          <img
            src="./img/brands/extend.png"
            className="w-[100px] lg:w-[200px] rounded-lg p-1 bg-slate-200"
            alt="ohaus_logo"
          ></img>
        </div>
        <p className=" mt-10 text-2xl lg:text-4xl font-bold text-left">
          PALLET WRAPPER
        </p>
        {/* Products */}
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center lg:my-36">
          <img src="./img/Products/Extend/1.png" className="w-[400px]"></img>
          {/* Product Details */}
          <div className=" space-y-5 my-10">
            <h1 className="text-2xl lg:text-4xl font-bold text-left">
              TMD-P26P
            </h1>
            <h1 className="text-lg lg:text-2xl font-bold text-left">
              Major Features
            </h1>
            <ul className="text-md lg:text-lg list-disc ml-10 lg:ml-20">
              <li>
                300% POWER PRE-STRETCH: 1 METER FILM PRE-STRETCH TO BE 4 METERS
              </li>
              <li>TURNTABLE HOME POSITION</li>
              <li>35 SOFT START AND STOP</li>
              <li>CHOICE OF AUTOMATIC/ MANUAL MODES</li>
              <li>ADJUSTABLE TOP AND BOTTOM WRAP COUNTS. </li>
              <li>
                ADJUSTABLE WRAPPING TENSION/ TURNTABLE SPEED/ CARRIAGE SPEED
              </li>
              <li>TROUBLE SHOOTING SHOWN ON SCREEN</li>
              <li>SAFETY SWITCH TO PREVENT FROM FOOT PINCH</li>
              <li>HEIGHT DETECTION BY PHOTO SENSOR</li>
            </ul>
          </div>
        </div>
        {/* Products */}
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center lg:my-36">
          <img src="./img/Products/Extend/2.png" className="w-[400px]"></img>
          {/* Product Details */}
          <div className=" space-y-5 lg:my-10">
            <h1 className="text-2xl lg:text-4xl font-bold text-left">
              EXP-108
            </h1>
            <h1 className="text-lg lg:text-2xl font-bold text-left">
              Major Features
            </h1>
            <ul className="text-md lg:text-lg list-disc ml-10 lg:ml-20">
              <li>
                300% POWER PRE-STRETCH. 1 METER FILM PRE-STRETCHED TO BE 4
                METERS
              </li>
              <li>TURNTABLE HOME POSITION</li>
              <li>SLOW START AND STOP</li>
              <li>CHOICE OF AUTOMATIC/ MANUAL MODES</li>
              <li>ADJUSTABLE TOP AND BOTTOM WRAP COUNTS. </li>
              <li>
                ADJUSTABLE TURNTABLE SPEED/CARRIAGE SPEED/WRAPPING TENSION
              </li>
              <li>MEMORY MODE</li>
              <li>180 DEGREE ROTATING CONTROL BOX</li>
              <li>MANUAL REINFORCING WRAPPING</li>
              <li>SAFETY SWITCH TO PREVENT FOOT PINCH</li>
              <li>HEIGHT DETECTION BY PHOTO SENSOR</li>
              <li>ADVANCED SOFT WRAPPING</li>
              <li>TROUBLE SHOOTING SHOWN ON SCREEN</li>
            </ul>
          </div>
        </div>
        {/* Carton Sealer */}
        <p className=" mt-10 text-2xl lg:text-4xl font-bold text-left">
          CARTON SEALER
        </p>
        {/* Products 1*/}
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center my-36">
          <img src="./img/Products/Extend/3.png" className="w-[400px]"></img>
          {/* Product Details */}
          <div className=" space-y-5 my-10">
            <h1 className="text-2xl lg:text-4xl font-bold text-left">
              TMD-C26UF
            </h1>
            <h1 className="text-lg lg:text-2xl font-bold text-left">
              Major Features
            </h1>
            <ul className="text-md lg:text-lg list-disc ml-10 lg:ml-20">
              <li>CASE FLAPING CLOSER</li>
            </ul>
            <h1 className="text-lg lg:text-2xl font-bold text-left">Options</h1>
            <ul className="text-md lg:text-lg list-disc ml-10 lg:ml-20">
              <li>3” TAPE HEAD</li>
              <li>INFEED/OUTFEED SAFETY GUARD</li>
              <li>INFEED/OUTFEED ROLLER TABLE</li>
              <li>STOPPER (INDEXER)</li>
              <li>TAPE OUT DETECTOR</li>
            </ul>
          </div>
        </div>
        {/* Products 2*/}
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center my-36">
          <img src="./img/Products/Extend/4.png" className="w-[400px]"></img>
          {/* Product Details */}
          <div className=" space-y-5 my-10">
            <h1 className="text-2xl lg:text-4xl font-bold text-left">
              TMD-C26R
            </h1>
            <h1 className="text-lg lg:text-2xl font-bold text-left">
              Major Features
            </h1>
            <ul className="text-md lg:text-lg list-disc ml-10 lg:ml-20">
              <li>MEMORY MODE</li>
            </ul>
            <h1 className="text-lg lg:text-2xl font-bold text-left">Options</h1>
            <ul className="text-md lg:text-lg list-disc ml-10 lg:ml-20">
              <li>3” TAPE HEAD</li>
              <li>INFEED SAFETY GUARD</li>
              <li>OUTFEED ROLLER TABLE</li>
              <li>INFEED ROLLER TABLE</li>
              <li>OUTFEED ROLLER TABLE</li>
            </ul>
          </div>
        </div>
        {/* Products 3*/}
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center my-36">
          <img src="./img/Products/Extend/4.png" className="w-[400px]"></img>
          {/* Product Details */}
          <div className=" space-y-5 my-10">
            <h1 className="text-2xl lg:text-4xl font-bold text-left">
              EKH-680
            </h1>
            <h1 className="text-lg lg:text-2xl font-bold text-left">
              Major Features
            </h1>
            <ul className="text-md lg:text-lg list-disc ml-10 lg:ml-20">
              <li>PCB CONTROL PANEL</li>
              <li>PCB CONTROL PANEL TO CLEAR INFORM ERROR MESSAGE</li>
              <li>WELL HEATING BLADE SYSTEM TO ENSURE FILM CLEAN CUTTING</li>
              <li>
                WELL HEATING ELEMENTS TO ENSURE FAST AND STABLE HEATING TO
                ACHIEVE PERFECT SHRINKING
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Extend;
