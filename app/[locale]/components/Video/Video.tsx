"use client";

import { useRef, useState } from "react";
import { BsInfoSquare } from "react-icons/bs";

import { useTranslations } from "next-intl";
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";

export function Video() {

  const [isClicked, setIsClicked] = useState(false);

  const f = useTranslations("video.firstTime");
  const o = useTranslations("video.otherTimes");
  const { theme } = useTheme();

  const pathname = usePathname();
  const lang = pathname.slice(0, 3);

  const video = (() => {
    if (lang === "/uk") {
      if (theme === "light") {
        return "/video/hero/uk-light.mp4";
      } else {
        return "/video/hero/uk-dark.mp4";
      }
    } else {
      if (theme === "light") {
        return "/video/hero/en-light.mp4";
      } else {
        return "/video/hero/en-dark.mp4";
      }
    }
  })();

 

  const videoRef = useRef<HTMLVideoElement>(null);

  const handleClick = () => {
    if (videoRef.current) {
      if (videoRef.current.paused || videoRef.current.ended) {
        videoRef.current.play();
        setIsClicked(true);
      }
    }
  };

  return (
    <>
      <video
        className="video"
        autoPlay
        ref={videoRef}
        src={video}
        onClick={handleClick}
      />
      {!isClicked ? (
        <div className="video-tip__first">
          <BsInfoSquare />
          <p className="video-tip__first-text">
            {f("primaryText")} <span>{f("secondaryText")}</span>
          </p>
        </div>
      ) : (
        <div className="video-tip__others">
          <BsInfoSquare />
          <p className="video-tip__others-text">
            {o("primaryText")} <span>{o("secondaryText")}</span>
          </p>
        </div>
      )}
    </>
  );
}
