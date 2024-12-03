import React from 'react';
import logo from '/src/assets/images/logo-square.svg';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className }) => (
  <img
    src={logo}
    alt="Care hub Logo"
    className={className}
  />
);

export default Logo;
