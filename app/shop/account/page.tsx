"use client";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Separator } from "@/components/ui/separator";
import { FaCaretRight } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { HiMiniShoppingBag } from "react-icons/hi2";
import Markdown from "react-markdown";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Input } from "@/components/ui/input";
import { getAccount } from "@/actions/account";

export default function Page() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const [data, setData] = useState<any>([]);

  useEffect(() => {
    const get = async () => {
      const { data:any } = await getAccount(Number(id));
      setData(any)
    };
    get();
  }, []);

  if(data.length === 0){
    return <p className="text-center p-12 font-bold text-primary animate-pulse">Đang tải thông tin...</p>
  }

  return (
    <div className="grid grid-cols-5 pb-4 gap-4 relative overflow-y-auto h-full">
      <div className="flex flex-col col-span-5 lg:col-span-2 gap-4 lg:sticky top-0">
        <div className="bg-[url('https://shopacc.vn/bg-1.jpeg')] bg-cover bg-no-repeat rounded-lg p-4 text-white">
          <h1 className="text-md font-bold leading-none uppercase">
            Mã số: {id}
          </h1>
          <p className="text-[10px] font-bold uppercase">
            Danh mục account DBG
          </p>
        </div>
        <div className="border rounded-lg flex flex-col">
          <div className="bg-[#FEE2E2] p-4 flex text-red-700 justify-between">
            <div className="flex flex-col font-semibold">
              <p className="text-sm">ATM/MOMO</p>
              <h1 className="text-lg font-bold">
                {data[0]?.price} <sup>đ</sup>
              </h1>
            </div>
            <Separator orientation="vertical" />
            <div className="flex flex-col font-semibold border-l">
              <p className="text-sm">THẺ CÀO (CARD)</p>
              <h1 className="text-lg font-bold text-right">NONE</h1>
            </div>
          </div>
          <div className="flex gap-4 border-b px-4 py-2">
            <p className="flex items-center">
              <FaCaretRight /> Day:{" "}
            </p>
            <p className="font-semibold">{data[0]?.day}</p>
          </div>
          <div className="flex gap-4 border-b px-4 py-2">
            <p className="flex items-center">
              <FaCaretRight />
              Ruby:{" "}
            </p>
            <p className="font-semibold">{data[0]?.ruby}</p>
          </div>
          <div className="flex gap-4 border-b px-4 py-2">
            <p className="flex items-center">
              <FaCaretRight /> Elixir Bonus:{" "}
            </p>
            <p className="font-semibold">{data[0]?.elixir_bonus}%</p>
          </div>
          <div className="flex gap-4 border-b px-4 py-2">
            <p className="flex items-center">
              <FaCaretRight /> Heroes legendary 15:{" "}
            </p>
            <p className="font-semibold">{data[0]?.heroes_15}</p>
          </div>
          <div className="flex gap-4 border-b px-4 py-2">
            <p className="flex items-center">
              <FaCaretRight /> Heroes star:{" "}
            </p>
            <p className="font-semibold">{data[0]?.heroes_star}</p>
          </div>
          <div className="flex gap-4 px-4 py-2 border-b">
            <p className="flex items-center">
              <FaCaretRight /> Rune:{" "}
            </p>
            <p className="font-semibold">{data[0]?.rune}</p>
          </div>
          <div className="flex gap-4 px-4 py-2 border-b">
            <p className="flex items-center">
              <FaCaretRight /> Tickets:{" "}
            </p>
            <p className="font-semibold">{data[0]?.tickets}</p>
          </div>
          <div className="flex gap-4 px-4 py-2 border-b">
            <p className="flex items-center">
              <FaCaretRight /> Rương vũ khí:{" "}
            </p>
            <p className="font-semibold">{data[0]?.box_wb}</p>
          </div>
          <div className="flex gap-4 px-4 py-2">
            <p className="flex items-center">
              <FaCaretRight /> Thông tin liên kết:{" "}
            </p>
            <p className="font-semibold">{data[0]?.info_link}</p>
          </div>
        </div>
        <AlertDialog>
          <AlertDialogTrigger asChild>
          <Button className="text-lg" size={"lg"}><HiMiniShoppingBag className="mr-2" /> Mua ngay</Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Thông tin liên hệ</AlertDialogTitle>
              <AlertDialogDescription>
                Website chỉ giúp hiển thị thông tin tài khoản, tôi sẽ không chịu trách nhiệm trong quá trình giao dịch của các bạn.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <div className="flex flex-col"><Input readOnly value={data[0]?.contact} placeholder="Link FB" /></div>
            <AlertDialogFooter>
              <AlertDialogCancel>Trở lại</AlertDialogCancel>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
      <div className="flex flex-col col-span-5 lg:col-span-3 h-full gap-4 lg:overflow-y-auto">
        <h1 className="font-bold border-b pb-2">Chi tiết tài khoản</h1>
        <Markdown>{data[0]?.detail_content}</Markdown>
      </div>
    </div>
  );
}
