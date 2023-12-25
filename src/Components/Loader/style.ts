import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { colors } from "../../styles/colors";
import { Stack } from "@mui/material";

export const MainWrapper = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  background: ${colors.loading_primary};
  position: relative;
`;
export const Container = styled(motion.div)`
  width: 100%;
  height: 100%;
  background: ${colors.loading_primary};
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

export const CircularWrapper = styled(motion.div)<{ size: string; bg?: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  height: ${({ size }) => size};
  width: ${({ size }) => size};
  background-color: ${({ bg }) => bg || colors.loading_secondary};

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 50%;
  }
`;
export const Pill = styled(motion.div)<{ bg?: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  width: 170px;
  background-color: ${({ bg }) => bg || colors.loading_secondary};
  color: white;
  border-radius: 40px;
  overflow: hidden;
  font-weight: 300;
  font-size: 30px;
  overflow: hidden;
  white-space: nowrap;
  margin-left: 15px;
  position: relative;
`;
export const Pill2 = styled(motion.div)<{ bg?: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  width: 250px;
  background-color: ${({ bg }) => bg || colors.loading_secondary};
  color: white;
  border-radius: 40px;
  overflow: hidden;
  font-weight: 300;
  font-size: 30px;
  overflow: hidden;
  white-space: nowrap;
  margin-left: 10px;
  position: relative;
  text-transform: uppercase;
  margin-right: 15px;
`;

export const FlexRow = styled(motion.div)`
  display: flex;
  align-items: center;
  flex-direction: row;
`;

export const FlexCol = styled(motion.div)`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const LogoText = styled(motion.div)`
  font-size: 25px;
  color: ${colors.loading_secondary};
  text-transform: uppercase;
`;
export const LogoWrapper = styled(motion.div)`
  position: absolute;
  top: 45%;
  left: 45%;
  opacity: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
