"use client";
import { urlForImage } from "@/sanity/lib/image";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import Autoplay from "embla-carousel-autoplay";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { GetPostDataParams } from "@/lib/actions/shared.types";
import Link from "next/link";
import { Button } from "./ui/button";

const Blog = ({ data }: { data: GetPostDataParams }) => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );
  return (
    <div id="blog">
      <motion.div
        whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
        transition={{ duration: 0.5 }}
        className=" dark:dark-bgGrad flex h-fit min-h-screen w-full flex-1 flex-col items-center justify-start bg-[#EDF2F8] pt-16 max-lg:h-fit max-xs:pt-[72px]"
      >
        <h2 className="text-center text-[2.75rem] font-extrabold capitalize text-black max-xs:text-[2rem] xxl:text-[4rem] dark:text-white">
          Blogs & Updates
        </h2>

        <div className=" mt-12 flex w-full flex-col">
          <div className=" flex w-full flex-1 items-center justify-center">
            <Carousel
              plugins={[plugin.current]}
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-[55%] max-lg:w-[70%] xxl:w-[80%]"
              onMouseEnter={plugin.current.stop}
              onMouseLeave={plugin.current.reset}
            >
              <CarouselContent>
                {data.map((post: GetPostDataParams, index: number) => (
                  <CarouselItem key={index}>
                    <div className="p-1">
                      <Card className="border-none">
                        <CardContent className="flex-center aspect-[5/3] p-0">
                          <div className="flex-center relative h-full w-full p-0 ">
                            <Image
                              src={urlForImage(post.featuredImage)}
                              alt={post.title}
                              fill={true}
                              className=" h-full w-full rounded-lg object-cover"
                            />
                            <div className=" image-overlay absolute left-0 flex h-full w-full flex-col items-start justify-center gap-4 rounded-lg p-4">
                              <h3 className="w-[50%] text-[1.2rem] text-white max-lg:text-[1.4rem] max-md:text-[0.7rem]">
                                {post.title}
                              </h3>
                              <p className="w-[50%] text-[0.8rem] text-[#E1E3E4] hover:text-white  max-lg:hidden">
                                {post.excerpt}
                              </p>
                              <Link href="/" className="">
                                <Button className="bg-[#ffffff33] text-[0.9rem] text-white hover:bg-white hover:text-black max-md:text-[0.5rem]">
                                  Read Now
                                </Button>
                              </Link>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="border-black dark:invert" />
              <CarouselNext className="border-black dark:invert" />
            </Carousel>
          </div>
          <div className=" flex flex-1 flex-col items-start justify-start max-[900px]:ml-16  max-[900px]:mt-8"></div>
        </div>
        <div className="my-8">
          <Link href="/blog">
            <Button className="bg-white">
              View All Posts
              <ArrowRightIcon className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default Blog;
