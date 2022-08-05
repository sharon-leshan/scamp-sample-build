import React, { Fragment } from 'react';

const ParagraphSection = ({ paragraphs }) => (
  <>
    {paragraphs.map((paragraph, index) => {
      if (index !== paragraph.length - 1)
        return (
          <Fragment key={index}>
            <p className="rich-text">{paragraph}</p>
            <br />
          </Fragment>
        );
      return (
        <p key={index} className="rich-text">
          {paragraph}
        </p>
      );
    })}
  </>
);

export default ParagraphSection;
