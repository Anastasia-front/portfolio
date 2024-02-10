import { ForwardedRef, forwardRef, memo } from "react";

import { useTranslations } from "next-intl";
import Image from "next/image";

interface Props {
  icon?: JSX.Element;
  imgUrl?: string;
  className?: string;
  onClick?: () => void;
  title?: string;
  alt: string;
}

export const ButtonSwitcher = memo(
  forwardRef(
    (
      { imgUrl, className, onClick, icon, title = "", alt }: Props,
      ref: ForwardedRef<HTMLButtonElement>
    ) => {
      const b = useTranslations("btn");

      return (
        <button
          ref={ref}
          title={title}
          className={`button-switcher  ${className ? className : ""}`}
          type="button"
          onClick={onClick}
          aria-label={b("switcher")}
        >
          {imgUrl && (
            <Image
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
  )
);

ButtonSwitcher.displayName = "ButtonSwitcher";
