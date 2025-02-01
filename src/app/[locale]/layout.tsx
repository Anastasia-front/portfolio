import React, { lazy } from "react";

import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Geologica } from "next/font/google";

import { HydrationOverlay } from "@builder.io/react-hydration-overlay";

import { EN, Locale } from "src/locales";

const ErrorBoundary = lazy(
  () => import("./common/ErrorBoundary/ErrorBoundary")
);

import { Layout } from "./common";
import { BASE_URL, DESCRIPTION, TITLE } from "./constants";
import { GlobalProviders } from "./providers";

import "./styles/main.scss";

const geologica = Geologica({ subsets: ["latin"], weight: ["400"] });

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
      <body className={geologica.className}>
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

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
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
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/",
    siteName: TITLE,
    locale: EN,
    type: "website",
  },
};
