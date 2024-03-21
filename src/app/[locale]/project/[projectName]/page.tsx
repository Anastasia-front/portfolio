"use client";

import { useLocale } from "next-intl";

import { motion } from "framer-motion";

import { type Locale } from "src/locales";

import { ProjectContent, ProjectHeader } from "@/components";
import { projectsEnglishLang, projectsUkrainianLang } from "@/constants";
import { bannerVariants } from "@/utils";
interface Params {
  params: {
    projectName: string;
  };
}

export default function ProjectPage({ params }: Params) {
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
  );
}
