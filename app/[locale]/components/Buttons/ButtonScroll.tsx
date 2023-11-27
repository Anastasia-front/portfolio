"use client";

import { Link } from "react-scroll";
import { ButtonWrapper } from ".";

interface Props {
  text: string;
  href: string;
}

export function ButtonScroll({ text, href }: Props) {
  return (
    <ButtonWrapper>
      <Link to={href} spy={true} smooth={true} duration={300}>
        {text}
      </Link>
    </ButtonWrapper>
  );
}
