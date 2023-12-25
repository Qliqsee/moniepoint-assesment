import styled from "@emotion/styled";
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

export const SlidingText = styled(motion.div)`
  font-size: 6.5vw;
  font-weight: 400;
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
export const ToothWrapper = styled(motion.div)<{ width: string; height: string; bg?: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  height: ${({ height }) => height};
  width: ${({ width }) => width};
  background-color: ${({ bg }) => bg || colors.skyblue};
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
  border-radius: 40px;
  overflow: hidden;
`;

export const RoundedEdge = styled(motion.div)`
  border-radius: 20px;
  height: 120px;
  width: 200px;
  position: absolute;
  bottom: 150px;
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
  margin: auto;
  margin-top: 10px;
`;

export const AssistanceWrapper = styled(motion.div)`
  display: flex;
  width: fit-content;
  overflow: hidden;
`;

export const AvatarStack = styled(motion.div)`
  display: flex;
  align-items: center;
  overflow: hidden;
`;
