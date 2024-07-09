import React from 'react';
import logoImage from '../assets/images/logo.png';

const Header: React.FC = () => {
  return (
    <header className="bg-primary text-white text-center p-3">
      <div className="container d-flex justify-content-between align-items-center">
        <h1 className="mb-0">
          <img src={logoImage} alt="WC Logo" className="logo-image" />
          William W Cobb III</h1>
        <div>
          <a href="mailto:william@2wc.com" className="text-white mr-3">
            <i className="fas fa-envelope"></i> william@2wc.com</a>
          &nbsp;|&nbsp;
          <a href="tel:+17035851065" className="text-white"><i className="fas fa-phone"></i> 703-585-1065</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
