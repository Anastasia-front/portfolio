"use client";

import React, { useState } from "react";

import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";

import { motion, useScroll, useTransform } from "framer-motion";

import { SkillBlock } from "@/components";
import { skillBlocksEnglish, skillBlocksUkrainian } from "@/constants";
import { fadeIn, imgVariants } from "@/utils";

export function Accordion() {
  const i = useTranslations("license");

  const [active, setActive] = useState(4);

  const accordion = React.useRef(null);
  const scrollYProgress = useScroll({
    target: accordion,
    offset: ["start end", "end start"],
  }).scrollYProgress;

  const x = useTransform(scrollYProgress, [0, 0.8, 1], [0, 0, 400]);
  const y = useTransform(scrollYProgress, [0, 0.75, 1], [0, 0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.85, 0.95], [1, 1, 0]);

  const pathname = usePathname();
  const lang = pathname.slice(0, 3);
  const skillBlocks = (() => {
    if (lang === "/uk") {
      return skillBlocksUkrainian;
    } else {
      return skillBlocksEnglish;
    }
  })();

  return (
    <motion.div
      ref={accordion}
      variants={imgVariants("right")}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0 }}
      style={{
        x,
        y,
        opacity,
      }}
      className="skill-blocks"
    >
      {skillBlocks.map((block) => (
        <SkillBlock
          key={block.id}
          {...block}
          active={active}
          handleClick={setActive}
        />
      ))}
      <motion.span
        className="license"
        variants={fadeIn}
        initial="hidden"
        animate="visible"
      >
        {i("accordion")}{" "}
        <a
          target="_blank"
          href="https://ru.freepik.com/free-vector/background-realistic-abstract-technology-particle_6938839.htm#query=technology%20background&position=0&from_view=search&track=ais"
        >
          Freepik
        </a>
      </motion.span>
    </motion.div>
  );
}
