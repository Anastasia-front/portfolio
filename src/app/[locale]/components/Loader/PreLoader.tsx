"use client";

import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

import { scramble } from "@/utils";

export function PreLoader() {
  const [load, setLoad] = useState<number>(0);
  const i = useTranslations("loading");

  const loader = document.getElementById("scramble");

  const scrambled = scramble(loader);
  scrambled?.run?.();

  useEffect(() => {
    const timerID = setInterval(() => {
      setLoad((prevLoad) => {
        if (prevLoad === 100) {
          clearInterval(timerID);
          return prevLoad;
        } else {
          return prevLoad + 5;
        }
      });
    }, 90);

    return () => clearInterval(timerID);
  }, []);

  return (
    <div className="preloader">
      <p id={"scramble"} className="preloader-text">
        {i("title")}
      </p>
      <p className="preloader-percentages">{load}%</p>
    </div>
  );
}
