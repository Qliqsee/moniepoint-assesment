import { CircularWrapper, Container, FlexRow, LogoText, LogoWrapper, MainWrapper, Pill, Pill2 } from "./style";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { colors } from "../../styles/colors";
import { ArrowLeft, Tooth } from "@phosphor-icons/react";
import {
  AssistancePillVariant,
  DentalPillVariant,
  Icon1Variant2,
  Icon1Variant,
  PillIconVariant,
  PillTextVariant,
  Icon1Variant3,
  LogoVariant,
  RightShiftVariant,
  LeftShiftVariant,
  MainVariant,
  LogoWrapperVariant,
  LogoTextVariant,
} from "./variant";
import { motion } from "framer-motion";
import { Box } from "@mui/material";

const Loader = () => {
  return (
    <MainWrapper>
      <Container variants={MainVariant} animate="animate">
        <FlexRow>
          <motion.div variants={RightShiftVariant} initial="initial" animate="animate" style={{ width: "fit-content" }}>
            <CircularWrapper
              variants={Icon1Variant}
              initial="initial"
              animate="animate"
              style={{ border: `2px solid ${colors.loading_secondary}` }}
              size="60px"
              bg="transparent"
            >
              <ArrowRight size={40} color={colors.loading_secondary} />
            </CircularWrapper>
          </motion.div>
          <motion.div style={{ width: "fit-content" }}>
            <motion.div variants={Icon1Variant2} initial="initial" animate="animate" style={{ width: "fit-content" }}>
              <Pill variants={DentalPillVariant} initial="initial" animate="animate">
                <CircularWrapper
                  variants={PillIconVariant}
                  initial="initial"
                  animate="animate"
                  style={{ opacity: 0, position: "absolute", right: 0, border: `2px solid ${colors.loading_secondary}` }}
                  size="60px"
                  bg={colors.loading_secondary}
                >
                  <ArrowRight size={40} color={colors.loading_primary} />
                </CircularWrapper>
                <motion.span variants={PillTextVariant} initial="initial" animate="animate">
                  DENTAL{" "}
                </motion.span>
              </Pill>
            </motion.div>
          </motion.div>
        </FlexRow>
        <FlexRow style={{ marginLeft: 300, marginTop: 40 }}>
          <motion.div variants={LeftShiftVariant} initial="initial" animate="animate" style={{ width: "fit-content" }}>
            <motion.div variants={Icon1Variant3} initial="initial" animate="animate" style={{ width: "fit-content" }}>
              <Pill2 variants={AssistancePillVariant} initial="initial" animate="animate" bg={colors.white}>
                <CircularWrapper
                  variants={PillIconVariant}
                  initial="initial"
                  animate="animate"
                  style={{
                    opacity: 0,
                    position: "absolute",
                    right: 0,
                  }}
                  size="60px"
                  bg={colors.white}
                >
                  <ArrowLeft size={40} color={colors.loading_secondary} />
                </CircularWrapper>

                <motion.span
                  style={{ color: colors.loading_secondary }}
                  variants={PillTextVariant}
                  initial="initial"
                  animate="animate"
                >
                  Assistance
                </motion.span>
              </Pill2>
            </motion.div>
          </motion.div>
          <CircularWrapper variants={LogoVariant} initial="initial" animate="animate" size="60px" bg={colors.loading_secondary}>
            <Tooth size={40} color={colors.loading_primary} />
          </CircularWrapper>
        </FlexRow>
      </Container>
      <LogoWrapper variants={LogoWrapperVariant} initial="initial" animate="animate">
        <CircularWrapper size="60px" bg={colors.loading_secondary}>
          <Tooth size={40} color={colors.loading_primary} />
        </CircularWrapper>
        <Box mt="10px" height={30} overflow={"hidden"}>
          <LogoText variants={LogoTextVariant} initial="initial" animate="animate">
            dentytech
          </LogoText>
        </Box>
      </LogoWrapper>
    </MainWrapper>
  );
};

export default Loader;
