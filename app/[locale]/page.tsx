"use client";

import { useTranslations } from "next-intl";
import { MacBookCanvas, MacCanvas } from "./components";

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
      <div className="devices">
        <h2 className="devices__title">this is tools that i use</h2>
        <div className="devices__titles">
          <h3>First</h3>
          <h3>second</h3>
        </div>
        <div className="canvas__container">
          <MacBookCanvas />
          <MacCanvas />
        </div>
        <p className="devices__comment">
          to scroll page in this section - use scrollbar
        </p>
      </div>
    </>
  );
}
