"use client";

import { useTranslations } from "next-intl";
import dynamic from "next/dynamic";
import { Rubik } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { motion } from "framer-motion";

import { headerImgVariants, overlayVariants, titleVariants } from "@/utils";

import { projectsEnglishLang, projectsUkrainianLang } from "@/constants";
import { useScreenQuery } from "@/hooks";

const Robots = dynamic(() =>
  import("../../components/Robots/Robots").then((mod) => mod.Robots)
);

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
  const p = useTranslations("projects");
  const n = useTranslations("nav");

  const { isScreenMobileLg } = useScreenQuery();

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
    <>
      <Robots
        page={`/${project?.url || ""}`}
        title={`${n("page")} ${n("project")}`}
      />
      <main className="container project project-page">
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
        <section className="project__content">
          <div className="project__content__text">
            {features && (
              <div>
                <h4>{h("features")}</h4>
                <ul className="project__content__text-features">
                  {features?.map((feature) => {
                    return <li key={feature}>{feature}</li>;
                  })}
                </ul>
              </div>
            )}

            <div className="project__content__text-solution">
              {problem && (
                <div>
                  <h4>{h("problem")}</h4>
                  <p>{problem}</p>
                </div>
              )}
              {solution && (
                <div>
                  <h4>{h("solution")}</h4>
                  <p>{solution}</p>
                </div>
              )}
            </div>

            {links && (
              <div className="project__content__text-links">
                {!links.website || !links.github ? (
                  <h4>{h("link")}</h4>
                ) : (
                  <h4>{h("links")}</h4>
                )}
                <ul>
                  <li>
                    {links.github && (
                      <Link
                        href={links.github}
                        target="_blank"
                        aria-label={l("github")}
                      >
                        {l("github")}
                      </Link>
                    )}
                  </li>
                  <li>
                    {links.website && (
                      <Link
                        href={links.website}
                        target="_blank"
                        aria-label={l("website")}
                      >
                        {l("website")}
                      </Link>
                    )}
                  </li>
                </ul>
              </div>
            )}

            <div>
              <h4>{h("screenshots")}</h4>
              <p>{p("below")}</p>
            </div>
          </div>

          <div className="project__content__screenshots">
            {isScreenMobileLg ? (
              <div className="horizontal-images">
                {image1 && (
                  <Image loading="lazy" src={image1} alt={i("first")} />
                )}
                {image2 && (
                  <Image loading="lazy" src={image2} alt={i("second")} />
                )}
              </div>
            ) : (
              <div className="horizontal-images__fullscreen horizontal-images__fullscreen-paddings">
                {image1 && (
                  <Image loading="lazy" src={image1} alt={i("first")} />
                )}
                {image2 && (
                  <Image loading="lazy" src={image2} alt={i("second")} />
                )}
              </div>
            )}

            <div className="horizontal-images__fullscreen">
              {image3 && <Image loading="lazy" src={image3} alt={i("third")} />}
              {image4 && (
                <Image loading="lazy" src={image4} alt={i("fourth")} />
              )}
              {image5 && <Image loading="lazy" src={image5} alt={i("fifth")} />}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
