"use client";
import React, { useEffect, useState } from "react";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import ImageSwiper from "./ImageSwiper";
import { Button } from "./ui/button";
import { GetUpdateDataParams } from "@/lib/actions/shared.types";
import { formatDate } from "@/lib/utils";
import { urlForImage } from "@/sanity/lib/image";

const Updates = ({ updates }: { updates: GetUpdateDataParams[] }) => {
  const [update, setUpdate] = useState<GetUpdateDataParams[]>([]);

  useEffect(() => {
    setUpdate(updates);
  }, [updates]);

  return (
    <div className=" mx-4 flex flex-row max-lg:flex-col">
      <ScrollArea className=" h-[500px] max-w-[850px] overflow-auto rounded-lg border border-transparent bg-white p-4 max-lg:h-[800px] dark:bg-[#0D1321]">
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
                                  : " bg-violet-200 capitalize"
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
                    {item.title}
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
                            : "bg-violet-200 capitalize"
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
                  <Button className="mt-6 w-full bg-primary-500 text-black">
                    Know More
                  </Button>
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
