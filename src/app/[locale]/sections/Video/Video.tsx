"use client";

import { useEffect, useRef, useState } from "react";
import { BsInfoSquare } from "react-icons/bs";

import { useLocale, useTranslations } from "next-intl";
import { useTheme } from "next-themes";

import { type Locale } from "src/locales";

export default function Video() {
  const [isClicked, setIsClicked] = useState(false);
  const [isVideoFinished, setIsVideoFinished] = useState(false);

  const f = useTranslations("video.firstTime");
  const o = useTranslations("video.otherTimes");
  const { resolvedTheme } = useTheme();

  const locale = useLocale() as Locale;
  const defaultLanguage = locale === "uk" ? locale : "en";
  const video = `/video/hero/${defaultLanguage}-${resolvedTheme}.mp4`;
  const poster = `/images/poster/${defaultLanguage}-${resolvedTheme}.webp`;

  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      const videoEl = videoRef.current;
      videoEl.muted = true; // Ensure video is muted for autoplay
      videoEl.play().catch(() => {
        console.warn("Autoplay failed on first load.");
      });
    }
  }, []);

  const handleClick = () => {
    if (videoRef.current) {
      if (videoRef.current.paused || videoRef.current.ended) {
        videoRef.current.play();
      }
      videoRef.current.muted = !videoRef.current.muted; // Toggle sound
      setIsClicked(!videoRef.current.muted);
    }
  };

  const handleVideoEnd = () => {
    // Set state when the video finishes playing for the first time
    setIsVideoFinished(true);
  };

  return (
    <>
      <video
        autoPlay
        className="video"
        muted={!isClicked}
        playsInline
        poster={poster}
        ref={videoRef}
        src={video}
        onEnded={handleVideoEnd} // Detect when video finishes playing
      />
      {isVideoFinished && (
        <div
          className={`${isClicked ? "video-tip__others" : "video-tip__first"}`}
          onClick={handleClick}
        >
          <BsInfoSquare />
          <p
            className={`${
              isClicked ? "video-tip__others-text" : "video-tip__first-text"
            }`}
          >
            {!isClicked ? (
              <>
                {f("primaryText")} <span>{f("secondaryText")}</span>
              </>
            ) : (
              <>
                {o("primaryText")} <span>{o("secondaryText")}</span>
              </>
            )}
          </p>
        </div>
      )}
    </>
  );
}
