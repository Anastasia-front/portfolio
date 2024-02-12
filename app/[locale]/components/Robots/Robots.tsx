"use client";

import Head from "next/head";
import { usePathname } from "next/navigation";

import { BASE_URL } from "@/constants";

interface Props {
  ogImg?: string;
  title: string;
  page: string;
}

export function Robots({ title, ogImg, page }: Props) {
  const pathname = usePathname();
  const lang = pathname.slice(1, 3);

  return (
    <Head>
      <meta name="robots" content="all" />
      {ogImg && <meta property="og:image" content={ogImg} />}
      <title>{title} </title>
      <link
        rel="canonical"
        href={`${BASE_URL}/${lang}${page}`}
        key="canonical"
        hrefLang={lang}
      />
    </Head>
  );
}
