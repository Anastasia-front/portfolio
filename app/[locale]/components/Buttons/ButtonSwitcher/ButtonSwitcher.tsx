import Image from "next/image";
import { ForwardedRef, forwardRef, memo } from "react";
import { Theme } from "../../../constants/types";

interface ButtonProps {
  imgUrl?: string;
  className?: string;
  onClick?: () => void;
  theme?: Theme;
  title?: string;
}

export const ButtonSwitcher = memo(
  forwardRef(
    (
      { imgUrl, className, onClick, theme = "dark", title = "" }: ButtonProps,
      ref: ForwardedRef<HTMLDivElement>
    ) => {
      return (
        <div
          title={title}
          className={className ? `btn-container ${className}` : "btn-container"}
          ref={ref}
        >
          <button className="button-switcher" type="button" onClick={onClick}>
            {imgUrl && (
              <Image
                className="buttonImg"
                src={imgUrl}
                width={40}
                height={40}
                alt="button-image"
              />
            )}
          </button>
        </div>
      );
    }
  )
);

ButtonSwitcher.displayName = "ButtonSwitcher";
