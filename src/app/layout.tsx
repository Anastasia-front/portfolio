import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Head from "next/head";

import { Progressbar } from "./components/Progressbar";

import { Theme } from "./constants/types";

import { ThemeContext } from "./context/themeContext";

import { getLocaleStorageItem } from "./utils/getLocaleStorageItem";

import "./styles/main.scss";

import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Information about Prysiazhnaia Anastasiia",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [theme, setTheme] = useState(
    () => getLocaleStorageItem<Theme>("theme") || "dark"
  );
  return (
    <html lang="en">
      <Head>
        <meta property="og:image" content="/" />
        <meta property="og:url" content="/" />
      </Head>
      <body className={inter.className}>
        <ThemeContext.Provider value={{ theme, setTheme }}>
          <Progressbar />
          {children}
        </ThemeContext.Provider>
      </body>
    </html>
  );
}
