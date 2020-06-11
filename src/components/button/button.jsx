import React  from 'react';

import './button.scss';

const CustomButton = ({Children , ...buttonProps}) =>(
<button className='custom-button' {...buttonProps}>
    {Children}
</button>
);

export default CustomButton;