import { navigationList } from "@/constants/lists";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const NavigationDots = () => {
  return (
    <div className=" flex flex-col items-center justify-center rounded-3xl p-1">
      {navigationList.map((item) => (
        <Link
          key={item.index}
          href={`#${item.name}`}
          className={`m-2 flex h-[40px] w-[40px] items-center justify-center rounded-full bg-[#cbcbcb] transition duration-200 ease-in-out hover:bg-primary-500 xxl:h-20 xxl:w-20 dark:invert`}
        >
          <Image src={item.icon} alt={item.name} width={25} height={25} />
        </Link>
      ))}
    </div>
  );
};

export default NavigationDots;
