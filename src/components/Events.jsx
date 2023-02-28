import React, { useEffect } from "react";
import WebDev from "../assets/web-design.png";
import TechTalk from "../assets/tech-talk.png";
import Flutter from "../assets/flutter.png";
import EventsBG from "../assets/eventsIMG.png";
import Aos from "aos";
import "aos/dist/aos.css";

const Events = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <section id="events">
      <div
        style={{ backgroundImage: `url(${EventsBG})` }}
        className=" flex flex-col items-center justify-center max-w-full px-5 mx-auto text-center md:h-screen"
      >
        <h2
          className="text-4xl font-bold text-center py-9 md:py-0"
          data-aos="fade-down"
        >
          Check out some of the events we've conducted in the past!
        </h2>

        <div className="flex flex-col space-y-12 mt-24 md:flex-row md:space-x-6 md:space-y-0">
          <div
            className="flex flex-col items-center p-6 space-y-6 rounded-lg shadow-lg bg-gray-100 md:w-1/3"
            data-aos="fade-right"
          >
            <img src={WebDev} className="w-[100px] rounded- -mt-14" alt="" />
            <h5 className="text-lg font-bold">Web Design and Development</h5>
            <p className="text-sm text-gray-500">
              Web Development & Design | HTML, CSS, TailwindCSS and GitHub
            </p>
            <h2>
              Conducted On: <p className="font-bold">Feb 9th, 2023</p>
            </h2>
          </div>
          <div
            className="flex flex-col items-center p-6 space-y-6 rounded-lg shadow-lg bg-gray-100 md:w-1/3"
            data-aos="fade-up"
          >
            <img src={TechTalk} className="w-[100px] rounded- -mt-14" alt="" />
            <h5 className="text-lg font-bold">Tech Talk</h5>
            <p className="text-sm text-gray-500">
              Tech Talk : How to make coding effortless Ankit Keshav | Senior
              Engineer @Samsung
            </p>
            <h2>
              Conducted On: <p className="font-bold">Dec 23rd, 2022</p>
            </h2>
          </div>
          <div
            className="flex flex-col items-center p-6 space-y-6 rounded-lg shadow-lg bg-gray-100 md:w-1/3"
            data-aos="fade-right"
          >
            <img src={Flutter} className="w-[100px] rounded- -mt-14" alt="" />
            <h5 className="text-lg font-bold">Android Development</h5>
            <p className="text-sm text-gray-500">
              Getting Started with Flutter and <br />
              Android Development
            </p>
            <h2>
              Conducted On: <p className="font-bold">Mar 21st, 2022</p>
            </h2>
          </div>
        </div>
        <div className="my-16">
          <button
            className="p-3 px-7  text-white bg-[#4285F4] hover:bg-[#0F9D58] ease-in-out duration-200 rounded-full baseline"
            data-aos="fade-up"
          >
            <a
              href="https://gdsc.community.dev/mvj-college-of-engineering-bengaluru/#past-events"
              target="_blank"
            >
              Explore more events!
            </a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Events;
