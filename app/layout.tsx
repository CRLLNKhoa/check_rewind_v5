import type { Metadata } from "next";
import { ThemeProvider } from "@/components/provider/theme-provider";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout-components/header";
import Banner from "@/components/layout-components/banner";
import Menu from "@/components/layout-components/menu";
import QueryProvider from "@/components/provider/query-provider";
import { Analytics } from "@vercel/analytics/react";
export const metadata: Metadata = {
  title: "Check Cost",
  description: "@copyright by Lương Khoa",
  openGraph: {
    images: ["https://luongkhoa.io.vn/logo.png"],
  },
  manifest: "/manifest.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7465388386459244"
          crossOrigin="anonymous"
        ></script>
      </head>
      <body className="relative h-screen flex flex-col">
        <QueryProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Header />
            <Banner />
            <div className="flex-1 overflow-y-auto grid grid-cols-10">
              <Menu />
              <div className="col-span-10 lg:col-span-8 px-4 lg:pr-6 overflow-y-auto">
                {children}
              </div>
            </div>
          </ThemeProvider>
        </QueryProvider>
        <Analytics />
      </body>
    </html>
  );
}
