import React from "react";
import { Button } from "../ui/button";
import { SiSpeedypage } from "react-icons/si";
import ToogleMode from "./toogle-mode";
import { VscDesktopDownload } from "react-icons/vsc";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import MenuMobile from "./menuMobile";
import { BsFillGridFill } from "react-icons/bs";

export default function Header() {
  return (
    <header className="sticky top-0 h-12 border-b flex items-center bg-white dark:bg-black z-50">
      <div className="px-6 lg:px-8 h-full flex items-center border-r">
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
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" className="lg:hidden" size={"icon"}><BsFillGridFill className="w-5 h-5" /></Button>
          </SheetTrigger>
          <SheetContent side={"left"}>
            <div className="grid gap-4 py-4">
              <MenuMobile />
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
