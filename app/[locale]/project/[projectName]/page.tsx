"use client";

import { useTranslations } from "next-intl";
import { Rubik } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { motion } from "framer-motion";

import { headerImgVariants, overlayVariants, titleVariants2 } from "@/utils";

import { projectsEnglishLang, projectsUkrainianLang } from "@/constants";

interface Params {
  params: {
    projectName: string;
  };
}
const rubik = Rubik({
  subsets: ["latin"],
  weight: ["400"],
});

export default function Page({ params }: Params) {
  const i = useTranslations("alt.projects");
  const h = useTranslations("projects.headers");
  const l = useTranslations("projects.links");

  const pathname = usePathname();
  const lang = pathname.slice(0, 3);
  const projectLang = (() => {
    if (lang === "/uk") {
      return projectsUkrainianLang;
    } else {
      return projectsEnglishLang;
    }
  })();

  const project = projectLang.find((project) => {
    return project.url === params.projectName;
  });

  const {
    name,
    image,
    categories,
    content,
    features,
    problem,
    solution,
    links,
  } = project || {};

  const { description, image1, image2, image3, image4, image5 } = content || {};

  return (
    <section className="project">
      <div className="project__header">
        <motion.img
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
          variants={titleVariants2}
          initial="offscreen"
          animate="onscreen"
        >
          <div className="banner__header">
            <h1 className={`banner__title ${rubik.className}`}>{name}</h1>
            <div className={`banner__categories ${rubik.className}`}>
              {categories?.map((category: any, index: number) => {
                return (
                  <span key={index} className="banner__category">
                    {category}
                  </span>
                );
              })}
            </div>
          </div>
          <p className={`banner__text ${rubik.className}`}>{description}</p>
        </motion.div>
      </div>
      <div className="project__content">
        <div className="project__content__intro">
          {features && (
            <ul className="features">
              <h4>{h("features")}</h4>
              {features?.map((feature: any, i: number) => {
                return <li key={i}>{feature}</li>;
              })}
            </ul>
          )}

          {solution && (
            <div className="solution">
              {problem && (
                <div
                  className="problem"
                  style={{
                    marginBottom: "2rem",
                  }}
                >
                  <h4>{h("problem")}</h4>
                  <p>{problem}</p>
                </div>
              )}

              <h4>{h("solution")}</h4>
              <p>{solution}</p>
            </div>
          )}

          {links && (
            <div className="links">
              <h4>{h("links")}</h4>
              {links.github && (
                <Link href={links.github} target="_blank">
                  {l("github")}
                </Link>
              )}
              {links.website && (
                <Link href={links.website} target="_blank">
                  {l("website")}
                </Link>
              )}
            </div>
          )}
        </div>
        <div className="horizontal-images u-pad-2">
          {image1 && <Image src={image1} alt={i("first")} />}
          {image2 && <Image src={image2} alt={i("second")} />}
        </div>
        <div className="horizontal-images--fullscreen">
          {image3 && <Image src={image3} alt={i("third")} />}
          {image4 && <Image src={image4} alt={i("fourth")} />}
          {image5 && <Image src={image5} alt={i("fifth")} />}
        </div>
      </div>
    </section>
  );
}
