"use client";

import { useRef, useState } from "react";
import { BsInfoSquare } from "react-icons/bs";

import { useTranslations } from "next-intl";
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";

export default function Video() {
  const [isClicked, setIsClicked] = useState(false);

  const f = useTranslations("video.firstTime");
  const o = useTranslations("video.otherTimes");
  const { theme } = useTheme();

  const pathname = usePathname();
  const lang = pathname.slice(0, 3);

  const video = (() => {
    return `/video/hero/${lang}-${theme}.mp4`;
  })();

  const poster = (() => {
    return `/images/poster/${lang}-${theme}.webp`;
  })();

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
