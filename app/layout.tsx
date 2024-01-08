import "./globals.css";
import type { Metadata } from "next";
import React from "react";
import Header from "@/components/Header";
import { Providers } from "@/app/providers";
import ScrollToTop from "@/components/ScrollToTop";

export const metadata: Metadata = {
  title: "Cretara.dev",
  description: "Cretara.dev about, blog, resume, portfolio site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="en">
      <head title={"Cretaradev"} />

      <body>
        <Providers>
          <Header />
          {children}
          <ScrollToTop />
        </Providers>
      </body>
    </html>
  );
}
