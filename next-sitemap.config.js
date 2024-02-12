import { BASE_URL } from "@/constants";

const config = {
  siteUrl: BASE_URL,
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [{ userAgent: "*", allow: "/", disallow: "/private" }],
  },
};

module.exports = config;
