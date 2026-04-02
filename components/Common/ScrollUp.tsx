"use client";

import { useEffect } from "react";

export default function ScrollUp() {
  useEffect(() => globalThis.document?.scrollingElement?.scrollTo(0, 0), []);

  return null;
}
