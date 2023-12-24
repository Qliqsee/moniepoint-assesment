import { Box, Stack } from "@mui/material";
import { motion, AnimatePresence, useScroll, useTransform, animate, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";
import {
  Pill,
  CircularArrowWrapper,
  ContentWrapper,
  InnerWrapper,
  MainWrapper,
  SlidingText,
  CircularWrapper,
  SmallText,
  TextContent,
  RoundedEdge,
  PlayButtonWrapper,
  GetStartedWrapper,
  GetApp,
  MeetTeam,
} from "./style";
import Footer from "../Footer";
import SocialIcons from "../SocialIcons";
import { ArrowDown, Atom, Butterfly, Fan, Flower, Hourglass, Plant, Play, Plus, Tooth } from "@phosphor-icons/react";
import { colors } from "../../styles/colors";
import { Login, SignUp } from "../Header/style";
import ImageStack from "./ImageStack";

const container = {
  animate: {
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.1,
    },
  },
};

const Section3 = () => {
  //   const container = useRef(null);
  //   const { scrollYProgress } = useScroll({ target: container, offset: ['start end', 'end start'] });
  //   const y = useTransform(scrollYProgress, [0, 1], [1, 1000]);

  //   useEffect(() => {
  //     setTimeout(() => {
  //       setPlayMarquee(true);
  //     }, 2000);
  //   }, []);

  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { margin: "-100px" });

  return (
    <Stack width={"100%"} height={"100%"} direction={"row"}>
      <MainWrapper
        ref={containerRef}
        // animate={isInView && "animate"}
        variants={container}
      >
        <Stack pl="50px" spacing={"30px"}>
          <Stack direction={"row"} alignItems={"center"} spacing={"5px"}>
            <CircularWrapper width="35px" height="35px">
              <Hourglass color={colors.loading_secondary} weight="thin" size={20} />{" "}
            </CircularWrapper>
            <CircularWrapper width="35px" height="35px">
              <Tooth color={colors.loading_secondary} weight="thin" size={20} />{" "}
            </CircularWrapper>
            <CircularWrapper width="35px" height="35px">
              <Atom color={colors.loading_secondary} weight="thin" size={20} />{" "}
            </CircularWrapper>
          </Stack>

          <Box>
            <SlidingText>Explore our</SlidingText>
            <SlidingText>service, make</SlidingText>
            <SlidingText>your smile shine</SlidingText>
          </Box>

          <Stack direction={"row"} alignItems={"center"} spacing={"10px"}>
            <GetApp>Get The App</GetApp>
            <MeetTeam>Meet The Team</MeetTeam>
          </Stack>
        </Stack>

        <Footer />
        <SocialIcons />
      </MainWrapper>
      <Box zIndex={-1} padding-left={"20px"} width={"50%"} height={"100%"}>
        <ImageStack />
      </Box>
    </Stack>
  );
};

export default Section3;
