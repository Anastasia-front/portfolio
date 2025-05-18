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
  title?: string;
  type?: "link" | "button";
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
        aria-label={`${b("switcher")} ${ariaLabel}`}
        className={`button-switcher ${className ? className : ""}`}
        href={href}
        onClick={onClick}
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
