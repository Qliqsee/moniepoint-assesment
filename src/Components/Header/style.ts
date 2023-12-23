import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { colors } from '../../styles/colors';
import { Box, Stack } from '@mui/material';

export const MainWrapper = styled(motion.div)`
  font-size: 1.8rem;
  height: 156px;
  padding: 20px 108px;
  color: ${colors.black};
`;
export const InnerWrapper = styled(Stack)`
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;

// Left Menu area styles
export const LeftWrapper = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Menu = styled(Box)`
  border: 1px solid ${colors.black};
  border-radius: 20px;
  font-weight: 600;
  padding: 5px 10px;
  font-size: 13px;
`;
export const HamburgerWrapper = styled(Stack)`
  border: 1px solid ${colors.black};
  border-radius: 50%;
  width: 30px;
  height: 30px;
`;
export const HamburgerShortStroke = styled(Box)`
  height: 1px;
  width: 40%;
  background-color: ${colors.black};
`;
export const HamburgerLongStroke = styled(HamburgerShortStroke)`
  width: 50%;
  transform: translateX(-1px);
`;

// Middle Menu area styles
export const MiddleWrapper = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow-x: hidden;
  padding: 5px 0;
  min-width: 30px;
`;
export const ToothIconWrapper = styled(Stack)`
  border-radius: 50%;
  width: 30px;
  height: 30px;
  background-color: ${colors.loading_secondary};
  position: absolute;
  left: 0;
`;
export const MiddleAreaText = styled(Stack)`
  padding: 5px 10px;
  font-weight: 500;
  font-size: 14px;
`;
// Right Menu area styles
export const RightWrapper = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Login = styled(Box)`
  border: 1px solid ${colors.black};
  border-radius: 40px;
  font-weight: 500;
  padding: 6px 10px;
  font-size: 13px;
  background-color: transparent;
`;
export const SignUp = styled(Box)`
  border-radius: 40px;
  font-weight: 500;
  padding: 6px 10px;
  font-size: 13px;
  background-color: ${colors.loading_secondary};
  color: white;
`;
