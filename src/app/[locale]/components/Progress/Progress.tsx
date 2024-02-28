"use client";

import { PortalModal } from "@/components";
import { useGlobalContext } from "@/context";
import { useLocale, useTranslations } from "next-intl";
import { useTheme } from "next-themes";
import Image, { StaticImageData } from "next/image";
import { useState } from "react";
import { type Locale } from "src/locales";
import "swiper/css";
import "swiper/css/scrollbar";
import { Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const getWordFromNumber = (number: number) => {
  const words = ["first", "second", "third"];
  return words[number - 1];
};

export default function Progress() {
  const a = useTranslations("about.achievements");
  const { progressModal } = useGlobalContext();
  const [selectedImage, setSelectedImage] = useState<StaticImageData | string>(
    ""
  );
  const [selectedTitle, setSelectedTitle] = useState<string>("");

  const openModal = (imageSrc: string, alt: string) => {
    setSelectedImage(imageSrc);
    setSelectedTitle(alt);
    progressModal.open();
  };

  const { theme } = useTheme();
  const locale = useLocale() as Locale;

  const getAchievement = (index: number): string => {
    return `/images/achievements/${locale}-${theme}-a${index}.webp`;
  };

  return (
    <>
      <Swiper
        scrollbar={{
          hide: false,
        }}
        grabCursor={true}
        modules={[Scrollbar]}
      >
        {[1, 2, 3].map((index) => (
          <SwiperSlide
            key={index}
            onClick={() =>
              openModal(
                getAchievement(index),
                `alt.cabinet.${getWordFromNumber(index)}`
              )
            }
          >
            <Image
              loading="lazy"
              src={getAchievement(index)}
              alt={a(`alt.cabinet.${getWordFromNumber(index)}`)}
              className="about-achievements__image"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      {progressModal.isOpen && (
        <PortalModal
          nameId="progress-portal"
          isOpen={progressModal.isOpen}
          handleClose={progressModal.close}
          noDivContent
        >
          <Image loading="lazy" src={selectedImage} alt={selectedTitle} />
        </PortalModal>
      )}
    </>
  );
}
