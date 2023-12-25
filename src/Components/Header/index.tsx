import { motion } from "framer-motion";
import {
  HamburgerLongStroke,
  HamburgerShortStroke,
  HamburgerWrapper,
  InnerWrapper,
  LeftWrapper,
  Login,
  MainWrapper,
  Menu,
  MiddleAreaText,
  MiddleWrapper,
  RightWrapper,
  SignUp,
  ToothIconWrapper,
} from "./style";

const Header = () => {
  return (
    <MainWrapper
      initial={{ opacity: 0, y: -180 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        ease: "easeInOut",
        duration: 1,
        delay: 0.6,
      }}
    >
      <InnerWrapper direction={"row"}>
        <LeftWrapper initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 2.5 }}>
          <Menu>Menu</Menu>
          <HamburgerWrapper alignItems={"center"} spacing={"2.5px"} justifyContent={"center"}>
            <HamburgerShortStroke />
            <HamburgerLongStroke />
            <HamburgerShortStroke />
          </HamburgerWrapper>
        </LeftWrapper>
        <MiddleWrapper initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 2, delay: 1 }}>
          <ToothIconWrapper alignItems={"center"} spacing={"3px"} justifyContent={"center"}>
            {/* <Tooth size={16} color="white" /> */}
            <img src="/tooth.svg" width={16} height={16} alt="" />
          </ToothIconWrapper>
          <motion.div initial={{ width: 0 }} animate={{ width: 120, marginLeft: 25 }} transition={{ delay: 2, duration: 2 }}>
            <MiddleAreaText>DENTYTECH</MiddleAreaText>
          </motion.div>
        </MiddleWrapper>
        <RightWrapper initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 2.5 }}>
          <Login>Log In</Login>
          <SignUp>Sign Up</SignUp>
        </RightWrapper>
      </InnerWrapper>
    </MainWrapper>
  );
};

export default Header;
