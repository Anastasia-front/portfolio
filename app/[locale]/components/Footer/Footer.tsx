"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";

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

import { Navigation } from "@/components";
import { footerKeys } from "@/constants";

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
  logo?: string;
  title?: string;
  description?: string;
  links?: string[];
}

export function Footer({ title, description }: Props) {
  const l = useTranslations("alt");
  const i = useTranslations("contacts.footer");
  const ic = useTranslations("contacts.footer.icons");

  const FooterVariants = {
    hidden: {
      opacity: 0,
      scaleY: 0.3,
      filter: "blur(10px)",
      y: -300,
    },
    visible: {
      opacity: 1,
      scaleY: 1,
      filter: "blur(0px)",
      y: 0,

      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20,
        delay: 0.5,
      },
    },
  };

  return (
    <footer>
      <motion.div
        className="footer-banner"
        variants={FooterVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {title && <h1 className="footer-banner__title">{title}</h1>}
        {description && (
          <p className="footer-banner__description"> {description}</p>
        )}

        <Link href="/" className="logo logo__footer">
          <Image
            src="/logo.png"
            alt={l("logo")}
            width={25}
            height={25}
            className="logo__img"
          />
        </Link>
        <Navigation location="banner" />
        <div className="footer-contact">
          <p className="footer-contact__title">{i("title")} </p>
          <ul className="icons">
            {footerKeys.map((firstBlock) => (
              <li key={firstBlock} className="icons__block">
                <p className="icons__block-title">
                  {ic(`${firstBlock}.title`)}
                </p>

                <ul className="icons__block-links">
                  {footerKeys.map((secondBlock) => {
                    const iconKey = ic(
                      `${firstBlock}.links.${secondBlock}.icon`
                    );
                    const IconComponent = getIconComponent(iconKey);

                    return (
                      <li key={secondBlock}>
                        <Link
                          target="_blank"
                          href={ic(`${firstBlock}.links.${secondBlock}.href`)}
                          data-text={ic(
                            `${firstBlock}.links.${secondBlock}.dataText`
                          )}
                        >
                          {IconComponent}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </footer>
  );
}
