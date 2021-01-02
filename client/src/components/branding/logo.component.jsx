import React from 'react';
import name from  '../../assets/logo.png';
import logo from  '../../assets/calogo.svg';
import './branding.styles.scss';

const Logo =  () => (
    <>
        <img className='svglogo' src={logo} alt="Logo" /> 
        <img className='svgname' src={name} alt="name" />
    </>
    )

export default Logo;
