import "../globals.css";
import type { Metadata } from "next";
import React from "react";
import { i18n } from "@/i18n-config";

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export const metadata: Metadata = {
  title: "Cretara.dev",
  description: "Cretara.dev bio, resume, portfolio, blog site",
};

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  return (
    <html lang={params.lang}>
      <body className="bg-gradient-to-br bg-blue-800">{children}</body>
    </html>
  );
}
