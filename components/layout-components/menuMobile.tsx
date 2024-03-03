"use client"
import React from "react";
import { TbCircleDashedNumber1, TbCircleDashedNumber2 } from "react-icons/tb";
import { CiCalculator2 } from "react-icons/ci";
import { IoTimeOutline } from "react-icons/io5";
import { MdOutlineAttachFile } from "react-icons/md";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { GoPencil } from "react-icons/go";
import { MdOutlineEmojiEvents } from "react-icons/md";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export default function MenuMobile() {
  const pathname = usePathname()
  return (
    <div className="px-6 col-span-2">
      <Link href={"/"} className={cn("menu-btn", pathname === "/" && "menu-active")}>
        <TbCircleDashedNumber1 className="text-2xl" />
        Single rewind
      </Link>
      <Link href={"/d"} className={cn("menu-btn", pathname === "/d" && "menu-active")}>
        <TbCircleDashedNumber2 className="text-2xl" />
        Double rewind
      </Link>
      <Link href={"/c"} className={cn("menu-btn", pathname === "/c" && "menu-active")}>
        <CiCalculator2 className="text-2xl" />
        Tính toán dame
      </Link>
      <Link href={"/t"} className={cn("menu-btn", pathname === "/t" && "menu-active")}>
        <IoTimeOutline className="text-2xl" />
        Thời gian rewind
      </Link>
      <Link href={"/l"} className={cn("menu-btn", pathname === "/l" && "menu-active")}>
        <MdOutlineAttachFile className="text-2xl" />
        Level skill leo day
      </Link>
      <Link href={"/shop"} className={cn("menu-btn", pathname === "/shop" && "menu-active")}>
        <HiOutlineShoppingCart className="text-2xl" />
        Treo account<sup className="text-red-500 font-bold text-xs -translate-x-3 animate-pulse">New</sup>
      </Link>
      <Link href={"/b"} className={cn("menu-btn", pathname === "/b" && "menu-active")}>
        <GoPencil className="text-2xl" />
        Chia sẻ<sup className="text-red-500 font-bold text-xs -translate-x-3 animate-pulse">New</sup>
      </Link>
      <Link href={"/e"} className={cn("menu-btn", pathname === "/e" && "menu-active")}>
        <MdOutlineEmojiEvents className="text-2xl" />
        Sự kiện<sup className="text-red-500 font-bold text-xs -translate-x-3 animate-pulse">New</sup>
      </Link>
    </div>
  );
}
