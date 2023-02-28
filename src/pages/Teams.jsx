import React from "react";
import Navbar from "../components/Navbar";
import webDEV from "../assets/webDEV.png";
import appDEV from "../assets/appDEV.svg";
import UIUX from "../assets/UIUX.png";
import Community from "../assets/diversity.png";
import Footer from "../components/Footer";
import TeamsBG from "../assets/TeamsBG2.png";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Teams = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <>
      <Navbar />
      <section className="h-screen md:px-0 py-12">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-star mt-10">
          <div
            className="flex flex-col md:w-1/2 px-9 sm:px-5 lg:px-4 xl:px-0 space-y-2"
            data-aos="fade-down"
          >
            <h1 className="text-2xl text-center font-bold md:text-5xl md:text-left text-[#F4B400]">
              The Technical Team
            </h1>
            <p>
              Want to build websites, conduct workshops, seminars, etc? The
              Technical team does exactly that! We create all the requisite
              technical content for the club.
            </p>
          </div>

          <div className="p-9 md:w-1/2" data-aos="fade-up">
            <img src={webDEV} alt="" />
          </div>
        </div>
      </section>

      <section className="h-screen">
        <div className="container mx-auto flex flex-col md:flex-row-reverse items-center justify-star ">
          <div
            className="flex flex-col md:w-1/2 px-9 sm:px-5 lg:px-4 xl:px-0  space-y-2"
            data-aos="fade-down"
          >
            <h1 className="text-2xl text-center font-bold md:text-5xl md:text-left text-[#4285F4]">
              The App Development Team
            </h1>
            <p>
              If building websites is not your thing, why not build apps
              instead? The App development team conducts various seminars on,
              well, you guessed it - App Development! Flutter, Dart, all that
              good stuff!
            </p>
          </div>

          <div className="w-[300px] p-9 md:w-1/2" data-aos="fade-up">
            <img src={appDEV} alt="" />
          </div>
        </div>
      </section>

      <section className="h-screen">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-star ">
          <div
            className="flex flex-col md:w-1/2 px-9 sm:px-5 lg:px-4 xl:px-0 space-y-2"
            data-aos="fade-down"
          >
            <h1 className="text-2xl text-center font-bold md:text-5xl md:text-left text-[#DB4437]">
              The UI/UX Team
            </h1>
            <p>
              Our team designs user-friendly user interfaces in order for the
              users to have the best and an optimal experience! We also create
              designs for our usual community posts and announcements.
            </p>
          </div>
          <div className="p-9 md:w-1/2" data-aos="fade-up">
            <img src={UIUX} alt="" />
          </div>
        </div>
      </section>

      <section className="h-screen">
        <div className="container mx-auto flex flex-col md:flex-row-reverse items-center justify-star">
          <div
            className="flex flex-col md:w-1/2 px-9 sm:px-5 lg:px-4 xl:px-0  space-y-2"
            data-aos="fade-down"
          >
            <h1 className="text-2xl text-center font-bold md:text-5xl md:text-left text-[#4285F4]">
              The Community Management Team
            </h1>
            <p>
              We interact with our community in order to cater to their needs
              and expectatitions from the club and make sure there's a healthy
              interacation between the core team and them!
            </p>
          </div>

          <div className="pt-9 p-9 md:w-1/2" data-aos="fade-up">
            <img src={Community} alt="" />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Teams;
