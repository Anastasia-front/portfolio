"use client";

import { ButtonWrapper } from ".";

interface Props {
  text: string;
  ariaLabel: string;
  onClick?: () => void;
}

export function ButtonText({ ariaLabel, text, onClick }: Props) {
  return (
    <ButtonWrapper ariaLabel={ariaLabel} onClick={onClick}>
      {text}
    </ButtonWrapper>
  );
}
