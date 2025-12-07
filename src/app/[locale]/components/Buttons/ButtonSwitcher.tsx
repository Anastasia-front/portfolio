import type { MouseEvent } from "react";

import { Url } from "url";

import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

interface Props {
  alt: string;
  ariaLabel?: string;
  className?: string;
  href?: string | Url;
  icon?: JSX.Element;
  imgUrl?: string;
  onClick?: () => void;
  onMouseDown?: (e: MouseEvent) => void;
  ignoreOutside?: boolean;
  title?: string;
  type?: "link" | "button";
}

export function ButtonSwitcher({
  imgUrl,
  className,
  onClick,
  onMouseDown,
  ignoreOutside,
  icon,
  title = "",
  alt,
  type = "button",
  href,
  ariaLabel,
}: Props) {
  const b = useTranslations("btn");

  if (type === "link" && href) {
    return (
      <Link
        aria-label={`${b("switcher")} ${ariaLabel}`}
        className={`button-switcher ${className ? className : ""}`}
        href={href}
        onClick={onClick}
        onMouseDown={onMouseDown}
        data-ignore-outside={ignoreOutside ? "true" : undefined}
        title={title}
      >
        {imgUrl && (
          <Image
            alt={alt}
            className="button-img"
            height={20}
            loading="eager"
            priority={true}
            src={imgUrl}
            width={20}
          />
        )}
        {icon && icon}
      </Link>
    );
  } else {
    return (
      <button
        aria-label={`${b("switcher")} ${ariaLabel}`}
        className={`button-switcher  ${className ? className : ""}`}
        onClick={onClick}
        onMouseDown={onMouseDown}
        data-ignore-outside={ignoreOutside ? "true" : undefined}
        title={title}
      >
        {imgUrl && (
          <Image
            alt={alt}
            className="button-img"
            height={20}
            loading="eager"
            priority={true}
            src={imgUrl}
            width={20}
          />
        )}
        {icon && icon}
      </button>
    );
  }
}
