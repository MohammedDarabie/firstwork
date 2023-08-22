import Layout from "@/components/Layout";
import Swipper from "@/utils/Swipper";
import React from "react";

export default function Starter() {
  const partners = [
    './img/'
  ]
  return (
    <Layout>
      {/*-------------------- Landing Picture --------------------*/}
      <section
        style={{ backgroundImage: "url(./img/landing_bg.jpg)" }}
        className="mx-auto p-12 lg:p-60 bg-cover"
      >
        <h3 className="text-center text-lg lg:text-xl font-bold text-white">
          Saudi's Leading Industrial Supplier Company
        </h3>
        <h1 className="text-uppercase text-center text-4xl lg:text-7xl font-bold text-white w-[50%] mx-auto pt-12">
          invention technology trading company
        </h1>
      </section>
      {/* ------------------------------------------------------------ */}
      {/*-------------------- About Us Section --------------------*/}
      {/* ------------------------------------------------------------ */}
      <section className="flex flex-col items-center space-y-12 text-center w-[75%] mx-auto my-20 lg:my-40">
        <h1 className="font-bold text-lg lg:text-xl ">About Us</h1>
        <p className="font-bold text-2xl lg:text-4xl w-full lg:w-[650px] mx-auto">
          16 Years Of Excellence In Supplying and Manufacturing Printing and
          Packaging Solutions For The Saudi Market With Quality At It's Best!
        </p>
        <p className="w-full lg:w-[650px] mb-20 text-center mx-auto text-lg lg:text-xl">
          With 16 years of experience in the Saudi market, ITEC had been a main
          partner of success to many factories and industrial cities, by
          offering industrial equipment, weighing, packaging, printing, coding
          and marking solutions that fulfil all industries requirements. Our
          engineers helped many factories with customized solutions that got us
          highest customer satisfactions ratings. Our European and American
          manufacturers and exclusive brands include many prestige’s names like
          Linx, Prisma, Filma, Extend, Zebra, Rn mark, Ohaus and many more
        </p>
        <p className="w-full lg:w-[650px] mb-20 text-center mx-auto text-lg lg:text-xl">
          With the most reliable after sales service and maintenance available
          in the market we grantee you an ease of mind and a fruitful
          partnership.
        </p>
      </section>
      {/* ------------------------------------------------------------ */}
      {/*-------------------- Our Brands Section --------------------*/}
      {/* ------------------------------------------------------------ */}
      <section
        style={{ backgroundImage: "url(./img/our_brands_pic.jpg)" }}
        className="bg-cover grid grid-cols-1 lg:grid-cols-2 "
      >
        {/*-------------------- Left Section --------------------*/}
        <div className="text-white w-[75%] mx-auto">
          {/* First Section */}
          <div className="border-b-[1px] pt-36 pb-10 w-[75%]">
            <h1 className="font-bold text-lg lg:text-xl ">Our Brands</h1>
            <p className="text-2xl font-bold  mt-10">
              We offer the Saudi market premium brands to produce the most
              reliable and trendy solution you are looking for.
            </p>
          </div>
          {/* Second Section */}
          <div className="border-b-[1px] pt-20 pb-10 w-[75%]">
            <h1 className="font-bold text-lg lg:text-xl ">
              Industrial Coding and Marking Systems
            </h1>
            <p className="text-lg lg:text-2xl font-light  mt-10">
              Linx Products are used on production lines across the world. These
              include Continuous Ink Jet (CIJ) printers used in industries such
              as food, beverage, and automotive, laser coders for industries
              such as beverage, pharmaceuticals, or cosmetics, Large Character
              Printers for outer case coding and packaging, Thermal Inkjet (TIJ)
              printers coding onto boxes, trays, sleeves, and packaging
              materials, and Thermal Transfer Overprinters (TTO) used for
              marking plastics, film packaging, labels, gloss card, and other
              flexible materials. Any industry which requires product
              identification codes, batch numbers, use by dates, and barcodes
              may have a Linx printer on its line.
            </p>
          </div>
          {/* Third Section */}
          <div className="border-b-[1px] pt-20 pb-10 w-[75%]">
            <h1 className="font-bold text-lg lg:text-xl ">
              Checkweighers, Metal Detectors & X-Ray Inspection
            </h1>
            <p className="text-lg lg:text-2xl font-light  mt-10">
              PRISMA is the Italian leader in dynamic weighing, with 37 years of
              experience in weight control and contaminant inspection in
              industrial products
            </p>
          </div>
          {/* Fourth Section */}
          <div className="border-b-[1px] pt-20 pb-10 w-[75%]">
            <h1 className="font-bold text-lg lg:text-xl ">
              Industrial Scales & Balances
            </h1>
            <p className="text-lg lg:text-2xl font-light  mt-10">
              OHAUS has been producing safe, precise, and reliable scales,
              analytical instruments, and laboratory equipment since 1907. We
              have evolved alongside the industries we serve, ensuring we not
              only meet their needs today but anticipate their needs of
              tomorrow.
            </p>
          </div>
        </div>
        {/*-------------------- Right Section --------------------*/}
        <div className="text-white w-[75%] mx-auto flex flex-col space-y-10">
          <p className="text-4xl font-bold pt-10 lg:pt-96 pb-10 w-[75%]">
            The only place where you’ll get the perfect packaging and printing
            solution for all your industry needs.
          </p>
          {/* Spinner Pictuers */}
          <div className=" w-[75%] mx-auto">
            <img src="./img/brands/1F.jpg"></img>
          </div>
          <div className="w-[75%] mx-auto">
            <img src="./img/saso.jpg"></img>
          </div>
          <div className="w-[75%] mx-auto pb-9 ">
            <img src="./img/ISO.jpg" className="mx-auto"></img>
          </div>
        </div>
      </section>
      {/* ------------------------------------------------------------ */}
      {/*-------------------- Our Contribution Section --------------------*/}
      {/* ------------------------------------------------------------ */}
      <section className="flex flex-col items-center space-y-12 text-center w-[75%] mx-auto my-20 lg:my-40">
        <h1 className="font-bold text-lg lg:text-xl ">Our Contributions</h1>
        <p className="font-bold text-2xl lg:text-4xl w-full lg:w-[650px] mx-auto">
          Industries We Serve!
        </p>
        {/* Industrial Pictures */}
        <div className="flex flex-col lg:flex-row ">
          <div className="m-2">
            <img src="./img/Krones.jpg"></img>
            <h1 className="font-bold text-lg lg:text-xl text-left  pt-2 lg:pt-5 cursor-pointer">
              Food and Beverage Industries
            </h1>
          </div>
          <div className="m-2">
            <img src="./img/Krones.jpg"></img>
            <h1 className="font-bold text-lg lg:text-xl text-left pt-2 lg:pt-5 cursor-pointer">
              Cables and Pipes Industries
            </h1>
          </div>
          <div className="m-2">
            <img src="./img/Krones.jpg"></img>
            <h1 className="font-bold text-lg lg:text-xl text-left pt-2 lg:pt-5 cursor-pointer">
              Chemicals Industry
            </h1>
          </div>
        </div>
      </section>
      {/* ------------------------------------------------------------ */}
      {/*-------------------- Our Customers Section --------------------*/}
      {/* ------------------------------------------------------------ */}
      <section className="items-center space-y-12 text-center w-[75%] mx-auto my-20 lg:my-40 text-3xl font-bold">
        <h1 className="text-left">Our Success Partners and Customers</h1>
      {/* Spinner Customers */}
      <div>
<Swipper/>
      </div>
      </section>
    </Layout>
  );
}
