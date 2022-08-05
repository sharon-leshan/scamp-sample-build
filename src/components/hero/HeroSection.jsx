import React from 'react';

import './heroSection.scss';

const HeroSection = ({ children }) => (
  <header className="hero-section">{children}</header>
);

export default HeroSection;
