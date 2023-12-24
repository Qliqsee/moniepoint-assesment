import { Box } from "@mui/material";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";
import { CircularArrowWrapper, ContentWrapper, InnerWrapper, MainWrapper, TextContent } from "./style";
import Footer from "../Footer";
import SocialIcons from "../SocialIcons";
import { ArrowDown } from "@phosphor-icons/react";

const banner = {
  animate: {
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.1,
    },
  },
};

const bounceTransition = {
  y: {
    duration: 0.4,
    yoyo: Infinity,
    ease: "easeOut",
  },
};

const Section1 = () => {
  //   const container = useRef(null);
  //   const { scrollYProgress } = useScroll({ target: container, offset: ['start end', 'end start'] });
  //   const y = useTransform(scrollYProgress, [0, 1], [1, 1000]);

  //   useEffect(() => {
  //     setTimeout(() => {
  //       setPlayMarquee(true);
  //     }, 2000);
  //   }, []);

  return (
    <MainWrapper variants={banner}>
      <InnerWrapper>
        <ContentWrapper>
          <TextContent initial={{ y: 400, rotate: "30deg" }} animate={{ y: 0, rotate: "0deg" }} transition={{ duration: 1 }}>
            OUR ADVANTAGES
          </TextContent>
        </ContentWrapper>
      </InnerWrapper>
      <Footer />
      <SocialIcons />
      <CircularArrowWrapper>
        <motion.span
          style={{ background: "red", height: 10, width: 10 }}
          transition={bounceTransition}
          animate={{ y: ["100%", "-100%"] }}
        >
          {/* <ArrowDown weight="thin" size={30} /> */}
        </motion.span>
      </CircularArrowWrapper>
    </MainWrapper>
  );
};

export default Section1;

interface AnimatedLettersProps {
  title: string;
}
