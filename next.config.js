const withNextIntl = require("next-intl/plugin")(
  // This is the default (also the `src` folder is supported out of the box)
  "./i18n.ts"
);

module.exports = withNextIntl({
  reactStrictMode: true,

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
    return config;
  },

  eslint: {
    dirs: ["src"], // Only run ESLint on the 'src' directory during production builds (next build)
  },
});
