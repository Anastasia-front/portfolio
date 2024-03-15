import { Url } from "url";

import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

interface Props {
  icon?: JSX.Element;
  imgUrl?: string;
  className?: string;
  onClick?: () => void;
  title?: string;
  type?: "link" | "button";
  href?: string | Url;
  ariaLabel?: string;
  alt: string;
}

export function ButtonSwitcher({
  imgUrl,
  className,
  onClick,
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
        href={href}
        aria-label={`${b("switcher")} ${ariaLabel}`}
        title={title}
        className={`button-switcher ${className ? className : ""}`}
        onClick={onClick}
      >
        {imgUrl && (
          <Image
            loading="eager"
            priority={true}
            className="button-img"
            src={imgUrl}
            width={20}
            height={20}
            alt={alt}
          />
        )}
        {icon && icon}
      </Link>
    );
  } else {
    return (
      <button
        title={title}
        className={`button-switcher  ${className ? className : ""}`}
        onClick={onClick}
        aria-label={`${b("switcher")} ${ariaLabel}`}
      >
        {imgUrl && (
          <Image
            loading="eager"
            priority={true}
            className="button-img"
            src={imgUrl}
            width={20}
            height={20}
            alt={alt}
          />
        )}
        {icon && icon}
      </button>
    );
  }
}
