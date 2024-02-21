"use client";

import { useState } from "react";
import { BsFillInfoCircleFill } from "react-icons/bs";

import { useTranslations } from "next-intl";
import Image, { StaticImageData } from "next/image";

import { motion } from "framer-motion";

import {
  ImagesProps,
  PortalModal,
  ProjectLinks,
  ProjectLinksProps,
  ProjectScreenshots,
} from "@/components";
import { useGlobalContext } from "@/context";

interface Props {
  links: ProjectLinksProps["links"];
  problem: string | undefined;
  features: string[] | undefined | null;
  solution: string | undefined;
  images: ImagesProps;
}

export function ProjectContent({
  links,
  problem,
  features,
  solution,
  images,
}: Props) {
  const h = useTranslations("projects.headers");
  const p = useTranslations("projects");
  const a = useTranslations("about.achievements");

  const { projectModal } = useGlobalContext();

  const [selectedImage, setSelectedImage] = useState<StaticImageData | string>(
    ""
  );
  const [selectedAlt, setSelectedAlt] = useState<string>("");

  const openModal = (imageSrc: StaticImageData, alt: string) => {
    setSelectedImage(imageSrc);
    setSelectedAlt(alt);
    projectModal.open();
  };
  return (
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

        <ProjectLinks links={links} />

        <div>
          <h4>{h("screenshots")}</h4>
          <p>{p("below")}</p>
        </div>
      </div>

      <motion.p className="block-hint__prompt width-22">
        <BsFillInfoCircleFill /> {a("hint.img")}
      </motion.p>

      <ProjectScreenshots images={images} openModal={openModal} />
      {projectModal.isOpen && (
        <PortalModal
          nameId="project-portal"
          isOpen={projectModal.isOpen}
          handleClose={projectModal.close}
          noDivContent
        >
          <Image src={selectedImage} alt={selectedAlt} loading="lazy" />
        </PortalModal>
      )}
    </section>
  );
}
