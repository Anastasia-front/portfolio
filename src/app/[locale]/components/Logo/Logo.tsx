"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

interface Props {
  size?: number;
  onClick?: () => void;
  className?: string;
}

export function Logo({ size = 30, onClick, className = "" }: Props) {
  const t = useTranslations("alt");

  return (
    <Link
      href="/"
      className={`logo ${className}`}
      onClick={onClick}
      aria-label={t("logo")}
    >
      <Image
        loading="eager"
        priority={true}
        className="logo__img"
        src="/logo.png"
        alt={t("logo")}
        width={size}
        height={size}
      />
    </Link>
  );
}
