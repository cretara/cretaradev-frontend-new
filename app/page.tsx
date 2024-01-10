import React from "react";
import Body from "@/components/Body";
import { Titillium_Web } from "next/font/google";

const titillium = Titillium_Web({
  weight: "400",
  subsets: ["latin"],
});

export default function CretaraDev() {
  return (
    <div id={"mainCretaraDev"} className={titillium.className}>
      <Body />
    </div>
  );
}
