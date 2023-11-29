"use client";

import { useEffect, useRef } from "react";
import { BsInfoSquare } from "react-icons/bs";

import { useTranslations } from "next-intl";
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";

export function Video() {
  const t = useTranslations("video");
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

  useEffect(() => {
    const playVideo = async () => {
      if (videoRef.current) {
        try {
          await videoRef.current.play();
        } catch (error) {
          console.error("Autoplay failed:", error);
        }
      }
    };

    // Delay autoplay after component mount
    const delay = setTimeout(() => {
      playVideo();
    }, 1000); // Adjust the delay time as needed

    return () => clearTimeout(delay);
  }, []);

  const handleInteraction = () => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.error("Autoplay failed:", error);
      });
    }
  };

  useEffect(() => {
    // You can attach this event listener to any interactive element
    document.addEventListener("click", handleInteraction);

    return () => {
      document.removeEventListener("click", handleInteraction);
    };
  }, []);

  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <>
      <video className="video" autoPlay ref={videoRef} src={video} />
      <div className="video-tip">
        <BsInfoSquare />
        <p className="video-text">
          {t("primaryText")} <span>{t("secondaryText")}</span>
        </p>
      </div>
    </>
  );
}
