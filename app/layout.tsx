import type { Metadata } from "next";
import { ThemeProvider } from "@/components/provider/theme-provider";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout-components/header";
import Banner from "@/components/layout-components/banner";
import Menu from "@/components/layout-components/menu";
import QueryProvider from "@/components/provider/query-provider";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
    >
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
      </body>
    </html>
  );
}
