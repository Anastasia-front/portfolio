"use client";

import { useRef, useState } from "react";

import { useTranslations } from "next-intl";
import { Libre_Franklin, Source_Code_Pro } from "next/font/google";

import { motion } from "framer-motion";

import { Certificate, Progress } from "@/components";
import { titleVariants } from "@/utils";

const franklin = Libre_Franklin({
  subsets: ["latin"],
  weight: ["500"],
});

const source = Source_Code_Pro({
  subsets: ["latin"],
  weight: ["600"],
});

export function AchievementBlock() {
  const a = useTranslations("about.achievements");
  const t = useTranslations("about");

  const [isClicked, setIsClicked] = useState(false);

  const videoRef = useRef<HTMLVideoElement>(null);

  const handleClick = () => {
    if (videoRef.current) {
      if (videoRef.current.paused || videoRef.current.ended) {
        videoRef.current.play();
        setIsClicked(true);
      }
    }
  };

  return (
    <motion.div className="about-achievements">
      <motion.h2
        className="about-achievements__title"
        variants={titleVariants("second")}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.2 }}
      >
        {a("title.main")}
      </motion.h2>
      <motion.h5
        className={`about-achievements__title ${franklin.className}`}
        variants={titleVariants("second")}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.2 }}
      >
        {t("confirm")}
      </motion.h5>
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
      <motion.h5
        className={`about-achievements__title ${franklin.className}`}
        variants={titleVariants("second")}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.2 }}
      >
        {t("github")}
      </motion.h5>
      <motion.h4
        className={`about-achievements__subtitle ${source.className}`}
        variants={titleVariants("second")}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.2 }}
      >
        {a("title.third")}
      </motion.h4>
      <motion.h6
        className={`about-achievements__subtitle ${source.className}`}
        variants={titleVariants("second")}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.2 }}
      >
        ({a("title.video")})
      </motion.h6>
      <motion.video
        className="video-github"
        src="/video/achievements/github2023.mp4"
        ref={videoRef}
        onClick={handleClick}
        controls={true}
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
        className="video-github"
        src="/images/about/github-wrapped.webp"
        onClick={handleClick}
        variants={titleVariants("first")}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.2 }}
      />
    </motion.div>
  );
}
