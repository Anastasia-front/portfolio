"use client";

import Image from "next/image";

import { projects } from "@/constants";

interface Params {
  params: {
    projectName: string;
  };
}

function page({ params: { projectName } }: Params) {
  const project = projects.find(
    (project) =>
      project.title?.replace(/:/g, "").split(" ").join("-").toLowerCase() ===
      projectName
  );

  if (!project) {
    return <div>Loading...</div>;
  }

  const { title, introduction, image, summary, list, featuredProject } =
    project;

  const introImage = featuredProject?.image;

  return (
    <section className="project-page">
      <div className="project-page__header">
        {title && <h1 className="project-page__title">{title}</h1>}
        <div className="project-page__header__profile">
          <Image
            className="logo"
            src={"/logo.png"}
            alt="logo"
            width={45}
            height={45}
            style={{ objectFit: "contain" }}
          />

          <p className="project-page__header__date">
            <span>Anastasiia Prysiazhnaia</span>
            <span>2022-2023</span>
          </p>
        </div>

        <div className="project-page__header__image">
          {image && <Image src={image} alt="header image" />}
        </div>
      </div>

      <div className="project-page__content">
        <h3 className="project-page__content__introduction">{introduction}</h3>
        {introImage && (
          <Image
            className="project-page__content__intro-image"
            src={introImage}
            alt="intro image"
          />
        )}

        <ol className="project-page__content__list">
          {list &&
            list?.map((item: any, index: number) => {
              return (
                <li key={index}>
                  <p>{item.title}</p>
                  <p>{item.description}</p>
                </li>
              );
            })}
        </ol>

        <p className="project-page__content__summary">{summary}</p>
      </div>
    </section>
  );
}

export default page;
