import Layout from "@/components/Layout";
import React from "react";

const Linx = () => {
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
          <p className=" text-2xl lg:text-4xl font-bold text-left">
            Printing Solutions
          </p>
        </div>
        {/* Title Logo */}
        <div className=" flex justify-around items-center ">
          <h1 className="font-bold text-lg lg:text-2xl">LINX</h1>
          <img
            src="./img/brands/Linx-Logo545w.jpg"
            className="w-[100px] lg:w-[300px] rounded-lg "
            alt="ohaus_logo"
          ></img>
        </div>
        {/* Linx Details */}
        <div className="my-10 space-y-4">
          <h1 className="text-2xl lg:text-4xl font-bold text-left">
            LINX Continuous Ink Jet CIJ Printers
          </h1>
          <p className="text-lg lg:text-2xl text-left">
            Continuous Ink Jet (CIJ) systems are used to print variable
            information, such as dates or batch codes, on individual products as
            they move along the production line – regardless of porosity, size,
            shape or texture.
          </p>
          <p className="text-lg lg:text-2xl text-left">
            Remote printer monitoring and support enables customers to access
            and control Linx coders anywhere, anytime and enables Linx to
            provide remote support to keep lines running.
          </p>
          <p className="text-lg lg:text-2xl text-left">
            With concealed, easy-to-clean printheads, error-free touch-screen
            control and simple self-service capability, Linx Printing
            Technologies provide a cost-effective and efficient solution
            compared to similar industrial inkjet printers on the market.
          </p>
        </div>
        {/*----------------------------- Linx Products 1 -----------------------------*/}
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
          <img src="./img/Products/Linx/8900.PNG" className="w-[400px]"></img>
          {/* Product Details */}
          <div className=" space-y-5 my-10">
            <h1 className="text-2xl lg:text-4xl font-bold text-left">
              Linx 8900 Series
            </h1>
            <h1 className="text-lg lg:text-2xl font-bold text-left">
              Increasing operational efficiency, made easier than ever with
              remote connectivity to keep you in control, anytime, anywhere
            </h1>
            <h1 className="text-lg lg:text-2xl font-semibold text-left">
              Applications & Materials
            </h1>
            <p className="text-lg lg:text-xl text-left">
              24/7 operations | Barcodes | Batch coding | Data Matrix and QR
              codes | High-speed production | Retail packaging | Print up to 6
              lines
            </p>
            <h1 className="text-lg lg:text-2xl font-semibold text-left">
              Key Benefits:
            </h1>
            <ul className="text-md lg:text-lg list-disc ml-10 lg:ml-20">
              <li>Remote access, control and support with Linx PrinterNet</li>
              <li>Designed to support error-free coding</li>
              <li>Quick operation with simple touch screen interface</li>
              <li>Primary and secondary packaging with one printer</li>
            </ul>
            <button className="hover:underline hover:text-blue-600">
              Download Manual
            </button>
          </div>
        </div>
        {/*------------------- Linx Products 2 -----------------------------*/}
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
          <img src="./img/Products/Linx/7900.PNG" className="w-[400px]"></img>
          {/* Product Details */}
          <div className=" space-y-5 my-10">
            <h1 className="text-2xl lg:text-4xl font-bold text-left">
              Linx 7900 Series
            </h1>
            <h1 className="text-lg lg:text-2xl font-bold text-left">
              Specialist CIJ coding solution with low cost of ownership, with
              remote connectivity to keep you in control, anywhere, anytime
            </h1>
            <h1 className="text-lg lg:text-2xl font-semibold text-left">
              Applications & Materials
            </h1>
            <p className="text-lg lg:text-xl text-left">
              Any dry substrate | Barcodes | Batch coding | Cartons | Data
              Matrix 2D codes | Advanced production | Print up to 5 lines
            </p>
            <h1 className="text-lg lg:text-2xl font-semibold text-left">
              Key Benefits:
            </h1>
            <ul className="text-md lg:text-lg list-disc ml-10 lg:ml-20">
              <li>Remote access, control and support with Linx PrinterNet</li>
              <li>
                Automatic printhead cleaning system ensures trouble-free start
              </li>
              <li>Automatic code setup for faster, error-free coding</li>
            </ul>
          </div>
        </div>
        {/*------------------- Details 2 -----------------------------*/}
        <div className="my-10 space-y-4">
          <h1 className="text-2xl lg:text-4xl font-bold text-left">
            LINX Thermal Transfer Overprinter TTO
          </h1>
          <p className="text-lg lg:text-2xl text-left">
            Our range of thermal transfer overprinters (TTO) provide an ideal
            printing solution onto flexible packaging across a wide variety of
            industrial applications.
          </p>
          <p className="text-lg lg:text-2xl text-left">
            This includes printing onto plastics, film packaging, labels, gloss
            card, and other flexible materials requiring consistent, error free
            best before dates, batch codes, barcodes, ingredients, logos and
            other product information.
          </p>
        </div>
        {/*------------------- Products // 2 -----------------------------*/}
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
          <img src="./img/Products/Linx/tt1000.PNG" className="w-[400px]"></img>
          {/* Product Details */}
          <div className=" space-y-5 my-10">
            <h1 className="text-2xl lg:text-4xl font-bold text-left">
              Linx TT 500
            </h1>
            <h1 className="text-lg lg:text-2xl font-bold text-left">
              Flexible packaging and other flexible material printing at widths
              up to 32mm
            </h1>
            <p className="text-lg lg:text-xl text-left">
              The Linx TT 500 is a simple printer designed for printing onto
              flexible materials including bags, pouches, labels and flow wrap,
              ideal when coding areas up to 32mm x 100mm.
            </p>
            <p className="text-lg lg:text-xl text-left">
              Low cost of ownership, increased uptime, easy to use.
            </p>
          </div>
        </div>
        {/*------------------- Products // 3 -----------------------------*/}
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
          <img src="./img/Products/Linx/tt1000.PNG" className="w-[400px]"></img>
          {/* Product Details */}
          <div className=" space-y-5 my-10">
            <h1 className="text-2xl lg:text-4xl font-bold text-left">
              Linx TT 750
            </h1>
            <h1 className="text-lg lg:text-2xl font-bold text-left">
              Flexible packaging and other flexible material printing at widths
              up to 53mm
            </h1>
            <p className="text-lg lg:text-xl text-left">
              The Linx TT 750 is a simple printer designed for printing onto
              flexible materials including bags, pouches, labels and flow wrap,
              ideal when coding areas up to 53mm x 200mm.
            </p>
            <p className="text-lg lg:text-xl text-left">
              Low cost of ownership, increased uptime, easy to use.
            </p>
          </div>
        </div>
        {/*------------------- Products // 4 -----------------------------*/}
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
          <img src="./img/Products/Linx/tt1000.PNG" className="w-[400px]"></img>
          {/* Product Details */}
          <div className=" space-y-5 my-10">
            <h1 className="text-2xl lg:text-4xl font-bold text-left">
              Linx TT 1000
            </h1>
            <h1 className="text-lg lg:text-2xl font-bold text-left">
              Flexible packaging and other flexible material printing at widths
              up to 107mm
            </h1>
            <p className="text-lg lg:text-xl text-left">
              The Linx TT 1000 is a simple printer designed for printing onto
              flexible materials including bags, pouches, labels and flow wrap,
              ideal when coding areas up to 107mm x 300mm.
            </p>
            <p className="text-lg lg:text-xl text-left">
              Low cost of ownership, increased uptime, easy to use.
            </p>
          </div>
        </div>
        {/*------------------- Details 3 -------------------*/}
        <div className="my-10 space-y-4">
          <h1 className="text-2xl lg:text-4xl font-bold text-left">
            LINX Laser Coders
          </h1>
        </div>
        {/*----------------------------- Linx Products 1 -----------------------------*/}
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
          <img src="./img/Products/Linx/L1.PNG" className="w-[400px]"></img>
          {/* Product Details */}
          <div className=" space-y-5 my-10">
            <h1 className="text-2xl lg:text-4xl font-bold text-left">
              Linx CSL10
            </h1>
            <h1 className="text-lg lg:text-2xl font-bold text-left">
              Linx laser marking machines and coding systems are ideal for high
              print volumes – such as food, drink and pharmaceutical products –
              while providing permanent traceability.
            </h1>
            <p className="text-lg lg:text-xl text-left">
              Improve productivity and keep in control of your Linx CSL laser
              marking and coding systems with Linx PrinterNet, remote
              connectivity enabling you to monitor and control your printer
              anywhere, anytime.
            </p>
            <p className="text-lg lg:text-xl text-left">
              Linx laser coders offer any-orientation coding alongside full
              touch-screen control, low maintenance costs and zero consumables –
              providing an affordable and effective solution compared to other
              products on the market.
            </p>
            <p className="text-lg lg:text-xl text-left">
              For more information on Linx Laser marking products, see LINX
              <br />
              <button className="underline "> laser brochure</button>
            </p>
          </div>
        </div>
        {/*------------------- Details 4 -------------------*/}
        <div className="my-10 space-y-4">
          <h1 className="text-2xl lg:text-4xl font-bold text-left">
            LINX Large Character
          </h1>
        </div>
        {/*----------------------------- Linx Products 1 -----------------------------*/}
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
          <img src="./img/Products/Linx/LC.PNG" className="w-[400px]"></img>
          {/* Product Details */}
          <div className=" space-y-5 my-10">
            <h1 className="text-2xl lg:text-4xl font-bold text-left">
              Linx IJ355 and IJ375
            </h1>

            <h1 className="text-lg lg:text-2xl font-bold text-left">
              Linx IJ355 and IJ375 large character case coding machines offer a
              cost effective alternative to labels and pre-printed boxes.
            </h1>
            <p className="text-lg lg:text-xl text-left">
              They can print text, logos and graphics up to 53mm (IJ355) or 70mm
              (IJ375) high onto porous substrates such as paper, card and wood.
            </p>
          </div>
        </div>
        {/*------------------- Details 3 -------------------*/}
        <div className="my-10 space-y-4">
          <h1 className="text-2xl lg:text-4xl font-bold text-left">
            LINX Thermal inkjet
          </h1>
        </div>
        {/*----------------------------- Linx Products 1 -----------------------------*/}
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
          <img src="./img/Products/Linx/TIJ.PNG" className="w-[400px]"></img>
          {/* Product Details */}
          <div className=" space-y-5 my-10">
            <p className="text-lg lg:text-xl text-left">
              Thermal Inkjet (TIJ) printers provide a high resolution digital
              alternative to roller coders, valvejet and CIJ systems. The wide
              range of inks available make them suitable for coding onto boxes,
              trays, sleeves and plastic packaging materials.
            </p>
            <p className="text-lg lg:text-xl text-left">Linx TJ20</p>
            <p className="text-lg lg:text-xl text-left">
              <b> Simple, affordable and reliable.</b> Designed for single shift
              production, this robust printer is easy to install and easy to
              use, keeping costs down while producing clear, durable codes on a
              wide range of packaging materials.
            </p>
            <p className="text-lg lg:text-xl text-left">Linx TJ50</p>
            <p className="text-lg lg:text-xl text-left">
              <b>Reliable, connected and high performance.</b> This versatile
              thermal ink jet solution is designed to print text, graphics and
              machine-readable codes on demanding applications in high–speed
              environments. The easy database connectivity eliminates errors and
              makes operation simple.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Linx;
