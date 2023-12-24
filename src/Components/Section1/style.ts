import styled from "@emotion/styled";
import { Box } from "@mui/material";
import { motion } from "framer-motion";
import { colors } from "../../styles/colors";

export const MainWrapper = styled(motion.div)`
  z-index: 100;
  position: relative;
  height: 100%;
  width: 100%;
  z-index: -1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const InnerWrapper = styled(Box)`
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const ContentWrapper = styled(Box)`
  width: 50%;
  display: flex;
  align-content: center;
  justify-content: center;
  width: 50%;
  display: flex;
  align-content: center;
  justify-content: center;
`;

export const TextContent = styled(motion.span)`
  font-size: 9vw;
  font-weight: 500;
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
  z-index: 1;
  cursor: pointer;
`;

// Image Dec styles

export const ImageDeckWrapper = styled(motion.div)`
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 0;
  z-index: 1;
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
