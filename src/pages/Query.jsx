import React, { useRef, useState } from "react";
import Image from "../assets/login-page.jpeg";
import LoginIMG from "../assets/login-gdsc.png";
import { AiOutlineInstagram, AiFillLinkedin, BsDiscord } from "react-icons/all";
import emailjs from "@emailjs/browser";

const Query = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_np0aicq",
        "template_2ux4vsr",
        form.current,
        "DmesS0DijMxu3ZQbV"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    alert(
      "Form Submitted. An email has been sent to you confirming form submission."
    );
  };
  return (
    <>
      <section className="bg-gray-50 min-h-screen flex items-center justify-center">
        <div className="bg-gray-100 flex rounded-[50px] shadow-lg max-w-7xl p-5">
          <div className="md:w-1/2 px-16 flex flex-col justify-center">
            <div className="flex gap-4 items-center">
              <h2 className="font-bold text-2xl">Have Questions?</h2>
              <img className="w-[40px] md:w-[50px]" src={LoginIMG} alt="" />
            </div>

            <p className="text-sm mt-4">Fill out the form below</p>

            <form
              className="flex flex-col gap-4"
              ref={form}
              onSubmit={sendEmail}
            >
              <input
                className="p-2 mt-8 rounded-xl border"
                type="text"
                name="user_name"
                placeholder="Full Name"
                required
              />
              <input
                className="p-2 rounded-xl border"
                type="text"
                name="user_email"
                placeholder="Email"
                required
              />

              <textarea
                name="message"
                style={{ resize: "none", width: "100%", height: "150px" }}
                placeholder="Feedback"
                className="p-2 rounded-xl border"
                required
              ></textarea>

              <button
                className="bg-[#4285F4] mt-4 py-2 rounded-xl text-white hover:bg-[#0F9D58] ease-in-out duration-300"
                type="submit"
              >
                Submit
              </button>
            </form>

            <div className="mt-10 grid grid-cols-3 items-center text-gray-500">
              <hr className="border-gray-500" />
              <p className="text-center text-sm px-1 md:px-0">Or find us on</p>
              <hr className="border-gray-500" />
            </div>

            <div className="flex justify-center space-x-9 mt-5">
              <a href="https://www.instagram.com/gdscmvjce/" target="_blank">
                <AiOutlineInstagram className="h-8" />
              </a>
              <a
                href="https://www.linkedin.com/company/gdsc-mvjce"
                target="_blank"
              >
                <AiFillLinkedin className="h-8" />
              </a>
              <a href="https://discord.gg/NvC7TcTM" target="_blank">
                <BsDiscord className="h-8" />
              </a>
            </div>

            <a href="/">
              <p className="mt-5 text-xs text-[#4285F4]">Go Home</p>
            </a>
          </div>

          <div className="md:flex hidden w-1/2">
            <img src={Image} className="rounded-[50px]" alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Query;
