import "./globals.css";
import type { Metadata } from "next";
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Providers } from "@/app/providers";
import ScrollToTop from "@/components/ScrollToTop";

export const metadata: Metadata = {
  title: "Cretara.dev - Full-Stack Engineer & Architect",
  description: "Portfolio of a senior full-stack engineer with 18+ years of experience in web and mobile development for enterprise and public sector clients.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="en">
      <head title={"Cretaradev"}>
      </head>

      <body className="bg-white dark:bg-slate-900 text-gray-900 dark:text-slate-100 transition-colors duration-300 min-h-screen">
        <Providers>
          <Header />
          {children}
          <Footer />
          <ScrollToTop />
        </Providers>
      </body>
    </html>
  );
}
