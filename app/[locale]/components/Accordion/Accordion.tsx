"use client";

import { useState } from "react";

import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";

import { motion } from "framer-motion";

import { SkillBlock } from "@/components";
import { skillBlocksEnglish, skillBlocksUkrainian } from "@/constants";
import { fadeIn, opacityVariants } from "@/utils";

export function Accordion() {
  const i = useTranslations("license");

  const [active, setActive] = useState(5);

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
      variants={opacityVariants("first")}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0 }}
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
