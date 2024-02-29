"use client";

import { useLocale, useTranslations } from "next-intl";
import dynamic from "next/dynamic";

import { motion } from "framer-motion";

import { type Locale } from "src/locales";

import { ProjectContent, ProjectHeader } from "@/components";
import { projectsEnglishLang, projectsUkrainianLang } from "@/constants";
import { bannerVariants } from "@/utils";

const Robots = dynamic(() =>
  import("../../components/Robots/Robots").then((mod) => mod.Robots)
);

interface Params {
  params: {
    projectName: string;
  };
}

export default function ProjectPage({ params }: Params) {
  const n = useTranslations("nav");

  const locale = useLocale() as Locale;
  const projectLang = (() => {
    if (locale === "uk") {
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
  const imageArray = { image1, image2, image3, image4, image5 };

  const linksObject = {
    website: links?.website,
    github: links?.github,
  };

  return (
    <>
      <Robots
        page={`/${project?.url || ""}`}
        title={`${n("page")} ${n("project")}, name ${name}`}
        description={description || ""}
      />
      <motion.main
        variants={bannerVariants}
        initial="hidden"
        animate="visible"
        viewport={{ once: true, amount: 0 }}
        className="container project project-page"
      >
        <ProjectHeader
          name={name}
          categories={categories}
          description={description}
          image={image}
        />
        <ProjectContent
          links={linksObject}
          problem={problem}
          features={features}
          solution={solution}
          images={imageArray}
        />
      </motion.main>
    </>
  );
}
