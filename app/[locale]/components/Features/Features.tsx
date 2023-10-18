"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";

import { ButtonText } from "@/components";
import { threeKeys } from "@/constants";

export function Features() {
  const i = useTranslations("home.features");
  const b = useTranslations("btn");

  return (
    <section className="features container" id="features">
      <div className=" section-header">
        <h1>{i("title")}</h1>
        <ButtonText
          text={b("features")}
          borderRadius="1rem"
          padding="0.7rem 1.5rem"
          hover="true"
        />
      </div>

      <div className="features-cards">
        {threeKeys.map((key, index) => {
          return (
            <div className="features-card" key={index}>
              <div className="features-card__content">
                <div
                  className={`features-card__front features-card__front-${key}`}
                >
                  <Image
                    src={`/svg/${i(`${key}.svg`)}.svg`}
                    alt={i(`${key}.alt`)}
                    width={100}
                    height={100}
                  />
                  <h3 className="features-card__title">{i(`${key}.title`)}</h3>
                  <p className="features-card__subtitle">
                    {i(`${key}.subtitle`)}
                  </p>
                </div>

                <div className="features-card__back">
                  <p className="features-card__body">{i(`${key}.text`)}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
