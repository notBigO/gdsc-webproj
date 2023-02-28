import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className="sm:py-11 lg:py-0" id="about">
      <div className="container flex flex-col px-4 mx-auto mt-32 mb-32 space-y-12 md:space-y-0 md:flex-row md:h-screen md:mb-0 md:items-center md:mt-0">
        <div
          className="flex flex-col space-y-12 md:w-1/2"
          data-aos="fade-right"
        >
          <h2 className="max-w-md text-4xl font-bold text-center md:text-left">
            What to expect once you're in?
          </h2>
          <p className="max-w-sm text-center text-gray-500 md:text-left">
            As a Google Developer Student Club, we strive to provide our members
            with opportunities to learn and grow, connect with peers, and engage
            with the wider tech community. Whether you're an experienced
            developer or just starting out, there's a place for you in our club.
          </p>
        </div>

        <div className="flex flex-col space-y-8 md:w-1/2" data-aos="fade-up">
          <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
            <div className="rounded-l-full bg-[#4285F4] md:bg-transparent">
              <div className="flex items-center space-x-2">
                <div className="px-4 py-2 text-white rounded-full md:py-1 bg-[#4285F4]">
                  01
                </div>
                <h3 className="text-base font-bold md:mb-4 md:hidden">Learn</h3>
              </div>
            </div>
            <div>
              <h3 className="hidden mb-4 text-lg font-bold md:block">Learn</h3>
              <p className="text-[#4285F4]">
                Learning is at the heart of what we do. We provide a variety of
                workshops, hackathons, and speaker events that give our members
                the opportunity to develop new skills, expand their knowledge,
                and explore different areas of technology.
              </p>
            </div>
          </div>
          <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
            <div className="rounded-l-full bg-[#0F9D58] md:bg-transparent">
              <div className="flex items-center space-x-2">
                <div className="px-4 py-2 text-white rounded-full md:py-1 bg-[#0F9D58]">
                  02
                </div>
                <h3 className="text-base font-bold md:mb-4 md:hidden">
                  Connect
                </h3>
              </div>
            </div>
            <div>
              <h3 className="hidden mb-4 text-lg font-bold md:block">
                Connect
              </h3>
              <p className="text-[#0F9D58]">
                Connecting with peers is an important aspect of our club. We
                believe that building relationships with other members is
                essential for creating a supportive and inclusive community. We
                encourage our members to collaborate on projects, attend social
                events, and participate in community outreach initiatives.
              </p>
            </div>
          </div>
          <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
            <div className="rounded-l-full bg-[#DB4437] md:bg-transparent">
              <div className="flex items-center space-x-2">
                <div className="px-4 py-2 text-white rounded-full md:py-1 bg-[#DB4437]">
                  03
                </div>
                <h3 className="text-base font-bold md:mb-4 md:hidden"></h3>
              </div>
            </div>
            <div>
              <h3 className="hidden mb-4 text-lg font-bold md:block">Grow</h3>
              <p className="text-[#DB4437]">
                Growing is also a key focus of our club. We recognize that
                development is an ongoing process, and we strive to provide our
                members with opportunities to improve their skills and advance
                their careers. We offer mentorship programs, resume workshops,
                and other resources that can help our members grow both
                personally and professionally.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
