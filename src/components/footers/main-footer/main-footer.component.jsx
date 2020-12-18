import React from 'react';
import './main-footer.styles.scss';

const Footer = () => (
  <div className='footer-container'>
    <div className='footer'>
      <span className='item'>Copyright 2020</span>
      <li className='item'>
          <a target="_self" href="/">
              <span >Privacy</span>
          </a>
      </li>
      <li className='item'>
          <a target="_self" href="/">
              <span >Terms and Conditions</span>
          </a>
      </li>
    </div>
  </div>
);

export default Footer;