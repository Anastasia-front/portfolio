"use client";

import { useTranslations } from "next-intl";
import { useTheme } from "next-themes";
import Image from "next/image";
import { usePathname } from "next/navigation";

import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import { EffectCube, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import enDarkA1 from "@/assets/images/achievements/en-dark-a1.png";
import enDarkA2 from "@/assets/images/achievements/en-dark-a2.png";
import enDarkA3 from "@/assets/images/achievements/en-dark-a3.png";
import enLightA1 from "@/assets/images/achievements/en-light-a1.png";
import enLightA2 from "@/assets/images/achievements/en-light-a2.png";
import enLightA3 from "@/assets/images/achievements/en-light-a3.png";
import ukDarkA1 from "@/assets/images/achievements/uk-dark-a1.png";
import ukDarkA2 from "@/assets/images/achievements/uk-dark-a2.png";
import ukDarkA3 from "@/assets/images/achievements/uk-dark-a3.png";
import ukLightA1 from "@/assets/images/achievements/uk-light-a1.png";
import ukLightA2 from "@/assets/images/achievements/uk-light-a2.png";
import ukLightA3 from "@/assets/images/achievements/uk-light-a3.png";

export function Progress() {
  const a = useTranslations("about.achievements");

  const { theme, setTheme } = useTheme();
  const pathname = usePathname();
  const lang = pathname.slice(0, 3);

  const achievement1 = (() => {
    if (lang === "/uk") {
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
    if (lang === "/uk") {
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
    if (lang === "/uk") {
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
        effect={"cube"}
        grabCursor={true}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        pagination={true}
        modules={[EffectCube, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image
            src={achievement1}
            alt={a("alt.cabinet.first")}
            className="about-achievements__image about-achievements__image-progress"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={achievement2}
            alt={a("alt.cabinet.second")}
            className="about-achievements__image about-achievements__image-progress"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={achievement3}
            alt={a("alt.cabinet.third")}
            className="about-achievements__image about-achievements__image-progress"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
