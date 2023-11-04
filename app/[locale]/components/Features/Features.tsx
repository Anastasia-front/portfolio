"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";

import { ButtonText } from "@/components";
import { threeKeys } from "@/constants";
import { useScreenQuery } from "@/hooks";

export function Features() {
  const i = useTranslations("home.features");
  const b = useTranslations("btn");
  const a = useTranslations("alt.decoration");

  const { isScreenTabletSm } = useScreenQuery();

  return (
    <section className="container__box-shadow" id="features">
      <div className="features container">
        <div className="section-header">
          <h2>{i("title")}</h2>
          <ButtonText text={b("features")} hover="true" />
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
                    <h4 className="features-card__title">
                      {i(`${key}.title`)}
                    </h4>
                    <p className="features-card__subtitle">
                      {i(`${key}.subtitle`)}
                    </p>
                  </div>

                  <div className="features-card__back">
                    <p className="features-card__body">{i(`${key}.text`)}</p>
                  </div>
                </div>
                {isScreenTabletSm && (
                  <Image
                    className="features-card__decoration"
                    src={`/images/features/decoration/${index}.webp`}
                    width={300}
                    height={300}
                    alt={a("features")}
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
