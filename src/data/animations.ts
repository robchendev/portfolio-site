export const allyVariants = {
  attack: {
    rotate: 10,
    scale: 0.7,
    x: 350,
    y: -100,
    transition: { type: "spring", stiffness: 260, damping: 20 },
  },
  hit: {
    rotate: [0, -10, -10, 0, 0],
    scale: [1, 1.1, 1.1, 1, 1],
    x: [0, -20, -20, 0, 0],
    y: [0, -20, -20, 0, 0],
    filter: [
      "brightness(100%)",
      "brightness(0%)",
      "brightness(100%)",
      "brightness(0%)",
      "brightness(100%)",
    ],
    transition: { duration: 0.6 },
  },
  initial: { scale: 1, x: 0, y: 0, rotate: 0, filter: "brightness(100%)" },
};

export const enemyVariants = {
  attack: {
    rotate: -10,
    scale: 1.35,
    x: -330,
    y: 130,
    transition: { type: "spring", stiffness: 260, damping: 20 },
  },
  hit: {
    rotate: [0, 10, 10, 0, 0],
    scale: [1, 0.9, 0.9, 1, 1],
    x: [0, 50, 50, 0, 0],
    y: [0, -50, -50, 0, 0],
    filter: [
      "brightness(100%)",
      "brightness(0%)",
      "brightness(100%)",
      "brightness(0%)",
      "brightness(100%)",
    ],
    transition: { duration: 0.6 },
  },
  initial: { scale: 1, x: 0, y: 0, rotate: 0, filter: "brightness(100%)" },
};

export const enemyDeathVariants = {
  animate: {
    y: 100,
    scale: 0,
    opacity: 0,
    transition: { duration: 0.2, type: "spring", stiffness: 200, damping: 40 },
  },
  initial: { scale: 1, y: 0, opacity: 1 },
};

export const allyDeathVariants = {
  animate: {
    y: 100,
    scale: 0,
    opacity: 0,
    transition: { duration: 0.2, type: "spring", stiffness: 200, damping: 40 },
  },
  initial: { scale: 1, y: 0, opacity: 1 },
};

export const allySwitchVariants = {
  return: {
    x: -500,
    y: 500,
    scale: 0,
    transition: { duration: 0.2, type: "spring", stiffness: 100, damping: 40 },
  },
  enter: {
    x: 0,
    y: 0,
    scale: 1,
    // transition: { type: "spring", stiffness: 260, damping: 20 },
    transition: { duration: 0.1, type: "spring", stiffness: 200, damping: 20 },
  },
  initial: { scale: 1, x: 0, y: 0, rotate: 0 },
};

export const allyInfoSwitchVariants = {
  return: {
    x: 100,
    transition: { type: "spring", stiffness: 260, damping: 20 },
  },
  enter: {
    x: 0,
    transition: { type: "spring", stiffness: 260, damping: 20 },
  },
  initial: { scale: 1, x: 0, y: 0, rotate: 0 },
};
