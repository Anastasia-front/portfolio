export const SCREEN_SIZES = {
  desktopXl: 1920,
  desktopLg: 1536,
  desktopMd: 1440,
  desktopSm: 1366,

  tabletXl: 1280,
  tabletLg: 1024,
  tabletMd: 960,
  tabletSm: 768,

  mobileXl: 540,
  mobileLg: 480,
  mobileMd: 360,
  mobileSm: 0,
};

export type ScreenSizes = keyof typeof SCREEN_SIZES;
