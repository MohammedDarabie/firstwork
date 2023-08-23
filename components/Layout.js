import React from "react";
import Header from "./Header";
import Footer from "./Footer";
// import Header2 from "./Header2";

const Layout = ({ children }) => {
  return (
    <div className=" overflow-hidden">
      {/* <Header2 /> */}
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
