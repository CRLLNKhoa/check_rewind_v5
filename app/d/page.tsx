"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { useState } from "react";
import { doubleCost } from "@/api/doubleCost";
import { RiArrowUpDownLine } from "react-icons/ri";
import { cn } from "@/lib/utils";
import { IoSearchCircleOutline } from "react-icons/io5";

export default function Page() {
  const [data, setData] = useState<any>(doubleCost);
  const [dataTable, setDataTable] = useState<any>([]);
  const [currentDay, setCurrentDay] = useState<any>(0);
  const [plannedDay, setPlannedDay] = useState<any>(0);
  const [sort, setSort] = useState<any>(false);
  const [isLoading, setIsLoading] = useState(false);

  function handleSearch() {
    setIsLoading(true)
    const result = data.filter(
      (item: { day: number }) =>
        item.day >= currentDay && item.day <= plannedDay
    );
    setTimeout(() => {
        setDataTable(result);
        setIsLoading(false)
      },1000)
  }

  function handleSortAZ() {
    setIsLoading(true)
    setDataTable(
      dataTable.sort(
        (a: { cost: number }, b: { cost: number }) => a.cost - b.cost
      )
    );
    setTimeout(() => {
        setIsLoading(false)
      },1000)
  }

  function handleSortZA() {
    setIsLoading(true)
    setDataTable(
      dataTable.sort(
        (a: { cost: number }, b: { cost: number }) => b.cost - a.cost
      )
    );
    setTimeout(() => {
        setIsLoading(false)
      },1000)
  }
  return (
    <main className="flex flex-col items-center justify-between overflow-y-auto">
      <div className="px-4 flex w-full lg:w-4/5 flex-col pb-12">
        <h1 className="text-center font-bold text-lg m-0">Double Rewind</h1>
        <p className="text-center text-xs">
          Giá trị của cost càng nhỏ thì thời gian rewind càng ít!
        </p>
        {/* NOTE --------- */}
        <div className="flex justify-center items-center my-4">
          <div className="flex flex-col text-md">
            <label
              htmlFor="singleto"
              className="font-bold"
            >
              Ngày hiện tại
            </label>
            <input
              value={currentDay}
              type="number"
              placeholder="0"
              className="border-2 py-1 px-2 w-[124px] mt-1 outline-none rounded-md"
              onChange={(e) => setCurrentDay(e.target.value)}
            />
          </div>
          <div className="translate-y-[10px]">
            <img
              src="/arrow.svg"
              alt="arrow"
              className="h-8 mx-4 "
            />
          </div>
          <div className="flex flex-col text-md">
            <label
              htmlFor="singleto"
              className="font-bold text-end"
            >
              Ngày dự kiến
            </label>
            <input
              value={plannedDay}
              type="number"
              placeholder="0"
              className="border-2 text-end py-1 px-2 w-[124px] mt-1 outline-none rounded-md"
              onChange={(e) => setPlannedDay(e.target.value)}
            />
          </div>
        </div>
        {/* NOTE --------- */}
        <div className="flex justify-center gap-2 mb-8">
          <Button
            size="lg"
            className="w-[200px]"
            onClick={handleSearch}
          ><IoSearchCircleOutline className="mr-2 w-8 h-8" />
            Tra cứu
          </Button>
        </div>

        <Table>
          {(dataTable?.length === 0 && isLoading === false) && (
            <TableCaption>Nhập day &gt; 2000.</TableCaption>
          )}
          <TableHeader>
            <TableRow className="bg-primary hover:bg-primary select-none">
              <TableHead className="text-center font-bold text-white">
                Day
              </TableHead>
              <TableHead className="text-center font-bold text-white">
                Skip day
              </TableHead>
              <TableHead className="text-center font-bold text-white">
                Tickets
              </TableHead>
              <TableHead
                onClick={() => {
                  setSort(!sort);
                  if (sort) {
                    handleSortZA();
                  } else handleSortAZ();
                }}
                className="font-bold text-white flex items-center justify-center gap-2 cursor-pointer"
              >
                Cost <RiArrowUpDownLine className="w-4 h-4" />
              </TableHead>
            </TableRow>
          </TableHeader>
          {!isLoading && <TableBody>
            {dataTable.map((item: any) => (
              <TableRow
                className={cn(
                  "border border-slate-400 hover:bg-black/80 duration-500 text-white cursor-pointer",
                  item.cost >= 262 && item.cost <= 298 && "bg-[#1ac000]",
                  item.cost >= 298 && item.cost <= 334 && "bg-[#33b300]",
                  item.cost >= 334 && item.cost <= 370 && "bg-[#4d9900]",
                  item.cost >= 370 && item.cost <= 406 && "bg-[#669900]",
                  item.cost >= 406 && item.cost <= 443 && "bg-[#808000]",
                  item.cost >= 443 && item.cost <= 479 && "bg-[#996600]",
                  item.cost >= 479 && item.cost <= 515 && "bg-[#b24c00]",
                  item.cost >= 515 && item.cost <= 551 && "bg-[#cc3200]",
                  item.cost >= 551 && item.cost <= 587 && "bg-[#e51900]",
                  item.cost >= 587 && item.cost <= 624 && "bg-[#ff0000]"
                )}
                key={item.day}
              >
                <TableCell className="text-center">{item.day}</TableCell>
                <TableCell className="text-center">{item.skip}</TableCell>
                <TableCell className="text-center">
                  {Math.floor(item.tickets)}
                </TableCell>
                <TableCell className="text-center">
                  {Math.floor(item.cost)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>}
        </Table>
        {isLoading && <p className="text-center p-12 animate-pulse font-bold text-primary">Đang tra cứu...</p>}
      </div>
    </main>
  );
}
