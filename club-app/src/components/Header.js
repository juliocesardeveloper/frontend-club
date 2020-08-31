import React from 'react';

import './Header.css';
import clubLogo from '../assets/images/clon-uber-pin.png';

export const Header = () => {
  return (
    <>
      <div className="header">
        <img src={ clubLogo } alt="Logo Club" />
        <a href="/">Logout</a>
      </div>
    </>
  )
}

