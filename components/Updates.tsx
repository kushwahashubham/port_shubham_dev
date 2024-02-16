"use client";
import React, { useEffect, useState } from "react";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import ImageSwiper from "./ImageSwiper";
import { Button } from "./ui/button";
import { GetUpdateDataParams } from "@/lib/actions/shared.types";
import { formatDate } from "@/lib/utils";
import { urlForImage } from "@/sanity/lib/image";

// const list = [
//   {
//     date: "12 January,2024",
//     category: "Currently Reading",
//     title: "Why Bharat Matters",
//     excerpt:
//       "This is book is authored by Dr. S.Jaishanker, External Affiers Minister of India.",
//     tags: ["book", "book spotlight", "book review"],
//   },
//   {
//     date: "10 February,2024",
//     category: "Geopolitics Focus",
//     title: "Why Bharat Matters",
//     excerpt:
//       "This is book is authored by Dr. S.Jaishanker, External Affiers Minister of India.",
//     tags: [
//       "world politics",
//       "Geopolitics Focus",
//       "geoeconomics",
//       "Indian Diplomacy",
//     ],
//   },
//   {
//     date: "14 January,2024",
//     category: "Currently Reading",
//     title: "All Religions Are Not The Same",
//     excerpt:
//       "This is book is authored by Sanjay Dixit, a prominent author of India.",
//     tags: ["book", "book spotlight", "book review"],
//   },
//   {
//     date: "28 January,2024",
//     category: "Project Spotlight",
//     title: "A Custom portfolio website for me",
//     excerpt:
//       "This project is a custom portfolio website for me, it includes all neccessary elements of a developer's site.",
//     tags: ["work", "project spotlight", "code"],
//   },
//   {
//     date: "19 January,2024",
//     category: "Project Spotlight",
//     title: "A new look to StackOverflow site",
//     excerpt:
//       "This project gives a look a new modern to StackOverflow, make it to work with new generative AI.",
//     tags: ["work", "project spotlight", "code"],
//   },
// ];

const Updates = ({ updates }: { updates: GetUpdateDataParams[] }) => {
  const [update, setUpdate] = useState<GetUpdateDataParams[]>([]);

  useEffect(() => {
    setUpdate(updates);
  }, [updates]);

  return (
    <div className=" mx-4 flex flex-row max-lg:flex-col">
      <div className="flex flex-col flex-wrap items-center justify-start gap-8 rounded-l-lg border border-r-0 border-transparent bg-white p-4 max-lg:flex-row max-lg:justify-center max-lg:rounded-b-none max-lg:rounded-t-lg  dark:bg-[#0D1321]">
        <p className="h3-bold w-full text-center text-black max-lg:text-[1.4rem] max-md:text-[0.7rem] dark:text-white">
          Filter Controls
        </p>
        <Select>
          <SelectTrigger className="w-[180px] text-black dark:text-white">
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent className=" max-h-[200px] bg-light-900 text-black dark:border-dark-400 dark:bg-dark-300 dark:text-white">
            <SelectItem
              value="light"
              className="cursor-pointer focus:bg-light-800 dark:focus:bg-dark-400"
            >
              Light
            </SelectItem>
            <SelectItem
              value="dark"
              className="cursor-pointer focus:bg-light-800 dark:focus:bg-dark-400"
            >
              Dark
            </SelectItem>
            <SelectItem
              value="system"
              className="cursor-pointer focus:bg-light-800 dark:focus:bg-dark-400"
            >
              System
            </SelectItem>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className="w-[180px] text-black dark:text-white">
            <SelectValue placeholder="Tags" />
          </SelectTrigger>
          <SelectContent className=" max-h-[200px] bg-light-900 text-black dark:border-dark-400 dark:bg-dark-300 dark:text-white">
            <SelectItem
              value="light"
              className="cursor-pointer focus:bg-light-800 dark:focus:bg-dark-400"
            >
              Light
            </SelectItem>
            <SelectItem
              value="dark"
              className="cursor-pointer focus:bg-light-800 dark:focus:bg-dark-400"
            >
              Dark
            </SelectItem>
            <SelectItem
              value="system"
              className="cursor-pointer focus:bg-light-800 dark:focus:bg-dark-400"
            >
              System
            </SelectItem>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className="w-[180px] text-black dark:text-white">
            <SelectValue placeholder="Date" />
          </SelectTrigger>
          <SelectContent className=" max-h-[200px] bg-light-900 text-black dark:border-dark-400 dark:bg-dark-300 dark:text-white">
            <SelectItem
              value="light"
              className="cursor-pointer focus:bg-light-800 dark:focus:bg-dark-400"
            >
              Light
            </SelectItem>
            <SelectItem
              value="dark"
              className="cursor-pointer focus:bg-light-800 dark:focus:bg-dark-400"
            >
              Dark
            </SelectItem>
            <SelectItem
              value="system"
              className="cursor-pointer focus:bg-light-800 dark:focus:bg-dark-400"
            >
              System
            </SelectItem>
          </SelectContent>
        </Select>
      </div>
      <ScrollArea className=" h-[500px] max-w-[850px] overflow-auto rounded-r-lg border border-l-0 border-transparent bg-white p-4 max-lg:h-[800px] max-lg:rounded-b-lg  max-lg:rounded-t-none max-lg:border-t-0 dark:bg-[#0D1321]">
        {update.map((item, index) => (
          <Dialog key={index}>
            <DialogTrigger>
              <Card
                key={index}
                className="dark:dark-bgGrad m-3 cursor-pointer rounded-lg border border-transparent bg-white transition-all duration-300 ease-in-out hover:shadow-[0_0_10px_rgba(0,0,0,0.2)] dark:hover:shadow-[0_0_12px_rgba(255,255,255,0.8)]"
              >
                <CardContent className="p-0">
                  <div className="flex flex-row max-lg:flex-col">
                    <Image
                      src={urlForImage(item.featuredImage)}
                      alt={item.title}
                      width={500}
                      height={100}
                      className="w-[40%] rounded-l-lg max-lg:w-full max-lg:rounded-lg max-lg:rounded-b-none"
                    />
                    <div className="w-full p-4">
                      <div className="flex flex-wrap items-center justify-between">
                        <p className="p-text text-gray-700 dark:text-gray-400">
                          {formatDate(item.date)}
                        </p>
                        <Badge
                          className={
                            item.category === "Currently Reading"
                              ? "bg-cyan-100 capitalize"
                              : item.category === "Project Spotlight"
                                ? " bg-green-100 capitalize"
                                : item.category === "Geopolitics Focus"
                                  ? " bg-orange-100 capitalize"
                                  : "capitalize"
                          }
                        >
                          {item.category}
                        </Badge>
                      </div>
                      <div className="flex flex-col items-start justify-start pt-4">
                        <h4 className="base-bold capitalize text-black dark:text-white">
                          {item.title}
                        </h4>
                        <p className="body-regular pt-1 text-left text-black/50 dark:text-white/85">
                          {item.excerpt}
                        </p>
                        <div className="mt-4 flex flex-wrap gap-2">
                          <p className="p-text pr-1 text-gray-700 dark:text-gray-400">
                            Tags:{" "}
                          </p>
                          {item.tags.map((tag, index) => (
                            <Badge
                              variant="outline"
                              key={index}
                              className="p-text mr-1 bg-gray-100 capitalize"
                            >
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </DialogTrigger>
            <DialogContent className=" flex h-[500px] max-w-[850px] flex-col overflow-auto bg-white dark:bg-dark-200">
              <div className="flex h-fit w-full items-start justify-start max-lg:flex-col">
                <div className="h-[50%] w-[50%] max-lg:h-full max-lg:w-full">
                  <ImageSwiper images={item.sliderImage} />
                </div>
                <div className="m-4">
                  <h1 className="base-bold capitalize text-black dark:text-white">
                    Just a Test Title heading!
                  </h1>
                  <p className="body-regular pt-1 text-justify text-black/50 dark:text-white/85">
                    {item.description}
                  </p>
                </div>
              </div>
              <div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {item.technology && (
                    <p className="p-text pr-1 text-gray-700 dark:text-gray-400">
                      Skills:{" "}
                    </p>
                  )}
                  {item.technology &&
                    item.technology.map((tech, index) => (
                      <Badge
                        variant="outline"
                        key={index}
                        className="p-text mr-1 bg-gray-100 capitalize"
                      >
                        {tech}
                      </Badge>
                    ))}
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  <p className="p-text pr-1 text-gray-700 dark:text-gray-400">
                    Categories:{" "}
                  </p>
                  <Badge
                    className={
                      item.category === "Currently Reading"
                        ? "bg-cyan-100 capitalize"
                        : item.category === "Project Spotlight"
                          ? " bg-green-100 capitalize"
                          : item.category === "Geopolitics Focus"
                            ? " bg-orange-100 capitalize"
                            : "capitalize"
                    }
                  >
                    {item.category}
                  </Badge>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  <p className="p-text pr-1 text-gray-700 dark:text-gray-400">
                    Tags:{" "}
                  </p>
                  {item.tags.map((tag, index) => (
                    <Badge
                      variant="outline"
                      key={index}
                      className="p-text mr-1 bg-gray-100 capitalize"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                {item.postLink && (
                  <Button className="mt-2 w-full">Know More</Button>
                )}
              </div>
            </DialogContent>
          </Dialog>
        ))}
        <ScrollBar />
      </ScrollArea>
    </div>
  );
};

export default Updates;
