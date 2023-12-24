import { Dot, DotText, InnerWrapper, LeftWrapper, MainWrapper, RightWrapper } from "./style";

const Footer = () => {
  return (
    <MainWrapper
      initial={{ opacity: 0, y: 180 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        ease: "easeInOut",
        duration: 1,
        delay: 0.1,
      }}
    >
      <InnerWrapper direction={"row"}>
        <LeftWrapper initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 2.5 }}>
          <Dot />
          <DotText>Your Smile, Our Passion</DotText>
        </LeftWrapper>

        <RightWrapper initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 2.5 }}>
          <DotText>Best Startup of 2023</DotText>
        </RightWrapper>
      </InnerWrapper>
    </MainWrapper>
  );
};

export default Footer;
