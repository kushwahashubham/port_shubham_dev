import images from "@/constants/images";
import Image from "next/image";
import React from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const SocialMedia = () => {
  return (
    <Popover>
      <PopoverTrigger className=" rounded-full bg-primary-500 p-2 transition duration-300 ease-in-out hover:animate-none hover:shadow-[0px_5px_15px_rgba(0,0,0,0.3)] motion-safe:animate-wiggle dark:hover:shadow-[0px_5px_15px_rgba(0,0,0,0.5)]">
        <Image
          src={images.connect}
          alt="social media"
          width={40}
          height={40}
          className=" max-ds:h-[30px] max-ds:w-[30px] max-xs:h-[20px] max-xs:w-[20px] dark:invert"
        />
      </PopoverTrigger>
      <PopoverContent className=" light-bgGrad dark:dark-bgGrad mb-2 ml-2 flex h-fit w-fit flex-wrap border-white p-2 dark:border-black">
        <div className=" flex flex-row items-center justify-center gap-2">
          <div className=" mx-0 my-1 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-solid border-gray-200 bg-white transition-all duration-300 ease-in-out hover:border-primary-500 hover:bg-primary-500 xxl:mx-0 xxl:my-2 xxl:h-[70px] xxl:w-[70px] dark:border-[#0D1321] dark:bg-[#0D1321] ">
            <Image
              src={images.facebook}
              alt="facebook icon"
              className="h-[15px] w-[15px] xxl:h-[30px] xxl:w-[30px] dark:invert"
            />
          </div>
          <div className=" mx-0 my-1 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-solid border-gray-200 bg-white transition-all duration-300 ease-in-out hover:border-primary-500 hover:bg-primary-500 xxl:mx-0 xxl:my-2 xxl:h-[70px] xxl:w-[70px] dark:border-[#0D1321] dark:bg-[#0D1321] ">
            <Image
              src={images.instagram}
              alt="instagram icon"
              className="h-[15px] w-[15px] xxl:h-[30px] xxl:w-[30px] dark:invert"
            />
          </div>
          <div className=" mx-0 my-1 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-solid border-gray-200 bg-white transition-all duration-300 ease-in-out hover:border-primary-500 hover:bg-primary-500 xxl:mx-0 xxl:my-2 xxl:h-[70px] xxl:w-[70px] dark:border-[#0D1321] dark:bg-[#0D1321] ">
            <Image
              src={images.twitter}
              alt="twitter icon"
              className="h-[15px] w-[15px] xxl:h-[30px] xxl:w-[30px] dark:invert"
            />
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default SocialMedia;
