import React from 'react';

import './blockquote.scss';

const BlockQuote = ({ quote, author }) => (
  <blockquote className="blockquote">
    <p className="blockquote__paragraph">"{quote}"</p>
    <figcaption className="blockquote__caption">
      — {author}, Product Designer
    </figcaption>
  </blockquote>
);

export default BlockQuote;
