"use client";
import React from "react";
import Elix from "./Elix";
import Wb from "./Wb";
import DayPush from "./DayPush";

export default function Page() {
  return (
    <main className="flex flex-col items-center justify-between overflow-y-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 w-full space-x-4">
        <Elix />
        <Wb />
      </div>
      <DayPush />
    </main>
  );
}
