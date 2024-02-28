"use client";
import { GetWorkDataParams } from "@/lib/actions/shared.types";
import { urlForImage } from "@/sanity/lib/image";
import { motion } from "framer-motion";
import Image from "next/image";
import images from "@/constants/images";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import ImageSwiper from "./ImageSwiper";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

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
    <div id="work">
      <motion.div
        whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
        transition={{ duration: 0.5 }}
        className=" dark:dark-bgGrad h-fit w-full flex-1 flex-col bg-[#EDF2F8] pt-16 max-lg:h-fit max-xs:pt-[72px]"
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
                    ? "bg-primary-500 text-black "
                    : "bg-white text-black dark:bg-[#0D1321] dark:text-white"
                } flex-center p-text m-2 cursor-pointer rounded-lg  px-4 py-2 font-extrabold  transition-all duration-300 ease-in-out hover:bg-primary-500 hover:text-black xxl:rounded-[0.85rem] xxl:px-8 xxl:py-4 `}
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
            <Dialog key={index}>
              <DialogTrigger className="m-8 max-xs:m-4">
                <div
                  className=" flex-center w-[270px] cursor-pointer flex-col rounded-lg bg-white p-4 text-black transition-all duration-300 ease-in-out hover:shadow-[0_0_25px_rgba(0,0,0,0.2)] max-xs:w-fit xxl:w-[470px] xxl:rounded-xl xxl:p-5 dark:bg-[#0D1321] dark:hover:shadow-[0_0_25px_rgba(255,255,255,0.2)]
              "
                  key={index}
                >
                  <div className=" flex-center relative h-[230px] w-full xxl:h-[350px]">
                    <Image
                      src={urlForImage(work.imageUrl)}
                      alt={work.title}
                      fill={true}
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
                              className=" h-[50%] w-[50%]"
                            />
                          </motion.div>
                        </Link>
                      )}
                      {work.codeLink && (
                        <Link
                          href={work.codeLink}
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
                              src={images.github}
                              alt="eye"
                              className=" h-[50%] w-[50%]"
                            />
                          </motion.div>
                        </Link>
                      )}
                    </motion.div>
                  </div>
                  <div className=" flex-center relative w-full flex-col p-2">
                    <h3 className="bold-text mt-4 text-center leading-6 xxl:mt-12 dark:text-white">
                      {work.title}
                    </h3>
                    <p
                      className="p-text text-center dark:text-white"
                      style={{ marginTop: 10 }}
                    >
                      {work.excerpt}
                    </p>

                    <div className=" flex-center absolute -top-6 rounded-[10px] bg-white px-4 py-2 dark:bg-[#0D1321]">
                      <p className="p-text dark:text-white">{work.tags[0]}</p>
                    </div>
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent className=" flex h-[500px] max-w-[850px] flex-col overflow-auto bg-white dark:bg-dark-200">
                <div className="flex h-fit w-full items-start justify-start max-lg:flex-col">
                  <div className="h-[50%] w-[50%] max-lg:h-full max-lg:w-full">
                    <ImageSwiper images={work.sliderImage} />
                  </div>
                  <div className="m-4">
                    <h1 className="base-bold capitalize text-black dark:text-white">
                      {work.title}
                    </h1>
                    <p className="body-regular pt-1 text-justify text-black/50 dark:text-white/85">
                      {work.description}
                    </p>
                  </div>
                </div>
                <div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {work.technology && (
                      <p className="p-text pr-1 text-gray-700 dark:text-gray-400">
                        Skills:{" "}
                      </p>
                    )}
                    {work.technology &&
                      work.technology.map((tech, index) => (
                        <Badge
                          variant="secondary"
                          key={index}
                          className="p-text mr-1 bg-gray-200 capitalize hover:bg-gray-100"
                        >
                          {tech}
                        </Badge>
                      ))}
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <p className="p-text pr-1 text-gray-700 dark:text-gray-400">
                      Tags:{" "}
                    </p>
                    {work.tags.map((tag, index) => (
                      <Badge
                        variant="outline"
                        key={index}
                        className="p-text mr-1 bg-gray-100 capitalize"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  {work.projectLink && (
                    <Link
                      href={work.projectLink}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Button className="mt-6 w-full bg-primary-500 text-black">
                        Visit Site
                      </Button>
                    </Link>
                  )}
                  {work.codeLink && (
                    <Link href={work.codeLink} target="_blank" rel="noreferrer">
                      <Button className="mt-6 w-full bg-green-500 text-black">
                        Github
                      </Button>
                    </Link>
                  )}
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Work;
