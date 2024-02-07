"use client";

import { useState } from "react";

import { useTranslations } from "next-intl";
import Image, { StaticImageData } from "next/image";

import { PortalModal } from "@/components";
import { useGlobalContext } from "@/context";

import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import screen1 from "@/assets/images/certificate/screen1.webp";
import screen2 from "@/assets/images/certificate/screen2.webp";
import screen3 from "@/assets/images/certificate/screen3.webp";

export function Certificate() {
  const a = useTranslations("about.achievements.alt.certificate");

  const { certificateModal } = useGlobalContext();

  const [selectedImage, setSelectedImage] = useState<StaticImageData | string>(
    ""
  );
  const [selectedAlt, setSelectedAlt] = useState<string>("");

  const openModal = (imageSrc: StaticImageData, alt: string) => {
    setSelectedImage(imageSrc);
    setSelectedAlt(alt);
    certificateModal.open();
  };

  const screens = [
    { src: screen1, title: a("first") },
    { src: screen2, title: a("second") },
    { src: screen3, title: a("third") },
  ];

  return (
    <>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="swiper"
      >
        {screens.map((screen) => (
          <SwiperSlide
            key={screen.title}
            tag="li"
            className="swiper-slide"
            onClick={() => openModal(screen.src, screen.title)}
          >
            <Image
              src={screen.src}
              alt={screen.title}
              className="about-achievements__image"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      {certificateModal.isOpen && (
        <PortalModal
          nameId="certificate-portal"
          isOpen={certificateModal.isOpen}
          handleClose={certificateModal.close}
          noDivContent
        >
          <Image src={selectedImage} alt={selectedAlt} />
        </PortalModal>
      )}
    </>
  );
}
