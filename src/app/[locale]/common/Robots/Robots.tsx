"use client";

import Head from "next/head";

import { useLocale } from "next-intl";

import { type Locale } from "src/locales";

import { BASE_URL } from "@/constants";

interface Props {
  ogImg?: string;
  title: string;
  page: string;
  description: string;
}

export function Robots({ title, ogImg, page, description }: Props) {
  const locale = useLocale() as Locale;

  return (
    <Head>
      {ogImg && (
        <>
          <meta property="og:image" content={ogImg} />
          <meta property="og:title" content={title} />
          <meta property="og:description" content={description} />
          <meta property="og:url" content={`${BASE_URL}${page}`} />
        </>
      )}
      <title>{title} </title>
      <meta name="description" content={description} />
      <link
        rel="canonical"
        href={`${BASE_URL}${page}`}
        key="canonical"
        hrefLang={locale}
      />
    </Head>
  );
}
