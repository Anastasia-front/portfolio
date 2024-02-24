"use client";

import { BsFillInfoCircleFill, BsFillInfoSquareFill } from "react-icons/bs";

import { useTranslations } from "next-intl";

import { motion } from "framer-motion";

import { ButtonLink } from "@/components";
import { opacityVariants } from "@/utils";

import { Dynamic } from "./Dynamic";

export default function ObjectsSection() {
  const i = useTranslations("home.3d");
  const b = useTranslations("btn");

  return (
    <motion.section
      className="container__box-shadow"
      id="tools"
      variants={opacityVariants("first")}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0 }}
    >
      <div className="devices container">
        <div className="section-header section-header__column-reverse">
          <ButtonLink text={b("devices")} href="/skills" />
          <h2>{i("heading")}</h2>
        </div>
        <div className="block-hint block-hint__onHover">
          <p className="block-hint__prompt">
            {i("subtitle")} <BsFillInfoCircleFill />
          </p>
          <p className="block-hint__comment">
            <BsFillInfoSquareFill /> {i("commentToSubtitle")}
          </p>
          <div className="block-hint__onHoverVisible">
            <span className="block-hint__prompt">{i("prompt")}</span>{" "}
            <span className="block-hint__comment">{i("comment")}</span>{" "}
            <span className="block-hint__comment">{i("hint")}</span>
          </div>
        </div>

        <h2 className="devices__title">{i("title")}</h2>

        <div className="devices__titles">
          <div>
            <h3>{i("macBook")}</h3>
            <h4>{i("now")} </h4>
          </div>
          <div>
            <h3>{i("mac")}</h3>
            <h4>{i("inFuture")}</h4>
          </div>
        </div>

        <div className="canvas__container">
          <Dynamic componentName="MacBookCanvas" />
          <Dynamic componentName="MacCanvas" />
        </div>
        <span className="block-hint__comment">{i("summary")}</span>
      </div>
    </motion.section>
  );
}
