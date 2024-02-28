'use client'

import { ReactNode, useEffect, useState } from "react";

import { ThemeProvider } from "next-themes";

import { ModalProvider } from ".";

interface Props {
  children: ReactNode;
}

export function GlobalProviders({ children }: Props): JSX.Element {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return mounted ? (
    <ThemeProvider>
      <ModalProvider>{children}</ModalProvider>
    </ThemeProvider>
  ) : (
    <>{children}</>
  );
}
