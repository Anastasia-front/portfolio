"use client";

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

import { useTranslations } from "next-intl";
import Link from "next/link";

import { motion } from "framer-motion";

import { threeKeys } from "@/constants";
import { getIconComponent } from "@/helpers";
import { opacityVariants } from "@/utils";

const iconComponents = {
  BsChatDotsFill: <BsChatDotsFill />,
  BsFillEnvelopeAtFill: <BsFillEnvelopeAtFill />,
  BsFillTelephoneInboundFill: <BsFillTelephoneInboundFill />,
  BsGithub: <BsGithub />,
  BsInstagram: <BsInstagram />,
  BsLinkedin: <BsLinkedin />,
  BsTelegram: <BsTelegram />,
  BsWhatsapp: <BsWhatsapp />,
  BsDiscord: <BsDiscord />,
};

interface Props {
  location?: "footer" | "contacts";
}

export default function Contacts({ location }: Props) {
  const i = useTranslations("contacts.footer");
  const ic = useTranslations("contacts.footer.icons");

  const className = location === "footer" ? "footer" : "info";
  const classNameBlock = location === "footer" ? "" : "info";

  return (
    <motion.div
      className={`${classNameBlock} ${className}-contacts`}
      variants={opacityVariants("first")}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0 }}
    >
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
                const IconComponent = getIconComponent(iconComponents, iconKey);

                return (
                  <li key={secondBlock}>
                    {location === "footer" ? (
                      <Link
                        aria-label={ic(
                          `${firstBlock}.links.${secondBlock}.dataText`
                        )}
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
                        <Link
                          className="contacts-item"
                          target="_blank"
                          href={ic(`${firstBlock}.links.${secondBlock}.href`)}
                          aria-label={ic(
                            `${firstBlock}.links.${secondBlock}.dataText`
                          )}
                        >
                          <h6>
                            {ic(`${firstBlock}.links.${secondBlock}.title`)}
                            {" :"}
                            <br />
                            {ic(`${firstBlock}.links.${secondBlock}.info`)}
                          </h6>
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
    </motion.div>
  );
}
