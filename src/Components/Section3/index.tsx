import { Box, Stack } from "@mui/material";
import { motion, AnimatePresence, useScroll, useTransform, animate, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
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
  RootWrapper,
} from "./style";
import Footer from "../Footer";
import SocialIcons from "../SocialIcons";
import { ArrowDown, Atom, Butterfly, Fan, Flower, Hourglass, Plant, Play, Plus, Tooth } from "@phosphor-icons/react";
import { colors } from "../../styles/colors";
import { Login, SignUp } from "../Header/style";
import ImageStack from "./ImageStack";
import { IconVariant1, IconVariant3 } from "../Section2/variants";
import { ButtonVariant, IconVariant, slidingTextVariant } from "./variants";

const container = {
  animate: {
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.1,
    },
  },
};

const Section3 = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end start"] });
  const column1 = useTransform(scrollYProgress, [0, 1], [1, -500]);
  const column2 = useTransform(scrollYProgress, [0, 1], [1, -500]);

  const [showFooter, setShowFooter] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowFooter(true);
    }, 3500);
  }, []);

  // const containerRef = useRef(null);
  // const isInView = useInView(containerRef, { margin: "-100px" });

  return (
    <RootWrapper initial={{ y: "200%" }} animate={{ y: 0 }} transition={{ duration: 2, delay: 2 }}>
      <MainWrapper
        ref={containerRef}
        // animate={isInView && "animate"}
        variants={container}
      >
        <ContentWrapper>
          <Stack mb="30px" direction={"row"} alignItems={"center"} spacing={"5px"}>
            <CircularWrapper variants={IconVariant} initial="initial" animate="animate" width="35px" height="35px">
              <Hourglass color={colors.loading_secondary} weight="thin" size={20} />{" "}
            </CircularWrapper>
            <CircularWrapper variants={IconVariant} initial="initial" animate="animate" width="35px" height="35px">
              <Tooth color={colors.loading_secondary} weight="thin" size={20} />{" "}
            </CircularWrapper>
            <CircularWrapper variants={IconVariant} initial="initial" animate="animate" width="35px" height="35px">
              <Atom color={colors.loading_secondary} weight="thin" size={20} />{" "}
            </CircularWrapper>
          </Stack>

          <Box>
            <Box overflow={"hidden"} height={70}>
              <SlidingText variants={slidingTextVariant} initial="initial" animate="animate">
                Explore our
              </SlidingText>
            </Box>
            <Box overflow={"hidden"} height={70}>
              <SlidingText variants={slidingTextVariant} initial="initial" animate="animate">
                service, make
              </SlidingText>
            </Box>
            <Box overflow={"hidden"} height={70}>
              <SlidingText variants={slidingTextVariant} initial="initial" animate="animate">
                your smile shine
              </SlidingText>
            </Box>
          </Box>

          <Stack direction={"row"} alignItems={"center"} spacing={"10px"}>
            <GetApp variants={ButtonVariant} initial="initial" animate="animate">
              Get The App
            </GetApp>
            <MeetTeam variants={ButtonVariant} initial="initial" animate="animate">
              Meet The Team
            </MeetTeam>
          </Stack>
        </ContentWrapper>

        {showFooter && (
          <>
            <Footer />
            <SocialIcons />
          </>
        )}
      </MainWrapper>
      <Box zIndex={-1} padding-left={"20px"} width={"50%"} height={"100%"}>
        <ImageStack />
      </Box>
    </RootWrapper>
  );
};

export default Section3;
