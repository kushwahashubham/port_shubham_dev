import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

const loading = () => {
  return (
    <div>
      <Skeleton className="fixed -z-50 px-16 pt-4 text-[250px] text-gray-700/5 max-xl:hidden dark:text-gray-700/15" />

      <div className=" flex-center flex-col gap-8 px-8 pb-4 pt-20 text-center">
        <Skeleton className=" h-[25px] w-[25px] dark:invert" />
        <Skeleton className="h1-bold text-black dark:invert" />
        <div className="text-center dark:invert">
          <Skeleton className="p-text w-[100px]" />
        </div>
        <div className="flex-center relative h-[500px] w-[70%] max-xs:h-[200px] max-xs:w-[275px] ">
          <Skeleton className=" h-full w-full rounded-lg object-cover" />
        </div>
        <div className="flex-center flex-col gap-2">
          <div className=" relative h-[45px] w-[45px]">
            <Skeleton className=" h-full w-full rounded-full border border-gray-200 object-cover" />
          </div>
          <div className="flex-center dark:invert">
            <Skeleton className="p-text text-center" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default loading;
