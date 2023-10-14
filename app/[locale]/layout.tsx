import type { Metadata } from "next";
import { NextIntlClientProvider, useLocale } from "next-intl";
import { Oxygen } from "next/font/google";
import Head from "next/head";
import { notFound } from "next/navigation";

import { Footer, Header, ProgressBar } from "@/components";
import { Providers } from "@/providers";

import "./styles/main.scss";

const oxygen = Oxygen({ subsets: ["latin"], weight: ["400"] });

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Information about Prysiazhnaia Anastasiia",
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
      <Head>
        <meta property="og:image" content="/" />
        <meta property="og:url" content="/" />
      </Head>
      <body className={oxygen.className}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Providers>
            <ProgressBar />
            <Header />
            {children}
            <Footer />
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
