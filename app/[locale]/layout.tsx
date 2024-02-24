import React, { lazy } from "react";

import type { Metadata } from "next";
import { NextIntlClientProvider, useLocale } from "next-intl";
import { Oxygen } from "next/font/google";
import { notFound } from "next/navigation";

const Settings = lazy(() => import("./components/Settings/Settings"));
const ContentIndicator = lazy(
  () => import("./components/ContentIndicator/ContentIndicator")
);
const ErrorBoundary = lazy(
  () => import("./components/ErrorBoundary/ErrorBoundary")
);
const FormPortal = lazy(() => import("./components/Form/FormPortal"));
const Header = lazy(() => import("./components/Header/Header"));
const Footer = lazy(() => import("./components/Footer/Footer"));

import { GlobalProviders } from "@/providers";
import { BASE_URL, DESCRIPTION, TITLE } from "./constants";

import "./styles/main.scss";

const oxygen = Oxygen({ subsets: ["latin"], weight: ["400"] });

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: BASE_URL,
    siteName: TITLE,
    type: "website",
  },
  metadataBase: new URL(BASE_URL),
  manifest: `${BASE_URL}/manifest.json`,
  alternates: {
    canonical: BASE_URL,
    languages: {
      "en-US": `${BASE_URL}/en`,
      "uk-UK": `${BASE_URL}/uk`,
    },
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
  },
};

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
