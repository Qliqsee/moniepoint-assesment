import React from 'react';
import { MainWrapper } from './style';
import { IconWithText, MyComponent } from '../Reusable';

const Loader = () => {
  return (
    <MainWrapper justifyContent={'center'} alignItems={'center'}>
      <IconWithText />
      {/* <MyComponent /> */}
    </MainWrapper>
  );
};

export default Loader;
