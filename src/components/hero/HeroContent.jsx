import React from 'react';

import './heroContent.scss';

const HeroContent = ({
  subHeading,
  heading,
  supportingText,
  children,
  ...otherProps
}) => {
  return (
    <section aria-label="header section" {...otherProps}>
      <span className="sub-heading">{subHeading}</span>
      <h1 className="heading">{heading}</h1>
      <p className="supporting-text">{supportingText}</p>
      {children}
    </section>
  );
};

export default HeroContent;
