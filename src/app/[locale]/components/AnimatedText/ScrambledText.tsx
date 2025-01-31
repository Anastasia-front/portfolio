"use client";

import { scramble } from "@/utils";
import { useEffect, useRef } from "react";

interface Props {
  text: string;
  element?: React.ElementType;
  className?: string;
}

export function ScrambledText({
  text,
  element: Wrapper = "p",
  className,
}: Props) {
  const textRef = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    if (textRef.current) {
      scramble(textRef.current, text);
    }
  }, [text]);

  return (
    <Wrapper ref={textRef} className={className}>
      {text}
    </Wrapper>
  );
}
