// "use client";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Head from "next/head";

import { Navigation } from "./components/Navigation/Navigation";
import { Progressbar } from "./components/Progressbar/Progressbar";

// import { Theme } from "./constants/types";

// import { ThemeContext } from "./context/themeContext";

// import { getLocaleStorageItem } from "./utils/getLocaleStorageItem";

import "./styles/main.scss";

const inter = Inter({ subsets: ["latin"] });

import { NextIntlClientProvider, useLocale } from "next-intl";
import { notFound } from "next/navigation";

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
  // const [theme, setTheme] = useState(
  //   () => getLocaleStorageItem<Theme>("theme") || "dark"
  // );

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
      <body className={inter.className}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {/* <ThemeContext.Provider value={{ theme, setTheme }}> */}
          <Progressbar />
          <Navigation />
          {children}
          {/* </ThemeContext.Provider> */}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
