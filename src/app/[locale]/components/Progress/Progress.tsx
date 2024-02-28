"use client";

import { useState } from "react";

import { useLocale, useTranslations } from "next-intl";
import { useTheme } from "next-themes";
import Image, { StaticImageData } from "next/image";

import { type Locale } from "src/locales";

import { PortalModal } from "@/components";
import { useGlobalContext } from "@/context";

import "swiper/css";
import "swiper/css/scrollbar";
import { Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import enDarkA1 from "@/assets/images/achievements/en-dark-a1.webp";
import enDarkA2 from "@/assets/images/achievements/en-dark-a2.webp";
import enDarkA3 from "@/assets/images/achievements/en-dark-a3.webp";
import enLightA1 from "@/assets/images/achievements/en-light-a1.webp";
import enLightA2 from "@/assets/images/achievements/en-light-a2.webp";
import enLightA3 from "@/assets/images/achievements/en-light-a3.webp";
import ukDarkA1 from "@/assets/images/achievements/uk-dark-a1.webp";
import ukDarkA2 from "@/assets/images/achievements/uk-dark-a2.webp";
import ukDarkA3 from "@/assets/images/achievements/uk-dark-a3.webp";
import ukLightA1 from "@/assets/images/achievements/uk-light-a1.webp";
import ukLightA2 from "@/assets/images/achievements/uk-light-a2.webp";
import ukLightA3 from "@/assets/images/achievements/uk-light-a3.webp";

export default function Progress() {
  const a = useTranslations("about.achievements");

  const { progressModal } = useGlobalContext();

  const [selectedImage, setSelectedImage] = useState<StaticImageData | string>(
    ""
  );
  const [selectedTitle, setSelectedTitle] = useState<string>("");

  const openModal = (imageSrc: StaticImageData, alt: string) => {
    setSelectedImage(imageSrc);
    setSelectedTitle(alt);
    progressModal.open();
  };

  const { theme } = useTheme();
  const locale = useLocale() as Locale;

  const achievement1 = (() => {
    if (locale === "uk") {
      if (theme === "light") {
        return ukLightA1;
      } else {
        return ukDarkA1;
      }
    } else {
      if (theme === "light") {
        return enLightA1;
      } else {
        return enDarkA1;
      }
    }
  })();

  const achievement2 = (() => {
    if (locale === "uk") {
      if (theme === "light") {
        return ukLightA2;
      } else {
        return ukDarkA2;
      }
    } else {
      if (theme === "light") {
        return enLightA2;
      } else {
        return enDarkA2;
      }
    }
  })();

  const achievement3 = (() => {
    if (locale === "uk") {
      if (theme === "light") {
        return ukLightA3;
      } else {
        return ukDarkA3;
      }
    } else {
      if (theme === "light") {
        return enLightA3;
      } else {
        return enDarkA3;
      }
    }
  })();

  return (
    <>
      <Swiper
        scrollbar={{
          hide: false,
        }}
        grabCursor={true}
        modules={[Scrollbar]}
      >
        <SwiperSlide
          onClick={() => openModal(achievement1, "alt.cabinet.first")}
        >
          <Image
            loading="lazy"
            src={achievement1}
            alt={a("alt.cabinet.first")}
            className="about-achievements__image"
          />
        </SwiperSlide>
        <SwiperSlide
          onClick={() => openModal(achievement2, "alt.cabinet.second")}
        >
          <Image
            loading="lazy"
            src={achievement2}
            alt={a("alt.cabinet.second")}
            className="about-achievements__image"
          />
        </SwiperSlide>
        <SwiperSlide
          onClick={() => openModal(achievement3, "alt.cabinet.third")}
        >
          <Image
            loading="lazy"
            src={achievement3}
            alt={a("alt.cabinet.third")}
            className="about-achievements__image"
          />
        </SwiperSlide>
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
