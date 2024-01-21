"use client";
import { GetWorkDataParams } from "@/lib/actions/shared.types";
import { urlForImage } from "@/sanity/lib/image";
import { motion } from "framer-motion";
import Image from "next/image";
import images from "@/constants/images";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Work = ({ data }: { data: GetWorkDataParams[] }) => {
  const [works, setWorks] = useState<GetWorkDataParams[]>([]);
  const [filterWork, setFilterWork] = useState<GetWorkDataParams[]>([]);
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const [animateCard, setAnimateCard] = useState<{
    y: number;
    opacity: number;
  }>({ y: 0, opacity: 1 });

  useEffect(() => {
    setWorks(data);
    setFilterWork(data);
  }, [data]);

  const handleWorkFilter = (item: string) => {
    setActiveFilter(item);
    setAnimateCard({ y: 100, opacity: 0 });

    setTimeout(() => {
      setAnimateCard({ y: 0, opacity: 1 });

      if (item === "All") {
        setFilterWork(works);
      } else {
        setFilterWork(works.filter((work) => work.tags.includes(item)));
      }
    }, 500);
  };
  return (
    <div
      id="work"
      className=" dark:dark-bgGrad h-fit w-full flex-1 flex-col bg-[#EDF2F8] pt-16 max-lg:h-fit max-xs:pt-[72px]"
    >
      <motion.div
        whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-center text-[2.75rem] font-extrabold capitalize text-black max-xs:text-[2rem] xxl:text-[4rem] dark:text-white">
          My Creative <span className=" text-primary-500">Portfolio</span>{" "}
          Section
        </h2>

        <div className="mx-0 mb-8 mt-16 flex flex-row flex-wrap items-start justify-center">
          {["UI/UX", "Web App", "Mobile App", "Next Js", "All"].map(
            (item, index) => (
              <div
                key={index}
                onClick={() => handleWorkFilter(item)}
                className={`${
                  activeFilter === item
                    ? "bg-primary-500 text-white "
                    : "bg-white text-black"
                } flex-center p-text m-2 cursor-pointer rounded-lg  px-4 py-2 font-extrabold  transition-all duration-300 ease-in-out hover:bg-primary-500 hover:text-white xxl:rounded-[0.85rem] xxl:px-8 xxl:py-4 `}
              >
                {item}
              </div>
            )
          )}
        </div>

        <motion.div
          animate={animateCard}
          transition={{ duration: 0.5, delayChildren: 0.5 }}
          className=" flex flex-wrap items-center justify-center"
        >
          {filterWork.map((work, index) => (
            <div
              className=" flex-center m-8 w-[270px] cursor-pointer flex-col rounded-lg bg-white p-4 text-black transition-all duration-300 ease-in-out hover:shadow-[0_0_25px_rgba(0,0,0,0.2)] max-xs:m-4 max-xs:w-full xxl:w-[470px] xxl:rounded-xl xxl:p-5"
              key={index}
            >
              <div className=" flex-center relative h-[230px] w-full xxl:h-[350px]">
                <Image
                  src={urlForImage(work.imageUrl)}
                  alt={work.title}
                  width={190}
                  height={170}
                  className=" h-full w-full rounded-lg object-cover"
                />
                <motion.div
                  whileHover={{ opacity: [0, 1] }}
                  transition={{
                    duration: 0.25,
                    ease: "easeInOut",
                    staggerChildren: 0.5,
                  }}
                  className=" flex-center absolute inset-0 h-full w-full rounded-lg bg-[rgba(0,0,0,0.5)] opacity-0 transition-all duration-300 ease-in-out"
                >
                  {work.projectLink && (
                    <Link
                      href={work.projectLink}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <motion.div
                        whileInView={{ scale: [0, 1] }}
                        whileHover={{ scale: [1, 0.9] }}
                        transition={{ duration: 0.25 }}
                        className="flex-center m-4 h-[50px] w-[50px] cursor-pointer rounded-full bg-[rgba(0,0,0,0.5)] font-extrabold text-white transition-all duration-300 ease-in-out"
                      >
                        <Image
                          src={images.eye}
                          alt="eye"
                          className=" h-[50%] w-[50%] dark:invert"
                        />
                      </motion.div>
                    </Link>
                  )}
                  {work.codeLink && (
                    <Link href={work.codeLink} target="_blank" rel="noreferrer">
                      <motion.div
                        whileInView={{ scale: [0, 1] }}
                        whileHover={{ scale: [1, 0.9] }}
                        transition={{ duration: 0.25 }}
                        className="flex-center m-4 h-[50px] w-[50px] cursor-pointer rounded-full bg-[rgba(0,0,0,0.5)] font-extrabold text-white transition-all duration-300 ease-in-out"
                      >
                        <Image
                          src={images.github}
                          alt="eye"
                          className=" h-[50%] w-[50%] dark:invert"
                        />
                      </motion.div>
                    </Link>
                  )}
                </motion.div>
              </div>
              <div className=" flex-center relative w-full flex-col p-2">
                <h4 className="bold-text mt-4 leading-6 xxl:mt-12">
                  {work.title}
                </h4>
                <p className="p-text" style={{ marginTop: 10 }}>
                  {work.description}
                </p>

                <div className=" flex-center absolute -top-6 rounded-[10px] bg-white px-4 py-2">
                  <p className="p-text">{work.tags[0]}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Work;
