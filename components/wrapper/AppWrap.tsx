// withAppWrapper.tsx
import React from "react";
import SocialMedia from "../SocialMedia";
import NavigationDots from "../NavigationDots";

interface AppWrapperProps {
  idName: string;
  classNames?: string;
}

const AppWrap = (
  WrappedComponent: React.ComponentType,
  { idName, classNames }: AppWrapperProps
) => {
  const WrappedComponentWithWrapper = () => (
    <div
      id={idName}
      className={`flex min-h-screen w-full flex-row ${classNames}`}
    >
      <SocialMedia />
      <div className=" flex-center w-full flex-1 flex-col px-8 py-16 max-xs:px-4 max-xs:pb-8 max-xs:pt-16">
        <WrappedComponent />

        <div className="flex w-full flex-col items-end justify-end px-0 pb-0 pt-8">
          <p className="text-left text-[0.8rem] uppercase leading-6 text-black xxl:text-[1.75rem]">
            @2020 MICHAEL
          </p>
          <p className="text-left text-[0.8rem] uppercase leading-6 text-black xxl:text-[1.75rem]">
            All rights reserved
          </p>
        </div>
      </div>
      <NavigationDots />
    </div>
  );

  return WrappedComponentWithWrapper;
};

export default AppWrap;
