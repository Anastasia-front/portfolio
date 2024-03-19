"use client";

import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

interface Props {}

export function PreLoader(props: Props) {
  const [load, setLoad] = useState<number>(0);
  const i = useTranslations("loading");

  useEffect(() => {
    const timerID = setInterval(() => {
      setLoad((prevLoad) => {
        if (prevLoad === 100) {
          clearInterval(timerID);
          return prevLoad;
        } else {
          return prevLoad + 1;
        }
      });
    }, 20);

    return () => clearInterval(timerID);
  }, []);

  return (
    <div className="preloader">
      <p className="preloader-text">{i("title")}</p>
      <p className="preloader-percentages">{load}%</p>
    </div>
  );
}
