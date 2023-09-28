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
  //   const icon = useTranslations("contacts.footer.icons.");
  const firstKeys = ["firstBlock", "secondBlock", "thirdBlock"] as const;
  const secondKeys = ["firstLink", "secondLink", "thirdLink"] as const;

  const FooterVariants = {
    hidden: {
      opacity: 0,
      scaleY: 0.3,
      filter: "blur(10px)",
      x: -300,
    },
    visible: {
      opacity: 1,
      scaleY: 1,
      filter: "blur(0px)",
      x: 0,

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
        <div className="footer-banner__title">
          <h1>{title}</h1>
        </div>
        <div className="footer-banner__description">
          <p>{description}</p>
        </div>
        <Link href="/" className="logo logo__footer">
          <Image
            src="/logo.png"
            alt={l("logo")}
            width={45}
            height={45}
            className="logo__img"
          />
        </Link>
        <Navigation location="banner" />
        <div className="footer-contact">
          <p className="footer-contact__title">{i("title")} </p>
          <ol className="icons">
            {firstKeys.map((fk) => (
              <li key={fk} className="icons__block">
                <p className="icons__block-title">{ic(`${fk}.title`)}</p>

                <ol className="icons__block-links">
                  {secondKeys.map((sk) => {
                    const iconKey = ic(`${fk}.links.${sk}.icon`);
                    const IconComponent = getIconComponent(iconKey);

                    return (
                      <li key={sk}>
                        <Link
                          target="_blank"
                          href={ic(`${fk}.links.${sk}.href`)}
                          data-text={ic(`${fk}.links.${sk}.dataText`)}
                        >
                          {IconComponent}
                        </Link>
                      </li>
                    );
                  })}
                </ol>
              </li>
            ))}
            {/* <div className="icons__block">
              <p className="icons__block-title">Phone & e-mail</p>
              <div className="icons__block-links">
                <Link
                  target="_blank"
                  href="tel:+380666080702"
                  data-text="Call me"
                >
                  <BsFillTelephoneInboundFill />
                </Link>
                <Link
                  target="_blank"
                  href="mailto:palitsanastasia3.ap@gmail.com"
                  data-text="Send letter"
                >
                  <BsFillEnvelopeAtFill />
                </Link>
              </div>
            </div>

            <div className="icons__block">
              <p className="icons__block-title">Socials</p>
              <div className="icons__block-links">
                <Link
                  target="_blank"
                  href="https://github.com/Anastasia-front"
                  data-text="Follow in GitHub"
                >
                  <BsGithub />
                </Link>
                <Link
                  target="_blank"
                  href="https://www.linkedin.com/in/anastasiia-prysiazhnaia/"
                  data-text="Follow in LinkedIn"
                >
                  <BsLinkedin />
                </Link>
                <Link
                  target="_blank"
                  href="https://www.instagram.com/anastasiia_prysiazhnaia/"
                  data-text="Follow in Instagram"
                >
                  <BsInstagram />
                </Link>
              </div>
            </div>

            <div className="icons__block">
              <p className="icons__block-title">Chats</p>
              <div className="icons__block-links">
                <Link
                  target="_blank"
                  href="https://t.me/anastasiia_prysiazhnaia"
                  data-text="Chat in Telegram"
                >
                  <BsTelegram />
                </Link>
                <Link
                  target="_blank"
                  href="https://wa.me/380666080702"
                  data-text="Chat in WhatsApp"
                >
                  <BsWhatsapp />
                </Link>
                <Link
                  target="_blank"
                  href="viber://chat?number=380666080702"
                  data-text="Chat in Viber"
                >
                  <BsChatDotsFill />
                </Link>
              </div>
            </div> */}
          </ol>
        </div>
      </motion.div>
    </footer>
  );
}
