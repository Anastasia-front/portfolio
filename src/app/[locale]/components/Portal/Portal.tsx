"use client";

import type { ReactElement } from "react";
import { useLayoutEffect, useState } from "react";
import { createPortal } from "react-dom";

const createWrapperElement = (wrapperId: string) => {
  if (!document) return null;
  const wrapperElement = document.createElement("div");
  wrapperElement.setAttribute("id", wrapperId);
  document.body.appendChild(wrapperElement);
  return wrapperElement;
};

interface Props {
  children: ReactElement;
  wrapperId: string;
}

export function Portal({ children, wrapperId }: Props) {
  const [wrapperElement, setWrapperElement] = useState<HTMLElement>();
  useLayoutEffect(() => {
    let el = document.getElementById(wrapperId);
    let systemCreated = false;

    if (!el) {
      systemCreated = true;
      el = createWrapperElement(wrapperId);
    }

    if (el) {
      setWrapperElement(el);
    }

    return () => {
      if (systemCreated && el?.parentNode) {
        el.parentNode.removeChild(el);
      }
    };
  }, [wrapperId]);

  if (!wrapperElement) return null;

  return createPortal(children, wrapperElement);
}
