"use client";

import { useTranslations } from "next-intl";

import { EffectCoverflow, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { motion } from "framer-motion";

import { fadeIn, opacityVariants } from "@/utils";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import contentImg1 from "@/assets/images/skills/content/1.jpg";
import contentImg2 from "@/assets/images/skills/content/2.jpg";
import contentImg3 from "@/assets/images/skills/content/3.jpg";
import contentImg4 from "@/assets/images/skills/content/4.jpg";
import contentImg5 from "@/assets/images/skills/content/5.jpg";
import contentImg6 from "@/assets/images/skills/content/6.jpg";
import contentImg7 from "@/assets/images/skills/content/7.jpg";
import Image from "next/image";

const images = [
  contentImg1,
  contentImg2,
  contentImg3,
  contentImg4,
  contentImg5,
  contentImg6,
  contentImg7,
];

export function SkillSlider() {
  const i = useTranslations("license");
  const t = useTranslations("skills");

  return (
    <motion.div
      variants={opacityVariants("second")}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0 }}
      className="swiper-skills"
    >
      <motion.h4
        className="swiper-title"
        variants={fadeIn("left")}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: false, amount: 0.2 }}
      >
        {t("slider")}
      </motion.h4>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="swiper"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} className="swiper-slide-skill">
            <Image
              src={image}
              alt={`content image number ${index}`}
              width={300}
              height={200}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <motion.span
        className="license"
        variants={fadeIn("right")}
        initial="hidden"
        animate="visible"
      >
        {i("slider")}{" "}
        <a
          target="_blank"
          href="https://ru.freepik.com/free-vector/background-realistic-abstract-technology-particle_6938839.htm#query=technology%20background&position=0&from_view=search&track=ais"
        >
          Freepik
        </a>
      </motion.span>
    </motion.div>
  );
}
