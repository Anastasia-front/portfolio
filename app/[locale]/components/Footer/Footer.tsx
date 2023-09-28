"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";

import {
  BsChatDotsFill,
  BsFillEnvelopeAtFill,
  BsFillTelephoneInboundFill,
  BsGithub,
  BsInstagram,
  BsLinkedin,
  BsTelegram,
  BsWhatsapp,
} from "react-icons/bs";

import { Navigation } from "@/components";

interface Props {
  logo?: string;
  title?: string;
  description?: string;
  links?: string[];
}

export function Footer({ title, description }: Props) {
  const logo = useTranslations("alt");
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
        <Link href="/" className="logo">
          <Image
            src="/logo.png"
            alt={logo("logo")}
            width={45}
            height={45}
            className="logo__img"
          />
        </Link>
        <Navigation location="banner" />
        <div className="footer-contact">
          <p className="footer-contact__title">
            To contact me, click on the link convenient for you
          </p>
          <div className="icons">
            <div className="icons__block">
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
            </div>
          </div>
        </div>
      </motion.div>
    </footer>
  );
}
