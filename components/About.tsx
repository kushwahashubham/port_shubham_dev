"use client";
import { GetAboutDataParams } from "@/lib/actions/shared.types";
import { urlForImage } from "@/sanity/lib/image";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const About = ({ abouts }: { abouts: GetAboutDataParams[] }) => {
  return (
    <motion.div
      whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
      transition={{ duration: 0.5 }}
    >
      <div
        id="about"
        className=" h-screen bg-white pt-16 max-lg:h-fit dark:bg-black"
      >
        <h2 className="text-center text-[2.75rem] font-extrabold capitalize text-black max-xs:text-[2rem] xxl:text-[4rem] dark:text-white">
          I Know that <span className=" text-primary-500">Good Design</span>{" "}
          <br />
          means <span className=" text-primary-500">Good Business</span>
        </h2>

        <div className="mt-8 flex flex-wrap items-start justify-center">
          {abouts.map((about: GetAboutDataParams, index: number) => (
            <motion.div
              whileInView={{ opacity: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5, type: "tween" }}
              className="m-8 flex w-[190px] flex-col items-start justify-start xxl:mx-16 xxl:my-8 xxl:w-[370px]"
              key={about.title + index}
            >
              <Image
                src={urlForImage(about.imageUrl)}
                alt={about.title}
                width={190}
                height={170}
                className=" h-[170px] w-full rounded-2xl object-cover xxl:h-[320px]"
              />
              <h2 className="mt-5 text-left text-[1rem] font-extrabold text-black max-xs:text-[0.9rem] xxl:text-[2rem]">
                {about.title}
              </h2>
              <p className=" mt-2.5 text-left text-[0.8rem] leading-6 text-gray-500 xxl:text-[1.75]">
                {about.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default About;
