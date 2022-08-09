import React from 'react';


const CTAButton = ({ text, isFlatBtn }) => (
  <button className={`cta-btn ${isFlatBtn ? 'btn--flat' : ''}`}>{text}</button>
);

export default CTAButton;
