import React from 'react';


const Image = ({ imgURL, caption, ...props }) => (
  <figure className="figure-container" {...props}>
    <img
      className="figure-container__img"
      src={require(`../../${imgURL}`)}
      alt=""
    />
    {caption && (
      <figcaption className="figure-container__caption medium-text">
        {caption}
      </figcaption>
    )}
  </figure>
);

export default Image;
