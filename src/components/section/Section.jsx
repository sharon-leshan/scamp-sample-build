import React from 'react';


const Section = ({ heading, children }) => (
  <section aria-labelledby="heading" className="section-with-heading">
    <h3 id="heading">{heading}</h3>
    {children}
  </section>
);

export default Section;
