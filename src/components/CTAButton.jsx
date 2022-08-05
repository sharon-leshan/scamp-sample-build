import React from 'react';

import './CTAButton.scss';

const CTAButton = ({ text, isFlatBtn }) => (
  <button className={`cta-btn ${isFlatBtn ? 'btn--flat' : ''}`}>{text}</button>
);

export default CTAButton;
