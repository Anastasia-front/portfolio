"use client";

import { useTranslations } from "next-intl";
import dynamic from "next/dynamic";

import { motion } from "framer-motion";

import { bannerVariants } from "@/utils";
import { menuItems } from "./constants";

const Features = dynamic(() =>
  import("./components/Features/Features").then((mod) => mod.Features)
);
const GallerySection = dynamic(() =>
  import("./components/3dObjects/GallerySection").then(
    (mod) => mod.GallerySection
  )
);
const Hero = dynamic(() =>
  import("./components/Hero/Hero").then((mod) => mod.Hero)
);
const ObjectsSection = dynamic(() =>
  import("./components/3dObjects/ObjectsSection").then(
    (mod) => mod.ObjectsSection
  )
);
const Robots = dynamic(() =>
  import("./components/Robots/Robots").then((mod) => mod.Robots)
);
const Video = dynamic(() =>
  import("./components/Video/Video").then((mod) => mod.Video)
);

export default function Home() {
  const t = useTranslations("home");
  const n = useTranslations("nav");

  return (
    <>
      <Robots
        page={menuItems[0].url}
        ogImg={t("ogImage")}
        title={`${n("page")} ${n("home")}`}
      />
      <motion.main
        variants={bannerVariants}
        initial="hidden"
        animate="visible"
        viewport={{ once: true, amount: 0 }}
      >
        <Video />
        <motion.div
          variants={bannerVariants}
          initial="hidden"
          animate="visible"
          viewport={{ once: true, amount: 0 }}
          className="home-content"
        >
          <Hero />
          <Features />
          <ObjectsSection />
          <GallerySection />
        </motion.div>
      </motion.main>
    </>
  );
}
