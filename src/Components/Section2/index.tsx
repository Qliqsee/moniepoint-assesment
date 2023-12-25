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
  AssistanceWrapper,
  AvatarStack,
} from "./style";
import Footer from "../Footer";
import SocialIcons from "../SocialIcons";
import { Atom, Fan, Hourglass, Play, Plus, Tooth } from "@phosphor-icons/react";
import { colors } from "../../styles/colors";
import { useEffect, useRef, useState } from "react";
import {
  AssistanceIconVariant,
  AssistancePillVariant,
  AssistanceTextVariant,
  AssistanceWrapperVariant,
  DualAvatarVariant1,
  DualAvatarVariant2,
  DualAvatarWrapperVariant,
  GetStartedVariant,
  IconVariant1,
  IconVariant2,
  IconVariant3,
  MultipleAvatarVariant1,
  MultipleAvatarVariant2,
  MultipleAvatarVariant3,
  MultipleAvatarVariant4,
  MultipleAvatarWrapperVariant,
  PlayCardVariant,
  PlayIconVariant,
  PlusIconVariant,
  SmallTextVariant1,
  SmallTextVariant2,
  SolutionVariant,
  container,
  slidingTextVariant,
} from "./variants";

const Section2 = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { margin: "-100px" });

  // const [render, setRender] = useState(false);

  // useEffect(() => {
  //   if (isInView && !render) {
  //     setRender(true);
  //   }
  // }, [isInView]);

  return (
    <MainWrapper ref={containerRef} animate={isInView && "animate"} variants={container}>
      {isInView && (
        <>
          <motion.div initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ duration: 2 }}>
            <Stack mb="40px" direction={"row"} justifyContent={"flex-end"} spacing={"10px"}>
              <SlidingText variants={slidingTextVariant} initial="initial" animate="animate">
                Revolutionalizing
              </SlidingText>
              <motion.div
                variants={SolutionVariant}
                initial="initial"
                animate="animate"
                style={{ paddingTop: 10, overflow: "hidden", textWrap: "nowrap" }}
              >
                <Stack direction={"row"} alignItems={"center"} spacing={"5px"}>
                  <CircularWrapper variants={IconVariant1} initial="initial" animate="animate" width="18px" height="18px">
                    <Hourglass color={colors.loading_secondary} weight="thin" size={12} />{" "}
                  </CircularWrapper>
                  <CircularWrapper variants={IconVariant2} initial="initial" animate="animate" width="18px" height="18px">
                    <Tooth color={colors.loading_secondary} weight="thin" size={12} />{" "}
                  </CircularWrapper>
                  <CircularWrapper variants={IconVariant3} initial="initial" animate="animate" width="18px" height="18px">
                    <Atom color={colors.loading_secondary} weight="thin" size={12} />{" "}
                  </CircularWrapper>
                </Stack>
                <Box mt="10px">
                  <SmallText variants={SmallTextVariant1} initial="initial" animate="animate">
                    Modern Solutions,
                  </SmallText>
                  <SmallText variants={SmallTextVariant2} initial="initial" animate="animate">
                    Timeless Smiles
                  </SmallText>
                </Box>
              </motion.div>
            </Stack>

            <Stack mb="40px" direction={"row"} alignItems={"center"} spacing={"10px"}>
              <AssistanceWrapper variants={AssistanceWrapperVariant} initial="initial" animate="animate">
                <Pill variants={AssistancePillVariant} initial="initial" animate="animate">
                  <motion.span variants={AssistanceTextVariant} initial="initial" animate="animate">
                    Assistance
                  </motion.span>
                </Pill>
                <CircularWrapper
                  variants={AssistanceIconVariant}
                  initial="initial"
                  animate="animate"
                  width="40px"
                  height="40px"
                  bg={colors.loading_secondary}
                >
                  <Tooth color={colors.white} weight="thin" size={27} />{" "}
                </CircularWrapper>
              </AssistanceWrapper>
              <SlidingText variants={slidingTextVariant} initial="initial" animate="animate">
                Dental
              </SlidingText>
              <AvatarStack variants={DualAvatarWrapperVariant} initial="initial" animate="animate">
                <CircularWrapper
                  variants={DualAvatarVariant1}
                  initial="initial"
                  animate="animate"
                  style={{ zIndex: 2 }}
                  width="85px"
                  height="85px"
                  bg={colors.loading_secondary}
                >
                  <img src="image1.jpg" alt="" />
                </CircularWrapper>{" "}
                <CircularWrapper
                  variants={DualAvatarVariant2}
                  initial="initial"
                  animate="animate"
                  style={{ marginLeft: -30 }}
                  width="85px"
                  height="85px"
                  bg={colors.skyblue}
                >
                  <Fan color={colors.loading_secondary} weight="fill" size={80} />{" "}
                </CircularWrapper>
              </AvatarStack>
              <SlidingText variants={slidingTextVariant} initial="initial" animate="animate">
                Care
              </SlidingText>
            </Stack>

            <Stack direction={"row"} alignItems={"center"} justifyContent={"flex-end"} spacing={"10px"}>
              <SlidingText variants={slidingTextVariant} initial="initial" animate="animate">
                With technology
              </SlidingText>
              <AvatarStack style={{ gap: 10 }} variants={MultipleAvatarWrapperVariant} initial="initial" animate="animate">
                <AvatarStack>
                  <CircularWrapper
                    variants={MultipleAvatarVariant1}
                    initial="initial"
                    animate="animate"
                    style={{ zIndex: 3 }}
                    width="50px"
                    height="50px"
                    bg={colors.loading_secondary}
                  >
                    <img src="image1.jpg" alt="" />
                  </CircularWrapper>
                  <CircularWrapper
                    variants={MultipleAvatarVariant2}
                    initial="initial"
                    animate="animate"
                    style={{ zIndex: 2, marginLeft: -20 }}
                    width="50px"
                    height="50px"
                    bg={colors.loading_secondary}
                  >
                    <img src="image1.jpg" alt="" />
                  </CircularWrapper>
                  <CircularWrapper
                    variants={MultipleAvatarVariant3}
                    initial="initial"
                    animate="animate"
                    style={{ zIndex: 1, marginLeft: -20 }}
                    width="50px"
                    height="50px"
                    bg={colors.loading_secondary}
                  >
                    <img src="image1.jpg" alt="" />
                  </CircularWrapper>
                  <CircularWrapper
                    variants={MultipleAvatarVariant4}
                    initial="initial"
                    animate="animate"
                    style={{ marginLeft: -20 }}
                    width="50px"
                    height="50px"
                    bg={colors.loading_secondary}
                  >
                    <img src="image1.jpg" alt="" />
                  </CircularWrapper>
                </AvatarStack>
                <CircularWrapper variants={PlusIconVariant} initial="initial" animate="animate" width="16px" height="16px">
                  <Plus color={colors.loading_secondary} size={13} />{" "}
                </CircularWrapper>
              </AvatarStack>
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

          <RoundedEdge variants={PlayCardVariant} initial="initial" animate="animate">
            <img src="image1.jpg" alt="" />
            <PlayButtonWrapper variants={PlayIconVariant} initial="initial" animate="animate">
              <CircularWrapper width="100%" height="100%">
                <Play color={colors.loading_secondary} weight="fill" size={13} />{" "}
              </CircularWrapper>
            </PlayButtonWrapper>
          </RoundedEdge>

          <Footer />
          <SocialIcons />
        </>
      )}
    </MainWrapper>
  );
};

export default Section2;
