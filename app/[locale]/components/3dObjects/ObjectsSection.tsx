"use client";

import { useTranslations } from "next-intl";
import { BsFillInfoCircleFill, BsFillInfoSquareFill } from "react-icons/bs";

import { MacBookCanvas, MacCanvas } from "./index";

export function ObjectsSection() {
  const i = useTranslations("home.3d");

  return (
    <section className="devices">
      <div className="devices__hint devices__hint-onHover">
        <p className="devices__subtitle  devices__hint-prompt">
          {i("subtitle")} <BsFillInfoCircleFill />
        </p>
        <p className="devices__hint-comment">
          <BsFillInfoSquareFill /> {i("commentToSubtitle")}
        </p>
        <div className="devices__hint-onHoverVisible">
          <span className="devices__hint-prompt">{i("prompt")}</span>{" "}
          <span className="devices__hint-comment">{i("comment")}</span>
        </div>
      </div>

      <h2 className="devices__title">{i("title")}</h2>

      <div className="devices__titles">
        <div>
          <h4>{i("now")} </h4>
          <h3>{i("macBook")}</h3>
        </div>
        <div>
          <h4>{i("inFuture")}</h4>
          <h3>{i("mac")}</h3>
        </div>
      </div>

      <div className="canvas__container">
        <MacBookCanvas />
        <MacCanvas />
      </div>
      <span className="devices__hint-comment">{i("summary")}</span>
    </section>
  );
}