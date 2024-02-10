"use client";

import Link from "next/link";
import { ButtonWrapper } from ".";

interface Props {
  text: string;
  href: string;
  lang: "en" | "uk";
}

export function ButtonLink({ text, href, lang }: Props) {
  return (
    <ButtonWrapper as="div" ariaLabel={text}>
      <Link href={href} locale={lang}>
        {text}
      </Link>
    </ButtonWrapper>
  );
}
