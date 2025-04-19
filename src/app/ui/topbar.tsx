"use client";

import Button from "./button";
import Logo from "./icons/logo";

export default function TopBar() {
  return (
    <header className="h-15 md:h-18 fixed w-full z-20 border-b border-gray-200">
      <div className="w-full h-full px-4 md:px-8 flex flex-row items-center justify-between">
        <div className="flex items-center space-x-2 md:space-x-3 rtl:space-x-reverse">
          <div>
            <Logo width="20px" height="20px"/>
          </div>
          <span className="self-center text-lg md:text-2xl font-semibold whitespace-nowrap text-primary-600 hover:cursor-default">
            Monni
          </span>
        </div>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <Button onClick={() => {}}>Logout</Button>
        </div>
      </div>
    </header>
  );
}
