import React from "react";
import { Button } from "../ui/button";
import { SiSpeedypage } from "react-icons/si";
import ToogleMode from "./toogle-mode";
import { VscDesktopDownload } from "react-icons/vsc";

export default function Header() {
  return (
    <header className="sticky top-0 h-12 border-b flex items-center bg-white dark:bg-black z-50">
      <div className="px-8 h-full flex items-center border-r">
        <Button variant="ghost">
          <SiSpeedypage className="mr-2 text-lg" />
          CheckCost
        </Button>
      </div>
      <div className="flex gap-4 items-center ml-auto pr-4">
        <Button variant={"ghost"} size={"icon"}>
          <VscDesktopDownload  className="w-5 h-5" />
        </Button>
        <ToogleMode />
      </div>
    </header>
  );
}
