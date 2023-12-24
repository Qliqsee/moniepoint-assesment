import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const MainWrapper = styled(motion.div)`
  position: absolute;
  right: 100px;
  bottom: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const IconWrapper = styled(motion.div)`
  height: 25px;
  width: 25px;
  background-color: rgb(255 193 7 / 7%);
  display: flex;
  justify-content: center;
  align-items: center;
`;
