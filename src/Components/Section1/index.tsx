import { Box } from "@mui/material";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";
import { CircularArrowWrapper, ContentWrapper, InnerWrapper, MainWrapper, TextContent } from "./style";
import Footer from "../Footer";
import SocialIcons from "../SocialIcons";
import { ArrowDown } from "@phosphor-icons/react";
import ImageDeck from "./ImageDeck";

const container = {
  animate: {
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.1,
    },
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
    <MainWrapper variants={container}>
      <InnerWrapper>
        <ContentWrapper>
          <ImageDeck />
          <TextContent initial={{ y: 400, rotate: "30deg" }} animate={{ y: 0, rotate: "0deg" }} transition={{ duration: 1 }}>
            OUR ADVANTAGES
          </TextContent>
        </ContentWrapper>
      </InnerWrapper>
      <Footer />
      <SocialIcons />
      <CircularArrowWrapper initial={{ y: 0 }} animate={{ y: 40, transition: { delayChildren: 1, duration: 1 } }}>
        <motion.span
          transition={{ duration: 20 }}
          animate={{ y: [0, 15, 0, 15, 0, 15, 0, 15, 0, 15, 0, 15, 0, 15, 0, 15, 0, 15, 0, 15, 0] }}
        >
          <ArrowDown weight="thin" size={30} />
        </motion.span>
      </CircularArrowWrapper>
    </MainWrapper>
  );
};

export default Section1;
