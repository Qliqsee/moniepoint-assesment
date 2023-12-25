export const IconVariant = {
  initial: { scale: 0, rotate: "-50deg" },
  animate: { scale: 1, rotate: "0deg", transition: { duration: 3, delay: 3 } },
};

export const slidingTextVariant = {
  initial: {
    y: 400,
    rotate: "30deg",
  },
  animate: {
    y: 0,
    rotate: "0deg",
    transition: {
      duration: 3,
      delay: 2.5,
    },
  },
};
export const ButtonVariant = {
  initial: {
    opacity: 0,
    scale: 0,
  },
  animate: {
    scale: 1,
    opacity: 1,

    transition: {
      duration: 3,
      delay: 2.5,
    },
  },
};

export const flip = {
  initial: {
    transform: "rotateY(-90deg)",
    opacity: 0.5,
  },
  animate: {
    transform: "  rotateY(0deg)",
    opacity: 1,
    transition: {
      duration: 3,
      delay: 3,
    },
  },
};

export const GalleryVaraint1 = {
  animate: {
    y: [0, -450, 0],
    transition: {
      duration: 4,
      delay: 5,
    },
  },
};
export const GalleryVaraint2 = {
  animate: {
    y: [0, 400, 0],
    transition: {
      duration: 4,
      delay: 5,
    },
  },
};
