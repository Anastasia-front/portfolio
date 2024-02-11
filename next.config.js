/**
 * @type {import('next').NextConfig}
 */

const withNextIntl = require("next-intl/plugin")(
  // This is the default (also the `src` folder is supported out of the box)
  "./i18n.ts"
);

module.exports = withNextIntl({
  reactStrictMode: true,
  productionBrowserSourceMaps: true,
  // Add headers for caching static assets
  async headers() {
    return [
      {
        source: "/_next/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/images/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=604800, must-revalidate",
          },
        ],
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/robots.ts",
        destination: "/app/robots.ts",
      },
    ];
  },
  webpack: (config, { isServer }) => {
    // Add a rule to handle video files
    config.module.rules.push({
      test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
      use: {
        loader: "file-loader",
        options: {
          publicPath: "/_next/static/media/", // Adjust the path as needed
          outputPath: `${isServer ? "../" : ""}static/media/`, // Adjust the path as needed
          name: "[name].[ext]",
        },
      },
    });
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    // config.resolve.alias["@/"] = path.join(__dirname, "./app/[locale]/");
    config.resolve.fallback = { fs: false, path: false };

    return config;
  },

  eslint: {
    dirs: ["app"], // Only run ESLint on the 'src' directory during production builds (next build)
  },
});
