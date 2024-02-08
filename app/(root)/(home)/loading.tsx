import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

const loading = () => {
  return (
    <div
      id="home"
      className="flex-center dark:dark-bgGrad h-screen w-full flex-1 flex-row bg-[url('../public/assets/bgIMG.png')] bg-cover bg-center bg-repeat px-8 pb-0 pt-24 max-ds:h-full max-ds:flex-col max-xs:px-4 max-xs:pb-8 max-xs:pt-24 xxl:pt-32"
    >
      <div className="flex-start mx-8 my-0 h-full flex-[0.65] flex-col max-ds:mr-0 max-ds:w-full">
        <div className="flex flex-col items-end space-y-8 max-ds:items-start max-ds:justify-start">
          <div className="flex w-fit items-center justify-center rounded-xl border border-solid border-transparent bg-transparent px-6 py-4 shadow-[0_0_20px_rgba(0,0,0,0.1)] dark:bg-[#0D1321]">
            <Skeleton className=" pr-4 xxl:text-[5rem] dark:text-white" />
            <div className=" flex flex-col pr-4">
              <Skeleton className=" h-10 w-5" />
              <Skeleton className=" h-10 w-5" />
            </div>
          </div>
          <div className="flex w-fit flex-col rounded-xl border border-solid border-transparent bg-transparent px-6 py-4 shadow-[0_0_20px_rgba(0,0,0,0.1)] dark:bg-[#0D1321]">
            <Skeleton className=" h-10 w-5" />
            <Skeleton className=" h-10 w-5" />
          </div>
        </div>
      </div>
      <div className="relative flex h-full flex-1 items-end justify-end max-ds:mx-0 max-ds:my-8">
        <Skeleton className="z-[1] h-5 w-10" />
        <div className="absolute inset-x-0 bottom-0 z-0">
          <Skeleton className="  h-[90%] w-full" />
        </div>
      </div>
      <div className="ml-4 flex h-full flex-[0.75] flex-col items-start justify-evenly max-ds:ml-0 max-ds:w-full max-ds:flex-row max-ds:flex-wrap">
        {[1, 2, 3].map((item, index) => (
          <div
            key={`circle-${index}`}
            className=" flex-center h-[100px] w-[100px] rounded-full bg-white shadow-[0px_0px_20px_rgba(0,0,0,0.1)] max-ds:m-4 dark:bg-[#0D1321] [&:nth-child(1)]:h-[100px] [&:nth-child(1)]:w-[100px] xxl:[&:nth-child(1)]:h-[200px] xxl:[&:nth-child(1)]:w-[200px] [&:nth-child(2)]:m-[1.75rem] [&:nth-child(2)]:h-[150px] [&:nth-child(2)]:w-[150px] xxl:[&:nth-child(2)]:h-[400px] xxl:[&:nth-child(2)]:w-[400px] [&:nth-child(3)]:h-[70px] [&:nth-child(3)]:w-[70px] xxl:[&:nth-child(3)]:h-[170px] xxl:[&:nth-child(3)]:w-[170px]"
          >
            <Skeleton className=" h-[60%] w-[60%]" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default loading;
