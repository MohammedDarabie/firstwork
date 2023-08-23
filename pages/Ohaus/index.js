import Layout from "@/components/Layout";
import React from "react";

const Ohaus = () => {
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
          <h1 className=" text-2xl lg:text-4xl font-bold text-center">Industrial Scales</h1>
          <p className=" text-2xl lg:text-4xl font-bold text-left">
            Wide range of scales available, below are some examples of our
            provided solutions
          </p>
        </div>
        {/* Title Logo */}
        <div className=" flex justify-around items-center">
          <h1 className="font-bold text-lg lg:text-2xl">Ohaus</h1>
          <img
            src="./img/brands/ohaus_log.png"
            className="w-[100px] lg:w-[200px]"
            alt="ohaus_logo"
          ></img>
        </div>
        {/* Ohaus Advantage */}
        <div className="my-10 space-y-4">
          <h1 className="text-2xl lg:text-4xl font-bold text-left">THE OHAUS ADVANTAGE</h1>
          <p className=" text-lg lg:text-xl ">
            OHAUS has been producing safe, precise, and reliable scales,
            analytical instruments, and laboratory equipment since Gustav and
            Karl Ohaus founded the company in 1907. We have evolved alongside
            the industries we serve, ensuring we not only meet their needs
            today, but anticipate their needs of tomorrow. This is the OHAUS
            Advantage – built on the core principles of{" "}
            <b>Trust, Agility, Ingenuity, </b> and <b> Commitment.</b>
          </p>
        </div>
        {/* Products */}
        <div className="grid grid-cols-1 lg:grid-cols-2 ">
          <img src="./img/Products/Ohous/Ind_Scales.jpg" className="w-[400px]"></img>
          {/* Product Details */}
          <div className=" space-y-5 my-10">
            <h1 className="text-2xl lg:text-4xl font-bold text-left">FLOOR SCALES</h1>
            <h3 className="font-bold text-xl lg:text-2xl">
              DEFENDER™ 5000 FLOOR SCALES – DF52
            </h3>
            <p className="text-md lg:text-lg">
              Prime German quality Floor Scales Full-fill Even the Most
              demanding Industry Applications
            </p>
            <p className= "text-md lg:text-lg">
              The OHAUS next generation Defender 5000 Series Floor Scale is a
              solid lineup of floor and pit mount scales that do not compromise
              on quality for industrial applications. Powered by four stainless
              steel IP68 hermetically sealed load cells that will withstand
              years of daily usage in industrial environments, these scales
              offer a unique combination of affordability, versatility and
              quality that your company can depend on for years and years.
            </p>
          </div>
        </div>
        {/* Product 2 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 ">
          <img src="./img/Products/Ohous/2.jpg" className="w-[400px]"></img>
          {/* Product Details */}
          <div className=" space-y-5 my-10">
            <h1 className="text-2xl lg:text-4xl font-bold text-left">SHIPPING SCALES</h1>
            <h3 className="font-bold text-xl lg:text-2xl">CATAPULT™ 5000</h3>
            <p className="text-md lg:text-lg">
              The Heavy-Duty Shipping Scale that Combines Utility and Economy
              The low-profile Catapult 5000 is an economical shipping scale
              that’s ideal for your shipping and receiving needs, as well as
              other general weighing applications. A sturdy stainless steel
              platform that can withstand heavy loads, an easy-to-read LED
              screen and an optional rechargeable battery make Catapult 5000 a
              great scale for small businesses, mail rooms, warehouses and even
              industrial environments.
            </p>
          </div>
        </div>
        {/* Product 3 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 ">
          <img src="./img/Products/Ohous/3.jpg" className="w-[400px]"></img>
          {/* Product Details */}
          <div className=" space-y-5 my-10">
            <h1 className="text-2xl lg:text-4xl font-bold text-left">COUNTING SCALES</h1>
            <h3 className="font-bold text-xl lg:text-2xl">RANGE 2000 COUNT</h3>
            <p className="ttext-md lg:text-lg">
              Effective Counting Scales to Ensure Accurate Results The Ranger
              Count 2000 has all of the capabilities to produce precise results
              rapidly for a variety of applications. With weighing, parts
              counting, check counting, and accumulation functions, Ranger Count
              2000 is the ideal scale to meet many industrial counting needs.
              Portable and equipped with a rechargeable battery, this scale is
              beneficial in every corner of the factory and is equipped with
              functions and features that elevate the Ranger Count 2000 to a
              class of its own.
            </p>
          </div>
        </div>
        {/* Product 4 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 ">
          <img src="./img/Products/Ohous/4.jpg" className="w-[400px]"></img>
          {/* Product Details */}
          <div className=" space-y-5 my-10">
            <h1 className="text-2xl lg:text-4xl font-bold text-left">BENCH SCALES</h1>
            <h3 className="font-bold text-xl lg:text-2xl">DEFENDER 6000 WASHDOWN</h3>
            <p className="text-md lg:text-lg">
              Advanced IP68/IP69k Washdown Bench Scale The Defender 6000 Series
              Extreme Washdown Bench Scale is specifically designed for food,
              chemical and pharmaceutical applications, including production and
              packaging. Defender 6000 handles the most demanding applications
              with 316 stainless steel platform and frame, and
              hermetically-sealed stainless steel IP69K load cell. Defender 6000
              meets metrological approvals, NSF listing, and supporting HACCP
              systems.
            </p>
          </div>
        </div>
        {/* Product 5 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 ">
          <img src="./img/Products/Ohous/5.jpg" className="w-[400px]"></img>
          {/* Product Details */}
          <div className=" space-y-5 my-10">
            <h1 className="text-2xl lg:text-4xl font-bold text-left">PRECISION BALANCES</h1>
            <h3 className="font-bold text-xl lg:text-2xl">PIONEER PRECISION</h3>
            <p className="text-md lg:text-lg">
              Affordable Balance to Achieve Reliable Results
            </p>
            <p className="text-md lg:text-lg">
              The Pioneer PX combines essential weighing functionality with
              competitive performance, offering high accuracy and repeatability
              for applications in laboratory, industrial and education settings.
              The PX is affordably priced, and intuitively designed for
              intelligent operation with a second-line display for additional
              information, and USB and RS232 connectivity for easy
              communication.
            </p>
          </div>
        </div>
        {/* Product 6 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 ">
          <img src="./img/Products/Ohous/6.jpg" className="w-[400px]"></img>
          {/* Product Details */}
          <div className=" space-y-5 my-10">
            <h1 className="text-2xl lg:text-4xl font-bold text-left">MOISTURE ANALYZERS</h1>
            <h3 className="font-bold text-xl lg:text-2xl">MB23</h3>
            <p className="text-md lg:text-lg">
              Outstanding Performance, Flexible Configuration and Reliable
              Results
            </p>
            <p className="text-md lg:text-lg">
              The MB23 provides precise moisture content determination at an
              unbeatable value. With a large backlit LCD display, standard RS232
              port, 110g capacity with a readability of 0.01g/0.1% and an
              non-glass infrared heating element, the MB23 offers moisture
              analysis for any budget.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Ohaus;
