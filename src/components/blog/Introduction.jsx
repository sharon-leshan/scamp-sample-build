import React, { Fragment } from 'react';

import Section from '../section/Section';
import ParagraphSection from '../paragraphSection/ParagraphSection';

const Introduction = () => (
  <Section heading="Introduction">
    <ParagraphSection
      paragraphs={[
        'Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam suspendisse morbi eleifend faucibus eget vestibulum felis. Dictum quis montes, sit sit. Tellus aliquam enim urna, etiam. Mauris posuere vulputate arcu amet, vitae nisi, tellus tincidunt. At feugiat sapien varius id.',
        <Fragment>
          Eget quis mi enim, leo lacinia pharetra, semper. Eget in{' '}
          <a href="/" className="underline">
            volutpat mollis
          </a>
          at volutpat lectus velit, sed auctor. Porttitor fames arcu quis fusce
          augue enim. Quis at habitant diam at. Suscipit{' '}
          <a href="/" className="underline">
            tristique risus
          </a>
          , at donec. In turpis vel et quam imperdiet. Ipsum molestie aliquet
          sodales id est ac volutpat.
        </Fragment>,
      ]}
    />
  </Section>
);

export default Introduction;
