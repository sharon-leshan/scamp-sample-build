import React from 'react';


const AttributionCard = ({ author, date, category }) => (
  <section className="attribution-card" aria-label="attribution card">
    <div>
      <p className="medium-text attribution-card__text">{author}</p>
      <p className="medium-text attribution-card__text">{date}</p>
    </div>
    <span className="medium-text attribution-card__text">{category}</span>
  </section>
);

export default AttributionCard;
