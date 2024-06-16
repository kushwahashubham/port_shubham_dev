"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import images from "../constants/images";
import { client } from "@/sanity/lib/client";
import Image from "next/image";

const Footer = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    message: "",
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { username, email, message } = formData;

  const handleChangeInput = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: "contact",
      username: formData.username,
      email: formData.email,
      message: formData.message,
    };

    client
      .create(contact)
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
      })
      .catch((err: any) => console.log(err));
  };

  return (
    <div id="contact">
      <motion.div
        whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
        transition={{ duration: 0.5 }}
        className=" flex h-fit w-full flex-1 flex-col items-center justify-start bg-white pt-16 max-lg:h-fit max-xs:pt-[72px] dark:bg-black"
      >
        <h2 className="text-center text-[2.75rem] font-extrabold capitalize text-black max-xs:text-[2rem] xxl:text-[4rem] dark:text-white">
          Take a coffee & chat with me
        </h2>

        <div className=" mx-8 my-16 flex w-[60%] flex-wrap items-center justify-evenly max-md:w-full max-md:px-4">
          <div className=" mx-0 my-4 flex min-w-[290px] cursor-pointer flex-row items-center justify-start rounded-xl bg-[#fef4f5] p-4 transition-all duration-300 ease-in-out hover:shadow-[0_0_25px_rgba(254,244,245,1)] max-xs:w-full dark:hover:shadow-[0_0_25px_rgba(39,61,85,1)]">
            <Image
              src={images.email}
              alt="email"
              width={40}
              height={40}
              className=" mx-[0.7rem] my-0"
            />
            <a
              href="mailto:forshubham.service@gmail.com"
              className="p-text font-medium text-black no-underline"
            >
              forshubham.service@gmail.com
            </a>
          </div>
          <div className=" mx-0 my-4 flex min-w-[290px] cursor-pointer flex-row items-center justify-start rounded-xl bg-[#f2f7fb] p-4 transition-all duration-300 ease-in-out hover:shadow-[0_0_25px_rgba(242,247,251,1)] max-xs:w-full dark:hover:shadow-[0_0_25px_rgba(39,61,85,1)]">
            <Image
              src={images.mobile}
              alt="phone"
              width={40}
              height={40}
              className=" mx-[0.7rem] my-0"
            />
            <a
              href="tel:+91 8953213297"
              className="p-text font-medium text-black no-underline"
            >
              +91 8953213297
            </a>
          </div>
        </div>
        {!isFormSubmitted ? (
          <div className="flex-center mx-8 my-4 w-[60%] flex-col max-md:mx-0 max-md:my-4 max-md:w-full max-md:px-4">
            <div className="flex-center mx-0 my-3 w-full cursor-pointer rounded-xl bg-[#f2f7fb] transition-all duration-300 ease-in-out hover:shadow-[0_0_25px_rgba(242,247,251,1)] dark:bg-[#273D55] dark:hover:shadow-[0_0_25px_rgba(39,61,85,1)]">
              <input
                className="p-text w-full rounded-lg border-none bg-[#f2f7fb] p-[0.95rem] text-black outline-none placeholder:text-black dark:bg-[#273D55] dark:text-white dark:placeholder:text-white"
                type="text"
                placeholder="Your Name"
                name="username"
                value={username}
                onChange={handleChangeInput}
              />
            </div>
            <div className="flex-center mx-0 my-3 w-full cursor-pointer rounded-xl bg-[#f2f7fb] transition-all duration-300 ease-in-out hover:shadow-[0_0_25px_rgba(242,247,251,1)] dark:bg-[#273D55] dark:hover:shadow-[0_0_25px_rgba(39,61,85,1)]">
              <input
                className="p-text w-full rounded-lg border-none bg-[#f2f7fb] p-[0.95rem] text-black outline-none placeholder:text-black dark:bg-[#273D55] dark:text-white dark:placeholder:text-white"
                type="email"
                placeholder="Your Email"
                name="email"
                value={email}
                onChange={handleChangeInput}
              />
            </div>
            <div className=" mx-0 my-3 w-full cursor-pointer rounded-xl bg-[#f2f7fb] transition-all duration-300 ease-in-out hover:shadow-[0_0_25px_rgba(242,247,251,1)] dark:bg-[#273D55] dark:hover:shadow-[0_0_25px_rgba(39,61,85,1)]">
              <textarea
                className="p-text h-[170px] w-full rounded-lg border-none bg-[#f2f7fb] p-[0.95rem] text-black outline-none placeholder:text-black dark:bg-[#273D55] dark:text-white dark:placeholder:text-white"
                placeholder="Your Message"
                value={message}
                name="message"
                onChange={handleChangeInput}
              />
            </div>
            <button
              type="button"
              className="p-text mx-0 mb-0 mt-8 cursor-pointer rounded-xl border-none bg-primary-500 px-8 py-4 font-medium text-black outline-none ease-in-out"
              onClick={handleSubmit}
            >
              {!loading ? "Send Message" : "Sending..."}
            </button>
          </div>
        ) : (
          <div>
            <h3 className="head-text">Thank you for getting in touch!</h3>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default Footer;
