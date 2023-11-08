"use client";

import { useTranslations } from "next-intl";
import { Oswald } from "next/font/google";
import Image from "next/image";

import decoration from "@/assets/images/hero/decoration.png";
import hero from "@/assets/images/hero/hero.jpg";

import { ButtonScroll } from "@/components";
import { useScreenQuery } from "@/hooks";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["600"],
});

export function Hero() {
  const i = useTranslations("home.hero");
  const t = useTranslations("home.hero.title");
  const b = useTranslations("btn");
  const a = useTranslations("alt.decoration");
  const h = useTranslations("alt");

  const { isScreenMobileLg } = useScreenQuery();

  return (
    <>
      <section className="container__box-shadow">
        <div className="hero-container container">
          <div className="hero-content">
            <span className="hero-blur"></span>
            <span className="hero-blur"></span>
            <h4>{i("subtitle")}</h4>
            <div className="hero-headings">
              <h2>{t("name")}</h2>
              <h1 className={`${oswald.className}`}>{t("position")}</h1>
            </div>

            <p>{i("description")}</p>

            <div className="hero-buttons">
              <ButtonScroll
                href="features"
                text={b("hero")}
                // onClick={() => handleClick("features")}
                hover="true"
              />
              <ButtonScroll
                href="tools"
                text={b("tools")}
                // onClick={() => handleClick("tools")}
                hover="true"
              />
            </div>
          </div>
          <div className="hero-image">
            {isScreenMobileLg && (
              <Image
                src={decoration}
                alt={a("hero")}
                className="hero-image__decoration"
              />
            )}

            <Image src={hero} alt={h("hero")} className="hero-image__content" />
          </div>
        </div>
      </section>
    </>
  );
}
