"use client";
import React, { useEffect, useState } from "react";

export default function Elix() {
  const [resultElix, setResultElix] = useState({
    per: 0,
    num: 0
  });
  const [elix, setElix] = useState({
    from: 0,
    to: 0,
    num: 0
  });

  useEffect(() => {
    calculateValue(elix.to, elix.from);
  }, [elix.from, elix.to,elix.num]);

  function calculateValue(F14, F13) {
    var numerator = Math.floor(
      50 + Math.pow(F14 / 10.6, 2.5 + Math.max(0, F14 - 3000) * 0.0002)
    );
    var denominator = Math.floor(
      50 + Math.pow(F13 / 10.6, 2.5 + Math.max(0, F13 - 3000) * 0.0002)
    );
    setResultElix({per: Math.ceil((numerator / denominator - 1) * 100), num: ((Math.ceil((numerator / denominator - 1) * 100) * elix.num)/100)});
  }

  return (
    <div className="flex flex-col border p-4 mt-4 w-full">
      <h2 className="font-bold">Tính số dầu vượt day</h2>
      <div className="grid grid-cols-3 gap-2 mt-4">
        <div className="col-span-3 lg:col-span-1">
        <h3 className="text-center">Ngày hiện tại</h3>
          <input
            value={elix.from}
            type="number"
            className="border outline-none border-primary p-1 mt-2 rounded-lg w-full text-center"
            onChange={(e) => setElix({ ...elix, from: Number(e.target.value) })}
          />
        </div>
        <div className="col-span-3 lg:col-span-1">
          <h3 className="text-center">Ngày dự kiến</h3>
          <input
            value={elix.to}
            type="number"
            className="border outline-none border-primary p-1 mt-2 rounded-lg w-full text-center"
            onChange={(e) => setElix({ ...elix, to: Number(e.target.value) })}
          />
        </div>
        <div className="col-span-3 lg:col-span-1">
          <h3 className="text-center">Dầu đang hiện tại</h3>
          <input
            value={elix.num}
            type="number"
            className="border outline-none border-primary p-1 mt-2 rounded-lg w-full  text-center"
            onChange={(e) => setElix({ ...elix, num: Number(e.target.value) })}
          />
        </div>
      </div>
      <h1 className="text-center my-2">
        Dầu tăng: <b className="text-red-600">{resultElix.per}</b> %{" "} -&gt; <b className="text-red-600">{resultElix.num}</b>
      </h1>
    </div>
  );
}
