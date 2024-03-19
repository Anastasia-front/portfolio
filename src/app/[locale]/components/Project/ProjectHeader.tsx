"use client";

import { useTranslations } from "next-intl";
import { Rubik } from "next/font/google";
import { StaticImageData } from "next/image";

import { motion } from "framer-motion";

import { headerImgVariants, overlayVariants, titleVariants } from "@/utils";

const rubik = Rubik({
  subsets: ["latin"],
  weight: ["400"],
});

interface Props {
  name: string | undefined;
  categories: string[] | undefined | null;
  image: StaticImageData | undefined;
  description: string | undefined;
}

export function ProjectHeader({ name, categories, description, image }: Props) {
  const i = useTranslations("alt.projects");

  return (
    <section className="project__header">
      <motion.img
        loading="eager"
        className="bg-image"
        src={image?.src}
        variants={headerImgVariants}
        initial="hidden"
        animate="visible"
        alt={i("cover")}
      />
      <motion.div
        className="overlay"
        variants={overlayVariants}
        initial="hidden"
        animate="visible"
      ></motion.div>
      <motion.div
        className="banner"
        variants={titleVariants("second")}
        initial="offscreen"
        animate="onscreen"
      >
        <div className="banner__header">
          <h3 className={`banner__title ${rubik.className}`}>{name}</h3>
          <div className={`banner__categories ${rubik.className}`}>
            {categories?.map((category) => {
              return (
                <span key={category} className="banner__category">
                  {category}
                </span>
              );
            })}
          </div>
        </div>
        <h5 className={`banner__text ${rubik.className}`}>{description}</h5>
      </motion.div>
    </section>
  );
}
