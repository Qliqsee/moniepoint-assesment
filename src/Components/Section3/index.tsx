import { Box, Stack } from "@mui/material";
import { useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { ContentWrapper, MainWrapper, SlidingText, CircularWrapper, GetApp, MeetTeam, RootWrapper } from "./style";
import Footer from "../Footer";
import SocialIcons from "../SocialIcons";
import { Atom, Hourglass, Tooth } from "@phosphor-icons/react";
import { colors } from "../../styles/colors";
import ImageStack from "./ImageStack";
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
  const [showFooter, setShowFooter] = useState(false);
  const isInView = useInView(containerRef, { margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;
    setTimeout(() => {
      setShowFooter(true);
    }, 4500);
  }, [isInView]);

  return (
    <Box ref={containerRef} width={"100%"} height={"100%"}>
      <RootWrapper initial={{ y: "200%" }} animate={isInView && { y: 0 }} transition={{ duration: 2, delay: 2 }}>
        {isInView && (
          <>
            {" "}
            <MainWrapper variants={container}>
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
                  <SocialIcons isSection3 />
                </>
              )}
            </MainWrapper>
            <Box zIndex={-1} padding-left={"20px"} width={"50%"} height={"100%"}>
              <ImageStack />
            </Box>
          </>
        )}
      </RootWrapper>
    </Box>
  );
};

export default Section3;
