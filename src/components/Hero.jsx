import React, { useEffect } from "react";
import HeroIMG from "../assets/man_svg.png";
import HeroBG from "../assets/hero-bg.png";
import Aos from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section
      className="hero py-12"
      style={{
        backgroundImage: `url(${HeroBG})`,
        // backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-star mt-10">
        <div className="flex flex-col md:w-1/2 px-9 md:px-0">
          <h1
            className="text-2xl text-center font-bold sm:pl-6 md:text-4xl md:text-left lg:text-5xl"
            data-aos="fade-right"
          >
            Join the Google Developer Student Club to Learn, Grow and
            Collaborate with a large and an enthusiastic community!
          </h1>
        </div>

        <div className=" md:w-1/2">
          <img data-aos="fade-up" src={HeroIMG} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
