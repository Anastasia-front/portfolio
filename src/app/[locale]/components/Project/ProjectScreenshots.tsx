"use client";

import { useTranslations } from "next-intl";
import Image, { StaticImageData } from "next/image";

import { useScreenQuery } from "@/hooks";

export interface ImagesProps {
  image1: StaticImageData | undefined;
  image2: StaticImageData | undefined;
  image3: StaticImageData | undefined;
  image4: StaticImageData | undefined;
  image5: StaticImageData | undefined;
}

interface Props {
  images: ImagesProps;
  openModal: (image: StaticImageData, alt: string) => void;
}

export function ProjectScreenshots({ images, openModal }: Props) {
  const i = useTranslations("alt.projects");

  const { image1, image2, image3, image4, image5 } = images || {};

  const { isScreenMobileLg } = useScreenQuery();

  return (
    <div className="project__content__screenshots">
      {isScreenMobileLg ? (
        <div className="horizontal-images">
          {image1 && (
            <Image
              loading="lazy"
              src={image1}
              alt={i("first")}
              onClick={() => openModal(image1, i("first"))}
            />
          )}
          {image2 && (
            <Image
              loading="lazy"
              src={image2}
              alt={i("second")}
              onClick={() => openModal(image2, i("second"))}
            />
          )}
        </div>
      ) : (
        <div className="horizontal-images__fullscreen horizontal-images__fullscreen-paddings">
          {image1 && (
            <Image
              loading="lazy"
              src={image1}
              alt={i("first")}
              onClick={() => openModal(image1, i("first"))}
            />
          )}
          {image2 && (
            <Image
              loading="lazy"
              src={image2}
              alt={i("second")}
              onClick={() => openModal(image2, i("second"))}
            />
          )}
        </div>
      )}

      <div className="horizontal-images__fullscreen">
        {image3 && (
          <Image
            loading="lazy"
            src={image3}
            alt={i("third")}
            onClick={() => openModal(image3, i("third"))}
          />
        )}
        {image4 && (
          <Image
            loading="lazy"
            src={image4}
            alt={i("fourth")}
            onClick={() => openModal(image4, i("fourth"))}
          />
        )}
        {image5 && (
          <Image
            loading="lazy"
            src={image5}
            alt={i("fifth")}
            onClick={() => openModal(image5, i("fifth"))}
          />
        )}
      </div>
    </div>
  );
}
