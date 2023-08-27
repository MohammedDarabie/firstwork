import React from "react";
import Layout from "@/components/Layout";
import Link from "next/link";
import Head from "next/head";
const Prisma = () => {
  return (
    <>
    <Head>
      <title>Prisma - ITEC</title>
    </Head>
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
            ITEC Products Range
          </h1>
          <p className=" text-2xl lg:text-4xl font-bold text-center">
            Inspection and Quality Control Solutions
          </p>
        </div>
        {/* Title Logo */}
        <div className=" flex justify-around items-center">
          <h1 className="font-bold text-lg lg:text-2xl">Prisma</h1>
          <img
            src="./img/brands/prisma.png"
            className="w-[100px] lg:w-[200px]"
            alt="ohaus_logo"
          ></img>
        </div>
        {/* Ohaus Advantage */}
        <div className="my-10 space-y-4">
          <h1 className="text-2xl lg:text-4xl font-bold text-left">
            Prisma Checkweighers
          </h1>
          <p className=" text-lg lg:text-xl ">
            A <b>checkweigher</b> controls the weight of the 100% of your
            production, not only rejecting products under the correct weight,
            but also minimising overfill waste. The extremely high{" "}
            <b>accuracy</b> and <b>reliability</b> of a checkweigher allows you
            both to respect legal requirements, both to avoid waste and,
            therefore, increase productivity through <b>cost savings.</b>
            <br /> <br /> PRISMA INDUSTRIALE S.r.l. has been manufacturing
            <b> checkweighers since 1984</b> and since then has installed
            <b> over 10,000 dynamic weighing systems </b> on the production and
            packaging lines of businesses all over the world: a wide range of
            weighing systems, with <b> accuracy from ±0.05g up to 60Kg, </b>{" "}
            available with IP54 and IP66 protection and<b> MID approval.</b>{" "}
            <br /> <br /> <b>PRISMA checkweighers range</b> stands out for how
            <b> extensive</b> and <b>configurable</b> it is; we know how to help
            manufacturers find the most suitable solution for their sector,
            product and packaging type, and complexity of the application: from
            the simplest weight check up to installing MID-legalised metrologic
            instruments.
            <br /> <br /> The <b>top quality </b>of the components and materials
            ensures great machine <b>sturdiness </b>and <b>longevity, </b>just
            as the easily removable and washable plates allow for{" "}
            <b>quick cleaning and maintenance</b>.
            <br /> <br /> The intuitive touchscreen interface ensures{" "}
            <b>quick learning</b> and fast configuration and product change,
            maximizing productivity.
          </p>
        </div>
        {/* Products */}
        <div className="grid grid-cols-1 lg:grid-cols-2 ">
          <img
            src="./img/Products/Prisma/2CW51.PNG"
            className="w-[400px]"
          ></img>
          {/* Product Details */}
          <div className=" space-y-5 my-10">
            <h1 className="text-2xl lg:text-4xl font-bold text-left">
              Prisma 2CW51
            </h1>
            <h3 className="font-bold text-xl lg:text-2xl">
              Dynamic checkweigher for small sized products at low speed. It is
              the ideal way to get PRISMA quality at a low cost.
            </h3>
            <p className="text-md lg:text-lg">
              Low speed check weigher machine for small-medium size products
              such as trays, bags, cans, bottles, boxes of different shapes and
              sizes. With a maximum capacity of 1500g, accuracy starting from ±
              1 g and throughput of 80ppm, the 2CW51 is the ideal way to get
              PRISMA check weighers quality at a low cost.
            </p>
            
          </div>
        </div>
        {/* Product 2 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 content-center items-center">
          <img src="./img/Products/Prisma/2.png" className="w-[400px]"></img>
          {/* Product Details */}
          <div className=" space-y-5 my-10">
            <h1 className="text-2xl lg:text-4xl font-bold text-left">
              Prisma 35D3
            </h1>
            <h3 className="font-bold text-xl lg:text-2xl">
              Checkweigher for small and medium sized cylindrical packages for
              the food industry. The 35D3 was designed to run alongside the
              customer’s line conveyor without interrupting it.
            </h3>
            <p className="text-md lg:text-lg">
              The machine picks the product up directly from the conveyor and,
              via an alternating feed rotating system, positions and stabilises
              the product on a static weighing plate, thereby obtaining optimal
              levels of accuracy and repeatability despite high production
              speeds. This makes the instrument ideal to check high value, low
              stability products.
            </p>
            {/*------------------- download Manual -----------------------------*/}
            <Link
              href="./dataSheets/6-Prisma/Prisma 35d3.pdf"
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
      {/* ------------------------------------------------------------ */}
      {/*--------------------  Introduction -- 2 --------------------*/}
      {/* ------------------------------------------------------------ */}
      <div className=" w-[90%] lg:w-[60%] mx-auto my-20">
        {/* Prisma Advantage */}
        <div className="my-10 space-y-4">
          <h1 className="text-2xl lg:text-4xl font-bold text-left">
            Prisma Metal Detectors
          </h1>
          <p className=" text-lg lg:text-xl ">
            Advanced functions, clean sturdy design, simple intuitive user
            interface: PRISMA INDUSTRIALE metal detectors are the easiest way to
            inspecting for foreign bodies.
          </p>
          <p className=" text-lg lg:text-xl ">
            PRISMA INDUSTRIALE S.r.l. is one of the main european metal
            detectors manufacturers, with over 7000 metal detectors installed on
            production lines of every sector; from food to pharmaceutical, from
            personal care to pet food, companies large and small have recognised
            the quality of our metal detectors and count on them to safeguard
            their products and protect their brand, monitoring the CCPS
            (Critical Control Points) of the production line.
          </p>
          <p className=" text-lg lg:text-xl ">
            Checking for ferrous and non-ferrous metal contaminants inside the
            products with an accuracy compliant with the standards defined by
            BRC, the metal detectors designed by PRISMA INDUSTRIALE assure the
            rejection of defective parts from the production line.
          </p>
          <p className=" text-lg lg:text-xl ">
            The high sensitivity and advanced functions of self-check, phase
            adjustment and tracking unite the utmost reliability with a
            reduction in losses due to false rejects. The range, thanks to
            different sized passages and conveyors, stands out for how wide it
            is; in fact, it includes instruments to check packaged and loose
            foods, tray food, tablets and powders, all the while respecting the
            hygiene and safety control standards (ISO-FDA HACCP). The top
            quality of the components and materials ensures great machine
            sturdiness and longevity, just as the simple design and easily
            removable and washable conveyors allow for quick cleaning and
            maintenance.
          </p>
          <p className=" text-lg lg:text-xl ">
            The intuitive graphic display interface ensures quick learning and
            fast configuration and product change, maximising productivity.
            PRISMA INDUSTRIALE pharma and food metal detectors are available
            with a degree of protection up to IP66, can be integrated into
            checkweigher systems and installed within online systems for process
            analysis.
          </p>
        </div>
        {/* Products */}
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
          <img src="./img/Products/Prisma/3.PNG" className="w-[400px]"></img>
          {/* Product Details */}
          <div className=" space-y-5 my-10">
            <h1 className="text-2xl lg:text-4xl font-bold text-left">
              Prisma MDC11
            </h1>
            <ul className=" ml-10 list-disc">
              <li>Up to 0g</li>
              <li> 5 - 200 mm</li>
              <li>Up to 100 m/min</li>
            </ul>
            <p className="text-md lg:text-lg">
              Vertical Metal detectors for granular and powder products in high
              flow tubing and piping.
            </p>
            <p className="text-md lg:text-lg">
              The instrument is used in vertical packaging lines: the product
              goes through the circular transit aperture which, upon detecting
              metal contaminants, emits an alarm, allowing it to be removed.
            </p>
            <p className="text-md lg:text-lg">
              The MDC11 is positioned immediately upstream of the packaging
              machine, just before the product falls into the package, in order
              to exclude the possibility of further contaminants getting in
              between detection and closing the package, which can be made from
              any material.
            </p>
            {/*------------------- download Manual -----------------------------*/}
            <Link
              href="./dataSheets/6-Prisma/Prisma MDC11.pdf"
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
        {/* Products 2*/}
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
          <img src="./img/Products/Prisma/4.PNG" className="w-[400px]"></img>
          {/* Product Details */}
          <div className=" space-y-5 my-10">
            <h1 className="text-2xl lg:text-4xl font-bold text-left">
              Prisma MFS11
            </h1>
            <ul className=" ml-10 list-disc">
              <li>Up to 3200g</li>
              <li> 5 - 340 mm</li>
              <li>Up to 65 m/min</li>
            </ul>
            <p className="text-md lg:text-lg">
              Metal detector for small-sized loose and packaged products. Using
              a compact metal head allows you to fulfill the HACCP requirement
              to check for metal contaminants even in very limited spaces, while
              also managing contaminated product collection.
            </p>
            <p className="text-md lg:text-lg">
              The convenience of using a metal detector is closely related to
              the HACCP principles.
            </p>
            <p className="text-md lg:text-lg">
              What is HACCP? <br /> HACCP stands for Hazard Analysis and
              Critical Control Points and consists of a series of analysis and
              procedures aimed at guaranteeing the safety of the product,
              protecting it from biological, radiological, chemical and physical
              risks.
            </p>
            {/*------------------- download Manual -----------------------------*/}
            <Link
              href="./dataSheets/6-Prisma/Prisma MFS11.pdf"
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
      {/* ------------------------------------------------------------ */}
      {/*--------------------  Introduction -- 3 --------------------*/}
      {/* ------------------------------------------------------------ */}
      <div className=" w-[90%] lg:w-[60%] mx-auto my-20">
        {/* Ohaus Advantage */}
        <div className="my-10 space-y-4">
          <h1 className="text-2xl lg:text-4xl font-bold text-left">
            Prisma X-Ray Inspection
          </h1>
          <p className=" text-lg lg:text-xl ">
            X ray inspection systems are the best solution to ensure product
            integrity and prevent risks like customer claims and market recalls.
          </p>
          <p className=" text-lg lg:text-xl ">
            X ray machines base their operation on differences in density and,
            therefore, on the different ray absorption levels of objects
            unrelated to the product.
          </p>
          <p className=" text-lg lg:text-xl ">
            Therefore, with a single system it is possible to inspect a series
            of otherwise unidentifiable features:
          </p>
          <ul className="list-disc ml-10 text-lg lg:text-xl">
            <li>
              Contaminants like: bones, stones, ceramic, PVC, Teflon, glass,
              rubber, fibreglass, etc…
            </li>
            <li>
              Non-ferrous and non-magnetic stainless steel metal contaminants,
              even inside metal film packages or with aluminium foil
            </li>
            <li>Package defects like deformations and cracks</li>
            <li>Completeness and fill level,even in closed packages</li>
            <li>
              Presence of necessary elements like: the surprise inside a
              chocolate egg, pins in a packaged shirt
            </li>
            <li>Dynamic weighing and air bubble detection</li>
          </ul>
          <p className=" text-lg lg:text-xl ">
            The operator panel, equipped with touchscreen and an advanced user
            interface, makes configuring and use extremely intuitive.
          </p>
          <p className=" text-lg lg:text-xl ">
            The radiation levels used are so low that they do not damage or
            adulterate the product, keeping the X rayed food safe to eat. The
            use of materials that guarantee no radiation accumulation and the
            application of excellent quality active and passive safety systems
            ensure total machine reliability in complete compliance with the
            ISO-FDA HAACP, BRC, etc. standards.
          </p>
          <p className=" text-lg lg:text-xl ">
            The components require no or minimal maintenance; in any case,
            servicing is very quick, thanks to how simple the disassembly and
            washing operations are.
          </p>
          <p className=" text-lg lg:text-xl ">
            PRISMA X ray inspection systems are available with a degree of
            protection up to IP65, can be integrated into checkweigher systems
            and installed within online systems for process analysis.
          </p>
        </div>
        {/* Products */}
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
          <img src="./img/Products/Prisma/5.PNG" className="w-[400px]"></img>
          {/* Product Details */}
          <div className=" space-y-5 my-10">
            <h1 className="text-2xl lg:text-4xl font-bold text-left">
              Prisma 2XR51
            </h1>
            <ul className=" ml-10 list-disc">
              <li>Up to 1500g</li>
              <li> 5 - 200 mm</li>
              <li>Up to 45 m/min</li>
            </ul>
            <p className="text-md lg:text-lg">
              Food x ray machine for packaged food products with a maximum
              capacity of 1500 g and dimensions up to 200 x 100 mm.
              Implementable with integrated weighing system.
            </p>
            {/*------------------- download Manual -----------------------------*/}
            <Link
              href="./dataSheets/6-Prisma/Prisma 2XR51.pdf"
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
        {/* Products 2*/}
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
          <img src="./img/Products/Prisma/6.PNG" className="w-[400px]"></img>
          {/* Product Details */}
          <div className=" space-y-5 my-10">
            <h1 className="text-2xl lg:text-4xl font-bold text-left">
              Prisma 2XR11
            </h1>
            <ul className=" ml-10 list-disc">
              <li>Up to 5000g</li>
              <li> 100 - 235 mm</li>
              <li>Up to 65 m/min</li>
            </ul>
            <p className="text-md lg:text-lg">
              X-ray inspection for food products with a maximum capacity of 5000
              g and dimensions up to 235 x 150 mm.
            </p>
            <p className="text-md lg:text-lg">
              Top-level solution to inspect packaged products. At the highest
              level in terms of performances, longevity, safety and design, it
              presides with the maximum effectiveness the critical control
              points and is the best guarantee for the protection of your brand.
            </p>
            {/*------------------- download Manual -----------------------------*/}
            {/* <Link
              href="./dataSheets/6-Prisma/Prisma 2XR11.pdf"
              target="_blank"
            >
              <button>
                <p className="px-3 py-2 bg-blue-700 rounded-lg text-white my-3">
                  Download Manual
                </p>
              </button>
            </Link> */}
          </div>
        </div>
        {/* Products 3*/}
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
          <img src="./img/Products/Prisma/6.PNG" className="w-[400px]"></img>
          {/* Product Details */}
          <div className=" space-y-5 my-10">
            <h1 className="text-2xl lg:text-4xl font-bold text-left">
              Prisma 3XR11
            </h1>
            <ul className=" ml-10 list-disc">
              <li>Up to 5000g</li>
              <li> 200 - 335 mm</li>
              <li>Up to 65 m/min</li>
            </ul>
            <p className="text-md lg:text-lg">
              X-ray inspection system for food products with a maximum capacity
              of 5000 g and dimensions up to 335 x 150 mm.
            </p>
            <p className="text-md lg:text-lg">
              Among the best X-ray inspection systems available on the market,
              it guarantees a complete and accurate end-of-line inspection on a
              wide variety of medium-large industrial products, thanks to its
              construction quality, advanced software, and top-quality
              components.
            </p>
            {/*------------------- download Manual -----------------------------*/}
            {/* <Link
              href="./dataSheets/6-Prisma/Prisma 3XR11.pdf"
              target="_blank"
            >
              <button>
                <p className="px-3 py-2 bg-blue-700 rounded-lg text-white my-3">
                  Download Manual
                </p>
              </button>
            </Link> */}
          </div>
        </div>
      </div>
    </Layout>
    </>
  );
};

export default Prisma;
