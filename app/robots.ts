import { MetadataRoute } from "next";

import { BASE_URL } from "./[locale]/constants";

const robotsConfig: MetadataRoute.Robots = {
  rules: {
    userAgent: "*",
    allow: "/",
    disallow: "/private/",
  },
  sitemap: `${BASE_URL}/sitemap.xml`,
};

export default robotsConfig;
