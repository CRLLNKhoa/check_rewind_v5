"use client";
import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { MdLightMode } from "react-icons/md";
import { MdNightlight } from "react-icons/md";
import { useTheme } from "next-themes";

export default function ToogleMode() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, theme } = useTheme();
  useEffect(() => {
    setMounted(true);
  }, []);

  if(!mounted){
    return null
  }

  return (
    <div>
      {theme === "dark" && (
        <Button
          variant={"ghost"}
          size={"icon"}
          className="animate-in animate-out"
          onClick={() => setTheme("light")}
        >
          <MdLightMode className="w-5 h-5" />
        </Button>
      )}
      {theme === "light" && (
        <Button
          variant={"ghost"}
          size={"icon"}
          className="animate-in animate-out"
          onClick={() => setTheme("dark")}
        >
          <MdNightlight className="w-5 h-5" />
        </Button>
      )}
    </div>
  );
}
