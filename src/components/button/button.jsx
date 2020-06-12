import React  from 'react';

import './button.scss';

const CustomButton = ({Children ,isGoogleSignIn, ...buttonProps}) =>(
<button className={`${isGoogleSignIn ? 'google-sign-in':''} custom-button`} {...buttonProps}>
    {Children}
</button>
);

export default CustomButton;