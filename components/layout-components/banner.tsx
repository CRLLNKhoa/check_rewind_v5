import React from "react";
import { AiFillNotification } from "react-icons/ai";
import Marquee from "react-fast-marquee";
import text from "@/admin/notic.json";

export default function Banner() {
  return (
    <div className="p-4 px-6">
      <div
        className=" border h-full rounded-xl gap-2
         flex p-2 pl-5"
      >
        <div className="flex justify-center items-center gap-4 font-bold">
          <AiFillNotification /> Thông báo:
        </div>
        <Marquee
          className="flex-1 w-full"
          pauseOnHover
          speed={100}
        >
          <div className="flex mr-12"><b className="text-red-500 mr-2">Xin chào!</b> - website này được tạo bởi <b className="font-bold ml-2 text-primary">Lương Khoa</b></div>
          <div className="flex mr-12"><b className="text-red-500 mr-2">Tuyển thành viên!</b> - Guild VietNamOnTop tuyển 2 slot 18K+</div>
          <div className="flex mr-12"><b className="text-red-500 mr-2">Đổi tên miền!</b> - Tên miền luongkhoa.shop sắp hết truy cập được bạn có thể dùng tên miền https://check-rewind.vercel.app</div>
        </Marquee>
      </div>
    </div>
  );
}
