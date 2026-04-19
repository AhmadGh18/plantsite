import React from "react";
import Navbar from "../components/Navbar";
import Body from "./Body";
import ShopCollection from "../components/ShopCollection";
import Features from "../components/Features";
import Gallery from "../components/Gallery";
import CallToAction from "../components/CallToAction";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Body />
      <ShopCollection />
      <Features />
      <Footer />
    </div>
  );
};

export default Home;
