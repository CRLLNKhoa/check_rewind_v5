import type { Metadata, ResolvingMetadata } from 'next'
import React from 'react'
 
export const metadata: Metadata = {
  title: "Tài khoản đang bán",
  description: "Website chỉ đăng thông tin, không có trách nhiệm trong giao dịch của các bạn!",
};

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="h-full">{children}</div>;
}
