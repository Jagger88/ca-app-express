import React from 'react';
import './squarebutton.styles.scss';

const SquareButton = ({children, isGoogleSignIn, backgroundColor, ...otherProps}) => (

    <button 
        className={`squarebutton ${isGoogleSignIn ? 'google-sign-in' : ''}`} 
        style={backgroundColor && { backgroundColor }}
        {...otherProps}>
        {children}    
    </button>
)

export default SquareButton;