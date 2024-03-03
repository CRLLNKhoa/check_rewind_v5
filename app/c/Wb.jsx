"use client"
import React, { useEffect, useState } from 'react'

export default function Wb() {
    const [wb, setWb] = useState({
        from: 0,
        to: 0,
      });
    
      const [resultwb, setResultWb] = useState();
    
      function calculateWB(curr, planned) {
        const rs = Math.ceil(((planned - curr) / 78.1) * 11);
        setResultWb(rs);
      }
    
    
      useEffect(() => {
        calculateWB(wb.from, wb.to);
      }, [wb.from, wb.to]);
  return (
    <div className="flex flex-col border p-4 mt-4">
        <h2 className="font-bold">Day cộng thêm khi đổi vũ khí</h2>
        <div className="flex flex-wrap gap-2 justify-center mt-2">
          <div>
            <h3>Ngày hiện tại</h3>
            <input
              value={wb.from}
              type="number"
              className="border outline-none border-primary p-1 mt-2 rounded-lg"
              onChange={(e) => setWb({ ...wb, from: Number(e.target.value) })}
            />
          </div>
          <div>
            <h3 className="text-end">Ngày dự kiến</h3>
            <input
              value={wb.to}
              type="number"
              className="border outline-none border-primary p-1 mt-2 rounded-lg"
              onChange={(e) => setWb({ ...wb, to: Number(e.target.value) })}
            />
          </div>
        </div>
        <h1 className="text-center my-2">
          Day leo được: <b className="text-red-600">{resultwb}</b>
        </h1>
      </div>
  )
}
