import React, { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { donvi } from "@/api/donvi";
import { cn } from "@/lib/utils";

export default function Bdcalculate({get, set}) {
  function tinhDauYeuCau(targetLv, currentLv) {
    // Chắc chắn rằng các tham số đầu vào là số
    targetLv = parseFloat(targetLv);
    currentLv = parseFloat(currentLv);
    const currentPrice = currentLv * 2;
    const targetPrice = targetLv * 2 - 2;

    // Kiểm tra nếu có bất kỳ giá trị không phải số nào đó là NaN
    if (
      isNaN(targetLv) ||
      isNaN(currentLv) ||
      isNaN(currentPrice) ||
      isNaN(targetPrice)
    ) {
      return "Vui lòng nhập giá trị số cho tất cả các tham số";
    }

    // Tính day
    const day = Math.ceil(
      Math.log10(
        Math.pow(
          2,
          parseInt(Math.log10(targetLv)) - parseInt(Math.log10(currentLv))
        ) *
          (targetLv / currentLv)
      ) / Math.log10(1.065)
    );

    // Thực hiện phép tính
    const float = ((targetLv - currentLv) / 2) * (currentPrice + targetPrice);
    // Kiểm tra nếu L5 là 0
    if (float === 0) {
      return {
        ketQuaSo: 0,
        ketQuaDonVi: 0,
        ketQuaDay: 0,
        ketQuaElix: 0
      };
    }
    if (float < 1000) {
      return {
        ketQuaSo: 0,
        ketQuaDonVi: 0,
        ketQuaDay: 0,
        ketQuaElix: 0
      };
    }
    // Tính floor(log10(L5))
    let log10L5 = Math.floor(Math.log10(float));
    // Thực hiện phép tính cuối cùng
    const ketQua = float / Math.pow(10, log10L5);
    // Tính floor(log10(L5))/3
    const index = Math.ceil(log10L5 / 3);
    // Trả về kết quả
    return {
      ketQuaSo: ketQua.toFixed(2),
      ketQuaDonVi: donvi[index - 1].key,
      ketQuaDay: day,
      ketQuaElix: float
    };
  }

  const [currentLv, setCurrentLv] = useState(0);
  const [currentLvDv, setCurrentLvDv] = useState(0);
  const [targetLv, setTargetLv] = useState(0);
  const [targetLvDv, setTargetLvDv] = useState(0);

  const [elix, setElix] = useState(0);
  const [donVi, setDonVi] = useState(" ");
  const [day, setDay] = useState(0);

  useEffect(() => {
    if (currentLv !== 0 && currentLvDv !== 0 && targetLv !== 0 && targetLvDv) {
      const result = tinhDauYeuCau(
        targetLv * targetLvDv,
        currentLv * currentLvDv
      );
      setElix(result.ketQuaSo * 100);
      setDonVi(result.ketQuaDonVi);
      setDay(result.ketQuaDay * 2)
      set({...get, bd: result.ketQuaElix})
    }
  }, [currentLv, currentLvDv, targetLv, targetLvDv]);

  return (
    <div className="flex gap-4 items-center flex-wrap">
      <img
        src="/bd.png"
        alt=""
        className="w-8 h-8 rounded-full"
      />
      <div className="flex gap-2">
        <input
          className="bg-transparent outline-none border-b w-[82px] text-center"
          type="number"
          placeholder="Current"
          onChange={(e) => setCurrentLv(e.target.value)}
        />
        <Select onValueChange={(e) => setCurrentLvDv(e)}>
          <SelectTrigger className="w-[80px] h-6 bg-transparent">
            <SelectValue placeholder="level" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {donvi?.map((item) => (
                <SelectItem
                  key={item.key}
                  value={item.value}
                >
                  {item.key}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <span>-&gt;</span>
      <div className="flex gap-2">
        <input
          className="bg-transparent outline-none border-b w-[82px] text-center"
          type="number"
          placeholder="Planned"
          onChange={(e) => setTargetLv(e.target.value)}
        />
        <Select onValueChange={(e) => setTargetLvDv(e)}>
          <SelectTrigger className="w-[80px] h-6 bg-transparent">
            <SelectValue placeholder="level" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {donvi.map((item) => (
                <SelectItem
                  key={item.key}
                  value={item.value}
                >
                  {item.key}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <input
        value={2}
        disabled={true}
        type="number"
        className={cn(
          "outline-none cursor-not-allowed w-[102px] text-center text-yellow-500 bg-black/40 select-none font-bold"
        )}
        placeholder="Milestone"
      />
      {/* <span>
        Dầu yêu cầu [{" "}
        <b className="text-red-500">
          {elix} {donVi}
        </b>{" "}
        ]
      </span> */}
      <span>
        Day leo được [ <b className="text-red-500">{day}</b> ]
      </span>
    </div>
  );
}
