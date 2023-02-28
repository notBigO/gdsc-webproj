import React, { useEffect } from "react";
import About from "../components/About";
import Cta from "../components/Cta";
import Events from "../components/Events";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />

      <Hero />

      <About />

      <Events />

      <Cta />

      <Footer />
    </>
  );
};

export default Home;
