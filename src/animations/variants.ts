import { TargetAndTransition, Transition, Variants } from "framer-motion";

export const staggerContainer: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.4,
    },
  },
};

export const staggerItem: Variants = {
  initial: { opacity: 0, scale: 0.4, y: -16 },
  animate: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.2,
      ease: "easeIn",
    },
  },
};

export const scaleXAnimation: Variants = {
  initial: { scaleX: 0 },
  hover: { scaleX: 1 },
};

export const rotate180DegreeAnimation: Variants = {
  initial: { rotate: -180 },
  hover: { rotate: 0 },
};

export const upAnimation: Variants = {
  initial: { y: 0 },
  hover: { y: -2 },
};

export const outlineAnimation: Variants = {
  initial: (customColor: string) => ({
    outline: "none",
    outlineColor: customColor,
  }),
  hover: (customColor: string) => ({
    outline: "2px solid",
    outlineColor: customColor,
  }),
};

export const hoverTransition: Transition = {
  duration: 0.15,
  ease: "easeOut",
};

export const layoutTransition: Transition = {
  duration: 0.25,
  ease: "easeInOut",
};

export const whileTap: TargetAndTransition = {
  scale: 0.9,
  opacity: 0.8,
  transition: {
    type: "spring",
    stiffness: 400,
    damping: 20,
  },
};
