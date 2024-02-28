import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

import { SCREEN_SIZES } from "@/constants/screens";

interface UseScreenQueryReturn {
  isScreenDesktopXl: boolean;
  isScreenDesktopLg: boolean;
  isScreenDesktopMd: boolean;
  isScreenDesktopSm: boolean;

  isScreenTabletXl: boolean;
  isScreenTabletLg: boolean;
  isScreenTabletMd: boolean;
  isScreenTabletSm: boolean;

  isScreenMobileXl: boolean;
  isScreenMobileLg: boolean;
  isScreenMobileMd: boolean;
  isScreenMobileSm: boolean;
}

/**
 * Returns a boolean variable corresponding to the screen resolution
 *
 * isScreenDesktopXl → min-width: >1920
 * isScreenDesktopLg → min-width: >1536
 * isScreenDesktopMd → min-width: >1440
 * isScreenDesktopSm → min-width: >1366
 *
 * isScreenTabletXl → min-width: >1280
 * isScreenTabletLg → min-width: >1024
 * isScreenTabletMd → min-width: >960
 * isScreenTabletSm → min-width: >768
 *
 * isScreenMobileXl → min-width: >540
 * isScreenMobileLg → min-width: >480
 * isScreenMobileMd → min-width: >360
 * isScreenMobileSm → min-width: >0 — default
 *
 */
export function useScreenQuery(): UseScreenQueryReturn {
  const [query, setQuery] = useState({
    isScreenDesktopXl: false,
    isScreenDesktopLg: false,
    isScreenDesktopMd: false,
    isScreenDesktopSm: false,

    isScreenTabletXl: false,
    isScreenTabletLg: false,
    isScreenTabletMd: false,
    isScreenTabletSm: false,

    isScreenMobileXl: false,
    isScreenMobileLg: false,
    isScreenMobileMd: false,
    isScreenMobileSm: false,
  });

  const isScreenDesktopXl = useMediaQuery({
    query: `(min-width: ${SCREEN_SIZES.desktopXl}px)`,
  });
  const isScreenDesktopLg = useMediaQuery({
    query: `(min-width: ${SCREEN_SIZES.desktopLg}px)`,
  });
  const isScreenDesktopMd = useMediaQuery({
    query: `(min-width: ${SCREEN_SIZES.desktopMd}px)`,
  });
  const isScreenDesktopSm = useMediaQuery({
    query: `(min-width: ${SCREEN_SIZES.desktopSm}px)`,
  });

  const isScreenTabletXl = useMediaQuery({
    query: `(min-width: ${SCREEN_SIZES.tabletXl}px)`,
  });
  const isScreenTabletLg = useMediaQuery({
    query: `(min-width: ${SCREEN_SIZES.tabletLg}px)`,
  });
  const isScreenTabletMd = useMediaQuery({
    query: `(min-width: ${SCREEN_SIZES.tabletMd}px)`,
  });
  const isScreenTabletSm = useMediaQuery({
    query: `(min-width: ${SCREEN_SIZES.tabletSm}px)`,
  });

  const isScreenMobileXl = useMediaQuery({
    query: `(min-width: ${SCREEN_SIZES.mobileXl}px)`,
  });
  const isScreenMobileLg = useMediaQuery({
    query: `(min-width: ${SCREEN_SIZES.mobileLg}px)`,
  });
  const isScreenMobileMd = useMediaQuery({
    query: `(min-width: ${SCREEN_SIZES.mobileMd}px)`,
  });
  const isScreenMobileSm = useMediaQuery({
    query: `(min-width: ${SCREEN_SIZES.mobileSm}px)`,
  });

  useEffect(() => {
    setQuery({
      isScreenDesktopXl,
      isScreenDesktopLg,
      isScreenDesktopMd,
      isScreenDesktopSm,
      isScreenTabletXl,
      isScreenTabletLg,
      isScreenTabletMd,
      isScreenTabletSm,
      isScreenMobileXl,
      isScreenMobileLg,
      isScreenMobileMd,
      isScreenMobileSm,
    });
  }, [
    isScreenDesktopXl,
    isScreenDesktopLg,
    isScreenDesktopMd,
    isScreenDesktopSm,
    isScreenTabletXl,
    isScreenTabletLg,
    isScreenTabletMd,
    isScreenTabletSm,
    isScreenMobileXl,
    isScreenMobileLg,
    isScreenMobileMd,
    isScreenMobileSm,
  ]);

  return query;
}

export const useScreenDesktopMd = () => useMediaQuery({ minWidth: 1441 });
export const useScreenDesktopSm = () =>
  useMediaQuery({ minWidth: 1367, maxWidth: 1440 });

export const useScreenTabletXl = () =>
  useMediaQuery({ minWidth: 1281, maxWidth: 1366 });
export const useScreenTabletLg = () =>
  useMediaQuery({ minWidth: 1025, maxWidth: 1280 });
export const useScreenTabletMd = () =>
  useMediaQuery({ minWidth: 961, maxWidth: 1024 });
export const useScreenTabletSm = () =>
  useMediaQuery({ minWidth: 769, maxWidth: 960 });

export const useScreenMobileXl = () =>
  useMediaQuery({ minWidth: 541, maxWidth: 768 });
export const useScreenMobileLg = () =>
  useMediaQuery({ minWidth: 481, maxWidth: 540 });
export const useScreenMobileMd = () =>
  useMediaQuery({ minWidth: 361, maxWidth: 480 });
export const useScreenMobileSm = () => useMediaQuery({ maxWidth: 360 });
