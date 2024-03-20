import React, { lazy } from "react";

import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Oxygen } from "next/font/google";

import { HydrationOverlay } from "@builder.io/react-hydration-overlay";

import { Locale } from "src/locales";

const ErrorBoundary = lazy(
  () => import("./common/ErrorBoundary/ErrorBoundary")
);

import { Layout } from "./common";
import { BASE_URL, TITLE } from "./constants";
import { GlobalProviders } from "./providers";

import "./styles/main.scss";

const oxygen = Oxygen({ subsets: ["latin"], weight: ["400"] });

export const metadata: Metadata = {
  openGraph: {
    siteName: TITLE,
    type: "website",
  },
  metadataBase: new URL(BASE_URL),
  manifest: `${BASE_URL}/manifest.json`,
  alternates: {
    canonical: BASE_URL,
    languages: {
      "en-US": `${BASE_URL}/en-US`,
      "uk-UK": `${BASE_URL}/uk-UK`,
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
    <html lang={props.params.locale} suppressHydrationWarning={true}>
      <body className={oxygen.className}>
        <HydrationOverlay>
          <GlobalProviders>
            <NextIntlClientProvider
              locale={props.params.locale}
              messages={messages}
            >
              <ErrorBoundary>
                <Layout>{props.children} </Layout>
              </ErrorBoundary>
            </NextIntlClientProvider>
          </GlobalProviders>
        </HydrationOverlay>
      </body>
    </html>
  );
}
