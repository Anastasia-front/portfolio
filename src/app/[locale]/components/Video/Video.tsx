"use client";

import { useRef, useState } from "react";
import { BsInfoSquare } from "react-icons/bs";

import { useLocale, useTranslations } from "next-intl";
import { useTheme } from "next-themes";

import { type Locale } from "src/locales";

export default function Video() {
  const [isClicked, setIsClicked] = useState(false);

  const f = useTranslations("video.firstTime");
  const o = useTranslations("video.otherTimes");
  const { theme } = useTheme();

  const locale = useLocale() as Locale;

  const video = `/video/hero/${locale}-${theme}.mp4`;
  const poster = `/images/poster/${locale}-${theme}.webp`;

  const videoRef = useRef<HTMLVideoElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    if (videoRef.current || textRef.current) {
      if (
        videoRef.current &&
        (videoRef.current.paused || videoRef.current.ended)
      ) {
        videoRef.current.play();
        setIsClicked(true);
      }
    }
  };

  return (
    <>
      <video
        className="video"
        ref={videoRef}
        src={video}
        onClick={handleClick}
        onPlay={() => {
          setIsClicked(true);
        }}
        poster={poster}
      />
      {!isClicked ? (
        <div className="video-tip__first" ref={textRef} onClick={handleClick}>
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
