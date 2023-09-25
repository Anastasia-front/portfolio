import { ForwardedRef, forwardRef, memo } from "react";

import Image from "next/image";

import { Theme } from "@/constants";

interface ButtonProps {
  icon?: JSX.Element;
  imgUrl?: string;
  className?: string;
  onClick?: () => void;
  theme?: Theme;
  title?: string;
  alt: string;
}

export const ButtonSwitcher = memo(
  forwardRef(
    (
      {
        imgUrl,
        className,
        onClick,
        icon,
        theme = "dark",
        title = "",
        alt,
      }: ButtonProps,
      ref: ForwardedRef<HTMLDivElement>
    ) => {
      return (
        <div
          title={title}
          className={className ? `btn-container ${className}` : "btn-container"}
          ref={ref}
        >
          <button
            className="button-switcher"
            type="button"
            onClick={onClick}
            style={{ transition: "var(--transition)" }}
          >
            {imgUrl && (
              <Image
                className="buttonImg"
                src={imgUrl}
                width={40}
                height={40}
                alt={alt}
              />
            )}
            {icon && icon}
          </button>
        </div>
      );
    }
  )
);

ButtonSwitcher.displayName = "ButtonSwitcher";
