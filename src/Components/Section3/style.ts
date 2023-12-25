import styled from "@emotion/styled";
import { Box } from "@mui/material";
import { motion } from "framer-motion";
import { colors } from "../../styles/colors";

export const RootWrapper = styled(motion.div)`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
`;
export const MainWrapper = styled(motion.div)`
  z-index: 100;
  position: relative;
  height: 100%;
  width: 50%;
  z-index: -1;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const InnerWrapper = styled(Box)`
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const TextContent = styled(motion.span)`
  font-size: 9vw;
  font-weight: 300;
  position: relative;
  display: inline-block;
  white-space: nowrap;
`;

export const CircularArrowWrapper = styled(motion.div)`
  border-radius: 50%;
  height: 80px;
  width: 80px;
  position: absolute;
  bottom: 0;
  border: 1px solid ${colors.black};
  display: flex;
  justify-content: center;
`;

// Image Dec styles

export const ImageDeckWrapper = styled(motion.div)`
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 0;
  z-index: 1000000;
  .inner-wrapper {
    position: absolute;

    right: 50%;
    transform-origin: center;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: red;

    .image-block {
      position: absolute;
      &.image-1 {
        transform: rotate(-29deg);
      }
      &.image-2 {
        transform: rotate(-22deg);
      }
      &.image-3 {
        transform: rotate(-15deg);
      }
      &.image-4 {
        transform: rotate(-8deg);
      }
      img {
        width: 270px;
        height: 320px;
        object-fit: cover;
        border-radius: 20px;
      }
    }
  }
`;

export const GrandChild = styled(motion.div)`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const IconWrapper = styled(Box)`
  height: 35px;
  width: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: white;
`;
export const TextWrapper = styled(Box)`
  padding: 10px;
  background-color: white;
  font-size: 14px;
  border-radius: 40px;
  text-transform: capitalize;
`;

// Latest styles

export const SlidingText = styled(motion.div)`
  font-size: 3vw;
  font-weight: 300;
  position: relative;
  white-space: nowrap;
  text-transform: uppercase;
  overflow: hidden;
`;

export const CircularWrapper = styled(motion.div)<{ width: string; height: string; bg?: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  height: ${({ height }) => height};
  width: ${({ width }) => width};
  background-color: ${({ bg }) => bg || colors.skyblue};

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 50%;
  }
`;

export const SmallText = styled(motion.div)`
  font-size: 12px;
  margin-top: 6px;
`;

export const Pill = styled(motion.div)`
  background-color: ${colors.skyblue};
  padding: 12px 18px;
  font-size: 20px;
  color: rgb(255 89 42 / 50%);
  display: inline-block;
  border-radius: 40px;
  height: fit-content;
`;

export const RoundedEdge = styled(motion.div)`
  border-radius: 20px;
  height: 120px;
  width: 200px;
  position: absolute;
  bottom: 130px;
  left: 150px;

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 20px;
  }
`;
export const PlayButtonWrapper = styled(motion.div)`
  position: absolute;
  bottom: -10px;
  right: -15px;
  background-color: transparent;
  height: 30px;
  width: 30px;
`;

export const GetStartedWrapper = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border-bottom: 1px solid ${colors.loading_secondary};
  border-radius: 50%;
  width: 110px;
  height: 110px;
  position: absolute;
  bottom: 80px;
  right: 50%;
`;

export const GetApp = styled(motion.div)`
  border: 1px solid ${colors.black};
  border-radius: 40px;
  font-weight: 500;
  padding: 6px 10px;
  font-size: 13px;
  background-color: transparent;
  width: fit-content;
`;
export const MeetTeam = styled(motion.div)`
  border-radius: 40px;
  font-weight: 500;
  padding: 6px 10px;
  font-size: 13px;
  background-color: ${colors.loading_secondary};
  color: white;
  width: fit-content;
`;

// Section 3

export const Gallery = styled(motion.div)`
  height: 100%;
  width: 76%;
  margin: auto;
  position: relative;
  display: flex;
  height: 100%;
  z-index: -10;
`;
export const StyledColumn = styled(motion.div)`
  position: relative;
  height: 100%;
  width: 50%;
  gap: 20px;
  z-index: -10;
  &:nth-of-type(1) {
    top: 5vh;
  }
  &:nth-of-type(2) {
    top: -45vh;
  }
`;
export const ImageContainer = styled(motion.div)`
  height: 35vh;
  width: 18vw;
  position: relative;
  border-radius: 20px;
  margin-bottom: 15px;
  z-index: -10;
  img {
    object-fit: cover;
    height: 100%;
    width: 100%;
    border-radius: 20px;
  }
`;
export const ImagePill = styled(motion.div)`
  background-color: transparent;
  padding: 7px 10px;
  font-size: 14px;
  color: white;
  border: 1px solid white;
  border-radius: 40px;
  height: fit-content;
  position: absolute;
  bottom: 10px;
  left: 10px;
  z-index: 100;
`;
export const ImageIconWrapper = styled(motion.div)`
  display: flex;
  gap: 5px;
  position: absolute;
  top: 10px;
  right: 10px;
`;
export const ContentWrapper = styled(motion.div)`
  display: flex;
  padding-left: 50px;
  flex-direction: column;
`;
