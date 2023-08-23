import React from "react";
import Layout from "@/components/Layout";
const Filma = () => {
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
        <div className=" flex justify-around items-center">
          <h1 className="font-bold text-lg lg:text-2xl">Filma</h1>
          <img
            src="./img/brands/filma.jpg"
            className="w-[100px] lg:w-[200px]"
            alt="ohaus_logo"
          ></img>
        </div>
        {/* Filma Advantage */}
        <div className="my-10 space-y-4">
          <h1 className="text-2xl lg:text-4xl font-bold text-left">
            Filma Pallet Wrapper
          </h1>
          <p className=" font-bold text-xl lg:text-3xl ">Pallet wrapper</p>
          <p className="text-lg lg:text-2xl text-left">
            A pallet wrapper is indispensable in most production companies. All
            products produced by production companies ultimately have to be
            transported to different distribution locations.
          </p>
          <p className="text-lg lg:text-2xl text-left">
            There are a number of criteria to get loads to the end station
            reliably and damage free:
          </p>
          <ol className="text-lg lg:text-2xl text-left list-decimal ml-10 lg:ml-20">
            <li>
              Loads must be well stacked. That means no projections or leaning
              stacks.
            </li>
            <li>
              Loads must be well packed. Sufficient stability and a good
              connection between pallet and load is required. However, it is
              important that pallets remain ‘open’ for further transport
              possibilities.
            </li>
          </ol>
        </div>
        {/* Products */}
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
          <img
            src="./img/Products/Filma/fp10T-ultra.jpg"
            className="w-[400px]"
          ></img>
          {/* Product Details */}
          <div className=" space-y-5 my-10">
            <h1 className="text-2xl lg:text-4xl font-bold text-left">
              Filma FP10-T-ULTRA
            </h1>
            <ul className="text-md lg:text-lg list-disc ml-10 lg:ml-20">
              <li>Standard capacity 2000 Kg</li>
              <li>Predisposition for handling the machine</li>
              <li>
                FP10-T-ULTRA – FP30-EST – FP30-ST Transpellet entry safety
                photocell
              </li>
              <li>Table rotation transmission by chain</li>
              <li>Support wheel</li>
              <li>Necklace hinge (for FP10 ULTRA / FP10-T ULTRA models)</li>
              <li>Pallet height reading photocell</li>
              <li>
                FP30-ES – FP30-EST – FP30-S – FP / 30-ST Side safety guards
              </li>
            </ul>
            <button className="hover:underline hover:text-blue-600">
              Download the PDF of the Technical Characteristics
            </button>
          </div>
        </div>
        {/* Product 2 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
          <img src="./img/Products/Filma/fp650.jpg" className="w-[400px]"></img>
          {/* Product Details */}
          <div className=" space-y-5 my-10">
            <h1 className="text-2xl lg:text-4xl font-bold text-left">
              Filma FP650
            </h1>
            <ul className="text-md lg:text-lg list-disc ml-10 lg:ml-20">
              <li>Rotating power socket</li>
              <li>Motorized pre-stretch 670 / A (STD.200%)</li>
              <li>Safety photocell</li>
              <li>Control panel with touch-screen</li>
            </ul>
            <button className="hover:underline hover:text-blue-600">
              Download the PDF of the Technical Characteristics
            </button>
          </div>
        </div>
        {/* Product 3 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center ">
          <img
            src="./img/Products/Filma/FD6500.jpg"
            className="w-[400px]"
          ></img>
          {/* Product Details */}
          <div className=" space-y-5 my-10">
            <h1 className="text-2xl lg:text-4xl font-bold text-left">
              Filma FP6500
            </h1>
            <ul className="text-md lg:text-lg list-disc ml-10 lg:ml-20">
              <li>Touch-screen for setting parameters and cycles</li>
              <li>Safety nets H = 2000 with side access doors</li>
              <li>
                Safety barriers (MUTING) at the entrance and exit of the winder
              </li>
              <li>
                Pneumatic device to reduce the film band with flap welding
                (optional)
              </li>
              <li>TPneumatic pallet pressing device</li>
              <li>
                CP670 / AV Motorized pre-stretch of the film with variable ratio
                from 100% to 300% (1 m = 4 m of pre-stretched film)
              </li>
              <li>Special heights up to pallets H = 3000 mm</li>
            </ul>
            <button className="hover:underline hover:text-blue-600">
              Download the PDF of the Technical Characteristics
            </button>
          </div>
        </div>
        {/* Product 4 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 ">
          <img
            src="./img/Products/Filma/fp460-pallet-wrapper.jpg"
            className="w-[400px]"
          ></img>
          {/* Product Details */}
          <div className=" space-y-5 my-10">
            <h1 className="text-2xl lg:text-4xl font-bold text-left">
              Filma FP460
            </h1>
            <ul className="text-md lg:text-lg list-disc ml-10 lg:ml-20">
              <li>
                Turntable with metal rollers diameter mm. 76 / pitch mm. 95
              </li>
              <li>
                Film clamping unit with automatic tilt to optimize the stretch
                wrapping at the base of the load
              </li>
              <li>
                Safety barriers (MUTING) at the entrance and exit of the winder
              </li>
              <li>
                Film tail sealer at the end of the cycle and hot wire film
                cutting unit
              </li>
              <li>
                Powered pre-stretch at fixed ratio of 200% (1 mt. = 3 mt. of
                pre-stretched film)
              </li>
            </ul>
            <button className="hover:underline hover:text-blue-600">
              Download the PDF of the Technical Characteristics
            </button>
          </div>
        </div>
        {/* Filma Taping Machines */}
        <div className="my-10 space-y-4">
          <h1 className="text-2xl lg:text-4xl font-bold text-left">
            Filma Taping Machines
          </h1>
        </div>
        {/* Start Products */}
        {/* Product 2 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
          <img
            src="./img/Products/Filma/6-768x1024.png"
            className="w-[400px]"
          ></img>
          {/* Product Details */}
          <div className=" space-y-5 my-10">
            <h1 className="text-2xl lg:text-4xl font-bold text-left">
              SC1 / 500-A TAPING MACHINE
            </h1>
            <ul className="text-md lg:text-lg list-disc ml-10 lg:ml-20">
              <li>no. 2 side drive belts (h = 70 mm)</li>
              <li>box feed speed: 21 mt./min.</li>
              <li>minimum box width: 130 mm</li>
              <li>maximum box width: 500 mm</li>
              <li>minimum box length: 150 mm</li>
              <li>maximum box length: unlimited</li>
              <li>minimum box height: 130 mm</li>
              <li>maximum box height: 550 mm</li>
              <li>
                no. 2 taping units for closing the lower and upper part of the
                box at the same time
              </li>
              <li>
                max.width of adhesive tape reel: 50 mm (standard) / 75 mm
                (optional)
              </li>
              <li>max diameter of the adhesive tape reel: 410 mm</li>
              <li>
                length of the front / rear flap of the adhesive tape adjustable
                to 50 mm or 70 mm
              </li>
              <li>
                sensors for automatic adjustment of the machine according to the
                width and height of the box
              </li>
              <li>compressed air supply: min. 4 / bar – max. 6 / bar</li>
              <li>air consumption: 6 / lt per cycle / box</li>
              <li>
                selector for repositioning (opening) the upper head and side
                drive units
              </li>
              <li>
                side protections with opening door and bayonet limit switch to
                stop the machine
              </li>
              <li>worktop height: adjustable from 550 mm to 750 mm</li>
              <li>standard voltage: 380 v – 50 hz – 3 phase</li>
              <li>machine dimensions: 720 mm x 920 mm (width x length)</li>
            </ul>
          </div>
        </div>
        {/* Product 2 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
          <img
            src="./img/Products/Filma/sc500m-768x1131.jpg"
            className="w-[400px]"
          ></img>
          {/* Product Details */}
          <div className=" space-y-5 my-10">
            <h1 className="text-2xl lg:text-4xl font-bold text-left">
              SC1 / 500-M TAPING MACHINE
            </h1>
            <ul className="text-md lg:text-lg list-disc ml-10 lg:ml-20">
              <li>no. 2 side drive belts (h = 70 mm)</li>
              <li>box feed speed: 21 mt / min</li>
              <li>minimum box width: 130 mm</li>
              <li>maximum box width: 500 mm</li>
              <li>minimum box length: 150 mm</li>
              <li>maximum box length: unlimited</li>
              <li>minimum box height: 130 mm</li>
              <li>maximum box height: 550 mm</li>
              <li>
                no. 2 taping units for closing the lower and upper part of the
                box at the same time
              </li>
              <li>
                max.width of adhesive tape reel: 50 mm (standard) / 75 mm
                (optional)
              </li>
              <li>max diameter of the adhesive tape reel: 410 mm</li>
              <li>
                length of the front / rear flap of the adhesive tape adjustable
                to 50 mm or 70 mm
              </li>
              <li>
                handwheel for adjustment according to the width of the box
              </li>
              <li>knob for adjustment according to the height of the box</li>
              <li>upper pressure rollers (on the side)</li>
              <li>worktop height: adjustable from 550 mm to 750 mm</li>
              <li>standard voltage: 380 v – 50 hz – 3 phase</li>
              <li>machine dimensions: 720 mm x 920 mm (width x length)</li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Filma;
