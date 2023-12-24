import { motion } from "framer-motion";
import { GrandChild, IconWrapper, ImageDeckWrapper, TextWrapper } from "./style";
import { Box, Stack } from "@mui/material";
import { Gear, HandPointing, Polygon, UserFocus } from "@phosphor-icons/react";

const container = {
  hidden: {
    bottom: "10%",
    opacity: 0,
  },
  show: {
    opacity: 1,
    bottom: "50%",
    transition: {
      duration: 1,

      staggerDirection: -1,
    },
  },
};
const item1 = {
  show: {
    rotate: ["-45deg", "-35deg", "-23deg"],
    transition: {
      duration: 2,
      delayChildren: 5,
      staggerChildren: 3,
    },
  },
};

const item2 = {
  show: {
    rotate: ["-45deg", "-35deg", "-16deg"],
    transition: {
      duration: 2,
      delayChildren: 4,
      staggerChildren: 3,
    },
  },
};

const item3 = {
  show: {
    rotate: ["-45deg", "-35deg", "-9deg"],
    transition: {
      duration: 2,
      delayChildren: 3,
      staggerChildren: 3,
    },
  },
};

const item4 = {
  show: {
    rotate: ["-45deg", "-35deg", "-2deg"],
    transition: {
      duration: 2,
      delayChildren: 2,
      staggerChildren: 3,
    },
  },
};

const itemGrandChild = {
  show: (deg: string) => ({
    y: "-300%",
    x: 250,
    rotate: deg,
    transition: {
      duration: 0.5,
    },
  }),
};
const itemchild = {
  show: (deg: string) => ({
    rotate: deg,
    transition: {
      duration: 2,
      delayChildren: 1,
    },
  }),
};

const ImageDeck = () => {
  return (
    <ImageDeckWrapper>
      <motion.div variants={container} initial="hidden" animate="show" exit="exit" className="inner-wrapper">
        <ImageBlock
          icon={<UserFocus size={18} />}
          text="Personalized care"
          src="/image1.jpg"
          variants={item1}
          deg={"27deg"}
          id="image-1"
        />
        <ImageBlock
          icon={<Polygon size={18} />}
          text="modern solutions"
          src="/image2.jpg"
          variants={item2}
          deg={"20deg"}
          id="image-2"
        />
        <ImageBlock
          icon={<HandPointing size={18} />}
          text="Convenience"
          src="/image3.jpg"
          variants={item3}
          deg={"13deg"}
          id="image-3"
        />
        <ImageBlock
          icon={<Gear size={18} />}
          text="Advanced Technology"
          src="/image4.jpg"
          variants={item4}
          deg={"6deg"}
          id="image-4"
        />
      </motion.div>
    </ImageDeckWrapper>
  );
};

interface ImageBlockProps {
  variants: any;
  deg: string;
  id: string;
  src: string;
  icon: any;
  text: string;
}

export const ImageBlock = ({ variants, id, deg, src, icon, text }: ImageBlockProps) => {
  return (
    <motion.div variants={variants} className={`image-block ${id}`}>
      <motion.div variants={itemchild} custom={"-4deg"}>
        <GrandChild variants={itemGrandChild} custom={deg}>
          <Stack
            position={"absolute"}
            width={"100%"}
            bottom={50}
            direction={"row"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <IconWrapper>{icon}</IconWrapper>
            <TextWrapper>{text}</TextWrapper>
          </Stack>
          <img src={src} alt={id} />
        </GrandChild>
      </motion.div>
    </motion.div>
  );
};
export default ImageDeck;
