"use client";
import { urlForImage } from "@/sanity/lib/image";
import { motion } from "framer-motion";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import {
  GetExperienceDataParams,
  GetSkillsDataParams,
} from "@/lib/actions/shared.types";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const Skills = ({
  data,
  experience,
}: {
  data: GetSkillsDataParams[];
  experience: GetExperienceDataParams[];
}) => {
  const [experiences, setExperiences] = useState<GetExperienceDataParams[]>([]);
  const [skills, setSkills] = useState<GetSkillsDataParams[]>([]);
  const [filterWork, setFilterWork] = useState<GetSkillsDataParams[]>([]);
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const [animateCard, setAnimateCard] = useState<{
    y: number;
    opacity: number;
  }>({ y: 0, opacity: 1 });

  useEffect(() => {
    setExperiences(experience);
    setSkills(data);
    setFilterWork(skills);
  }, [data, experience, skills]);

  const handleWorkFilter = (item: string) => {
    setActiveFilter(item);
    setAnimateCard({ y: 100, opacity: 0 });
    setTimeout(() => {
      setAnimateCard({ y: 0, opacity: 1 });

      if (item === "All") {
        setFilterWork(skills);
      } else {
        setFilterWork(skills.filter((work) => work.tags.includes(item)));
      }
    }, 500);
  };

  return (
    <div id="skills">
      <motion.div
        whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
        transition={{ duration: 0.5 }}
        className=" flex h-fit min-h-screen w-full flex-1 flex-col items-center justify-start bg-white pt-16 max-lg:h-fit max-xs:pt-[72px] dark:bg-black"
      >
        <h2 className="text-center text-[2.75rem] font-extrabold capitalize text-black max-xs:text-[2rem] xxl:text-[4rem] dark:text-white">
          Skills & Experiences
        </h2>

        <div className=" mt-12 flex w-[80%] flex-row max-[900px]:w-full max-[900px]:flex-col">
          <motion.div className=" mr-20 flex flex-1 flex-wrap items-start justify-start max-[900px]:mr-0 max-[900px]:items-center max-[900px]:justify-center">
            <div className="mx-0 mb-8  flex flex-row flex-wrap items-start justify-center">
              {[
                "Front-end",
                "Back-end",
                "Version Control",
                "Database",
                "All",
              ].map((item, index) => (
                <div
                  key={index}
                  onClick={() => handleWorkFilter(item)}
                  className={`${
                    activeFilter === item
                      ? "bg-primary-500 text-black "
                      : "bg-[#EDF2F8] text-black dark:bg-[#273D55] dark:text-white"
                  } flex-center p-text m-2 cursor-pointer rounded-lg  px-4 py-2 font-extrabold  transition-all duration-300 ease-in-out hover:bg-primary-500 hover:text-black xxl:rounded-[0.85rem] xxl:px-8 xxl:py-4 `}
                >
                  {item}
                </div>
              ))}
            </div>

            {filterWork.map((skill) => (
              <motion.div
                animate={animateCard}
                transition={{ duration: 0.5, delayChildren: 0.5 }}
                className=" flex-center m-4 flex-col text-center transition-all duration-300 ease-in-out xxl:mx-8 xxl:my-4"
                key={skill.name}
              >
                <div className="flex-center h-[90px] w-[90px] rounded-full bg-[#EDF2F8] hover:shadow-[0_0_25px_rgba(0,0,0,0.2)] max-xs:h-[70px] max-xs:w-[70px] xxl:h-[150px] xxl:w-[150px] dark:invert">
                  <Image
                    src={urlForImage(skill.icon)}
                    alt={skill.name}
                    width={45}
                    height={45}
                    className=" h-[50%] w-[50%]"
                  />
                </div>
                <p className="p-text mt-2 font-medium text-gray-700 xxl:mt-4 dark:text-gray-400">
                  {skill.name}
                </p>
              </motion.div>
            ))}
          </motion.div>
          <div className=" flex flex-1 flex-col items-start justify-start max-[900px]:ml-16  max-[900px]:mt-8">
            {experiences.map((experience) => (
              <motion.div
                className=" mx-0 my-4 flex w-full flex-row items-start justify-start"
                key={experience.year}
              >
                <div className=" mr-12 max-xs:mr-4">
                  <p className="bold-text font-extrabold text-primary-500">
                    {experience.year}
                  </p>
                </div>
                <motion.div className=" flex-1">
                  {experience.works.map((work) => (
                    <>
                      <motion.div
                        whileInView={{ opacity: [0, 1] }}
                        transition={{ duration: 0.5 }}
                        className=" mb-4 flex cursor-pointer flex-col items-start justify-start"
                        data-tip
                        data-for={work.name}
                        key={work.name}
                      >
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger>
                              <h3 className="bold-text font-medium text-black dark:invert">
                                {work.name}
                              </h3>
                              <p className="p-text mt-[5px] font-normal text-gray-700 dark:text-gray-400">
                                {work.company}
                              </p>
                            </TooltipTrigger>
                            <TooltipContent className=" max-w-[300px] rounded-md bg-white p-4 text-center leading-6 text-gray-500 opacity-100 shadow-[0_0_25px_rgba(0,0,0,0.1)] xxl:max-w-[500px] xxl:text-[1.75rem] xxl:leading-8">
                              <p>{work.desc}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </motion.div>
                    </>
                  ))}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Skills;
