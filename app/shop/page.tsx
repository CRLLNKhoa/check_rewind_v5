"use client";
import React, { useEffect, useState } from "react";
import CardComponent from "./components/CardComponent";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { getShop } from "@/actions/account";

export default function Page() {
  const [data, setData] = useState<any>([]);
  useEffect(() => {
    const get = async () => {
      const { data } = await getShop();
      setData(data);
    };
    get();
  }, []);

  if (data.length === 0) {
    return (
      <p className="text-center p-12 font-bold text-primary animate-pulse">
        Đang tải thông tin...
      </p>
    );
  }

  return (
    <div className="flex flex-col overflow-y-auto relative pb-6">
      <div className="flex justify-between items-center mb-6 border-b">
        <h1 className="text-red-500 font-bold select-none sticky top-0">
          MUA NICK DAYS BYGONE
        </h1>
        <a href="https://luongkhoa.io.vn/" target="_blank" className="text-xs cursor-pointer text-primary font-bold">Liên hệ đăng tin</a>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 gap-4">
        {data.map((item: any) => {
          return (
            <CardComponent
              key={item.id}
              data={item}
            />
          );
        })}
      </div>
      <div className="mt-6 cursor-not-allowed">
        <Pagination className="">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
}
