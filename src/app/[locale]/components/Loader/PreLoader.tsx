"use client";

import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

import { ScrambledText } from "../AnimatedText";

export function PreLoader() {
  const [load, setLoad] = useState<number>(0);
  const i = useTranslations("loading");

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
      <ScrambledText className="preloader-text" text={i("title")} />
      <p className="preloader-percentages">{load}%</p>
    </div>
  );
}
