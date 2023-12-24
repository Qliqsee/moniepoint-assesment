import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { colors } from "../../styles/colors";
import { Stack } from "@mui/material";

export const MainWrapper = styled(motion.div)`
  position: absolute;
  bottom: 0;
  width: 100%;
  font-size: 1.8rem;
  height: 60px;
  color: ${colors.black};
  padding: 20px 0;
`;
export const InnerWrapper = styled(Stack)`
  width: 85%;
  align-items: center;
  justify-content: space-between;
  margin: auto;
`;

// Left Menu area styles
export const LeftWrapper = styled(motion.div)``;
export const Dot = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  height: 5px;
  width: 5px;
  background-color: ${colors.loading_secondary};
`;
export const DotText = styled(motion.div)`
  font-size: 12px;
  margin-top: 6px;
`;
// Right Menu area styles
export const RightWrapper = styled(motion.div)`
  display: flex;
`;
