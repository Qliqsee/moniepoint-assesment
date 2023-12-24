import { Box, Stack } from "@mui/material";
import { motion, useInView } from "framer-motion";
import {
  Pill,
  MainWrapper,
  SlidingText,
  CircularWrapper,
  SmallText,
  RoundedEdge,
  PlayButtonWrapper,
  GetStartedWrapper,
} from "./style";
import Footer from "../Footer";
import SocialIcons from "../SocialIcons";
import { Atom, Fan, Hourglass, Play, Plus, Tooth } from "@phosphor-icons/react";
import { colors } from "../../styles/colors";
import { useRef } from "react";

const container = {
  animate: {
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.1,
    },
  },
};
const contentWrapper = {
  animate: {
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.1,
    },
  },
};

const GetStartedVariant = {
  initial: {
    scale: 0,
    opacity: 0,
  },
  animate: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 2,
    },
  },
};
const slidingTextVariant = {
  initial: {
    height: 0,
  },
  animate: {
    height: "auto",
    transition: {
      duration: 2,
    },
  },
};

const Section2 = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { margin: "-100px" });

  return (
    <MainWrapper
      ref={containerRef}
      // animate={isInView && "animate"}
      variants={container}
    >
      <motion.div initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ duration: 2 }}>
        <Stack mb="40px" direction={"row"} justifyContent={"flex-end"} spacing={"10px"}>
          <SlidingText variants={slidingTextVariant} initial="initial" animate="animate">
            Revolutionalizing
          </SlidingText>
          <Box pt="10px">
            <Stack direction={"row"} alignItems={"center"} spacing={"5px"}>
              <CircularWrapper width="18px" height="18px">
                <Hourglass color={colors.loading_secondary} weight="thin" size={12} />{" "}
              </CircularWrapper>
              <CircularWrapper width="18px" height="18px">
                <Tooth color={colors.loading_secondary} weight="thin" size={12} />{" "}
              </CircularWrapper>
              <CircularWrapper width="18px" height="18px">
                <Atom color={colors.loading_secondary} weight="thin" size={12} />{" "}
              </CircularWrapper>
            </Stack>
            <Box mt="10px">
              <SmallText>Modern Solutions,</SmallText>
              <SmallText>Timeless Smiles</SmallText>
            </Box>
          </Box>
        </Stack>

        <Stack mb="40px" direction={"row"} alignItems={"center"} spacing={"10px"}>
          <Stack direction={"row"}>
            <Pill>Assistance</Pill>
            <CircularWrapper width="40px" height="40px" bg={colors.loading_secondary}>
              <Tooth color={colors.white} weight="thin" size={27} />{" "}
            </CircularWrapper>
          </Stack>
          <SlidingText variants={slidingTextVariant} initial="initial" animate="animate">
            Dental
          </SlidingText>
          <Stack direction={"row"} alignItems={"center"} spacing={"-30px"}>
            <CircularWrapper style={{ zIndex: 2 }} width="85px" height="85px" bg={colors.loading_secondary}>
              <img src="image1.jpg" />
            </CircularWrapper>{" "}
            <CircularWrapper width="85px" height="85px" bg={colors.skyblue}>
              <Fan color={colors.loading_secondary} weight="fill" size={80} />{" "}
            </CircularWrapper>
          </Stack>
          <SlidingText variants={slidingTextVariant} initial="initial" animate="animate">
            Care
          </SlidingText>
        </Stack>

        <Stack direction={"row"} alignItems={"center"} spacing={"10px"}>
          <SlidingText variants={slidingTextVariant} initial="initial" animate="animate">
            With technology
          </SlidingText>
          <Stack direction={"row"} alignItems={"center"} spacing={"-20px"}>
            <CircularWrapper style={{ zIndex: 3 }} width="50px" height="50px" bg={colors.loading_secondary}>
              <img src="image1.jpg" />
            </CircularWrapper>
            <CircularWrapper style={{ zIndex: 2 }} width="50px" height="50px" bg={colors.loading_secondary}>
              <img src="image1.jpg" />
            </CircularWrapper>
            <CircularWrapper style={{ zIndex: 1 }} width="50px" height="50px" bg={colors.loading_secondary}>
              <img src="image1.jpg" />
            </CircularWrapper>
            <CircularWrapper width="50px" height="50px" bg={colors.loading_secondary}>
              <img src="image1.jpg" />
            </CircularWrapper>
          </Stack>
          <CircularWrapper width="16px" height="16px">
            <Plus color={colors.loading_secondary} size={13} />{" "}
          </CircularWrapper>
        </Stack>

        <GetStartedWrapper variants={GetStartedVariant} initial="initial" animate="animate">
          <CircularWrapper bg={colors.loading_secondary} width="90%" height="90%">
            <Box textAlign={"center"} color={"white"}>
              <Box>Get</Box>
              <Box>Started</Box>
            </Box>
          </CircularWrapper>
        </GetStartedWrapper>
      </motion.div>

      <RoundedEdge>
        <img src="image1.jpg" />
        <PlayButtonWrapper>
          <CircularWrapper width="100%" height="100%">
            <Play color={colors.loading_secondary} weight="fill" size={13} />{" "}
          </CircularWrapper>
        </PlayButtonWrapper>
      </RoundedEdge>

      <Footer />
      <SocialIcons />
    </MainWrapper>
  );
};

export default Section2;
