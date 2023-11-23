"use client";

import { ReactNode, useEffect, useState } from "react";

import { ThemeProvider } from "next-themes";

interface Props {
  children: ReactNode;
}

export function Providers({ children }: Props): JSX.Element {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <>{children}</>;
  }

  return <ThemeProvider>{children}</ThemeProvider>;
}
