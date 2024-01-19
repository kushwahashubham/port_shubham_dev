import { navigationList } from "@/constants/lists";
import Link from "next/link";
import React from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import images from "@/constants/images";
import ModeToggle from "./ModeToggle";

const Navigation = () => {
  return (
    <div>
      <nav className="fixed z-10 flex w-full items-center justify-between border-b border-transparent bg-white/[0.25] p-4 backdrop-blur-sm max-lg:justify-between sm:px-12 dark:bg-black/[0.25]">
        <Link href="/" className="flex items-center gap-1">
          <p className="text-[24px] font-bold leading-[31.2px] text-black dark:text-white">
            Dev<span className=" text-primary-500">Shubham</span>
          </p>
        </Link>

        <ul className="flex items-center justify-center gap-2  max-lg:hidden">
          {navigationList.map((list) => (
            <li
              key={list.index}
              className="group mx-4 flex flex-col items-center justify-center"
            >
              <div className="h-[5px] w-[5px] rounded-full bg-transparent transition-all duration-300 ease-in-out group-hover:bg-primary-500" />
              <Link
                href={`#${list.name}`}
                className=" small-medium mt-2 uppercase text-black transition-all duration-300 ease-in-out dark:text-white"
              >
                {list.name}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex items-center justify-between gap-5">
          <ModeToggle />
          <Sheet>
            <SheetTrigger className="mr-4 rounded-full bg-primary-500 p-[5px] lg:hidden">
              <Image
                src={images.hamburger}
                alt="menu button"
                width={35}
                height={35}
                className="bg-transparent"
              />
            </SheetTrigger>
            <SheetContent className=" bg-white bg-cover  bg-repeat lg:hidden dark:bg-dark-200">
              <ul className="flex w-full flex-col gap-4 py-8">
                {navigationList.map((list) => (
                  <li key={list.index}>
                    <SheetClose asChild>
                      <Link
                        href={`#${list.name}`}
                        className="group uppercase text-black transition-all duration-300 ease-in-out hover:text-[#EDA427] dark:text-white"
                      >
                        {list.name}
                      </Link>
                    </SheetClose>
                  </li>
                ))}
              </ul>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
