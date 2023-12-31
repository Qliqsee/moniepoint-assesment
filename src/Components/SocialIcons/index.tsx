import { IconWrapper, MainWrapper } from "./style";
import { FacebookLogo, InstagramLogo, YoutubeLogo } from "phosphor-react";

const variants = {
  initial: { scale: 0, rotate: "-50deg", transition: { duration: 0.5 } },
  animate: { scale: 1, rotate: "0deg", transition: { duration: 0.5, delay: 1 } },
};
interface Props {
  isSection3?: boolean;
}
const SocialIcons = ({ isSection3 }: Props) => {
  return (
    <MainWrapper
      isSection3={isSection3}
      transition={{
        ease: "easeInOut",
        duration: 1,
        delay: 0.2,
      }}
    >
      <IconWrapper initial="initial" animate="animate" variants={variants}>
        <YoutubeLogo size={20} />
      </IconWrapper>
      <IconWrapper initial="initial" animate="animate" variants={variants}>
        <InstagramLogo size={20} />
      </IconWrapper>
      <IconWrapper initial="initial" animate="animate" variants={variants}>
        <FacebookLogo size={20} />
      </IconWrapper>
    </MainWrapper>
  );
};

export default SocialIcons;
