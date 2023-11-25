import "./globals.css";
import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Cretara.dev",
  description: "Cretara.dev bio, resume, portfolio, blog site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-br bg-blue-900">{children}</body>
    </html>
  );
}
