"use client";

import { ThemeProvider } from "next-themes";
import React from "react";

export function Providers({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <ThemeProvider 
      attribute="class" 
      enableSystem={true} 
      defaultTheme="system"
      storageKey="cretaradev-theme"
      disableTransitionOnChange={false}
      enableColorScheme={false}
    >
      {children}
    </ThemeProvider>
  );
}
