"use client";

import { useRef } from "react";

import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";

export function Video() {
  const { theme, setTheme } = useTheme();

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

  if (videoRef.current) {
    videoRef.current.style.position = "relative";
    videoRef.current.style.width = "100%";
    videoRef.current.style.height = "auto";
    videoRef.current.style.maxHeight = "90vh";
    videoRef.current.style.overflow = "hidden";
    videoRef.current.style.pointerEvents = "auto";
  }

  return <video className="video" autoPlay ref={videoRef} src={video} />;
}
