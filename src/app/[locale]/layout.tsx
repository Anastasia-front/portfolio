import React, { lazy } from "react";

import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Oxygen } from "next/font/google";
import { headers } from "next/headers";

import { HydrationOverlay } from "@builder.io/react-hydration-overlay";

import { EN, Locale } from "src/locales";

const ErrorBoundary = lazy(
  () => import("./common/ErrorBoundary/ErrorBoundary")
);

import { routes } from "routes";

import { Layout } from "./common";
import { BASE_URL, DESCRIPTION, TITLE } from "./constants";
import { GlobalProviders } from "./providers";
import { getLang, getSeoData } from "./utils";

import "./styles/main.scss";

const oxygen = Oxygen({ subsets: ["latin"], weight: ["400"] });

type Props = {
  children: React.ReactNode;
  params: {
    locale: Locale;
    pages: typeof routes;
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

export async function generateMetadata(props: Props): Promise<Metadata> {
  const pathname = (headers().get("referer")!);
  const locale = headers().get("cookie") || EN;
  const lang = (await getLang(locale)) || EN;
  const page = new URL(pathname).pathname;

  const pageSeoData = await getSeoData({ lang, page });

  return {
    title: pageSeoData?.title || TITLE,
    description: pageSeoData?.description || DESCRIPTION,
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
}