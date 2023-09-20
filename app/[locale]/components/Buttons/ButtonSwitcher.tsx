import Image from "next/image";
import { ForwardedRef, forwardRef, memo } from "react";
import { Theme } from "../../constants/types";
import s from "./HeaderButton.module.scss";

interface ButtonProps {
  imgUrl?: string;
  icon?: JSX.Element;
  indicatorNumber?: number;
  indicatorColor?: "green" | "yellow";
  className?: string;
  onClick?: () => void;
  theme?: Theme;
  title?: string;
}

export const ButtonSwitcher = memo(
  forwardRef(
    (
      {
        imgUrl,
        icon,
        indicatorNumber,
        indicatorColor,
        className,
        onClick,
        theme = "dark",
        title = "",
      }: ButtonProps,
      ref: ForwardedRef<HTMLDivElement>
    ) => {
      return (
        <div
          title={title}
          className={className ? `${s.container} ${className}` : s.container}
          ref={ref}
        >
          <button
            className={`${s.button} ${s[`button--${theme}`]}`}
            type="button"
            onClick={onClick}
          >
            {imgUrl && (
              <Image
                className={s.buttonImg}
                src={imgUrl}
                width={40}
                height={40}
                alt="button-image"
              />
            )}
            {icon && icon}
          </button>
          {indicatorNumber ? (
            <div
              className={`${s.indicator} ${s[`indicator--${indicatorColor}`]}`}
            >
              {indicatorNumber}
            </div>
          ) : null}
        </div>
      );
    }
  )
);

ButtonSwitcher.displayName = "ButtonSwitcher";
