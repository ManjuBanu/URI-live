import React from 'react';

import {CustomButtonContainer} from './style-button';

const CustomButton = ({ children, inverted,isGoogleSignIn, ...otherProps }) => (
  <CustomButtonContainer
    className={`${inverted ? 'inverted' : ''} ${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`}
    {...otherProps}
  >
    {children}
  </CustomButtonContainer>
);

export default CustomButton;
