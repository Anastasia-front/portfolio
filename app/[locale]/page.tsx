"use client";

import { useTranslations } from "next-intl";

import { ObjectsSection } from "./components";

// import videoSrc from "@/assets/video/ocean.mp4";

export default function Home() {
  const t = useTranslations("home");

  return (
    <>
      {/* <video
        id="background-video"
        autoPlay
        loop
        muted
        playsInline
        src={videoSrc}
      /> */}
      <div className="greetings">
        <div className="greetings__container">
          <h1 className="title">{t("title")}</h1>
          <p className="text">{t("description")}</p>
        </div>

        {/* <div id="scene-container"></div> */}
      </div>
      <ObjectsSection />
    </>
  );
}
