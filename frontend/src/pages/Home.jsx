import React from "react";
import Navbar from "../components/Navbar";
import Body from "./Body";
import Content from "../components/Services";
import WhyUs from "../components/WhyUs";
import Gallery from "../components/Gallery";
import Contactus from "../components/Contactus";

const Home = () => {
  return (
    <div className="overflow-x-hidden">
      {/* <Navbar /> */}
      <Body />
      <Content />
      <WhyUs />
      <Gallery />
      <Contactus />
    </div>
  );
};

export default Home;
