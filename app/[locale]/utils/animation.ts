import { Variants } from "framer-motion";

export const gridVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.1,
    },
  },
};

export const navVariants: Variants = {
  hidden: { opacity: 0, scaleX: 0, y: -200 },
  visible: {
    opacity: 1,
    scaleX: 1,

    y: 0,

    transition: {
      type: "spring",
      stiffness: 200,
      damping: 14,
      delay: 1.2,
    },
  },
};

export const gridItemVariants: Variants = {
  hidden: { opacity: 0, scale: 0.3 },
  visible: {
    opacity: 1,
    scale: 1,

    transition: {
      type: "spring",
      stiffness: 200,
      damping: 10,
    },
  },
};

export const headerImgVariants: Variants = {
  hidden: { opacity: 0, scale: 0.3 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 20,
      delay: 0.5,
    },
  },
};

export const overlayVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,

    transition: {
      type: "ease",
    },
  },
};

export const fadeIn = {
  hidden: {
    x: -100,
    y: 0,
    opacity: 0,
  },
  visible: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      type: "right",
      delay: 0.5,
      duration: 0.75,
      ease: "easeOut",
    },
  },
};

export const bannerVariants: Variants = {
  hidden: {
    y: 100,
    opacity: 0,
    scaleY: 0.2,
  },
  visible: {
    y: 0,
    opacity: 1,
    scaleY: 1,
    transition: {
      type: "spring",
      bounce: 0.45,
      duration: 0.8,
    },
  },
};

export const opacityVariants = (type: "first" | "second") => ({
  offscreen: {
    opacity: 0,
  },
  onscreen: {
    opacity: 1,
    transition: {
      type: "spring",
      duration: type === "first" ? 1 : 1.8,
      delay: type === "first" ? 0.3 : 0.5,
    },
  },
});

export const titleVariants = (type: "first" | "second") => ({
  offscreen: {
    y: type === "first" ? 300 : 100,
    opacity: 0,
    scaleY: type === "first" ? 0.5 : 0.7,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    scaleY: 1,
    transition: {
      type: "spring",
      bounce: type === "first" ? 0.45 : 0.35,
      duration: type === "first" ? 0.8 : 0.7,
      delay: type === "first" ? 0 : 0.3,
    },
  },
});

export const hoverVariants = (type: "first" | "second") => ({
  offscreen: {
    y: type === "first" ? -15 : 15,
    scaleX: type === "first" ? 0.5 : 0.6,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    scaleX: 1,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 10,
    },
  },
});
