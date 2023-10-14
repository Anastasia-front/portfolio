"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";

import { ButtonText } from "@/components";
import { threeKeys } from "@/constants";

import code from "@/assets/svg/code.svg";
import component from "@/assets/svg/component.svg";
import devices from "@/assets/svg/devices.svg";

export function Features() {
  const i = useTranslations("home.features");
  const b = useTranslations("btn");

  return (
    <section id="features">
      <div className="features-header">
        <h1>{i("title")}</h1>
        <ButtonText
          text={b("features")}
          borderRadius="1rem"
          padding="0.7rem 1.5rem"
          hover="true"
        />
      </div>
      <div className="feature-cards">
        {threeKeys.map((key, index) => {
          const svgComponent =
            i(`${key}.svg`) === "code"
              ? code
              : i(`${key}.svg`) === "component"
              ? component
              : devices;

          return (
            <div key={index} className="features-card">
              <div className="features-info">
                <Image
                  src={svgComponent}
                  alt={i(`${key}.alt`)}
                  width={100}
                  height={100}
                />
                <h1>{i(`${key}.title`)}</h1>
                <p>{i(`${key}.text`)}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
