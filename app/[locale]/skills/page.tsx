"use client";

import { useTranslations } from "next-intl";
import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";

import { motion } from "framer-motion";

import { menuItems } from "@/constants";
import { bannerVariants, gridVariants, opacityVariants } from "@/utils";

const Accordion = dynamic(() =>
  import("../components/Accordion/Accordion").then((mod) => mod.Accordion)
);
const Banner = dynamic(() =>
  import("../components/Banner/Banner").then((mod) => mod.Banner)
);
const LottiePlayer = dynamic(() =>
  import("../components/LottiePlayer/LottiePlayer").then(
    (mod) => mod.LottiePlayer
  )
);
const SkillSlider = dynamic(() =>
  import("../components/Skill/SkillSlider").then((mod) => mod.SkillSlider)
);
const Robots = dynamic(() =>
  import("../components/Robots/Robots").then((mod) => mod.Robots)
);

export default function SkillsPage() {
  const t = useTranslations("skills");
  const b = useTranslations("banner");
  const n = useTranslations("nav");

  const pathname = usePathname();
  const lang = pathname.slice(0, 3);

  return (
    <>
      <Robots
        page={menuItems[2].url}
        ogImg={t("ogImage")}
        title={`${n("page")} ${n("skills")}`}
      />
      <motion.main
        variants={bannerVariants}
        initial="hidden"
        animate="visible"
        viewport={{ once: true, amount: 0 }}
        className="skills-page container"
      >
        <div className="skills-header">
          <div className="page-headings page-headings__skills">
            <motion.h1
              variants={gridVariants}
              initial="hidden"
              animate="visible"
            >
              {t("title")}
            </motion.h1>
            <motion.p
              variants={gridVariants}
              initial="hidden"
              animate="visible"
              className="page-headings__medium-width"
            >
              {t("description")}
            </motion.p>
          </div>
          <LottiePlayer
            src="/animation/skills.json"
            background="transparent"
            speed={1}
            className="skills-animation"
            loop
            autoplay
          />
        </div>

        <Accordion lang={lang} />
        <Banner text={b("contact")} button />
        <motion.div
          variants={opacityVariants("first")}
          className="skills-section__slider"
        >
          <SkillSlider />
        </motion.div>
      </motion.main>
    </>
  );
}
