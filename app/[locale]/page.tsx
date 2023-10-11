"use client";

import { useTranslations } from "next-intl";
import { MacBookCanvas, MacCanvas } from "./components";

// import videoSrc from "@/assets/video/ocean.mp4";

export default function Home() {
  const t = useTranslations("home");
  const i = useTranslations("home.3d");

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
        <h2 className="devices__title">{i("title")}</h2>
        <span className="devices__hint devices__hint-prompt">
          {i("prompt")}
        </span>
        <div className="devices__titles">
          <h4>{i("macBook")}</h4>
          <h4>{i("mac")}</h4>
        </div>
        <span className="devices__hint devices__hint-comment">
          {i("comment")}
        </span>
        <div className="canvas__container">
          <MacBookCanvas />
          <MacCanvas />
        </div>
      </div>
    </>
  );
}
