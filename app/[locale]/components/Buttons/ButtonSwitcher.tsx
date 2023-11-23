import { ForwardedRef, forwardRef, memo } from "react";

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
      {
        imgUrl,
        className,
        onClick,
        icon,
        title = "",
        alt,
      }: Props,
      ref: ForwardedRef<HTMLDivElement>
    ) => {
      return (
        <div
          title={title}
          className={
            className ? `button-container ${className}` : "button-container"
          }
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
                className="button-img"
                src={imgUrl}
                width={20}
                height={20}
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
