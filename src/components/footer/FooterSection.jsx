import React from 'react';

const FooterSection = ({ ariaLabel, children, ...props }) => (
  <section aria-label={ariaLabel} {...props}>
    {children}
  </section>
);

export default FooterSection;
