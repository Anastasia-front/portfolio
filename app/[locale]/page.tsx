"use client";

import { useTranslations } from "next-intl";
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";

import { ObjectsSection } from "./components";

// import videoSrc from "./video/hero.mp4";

export default function Home() {
  const t = useTranslations("home");

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

  return (
    <>
      <video className="video" autoPlay src={video} />

      <ObjectsSection />
    </>
  );
}
