"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";

import { Navigation } from "@/components";

interface Props {
  logo?: string;
  title?: string;
  description?: string;
  links?: string[];
}

export function FooterBanner({ title, description }: Props) {
  const logo = useTranslations("alt");
  const FooterBannerVariants = {
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
    <motion.div
      className="contact-banner"
      variants={FooterBannerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="contact-banner__title">
        <h1>{title}</h1>
      </div>
      <div className="contact-banner__description">
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
    </motion.div>
  );
}