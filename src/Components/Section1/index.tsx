import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CircularArrowWrapper, ContentWrapper, InnerWrapper, MainWrapper, TextContent } from "./style";
import Footer from "../Footer";
import SocialIcons from "../SocialIcons";
import { ArrowDown } from "phosphor-react";
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
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { margin: "-100px" });

  const moveToSection2 = () => {
    const section2 = document.getElementById("section-2");
    section2?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <MainWrapper ref={containerRef} animate={isInView && "animate"} variants={container}>
      {isInView && (
        <>
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
          <CircularArrowWrapper
            onClick={moveToSection2}
            initial={{ y: 0 }}
            animate={{ y: 40, transition: { delayChildren: 1, duration: 1 } }}
          >
            <motion.span
              transition={{ duration: 20 }}
              animate={{ y: [0, 15, 0, 15, 0, 15, 0, 15, 0, 15, 0, 15, 0, 15, 0, 15, 0, 15, 0, 15, 0] }}
            >
              <ArrowDown weight="thin" size={30} />
            </motion.span>
          </CircularArrowWrapper>
        </>
      )}
    </MainWrapper>
  );
};

export default Section1;
