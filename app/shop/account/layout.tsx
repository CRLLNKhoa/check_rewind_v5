import type { Metadata, ResolvingMetadata } from 'next'
import React from 'react'

type Props = {
  params: { id: string }
  searchParams: { [key: string]: string | string[] | undefined }
}
 
export async function generateMetadata(
  { searchParams, params }: Props,
): Promise<Metadata> {
  // read route params
  return {
    title: `Tài khoản đang bán`,
    description: "Tài khoản đang được rao bán."
  }
}

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="h-full">{children}</div>;
}
