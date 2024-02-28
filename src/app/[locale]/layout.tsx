import React, { lazy } from "react";

import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Oxygen } from "next/font/google";

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

import { Locale } from "src/locales";

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

type Props = {
  children: React.ReactNode;
  params: {
    locale: Locale;
  };
};

export default async function RootLayout(props: Props) {
  const messages = await getMessages();

  return (
    <html lang={props.params.locale}>
      <body className={oxygen.className}>
        <GlobalProviders>
          <NextIntlClientProvider
            locale={props.params.locale}
            messages={messages}
          >
            <ErrorBoundary>
              <Header />
              <FormPortal />
              {props.children}
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
