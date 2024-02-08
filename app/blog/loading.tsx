import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

const loading = () => {
  return (
    <div>
      <div className=" dark:dark-bgGrad h-fit w-full flex-1 flex-col bg-[#EDF2F8] pt-16 max-lg:h-fit max-xs:pt-[72px]">
        <Skeleton className="text-center text-[2.75rem] font-extrabold capitalize text-black max-xs:text-[2rem] xxl:text-[4rem] dark:text-white" />

        <div className=" flex flex-wrap items-center justify-center">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((post, index) => (
            <Skeleton key={index} className="m-8 w-[90%] max-xs:m-4">
              <div
                className=" flex-center cursor-pointer flex-row rounded-lg bg-white p-4 text-black transition-all duration-300 ease-in-out hover:shadow-[0_0_25px_rgba(0,0,0,0.2)] max-md:flex-col  max-xs:w-full xxl:rounded-xl xxl:p-5 dark:bg-[#0D1321] dark:hover:shadow-[0_0_25px_rgba(255,255,255,0.2)]
                  "
              >
                <div className=" flex-center relative h-[230px] w-full xxl:h-[350px]">
                  <Skeleton className=" h-full w-full rounded-lg object-cover" />
                </div>
                <div className=" flex-center relative w-full flex-col p-2">
                  <div className=" flex-center rounded-[10px] bg-[#0D1321] px-4 py-2 dark:bg-slate-700 ">
                    <Skeleton className="p-text text-center text-white" />
                  </div>
                  <Skeleton className="bold-text mt-4 text-center leading-6 xxl:mt-12 dark:text-white" />

                  <Skeleton className="p-text mt-2 text-center dark:text-gray-500" />
                </div>
              </div>
            </Skeleton>
          ))}
        </div>
      </div>
    </div>
  );
};

export default loading;
