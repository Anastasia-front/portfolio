"use client";

import { ReactNode, useEffect, useState } from "react";

import { Loader } from "@/components";
import { useTranslations } from "next-intl";

type Props = {
  children: ReactNode;
};

type ErrorBoundaryState = {
  hasError: boolean;
};

export default function ErrorBoundary({ children }: Props) {
  const t = useTranslations("error");

  const [errorState, setErrorState] = useState<ErrorBoundaryState>({
    hasError: false,
  });

  useEffect(() => {
    const errorHandler = (): void => {
      setErrorState({ hasError: true });
    };

    window.addEventListener("error", errorHandler);

    return () => {
      window.removeEventListener("error", errorHandler);
    };
  }, []);

  if (errorState.hasError) {
    return (
      <main className="center">
        <h1>{t("boundary")}</h1>
        <Loader />
      </main>
    );
  }

  return <>{children}</>;
}
