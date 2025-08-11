// components/AOSWrapper.js
"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AOSWrapper() {
  useEffect(() => {
    AOS.init({ duration: 500 });
  }, []);

  return null; // tidak render apa-apa selain efek AOS
}
