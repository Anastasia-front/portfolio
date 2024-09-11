/**
 * @type {import('next').NextConfig}
 */

const withNextIntl = require("next-intl/plugin")(
  // This is the default (also the `src` folder is supported out of the box)
  "./src/i18n.ts"
);

const {
  withHydrationOverlayWebpack,
} = require("@builder.io/react-hydration-overlay/webpack");

module.exports = withNextIntl({
  reactStrictMode: true,
  productionBrowserSourceMaps: true,

  webpack: (config, { isServer }) => {
    // Custom Terser settings
    if (!isServer) {
      config.optimization.minimizer.push(
        new TerserPlugin({
          terserOptions: {
            compress: {
              drop_console: true, // Optionally remove console logs in production
            },
          },
        })
      );
    }
  },
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
        destination: "/src/app/robots.ts",
      },
    ];
  },
  webpack: (config, { isServer }) => {
    // Apply withHydrationOverlayWebpack configuration
    config = withHydrationOverlayWebpack({
      appRootSelector: "#__next",
      isMainAppEntryPoint: (entryPointName) =>
        !isServer &&
        (entryPointName === "pages/_app" || entryPointName === "main-app"),
    })(config);

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

    // Add a rule to handle SVG files
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    // Adjust resolve fallbacks
    config.resolve.fallback = { fs: false, path: false };

    return config;
  },

  eslint: {
    dirs: ["src"], // Only run ESLint on the 'src' directory during production builds (next build)
  },

  // Custom PostCSS Configuration
  // postcssLoaderOptions: {
  //   plugins: {
  //     "postcss-preset-env": {
  //       autoprefixer: { grid: true }, // Enables autoprefixer
  //     },
  //   },
  // },

  // babel: {
  //   presets: ["next/babel"],
  //   plugins: [["@babel/plugin-transform-react-jsx", { runtime: "automatic" }]],
  // },
});
