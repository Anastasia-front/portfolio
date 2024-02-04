import React from "react";

import type { Metadata } from "next";
import { NextIntlClientProvider, useLocale } from "next-intl";
import { Oxygen } from "next/font/google";
import { notFound } from "next/navigation";

import {
  ErrorBoundary,
  Footer,
  FormPortal,
  Header,
  // ProgressBar,
  Settings,
} from "@/components";
import { GlobalProvider } from "@/context";
import { Providers } from "@/providers";

import { ProgressBar } from "./components/ProgressBar/ProgressBar";

import "./styles/main.scss";

const oxygen = Oxygen({ subsets: ["latin"], weight: ["400"] });

export const BASE_URL =
  process.env.NEXT_PUBLIC_BASE_URL_VERCEL ||
  "https://portfolio-anastasia-front.vercel.app/";
export const TITLE = process.env.NEXT_PUBLIC_TITLE;
export const DESCRIPTION = process.env.NEXT_PUBLIC_DESCRIPTION;

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/",
    siteName: TITLE,
    type: "website",
  },
  metadataBase: new URL(BASE_URL),
  alternates: {
    canonical: BASE_URL,
    languages: {
      en: "/en",
      uk: "/uk",
    },
  },
  robots: "/robots.ts",
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
        <GlobalProvider>
          <NextIntlClientProvider locale={locale} messages={messages}>
            <ErrorBoundary>
              <Providers>
                <ProgressBar />
                <Header />
                <FormPortal />
                {children}
                <Footer />
                <Settings />
              </Providers>
            </ErrorBoundary>
          </NextIntlClientProvider>
        </GlobalProvider>
      </body>
    </html>
  );
}
