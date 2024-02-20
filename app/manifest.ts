import { MetadataRoute } from "next";

import { DESCRIPTION } from "./[locale]/constants";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "portfolio-anastasia-front",
    short_name: "portfolio",
    description: DESCRIPTION,
    start_url: "/",
    display: "standalone",
    background_color: "#fffaf5",
    //   dark  #171410
    theme_color: "#68b8c1",
    // orange   #fca26e
    icons: [
      {
        src: "/favicon.ico",
        sizes: "64x64 32x32 24x24 16x16",
        type: "image/x-icon",
      },
    ],
  };
}
