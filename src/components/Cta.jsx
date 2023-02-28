import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Cta = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <section id="cta" className="bg-[#0F9D58]">
      <div className="container flex flex-col items-center justify-between px-6 py-24 mx-auto space-y-12 md:py-12 md:flex-row md:space-y-0">
        <h2
          className="text-5xl font-bold leading-tight text-center text-white sm:text-xl lg:text-4xl lg:max-w-xl lg:text-left"
          data-aos="fade-right"
        >
          Join the community right now and be a part of us!
        </h2>
        <button
          className="p-3 px-3 sm:px-2 lg:px-3 text-white hover:bg-[#F4B400] bg-[#DB4437] ease-in-out duration-200 rounded-full baseline"
          data-aos="fade-right"
        >
          <a href="https://gdsc.community.dev/mvj-college-of-engineering-bengaluru/">
            Become a member
          </a>
        </button>
      </div>
    </section>
  );
};

export default Cta;
