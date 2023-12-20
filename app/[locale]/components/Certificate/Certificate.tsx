"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";

import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import screen1 from "@/assets/images/certificate/screen1.webp";
import screen2 from "@/assets/images/certificate/screen2.webp";
import screen3 from "@/assets/images/certificate/screen3.webp";

export function Certificate() {
  const a = useTranslations("about.achievements.alt");

  const screens = [
    { src: screen1, title: a("certificate.first") },
    { src: screen2, title: a("certificate.second") },
    { src: screen3, title: a("certificate.third") },
  ];

  return (
    <Swiper
      effect={"cards"}
      grabCursor={true}
      modules={[EffectCards]}
      className="swiper"
    >
      {screens.map((screen) => (
        <SwiperSlide key={screen.title} tag="li" className="swiper-slide">
          <Image
            src={screen.src}
            alt={screen.title}
            className="about-achievements__image"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
