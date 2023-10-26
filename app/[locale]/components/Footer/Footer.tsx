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

import { Contacts, Navigation } from "@/components";

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

  const FooterVariants = {
    hidden: {
      opacity: 0,
      scaleY: 0.3,
      y: -300,
    },
    visible: {
      opacity: 1,
      scaleY: 1,
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
        className="footer"
        variants={FooterVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {title && <h1 className="footer__title">{title}</h1>}
        {description && <p className="footer__description"> {description}</p>}

        <Link href="/" className="logo logo__footer">
          <Image
            src="/logo.png"
            alt={l("logo")}
            width={30}
            height={30}
            className="logo__img"
          />
        </Link>
        <Navigation location="banner" />
        <Contacts location="footer" />
      </motion.div>
    </footer>
  );
}
