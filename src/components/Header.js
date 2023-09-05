// components/Header.js
import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div className="header">
      <img className="header-logo" src="https://www.mdlcv.org/wp-content/uploads/2021/11/MDLCV_Logo1_S_GreenBluemob.png" alt="MDLCV Logo" />
      <div className="header-title">2023 Environmental Scorecard</div>
    </div>
  );
};

export default Header;
