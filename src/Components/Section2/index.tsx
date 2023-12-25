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
  ToothWrapper,
} from "./style";
import Footer from "../Footer";
import SocialIcons from "../SocialIcons";
import { Atom, Hourglass, Play, Plus } from "phosphor-react";
import { colors } from "../../styles/colors";
import { useRef } from "react";
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

  return (
    <MainWrapper ref={containerRef} animate={isInView && "animate"} variants={container}>
      {/* {isInView && (
        <> */}
      <motion.div initial={{ y: "100%" }} animate={isInView && { y: 0 }} transition={{ duration: 2 }}>
        <Stack mb="40px" direction={"row"} justifyContent={"flex-end"} spacing={"10px"}>
          <SlidingText variants={slidingTextVariant} initial="initial" animate={isInView && "animate"}>
            Revolutionalizing
          </SlidingText>
          <motion.div
            variants={SolutionVariant}
            initial="initial"
            animate={isInView && "animate"}
            style={{ paddingTop: 10, overflow: "hidden", textWrap: "nowrap" }}
          >
            <Stack direction={"row"} alignItems={"center"} spacing={"5px"}>
              <CircularWrapper
                variants={IconVariant1}
                initial="initial"
                animate={isInView && "animate"}
                width="18px"
                height="18px"
              >
                <Hourglass color={colors.loading_secondary} weight="thin" size={12} />{" "}
              </CircularWrapper>
              <ToothWrapper variants={IconVariant2} initial="initial" animate={isInView && "animate"} width="18px" height="18px">
                {/* <Tooth color={colors.loading_secondary} weight="thin" size={12} />{" "} */}
                <img src="/tooth2.svg" width={12} height={12} alt="" />
              </ToothWrapper>
              <CircularWrapper
                variants={IconVariant3}
                initial="initial"
                animate={isInView && "animate"}
                width="18px"
                height="18px"
              >
                <Atom color={colors.loading_secondary} weight="thin" size={12} />{" "}
              </CircularWrapper>
            </Stack>
            <Box mt="10px">
              <SmallText variants={SmallTextVariant1} initial="initial" animate={isInView && "animate"}>
                Modern Solutions,
              </SmallText>
              <SmallText variants={SmallTextVariant2} initial="initial" animate={isInView && "animate"}>
                Timeless Smiles
              </SmallText>
            </Box>
          </motion.div>
        </Stack>

        <Stack mb="40px" direction={"row"} alignItems={"center"} spacing={"10px"}>
          <AssistanceWrapper variants={AssistanceWrapperVariant} initial="initial" animate={isInView && "animate"}>
            <Pill variants={AssistancePillVariant} initial="initial" animate={isInView && "animate"}>
              <motion.span variants={AssistanceTextVariant} initial="initial" animate={isInView && "animate"}>
                Assistance
              </motion.span>
            </Pill>
            <ToothWrapper
              variants={AssistanceIconVariant}
              initial="initial"
              animate={isInView && "animate"}
              width="40px"
              height="40px"
              bg={colors.loading_secondary}
            >
              {/* <Tooth color={colors.white} weight="thin" size={27} />{" "} */}
              <img src="/tooth.svg" width={27} height={27} alt="" />
            </ToothWrapper>
          </AssistanceWrapper>
          <SlidingText variants={slidingTextVariant} initial="initial" animate={isInView && "animate"}>
            Dental
          </SlidingText>
          <AvatarStack variants={DualAvatarWrapperVariant} initial="initial" animate={isInView && "animate"}>
            <CircularWrapper
              variants={DualAvatarVariant1}
              initial="initial"
              animate={isInView && "animate"}
              style={{ zIndex: 2 }}
              width="85px"
              height="85px"
              bg={colors.loading_secondary}
            >
              <img loading="lazy" src="image5.jpg" alt="" />
            </CircularWrapper>{" "}
            <CircularWrapper
              variants={DualAvatarVariant2}
              initial="initial"
              animate={isInView && "animate"}
              style={{ marginLeft: -30 }}
              width="85px"
              height="85px"
              bg={colors.skyblue}
            >
              {/* <Fan color={colors.loading_secondary} weight="fill" size={80} />{" "} */}
              <img src="/fan.svg" width={80} height={80} alt="" />
            </CircularWrapper>
          </AvatarStack>
          <SlidingText variants={slidingTextVariant} initial="initial" animate={isInView && "animate"}>
            Care
          </SlidingText>
        </Stack>

        <Stack direction={"row"} alignItems={"center"} justifyContent={"flex-end"} spacing={"10px"}>
          <SlidingText variants={slidingTextVariant} initial="initial" animate={isInView && "animate"}>
            With technology
          </SlidingText>
          <AvatarStack
            style={{ gap: 10 }}
            variants={MultipleAvatarWrapperVariant}
            initial="initial"
            animate={isInView && "animate"}
          >
            <AvatarStack>
              <CircularWrapper
                variants={MultipleAvatarVariant1}
                initial="initial"
                animate={isInView && "animate"}
                style={{ zIndex: 3 }}
                width="50px"
                height="50px"
                bg={colors.loading_secondary}
              >
                <img loading="lazy" src="image15.jpg" alt="" />
              </CircularWrapper>
              <CircularWrapper
                variants={MultipleAvatarVariant2}
                initial="initial"
                animate={isInView && "animate"}
                style={{ zIndex: 2, marginLeft: -20 }}
                width="50px"
                height="50px"
                bg={colors.loading_secondary}
              >
                <img loading="lazy" src="image14.jpg" alt="" />
              </CircularWrapper>
              <CircularWrapper
                variants={MultipleAvatarVariant3}
                initial="initial"
                animate={isInView && "animate"}
                style={{ zIndex: 1, marginLeft: -20 }}
                width="50px"
                height="50px"
                bg={colors.loading_secondary}
              >
                <img loading="lazy" src="image8.jpg" alt="" />
              </CircularWrapper>
              <CircularWrapper
                variants={MultipleAvatarVariant4}
                initial="initial"
                animate={isInView && "animate"}
                style={{ marginLeft: -20 }}
                width="50px"
                height="50px"
                bg={colors.loading_secondary}
              >
                <img loading="lazy" src="image9.jpg" alt="" />
              </CircularWrapper>
            </AvatarStack>
            <CircularWrapper
              variants={PlusIconVariant}
              initial="initial"
              animate={isInView && "animate"}
              width="16px"
              height="16px"
            >
              <Plus color={colors.loading_secondary} size={13} />{" "}
            </CircularWrapper>
          </AvatarStack>
        </Stack>

        <GetStartedWrapper variants={GetStartedVariant} initial="initial" animate={isInView && "animate"}>
          <CircularWrapper bg={colors.loading_secondary} width="90%" height="90%">
            <Box textAlign={"center"} color={"white"}>
              <Box>Get</Box>
              <Box>Started</Box>
            </Box>
          </CircularWrapper>
        </GetStartedWrapper>
      </motion.div>

      <RoundedEdge variants={PlayCardVariant} initial="initial" animate={isInView && "animate"}>
        <img loading="lazy" src="image6.jpg" alt="" />
        <PlayButtonWrapper variants={PlayIconVariant} initial="initial" animate={isInView && "animate"}>
          <CircularWrapper width="100%" height="100%">
            <Play color={colors.loading_secondary} weight="fill" size={13} />{" "}
          </CircularWrapper>
        </PlayButtonWrapper>
      </RoundedEdge>

      <Footer />
      <SocialIcons />
      {/* </>
      )} */}
    </MainWrapper>
  );
};

export default Section2;
