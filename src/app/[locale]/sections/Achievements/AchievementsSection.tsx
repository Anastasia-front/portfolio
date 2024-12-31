"use client";

import { lazy, useRef, useState } from "react";
import {
  BsFillInfoCircleFill,
  BsFillInfoSquareFill,
  BsInfoSquare,
} from "react-icons/bs";

import { useTranslations } from "next-intl";
import { Libre_Franklin, Source_Code_Pro } from "next/font/google";
import Image, { StaticImageData } from "next/image";

import { motion } from "framer-motion";

import { PortalModal } from "@/components";
import { useGlobalContext } from "@/context";
import { titleVariants } from "@/utils";

const Certificate = lazy(() => import("./Certificate"));
const Progress = lazy(() => import("./Progress"));

const franklin = Libre_Franklin({
  subsets: ["latin"],
  weight: ["500"],
});

const source = Source_Code_Pro({
  subsets: ["latin"],
  weight: ["600"],
});

export default function AchievementsSection() {
  const a = useTranslations("about.achievements");
  const t = useTranslations("about");
  const h = useTranslations("home.3d");

  const { githubModal } = useGlobalContext();

  const [_, setIsClicked] = useState(false);
  const [__, setSelectedImage] = useState<StaticImageData | string>(
    ""
  );
  const [selectedAlt, setSelectedAlt] = useState<string>("");

  const videoRef = useRef<HTMLVideoElement>(null);

  const handleClick = () => {
    if (videoRef.current) {
      if (videoRef.current.paused || videoRef.current.ended) {
        videoRef.current.play();
        setIsClicked(true);
      }
    }
  };
  const openModal = (imageSrc: StaticImageData | string, alt: string) => {
    setSelectedImage(imageSrc);
    setSelectedAlt(alt);
    githubModal.open();
  };

  return (
    <motion.section className="about-achievements">
      <motion.h2
        className="about-achievements__title"
        variants={titleVariants("second")}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.2 }}
      >
        {a("title.main")}
      </motion.h2>
      <motion.h3
        className={`about-achievements__title ${franklin.className}`}
        variants={titleVariants("second")}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.2 }}
      >
        {t("confirm")}
      </motion.h3>
      <motion.h4
        className={`about-achievements__subtitle ${source.className}`}
        variants={titleVariants("second")}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.2 }}
      >
        {a("title.first")}
      </motion.h4>
      <motion.div
        className="about-achievements__slider about-achievements__slider-certificate"
        variants={titleVariants("first")}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.2 }}
      >
        <Certificate />
      </motion.div>
      <motion.div className="block-hint width-13 block-hint__onHover">
        <p className="block-hint__comment">
          <BsInfoSquare /> {a("hint.visible")}
        </p>
        <div className="block-hint__onHoverVisible slider">
          <span className="block-hint__prompt"> {a("hint.hidden")}</span>{" "}
          <span className="block-hint__prompt"> {h("hint")}</span>
        </div>
      </motion.div>
      <motion.h4
        className={`about-achievements__subtitle ${source.className}`}
        variants={titleVariants("second")}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.2 }}
      >
        {a("title.second")}
      </motion.h4>
      <motion.div
        className="about-achievements__slider about-achievements__slider-progress"
        variants={titleVariants("first")}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.2 }}
      >
        <Progress />
      </motion.div>
      <motion.div className="block-hint width-13 block-hint__onHover">
        <p className="block-hint__prompt">
          <BsFillInfoSquareFill /> {a("hint.visible")}
        </p>
        <div className="block-hint__onHoverVisible slider">
          <span className="block-hint__prompt"> {a("hint.hidden")}</span>{" "}
          <span className="block-hint__prompt"> {h("hint")}</span>
        </div>
      </motion.div>
      <motion.h4
        className={`about-achievements__title ${franklin.className}`}
        variants={titleVariants("second")}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.2 }}
      >
        {t("github")}
      </motion.h4>
      <motion.h4
        className={`about-achievements__subtitle ${source.className}`}
        variants={titleVariants("second")}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.2 }}
      >
        {a("title.third")}
      </motion.h4>
      <motion.h5
        className={`about-achievements__subtitle ${source.className}`}
        variants={titleVariants("second")}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.2 }}
      >
        ({a("title.video")})
      </motion.h5>
      <motion.video
        className="github-size github-video border-for-media"
        src="/video/achievements/github2023.mp4"
        ref={videoRef}
        onClick={handleClick}
        controls={true}
        poster="/images/poster/github2023.webp"
        variants={titleVariants("first")}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.2 }}
      />
      <motion.h6
        className={`about-achievements__subtitle ${source.className}`}
        variants={titleVariants("second")}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.2 }}
      >
        ({a("title.image")})
      </motion.h6>
      <motion.img
        className="github-size github-img border-for-media"
        src="/images/about/github-wrapped.webp"
        alt={a("alt.github")}
        onClick={() =>
          openModal("/images/about/github-wrapped.webp", a("alt.github"))
        }
        loading="lazy"
        variants={titleVariants("first")}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.2 }}
      />
      <motion.p className="block-hint__prompt width-22">
        <BsFillInfoCircleFill /> {a("hint.img")}
      </motion.p>

      {githubModal.isOpen && (
        <PortalModal
          nameId="github-portal"
          isOpen={githubModal.isOpen}
          handleClose={githubModal.close}
          noDivContent
        >
          <Image
            src="/images/about/github-wrapped.webp"
            alt={selectedAlt}
            loading="lazy"
            className="border-for-media"
          />
        </PortalModal>
      )}
    </motion.section>
  );
}
