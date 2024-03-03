"use client";
import { useEffect, useState } from "react";
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
import { dataSingleCost } from "../api/singleCost";
import { RiArrowUpDownLine } from "react-icons/ri";
import { cn } from "@/lib/utils";
import { IoSearchCircleOutline } from "react-icons/io5";

export default function Home() {
  const [data, setData] = useState(dataSingleCost);
  const [dataTable, setDataTable] = useState<any>([]);
  const [currentDay, setCurrentDay] = useState<any>(0);
  const [plannedDay, setPlannedDay] = useState<any>(0);
  const [sort, setSort] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  function handleSearch() {
    setIsLoading(true)
    const result = data.filter(
      (item: { day: number; }) => item.day >= currentDay && item.day <= plannedDay
    );
    setTimeout(() => {
      setDataTable(result);
      setIsLoading(false)
    },1000)
  }

  function handleSortAZ(){
    setIsLoading(true)
    setDataTable(dataTable.sort((a: { cost: number; },b: { cost: number; }) => a.cost - b.cost))
    setTimeout(() => {
      setIsLoading(false)
    },1000)
  }

  function handleSortZA(){
    setIsLoading(true)
    setDataTable(dataTable.sort((a: { cost: number; },b: { cost: number; }) => b.cost - a.cost))
    setTimeout(() => {
      setIsLoading(false)
    },1000)
  }

  return (
    <main className="flex flex-col items-center justify-between overflow-y-auto">
       <div className="px-4 flex w-full lg:w-4/5 flex-col pb-12">
        <h1 className="text-center font-bold m-0 text-lg">Single Rewind</h1>
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
            className="w-[200px] text-md"
            onClick={handleSearch}
          ><IoSearchCircleOutline className="mr-2 w-8 h-8" />
            Tra cứu
          </Button>
        </div>
  
        <Table>
          {dataTable?.length === 0 && (
            <TableCaption>Nhập day &gt; 1000.</TableCaption>
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
              <TableHead onClick={() => {
                setSort(!sort)
                if(sort){
                  handleSortZA()
                } else handleSortAZ()
              }} className="font-bold text-white flex items-center justify-center gap-2 cursor-pointer">
                Cost <RiArrowUpDownLine className="w-4 h-4" />
              </TableHead>
            </TableRow>
          </TableHeader>
          {!isLoading && <TableBody>
            {dataTable.map((item:any) => (
              <TableRow
                className={cn("border border-slate-400 hover:bg-black/80 duration-500 text-white cursor-pointer",
                  ((item.cost >=  162 && item.cost <= 180) && "bg-[#1ac000]" ),
                  ((item.cost >=  180 && item.cost <= 199) && "bg-[#33b300]" ),
                  ((item.cost >=  199 && item.cost <= 218) && "bg-[#4d9900]" ),
                  ((item.cost >=  218 && item.cost <= 237) && "bg-[#669900]" ),
                  ((item.cost >=  237 && item.cost <= 256) && "bg-[#808000]" ),
                  ((item.cost >=  256 && item.cost <= 275) && "bg-[#996600]" ),
                  ((item.cost >=  275 && item.cost <= 294) && "bg-[#b24c00]" ),
                  ((item.cost >=  294 && item.cost <= 313) && "bg-[#cc3200]" ),
                  ((item.cost >=  313 && item.cost <= 332) && "bg-[#e51900]" ),
                  ((item.cost >=  332 && item.cost <= 354) && "bg-[#ff0000]" ),
                  ((item.cost >=  354 && item.cost <= 400) && "bg-[#441111]" ),
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
          </TableBody> }
        </Table>
        {isLoading && <p className="text-center p-12 animate-pulse font-bold text-primary">Đang tra cứu...</p>}
      </div>
    </main>
  );
}
