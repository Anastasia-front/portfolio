"use client";

import { useTranslations } from "next-intl";
import { Oswald } from "next/font/google";
import Image from "next/image";

import hero from "@/assets/images/hero/hero.jpeg";

import { ButtonText } from "@/components";
import { handleClick } from "@/utils";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["600"],
});
interface Props {
  videoHeight: number;
}

export function Hero({ videoHeight }: Props) {
  const i = useTranslations("home.hero");
  const t = useTranslations("home.hero.title");
  const b = useTranslations("btn");

  return (
    <section className="hero-container" style={{ marginTop: videoHeight }}>
      <div className="hero-content">
        <span className="hero-blur"></span>
        <span className="hero-blur"></span>
        <h4>{i("subtitle")}</h4>
        <div>
          <h2>{t("name")}</h2>
          <h3 className={`${oswald.className}`}>{t("position")}</h3>
        </div>

        <p>{i("description")}</p>

        <div className="hero-buttons">
          <ButtonText
            text={b("hero")}
            onClick={() => handleClick("features")}
            borderRadius="1rem"
            padding="0.7rem 1.5rem"
            hover="true"
          />
          <ButtonText
            text={b("tools")}
            onClick={() => handleClick("tools")}
            borderRadius="1rem"
            padding="0.7rem 1.5rem"
            hover="true"
          />
        </div>
      </div>
      <div className="hero-image">
        <Image src={hero} alt="sdf" width={300} height={300} />
      </div>
    </section>
  );
}
