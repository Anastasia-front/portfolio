/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },

  eslint: {
    dirs: ["src"], // Only run ESLint on the 'src' directory during production builds (next build)
  },
};

const withNextIntl = require("next-intl/plugin")(
  // This is the default (also the `src` folder is supported out of the box)
  "./i18n.ts"
);

module.exports = withNextIntl({ nextConfig });
