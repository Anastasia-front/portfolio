import React from "react";

import { NextIntlClientProvider, useLocale } from "next-intl";
import { Oxygen } from "next/font/google";
import { notFound } from "next/navigation";

import {
  ContentIndicator,
  ErrorBoundary,
  Footer,
  FormPortal,
  Header,
  Settings,
} from "@/components";
import { GlobalProviders } from "@/providers";

import "../metadata";

import "./styles/main.scss";

const oxygen = Oxygen({ subsets: ["latin"], weight: ["400"] });

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: {
    locale: "en" | "uk";
  };
}) {
  const locale = useLocale();

  // Validate that the incoming `locale` parameter is a valid locale
  if (params.locale !== locale) {
    notFound();
  }

  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body className={oxygen.className}>
        <GlobalProviders>
          <NextIntlClientProvider locale={locale} messages={messages}>
            <ErrorBoundary>
              <Header />
              <FormPortal />
              {children}
              <Footer />
              <Settings />
              <ContentIndicator />
            </ErrorBoundary>
          </NextIntlClientProvider>
        </GlobalProviders>
      </body>
    </html>
  );
}
