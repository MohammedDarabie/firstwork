import Layout from "@/components/Layout";
import React from "react";
import Swipper from "@/components/Swipper";
import Link from "next/link";
const About = () => {
  const brandsLinks = [
    { alt: "brands_log", path: "./img/brands/extend_logo.png" },
    { alt: "brands_log", path: "./img/brands/rn_mark.jpg" },
    { alt: "brands_log", path: "./img/brands/prisma.png" },
    { alt: "brands_log", path: "./img/brands/filma.jpg" },
    { alt: "brands_log", path: "./img/brands/linx1.jpg" },
    { alt: "brands_log", path: "./img/brands/ohaus.jpg" },
    { alt: "brands_log", path: "./img/brands/zebra.jpg" },
  ];

  const customersLinks = [
    { alt: "brands_log", path: "./img/Logos/riyadh_foodInd.jpg" },
    { alt: "brands_log", path: "./img/Logos/Almarai_Corporate_Logo.svg" },
    { alt: "brands_log", path: "./img/Logos/alZamil.jpeg" },
    { alt: "brands_log", path: "./img/Logos/naqi.png" },
    { alt: "brands_log", path: "./img/Logos/entaj.jpg" },
    { alt: "brands_log", path: "./img/Logos/indomie.png" },
    { alt: "brands_log", path: "./img/Logos/halawani.png" },
    { alt: "brands_log", path: "./img/Logos/NADEC-New-logo-.png" },
    { alt: "brands_log", path: "./img/Logos/Nestle-Logo.png" },
    { alt: "brands_log", path: "./img/Logos/emad.png" },
    { alt: "brands_log", path: "./img/Logos/cabels/AlFanar.png" },
    { alt: "brands_log", path: "./img/Logos/cabels/almunif.gif" },
    { alt: "brands_log", path: "./img/Logos/cabels/avalon.png" },
    { alt: "brands_log", path: "./img/Logos/cabels/jeddah_company.png" },
    { alt: "brands_log", path: "./img/Logos/cabels/al-manar.jfif" },
    { alt: "brands_log", path: "./img/Logos/cabels/saveto.png" },
    { alt: "brands_log", path: "./img/Logos/cabels/sedco.png" },
    { alt: "brands_log", path: "./img/Logos/cabels/sappco.png" },
    { alt: "brands_log", path: "./img/Logos/cabels/rajhi_pipes.png" },
    { alt: "brands_log", path: "./img/Logos/cabels/riyadh_cabels.png" },
    { alt: "brands_log", path: "./img/Logos/cabels/mada.jpg" },
    { alt: "brands_log", path: "./img/Logos/cabels/view.png" },
  ];
  return ( <Layout>
      {/* About Us Image */}
      <div
        style={{ backgroundImage: "url(./img/aboutUs.jpg)" }}
        className=" bg-cover text-center"
      >
        <h1 className="text-3xl lg:text-7xl text-white font-bold py-24 lg:py-36">
          ABOUT US
        </h1>
      </div>
      {/* ------------------------------------------------------------ */}
      {/*-------------------- About Us Section --------------------*/}
      {/* ------------------------------------------------------------ */}
      <div className="bg-cover grid grid-cols-1 lg:grid-cols-2 lg:w-[75%] mx-auto pt-10 lg:pt-20 pb-10">
        {/* Left Side */}
        <div className=" space-y-4 lg:space-y-10 w-[75%] mx-auto border-b-2 border-black pb-10 lg:border-b-0">
          <h1 className="font-bold text-lg lg:text-xl ">
            High Quality Tactical Solutions
          </h1>
          <p className="font-bold text-lg lg:text-2xl ">
            Finding A Permanent Solution Is Our Ultimate Goal!
          </p>
          <h1 className="font-bold text-lg lg:text-4xl ">ITEC MISSION</h1>
          <p className="font-semibold  text-lg">
            To provide its customers with latest technology in industrial
            packaging and printing solutions and always exceed their
            expectations.
          </p>
          <h1 className="font-bold text-lg lg:text-4xl ">ITEC VISION</h1>
          <p className="font-semibold text-lg">
            To be the leading industrial packaging and printing solutions
            provider in GCC, through continual performance improvement for
            customer satisfaction and engagement.
          </p>
        </div>
        {/* Right Side */}
        <div className="space-y-10 mt-10 w-[75%] mx-auto">
          <p className="font-bold text-lg lg:text-2xl ">
            Since 2006, Our Team Has Succeeded In Understanding The Needs Of The
            Saudi Different Industries And Supplying Reliable Products To Serve
            Them All.
          </p>
          <p className="font-semibold text-lg">
            ITEC had been a main partner of success to many factories and
            industrial cities, by offering industrial equipment, weighing,
            packaging, printing, coding and marking solutions that fulfil all
            industries requirements. Our engineers helped many factories with
            customized solutions that got us highest customer satisfactions
            ratings. Our European and American manufacturers and exclusive
            brands include many prestige’s names like Linx, Prisma, Filma,
            Extend, Zebra, Rn mark, Ohaus and many more.
          </p>
          <p className="font-semibold text-lg">
            With the most reliable after sales service and maintenance available
            in the market we grantee you an ease of mind and a fruitful
            partnership.
          </p>
        </div>
      </div>
      {/* ------------------------------------------------------------ */}
      {/*-------------------- Download Itec Profile --------------------*/}
      {/* ------------------------------------------------------------ */}
      <div className="w-[75%] mx-auto text-center border-b-2 border-black pb-10 lg:border-b-0">
        <button className="text-white bg-sky-600 px-5 py-3 rounded-full my-20 hover:shadow-2xl">
          Download ITEC Profile
        </button>
      </div>
      {/* ------------------------------------------------------------ */}
      {/*--------------------  Facts --------------------*/}
      {/* ------------------------------------------------------------ */}
      <div className="flex justify-between flex-col lg:flex-row items-center lg:w-[75%] mx-auto mt-10 mb-36 border-b-2 border-black pb-36 lg:border-b-0">
        <div className="space-y-4">
          <p className="font-bold text-lg lg:text-xl ">Some Cool Facts</p>
          <p className="font-bold text-lg lg:text-4xl lg:w-[75%] ">
            Numbers Speak For Themselves
          </p>
        </div>
        <div className="flex flex-1 flex-col lg:flex-row items-center justify-center lg:justify-between space-y-10 mt-10">
          {/* Products */}
          <div className="space-y-4">
            <span className="text-8xl  ">350</span>
            <p className="text-center text-2xl font-semibold border-b-2 border-black pb-10 lg:border-b-0">
              Products
            </p>
          </div>
          {/* Experience */}
          <div className="space-y-4 ">
            <span className="text-8xl">16</span>
            <p className="text-center text-2xl font-semibold border-b-2 border-black pb-10 lg:border-b-0">
              Years <br></br> of <br></br> Experience
            </p>
          </div>
          {/* Projects */}
          <div className="space-y-4">
            <span className="text-8xl">3,200</span>
            <p className="text-center text-2xl font-semibold border-b-2 border-black pb-10 lg:border-b-0">
              Completed Projects
            </p>
          </div>
        </div>
      </div>
      {/* ------------------------------------------------------------ */}
      {/*--------------------  About Us Section 2 --------------------*/}
      {/* ------------------------------------------------------------ */}
      <div className=" w-[75%] mx-auto mt-10 lg:mb-36 pb-20 lg:pb-36">
        <p className="font-bold text-lg lg:text-2xl ">
          Reliability Comes First! We Make Sure That Our Partners Production
          Lines Are Running As Planned By Providing Dedicated Service Teams
          Available 24/7, And Securing Spare Parts and Consumables Stocks For
          Every Partner In Our Wearhouse. Our Focus Is 100% On Client Needs And
          Satisfaction.
        </p>
        {/*------------------------------ Grid Section ------------------------------*/}
        <div className="grid  grid-cols-1 lg:grid-cols-3 lg:w-[75%] mx-auto mt-10 lg:mt-20 space-y-10">
          {/*------------------------------ First Div ------------------------------*/}
          <div className="w-[75%] mx-auto space-y-5">
            <h1 className="font-bold text-lg lg:text-xl ">
              Reliable Solutions
            </h1>
            <p className="text-xl">
              For more than 16 years, ITEC has been committed to product
              innovation and reliability by listening to customer needs and
              delivering to the Saudi market solutions engineered to maximize
              productivity and efficiency. “We Are The Suppliers You Can Trust
              On For A Perfect Solution To All Your Packaging Needs,” said
              Abdulaziz Aldrbas, General Manager of Invention Technology Trading
              Company ITEC.
            </p>
          </div>
          {/*------------------------------ second Div ------------------------------*/}
          <div className="w-[75%] mx-auto space-y-5">
            <h1 className="font-bold text-lg lg:text-xl ">
              Premium Service & Warranty
            </h1>
            <p className=" text-xl">
              We know that your production plans are challenging, and sometimes
              you need the support of a partner. That’s why we are here to
              support you.
            </p>
            <p className=" text-xl">
              We provide high-quality services all around the Kingdom with
              technical assistance through our 24/7 service for all our
              customers. This means that in the event of a breakdown, our
              service team is ready to provide you with the most appropriate
              solution rapidly,
            </p>
          </div>
          {/*------------------------------ Third Div ------------------------------*/}
          <div className="w-[75%] mx-auto ">
            <p className="font-bold text-lg lg:text-3xl ">
              We Are The Suppliers You Can Trust On For A Perfect Solution To
              All Your Needs.
            </p>
          </div>
        </div>
      </div>
      {/* ------------------------------------------------------------ */}
      {/*--------------------  Need Help Section? --------------------*/}
      {/* ------------------------------------------------------------ */}
      <div className="flex flex-col lg:flex-row items-center border-b-2 border-black  w-[75%] mx-auto mt-10 mb-36 pb-36 justify-center space-y-5 lg:gap-20">
        <p className=" text-xl lg:text-3xl  font-bold ">
          Need Help With Easier Industrial Solutions? We Are Experts!
        </p>
        <Link  href='./dataSheets/company_Profile.pdf'><button className="bg-sky-600 px-5 py-2 lg:px-5 lg:py-3 text-white rounded-md lg:rounded-full hover:shadow-2xl">
          Let's Talk
        </button></Link>
      </div>
      {/* First Swipper */}
      <div className="mb-20 lg:w-[75%] mx-auto">
        <h1 className="font-semibold text-3xl text-center mb-10">Brands</h1>
        <Swipper brand={brandsLinks} />
      </div>
      {/* Second Swipper */}
      <div className="mb-20 lg:w-[75%] mx-auto ">
        <h1 className="font-semibold text-3xl text-center mb-10">Clients</h1>
        <Swipper brand={customersLinks} />
      </div>
    </Layout>

  );
};

export default About;
