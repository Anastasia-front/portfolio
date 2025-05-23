"use client";

import { useState } from "react";

import { useTranslations } from "next-intl";

import { motion } from "framer-motion";

import { SkillBlock } from "@/components";
import {
  skillBlocksEnglish,
  skillBlocksNorwegian,
  skillBlocksUkrainian,
} from "@/constants";
import { useKeyPress } from "@/hooks";
import { fadeIn, opacityVariants } from "@/utils";

interface Props {
  lang: string;
}

export function SkillsAccordion({ lang }: Props) {
  const i = useTranslations("license");

  const [active, setActive] = useState(0);

  const skillBlocks = (() => {
    if (lang === "uk") {
      return skillBlocksUkrainian;
    } else if (lang === "no") {
      return skillBlocksNorwegian;
    } else {
      return skillBlocksEnglish;
    }
  })();

  const handleClose = () => {
    const accordion = document.getElementById("accordion");

    if (accordion) {
      accordion.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    setActive(0);
  };

  useKeyPress("Escape", handleClose);

  const handleClickOutside = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  return (
    <motion.div
      variants={opacityVariants("first")}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0 }}
      className="skill-blocks"
      id="accordion"
      onClick={handleClickOutside}
    >
      {skillBlocks.map((block, index) => (
        <SkillBlock
          key={block.id}
          {...block}
          active={active}
          animation={index}
          handleClick={setActive}
          handleClose={handleClose}
        />
      ))}
      <motion.span
        className="license"
        variants={fadeIn("left")}
        initial="hidden"
        animate="visible"
      >
        {i("accordion")}{" "}
        <a
          aria-label="Freepik"
          target="_blank"
          href="https://ru.freepik.com/free-vector/background-realistic-abstract-technology-particle_6938839.htm#query=technology%20background&position=0&from_view=search&track=ais"
        >
          Freepik
        </a>
      </motion.span>
    </motion.div>
  );
}
