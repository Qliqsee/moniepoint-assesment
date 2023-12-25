import { CircularWrapper, FlexRow, MainWrapper, Pill, Pill2 } from "./style";
import { IconWithText } from "./Reusable";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { colors } from "../../styles/colors";
import { ArrowArcLeft, ArrowLeft, Tooth } from "@phosphor-icons/react";
import { DentalPillIconVariant, DentalPillTextVariant, DentalPillVariant } from "./variant";
import { motion } from "framer-motion";

const Loader = () => {
  return (
    <MainWrapper
      // variants={AssistancePillVariant}
      //  initial="initial" animate="animate"
      justifyContent={"center"}
      alignItems={"center"}
    >
      <FlexRow
      // variants={AssistancePillVariant}
      //  initial="initial" animate="animate"
      >
        <CircularWrapper
          // variants={AssistancePillVariant}
          //  initial="initial" animate="animate"
          style={{ border: `2px solid ${colors.loading_secondary}` }}
          size="60px"
          bg="transparent"
        >
          <ArrowRight size={40} color={colors.loading_secondary} />
        </CircularWrapper>
        <Pill variants={DentalPillVariant} initial="initial" animate="animate">
          <CircularWrapper
            variants={DentalPillIconVariant}
            initial="initial"
            animate="animate"
            style={{ opacity: 0, position: "absolute", right: 0, border: `2px solid ${colors.loading_secondary}` }}
            size="60px"
            bg={colors.loading_secondary}
          >
            <ArrowRight size={40} color={colors.loading_primary} />
          </CircularWrapper>
          <motion.span variants={DentalPillTextVariant} initial="initial" animate="animate">
            DENTAL{" "}
          </motion.span>
        </Pill>
      </FlexRow>
      <FlexRow
        // variants={AssistancePillVariant}
        //  initial="initial" animate="animate"
        style={{ marginLeft: 200, marginTop: 10 }}
      >
        <Pill2
          // variants={AssistancePillVariant}
          //  initial="initial" animate="animate"
          bg={colors.white}
        >
          <CircularWrapper
            style={{
              opacity: 0,
              position: "absolute",
              right: 0,
            }}
            size="60px"
            bg="transparent"
          >
            <ArrowLeft size={40} color={colors.loading_secondary} />
          </CircularWrapper>
          <span style={{ color: colors.loading_secondary }}>Assistance</span>
        </Pill2>
        <CircularWrapper
          // variants={AssistancePillVariant}
          //  initial="initial" animate="animate"
          size="60px"
          bg={colors.loading_secondary}
        >
          <Tooth size={40} color={colors.loading_primary} />
        </CircularWrapper>
      </FlexRow>
    </MainWrapper>
  );
};

export default Loader;
