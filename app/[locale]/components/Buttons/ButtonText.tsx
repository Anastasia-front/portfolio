"use client";

import { ButtonWrapper } from ".";

interface Props {
  text: string;
  onClick?: () => void;
}

export function ButtonText({ text, onClick }: Props) {
  return <ButtonWrapper onClick={onClick}>{text}</ButtonWrapper>;
}
