"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";

import {
  BsChatDotsFill,
  BsDiscord,
  BsFillEnvelopeAtFill,
  BsFillTelephoneInboundFill,
  BsGithub,
  BsInstagram,
  BsLinkedin,
  BsTelegram,
  BsWhatsapp,
} from "react-icons/bs";

import { threeKeys } from "@/constants";

function getIconComponent(iconName: string) {
  switch (iconName) {
    case "BsChatDotsFill":
      return <BsChatDotsFill />;
    case "BsFillEnvelopeAtFill":
      return <BsFillEnvelopeAtFill />;
    case "BsFillTelephoneInboundFill":
      return <BsFillTelephoneInboundFill />;
    case "BsGithub":
      return <BsGithub />;
    case "BsInstagram":
      return <BsInstagram />;
    case "BsLinkedin":
      return <BsLinkedin />;
    case "BsTelegram":
      return <BsTelegram />;
    case "BsWhatsapp":
      return <BsWhatsapp />;
    case "BsDiscord":
      return <BsDiscord />;
    default:
      return null;
  }
}

interface Props {
  location?: "footer" | "contacts";
}

export function Contacts({ location }: Props) {
  const i = useTranslations("contacts.footer");
  const ic = useTranslations("contacts.footer.icons");

  const className = location === "footer" ? "footer" : "info";
  const classNameBlock = location === "footer" ? "" : "info";

  return (
    <div className={`${classNameBlock} ${className}-contacts`}>
      <p className={`${className}-contacts__title`}>{i("title")} </p>
      <ul className={`${className}-icons`}>
        {threeKeys.map((firstBlock) => (
          <li key={firstBlock} className={`${className}-icons__block`}>
            <p className={`${className}-icons__block-title`}>
              {ic(`${firstBlock}.title`)}
            </p>

            <ul className={`${className}-icons__block-links`}>
              {threeKeys.map((secondBlock) => {
                const iconKey = ic(`${firstBlock}.links.${secondBlock}.icon`);
                const IconComponent = getIconComponent(iconKey);

                return (
                  <li key={secondBlock}>
                    {location === "footer" ? (
                      <Link
                        target="_blank"
                        href={ic(`${firstBlock}.links.${secondBlock}.href`)}
                        data-text={ic(
                          `${firstBlock}.links.${secondBlock}.dataText`
                        )}
                      >
                        {IconComponent}
                      </Link>
                    ) : (
                      <>
                        <h6>{ic(`${firstBlock}.links.${secondBlock}.info`)}</h6>
                        <Link
                          target="_blank"
                          href={ic(`${firstBlock}.links.${secondBlock}.href`)}
                        >
                          {IconComponent}
                        </Link>
                      </>
                    )}
                  </li>
                );
              })}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}
