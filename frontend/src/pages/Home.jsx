import React from "react";
// Navbar is included inside `Body` (fixed header), so don't import here
import Body from "./Body";
import Content from "../components/Services";
import WhyUs from "../components/WhyUs";
import Gallery from "../components/Gallery";
import Contactus from "../components/Contactus";

const Home = () => {
  return (
    <div className="overflow-x-hidden">
      <Body />
      <Content />
      <WhyUs />
      <Gallery />
      <Contactus />
    </div>
  );
};

export default Home;
