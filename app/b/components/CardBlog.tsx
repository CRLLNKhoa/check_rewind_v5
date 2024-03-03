import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import { IoEyeOutline } from "react-icons/io5";

export default function CardBlog() {
  return (
    <div className="flex flex-col w-full lg:w-2/3">
      <div className="flex gap-4 items-center">
        <h2 className="text-sm font-bold">Otc ,19, 2024</h2>
        <h1 className="text-orange-500 font-bold">BOSS</h1>
      </div>
      <h1 className="text-xl font-bold line-clamp-1">
        Nâng táo sao cho nó chuẩn!
      </h1>
      <p className="line-clamp-3 leading-1 mt-2 text-sm text-muted-foreground">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
        amet possimus inventore fugit aliquam tenetur facere doloribus repellat
        ab, deleniti odio cupiditate voluptatum omnis exercitationem! Ipsam
        assumenda nemo optio quisquam.
      </p>
      <div className="flex justify-between">
        <Link href={"/"} className="text-primary text-md font-bold mt-2 hover:underline underline-offset-4 duration-500">Đọc bài viết</Link>
        <span className="font-bold text-xs text-muted-foreground">No.1</span>
      </div>
    </div>
  );
}
