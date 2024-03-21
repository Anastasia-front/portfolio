// "use client";

// import Head from "next/head";

// import { useLocale, useTranslations } from "next-intl";

// import { type Locale } from "src/locales";

// import { BASE_URL } from "@/constants";
// import { getPageInfo } from "@/utils";

// interface Props {
//   pathname: string;
// }

// export function CustomHead({ pathname }: Props) {
//   const locale = useLocale() as Locale;
//   // const [page, name] = getPageInfo(pathname);

//   const t = useTranslations(page);
//   const n = useTranslations("nav");

//   const ogImg = t("ogImage");
//   const pageTitle = `${n("page")} ${n(page)}${name ? `, name ${name}` : ""}`;
//   const description = t("description");

//   return (
//     <Head>
//       <title>{pageTitle} </title>

//       <meta name="description" content={description} />
//       <meta name="robots" content="index, follow, nocache" />

//       <link rel="metadataBase" href={`${BASE_URL}`} />
//       <link
//         rel="canonical"
//         href={`${BASE_URL}${pathname}`}
//         key="canonical"
//         hrefLang={locale}
//       />
//       <link rel="manifest" href={`${BASE_URL}/manifest.json`} />

//       {ogImg && (
//         <>
//           <meta property="og:image" content={ogImg} />
//           <meta property="og:title" content={pageTitle} />
//           <meta property="og:description" content={description} />
//           <meta property="og:url" content={`${BASE_URL}${pathname}`} />
//           <meta property="og:type" content="website" />
//         </>
//       )}
//     </Head>
//   );
// }
