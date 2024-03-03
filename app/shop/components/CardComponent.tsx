import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import React from "react";
import { FaCaretRight } from "react-icons/fa";

export default function CardComponent({data}: any) {
  const router = useRouter()
  return (
    <div className="flex flex-col shadow-lg rounded-lg overflow-hidden cursor-pointer relative">
        <span className="bg-red-500 px-2 absolute rounded-full text-md font-bold text-white top-2 right-2">{data?.id}</span>
      <img
        src={data?.thumbnail}
        alt="ảnh"
        className="w-full h-[180px] object-fill"
      />
      <div className="flex justify-between items-center py-2 px-2 border-b">
        <h2 className="text-red-500 font-bold text-lg">
          {data?.price}<sup>đ</sup>
        </h2>
        <Button
          variant={"destructive"}
          size={"sm"}
          className="h-6 text-md"
          onClick={() => router.push(`/shop/account?id=${data?.id}`)}
        >
          Xem ngay
        </Button>
      </div>
      <div className="flex flex-col p-2 gap-1">
        <div className="flex items-center gap-4">
          <p className="flex items-center text-md">
            <FaCaretRight />
            Day:{" "}
          </p>
          <p className="text-md font-bold">{data?.day}</p>
        </div>
        <div className="flex items-center gap-4">
          <p className="flex items-center text-md">
            <FaCaretRight />
            Ruby:{" "}
          </p>
          <p className="text-md font-bold">{data?.ruby}</p>
        </div>
        <div className="flex items-center gap-4">
          <p className="flex items-center text-md">
            <FaCaretRight />
            Elixir Bonus:{" "}
          </p>
          <p className="text-md font-bold">{data?.elixir_bonus}%</p>
        </div>
        <div className="flex items-center gap-4">
          <p className="flex items-center text-md">
            <FaCaretRight />
            Heroes legendary 15 sao:{" "}
          </p>
          <p className="text-md font-bold">{data?.heroes_15}</p>
        </div>
      </div>
    </div>
  );
}
