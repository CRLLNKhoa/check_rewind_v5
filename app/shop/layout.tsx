import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {

    title: "Shop acc",
    description: "Nơi rao bán account game.",
  };
  
export default function layout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
  return (
    <div className='h-full overflow-y-auto'>{children}</div>
  )
}
