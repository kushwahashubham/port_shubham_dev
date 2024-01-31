"use client";
import { GetPostDataParams } from "@/lib/actions/shared.types";
import { urlForImage } from "@/sanity/lib/image";
import { motion } from "framer-motion";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Posts = ({ data }: { data: GetPostDataParams[] }) => {
  const [works, setWorks] = useState<GetPostDataParams[]>([]);

  useEffect(() => {
    setWorks(data);
  }, [data]);

  return (
    <div>
      <motion.div
        whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
        transition={{ duration: 0.5 }}
        className=" dark:dark-bgGrad h-fit w-full flex-1 flex-col bg-[#EDF2F8] pt-16 max-lg:h-fit max-xs:pt-[72px]"
      >
        <h2 className="text-center text-[2.75rem] font-extrabold capitalize text-black max-xs:text-[2rem] xxl:text-[4rem] dark:text-white">
          My Creative <span className=" text-primary-500">Portfolio</span>{" "}
          Section
        </h2>

        <div className=" flex flex-wrap items-center justify-center">
          {works.map((work, index) => (
            <div
              className=" flex-center m-8 w-[90%] cursor-pointer flex-row rounded-lg bg-white p-4 text-black transition-all duration-300 ease-in-out hover:shadow-[0_0_25px_rgba(0,0,0,0.2)] max-xs:m-4 max-xs:w-full xxl:rounded-xl xxl:p-5 dark:bg-[#0D1321] dark:hover:shadow-[0_0_25px_rgba(255,255,255,0.2)]
              "
              key={index}
            >
              <div className=" flex-center relative h-[230px] w-full xxl:h-[350px]">
                <Image
                  src={urlForImage(work.featuredImage)}
                  alt={work.title}
                  fill={true}
                  className=" h-full w-full rounded-lg object-cover"
                />
              </div>
              <div className=" flex-center relative w-full flex-col p-2">
                <div className=" flex-center rounded-[10px] bg-[#0D1321] px-4 py-2 dark:bg-slate-700 ">
                  <p className="p-text text-center text-white">
                    {work.tags[0]}
                  </p>
                </div>
                <h4 className="bold-text mt-4 text-center leading-6 xxl:mt-12 dark:text-white">
                  {work.title}
                </h4>
                <p className="p-text mt-2 text-center dark:text-gray-500">
                  {work.excerpt}
                </p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Posts;
