import Navigation from "@/components/Navigation";
import NavigationDots from "@/components/NavigationDots";
import SocialMedia from "@/components/SocialMedia";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <Navigation />
      <div>
        <div className=" fixed bottom-0 left-0 z-50 pb-8 pl-8 max-ds:pb-4 max-ds:pl-4">
          <SocialMedia />
        </div>
        {children}
        <div className="fixed right-0 top-[50%] mr-2 translate-x-0 translate-y-[-50%] max-ds:hidden">
          <NavigationDots />
        </div>
      </div>
    </main>
  );
};

export default Layout;
