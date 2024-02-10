"use client";

import Head from "next/head";
import { usePathname } from "next/navigation";

interface Props {
  ogImg?: string;
  title: string;
  page: string;
}

const BASE_URL =
  process.env.NEXT_PUBLIC_BASE_URL_VERCEL ||
  "https://portfolio-anastasia-front.vercel.app";

export function Robots({ title, ogImg, page }: Props) {
  const pathname = usePathname();
  const lang = pathname.slice(0, 3);

  return (
    <Head>
      <meta name="robots" content="all" />
      {ogImg && <meta property="og:image" content={ogImg} />}
      <title>{title} </title>
      <link
        rel="canonical"
        href={`${BASE_URL}${lang}/${page}"`}
        key="canonical"
      />
    </Head>
  );
}
