import { Metadata } from "next";

import { BASE_URL, DESCRIPTION, TITLE } from "././[locale]/constants";

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
      en: `${BASE_URL}/en`,
      uk: `${BASE_URL}/uk`,
    },
  },
};
