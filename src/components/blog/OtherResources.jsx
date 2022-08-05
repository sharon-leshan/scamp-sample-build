import React from 'react';

import ParagraphSection from '../paragraphSection/ParagraphSection';
import Section from '../section/Section';

const OtherResources = () => (
  <Section heading={'Other resources'}>
    <ParagraphSection
      paragraphs={[
        'Sagittis et eu at elementum, quis in. Proin praesent volutpat egestas sociis sit lorem nunc nunc sit. Eget diam curabitur mi ac. Auctor rutrum lacus malesuada massa ornare et. Vulputate consectetur ac ultrices at diam dui eget fringilla tincidunt. Arcu sit dignissim massa erat cursus vulputate gravida id. Sed quis auctor vulputate hac elementum gravida cursus dis.',
      ]}
    />
    <br />
    <ol className="blog-main__other-resources">
      <li className="rich-text">
        Lectus id duis vitae porttitor enim&nbsp;
        <a href="/" className="underline">
          gravida morbi.
        </a>
      </li>
      <li className="rich-text">
        Eu turpis&nbsp;
        <a href="/" className="underline">
          posuere semper feugiat
        </a>
        &nbsp;volutpat elit, ultrices suspendisse. Auctor vel in vitae placerat.
      </li>
      <li className="rich-text">
        Suspendisse maecenas ac&nbsp;
        <a href="/" className="underline">
          donec scelerisque
        </a>
        &nbsp;diam sed est duis purus.
      </li>
    </ol>
  </Section>
);

export default OtherResources;
