import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ({children, ...otherProps}) => {
    
    return(
        <button onClick={otherProps.onClick} className='custom-button'>{children}</button>
    )
}

export default CustomButton