import React from 'react';
import ParagraphSection from '../paragraphSection/ParagraphSection';
import Section from '../section/Section';
import './conclusion.scss';

const Conclusion = () => (
  <div className="conclusion">
    <Section heading="Conclusion">
      <ParagraphSection
        paragraphs={[
          'Morbi sed imperdiet in ipsum, adipiscing elit dui lectus. Tellus id scelerisque est ultricies ultricies. Duis est sit sed leo nisl, blandit elit sagittis. Quisque tristique consequat quam sed. Nisl at scelerisque amet nulla purus habitasse.',
          'Nunc sed faucibus bibendum feugiat sed interdum. Ipsum egestas condimentum mi massa. In tincidunt pharetra consectetur sed duis facilisis metus. Etiam egestas in nec sed et. Quis lobortis at sit dictum eget nibh tortor commodo cursus.',
          'Odio felis sagittis, morbi feugiat tortor vitae feugiat fusce aliquet. Nam elementum urna nisi aliquet erat dolor enim. Ornare id morbi eget ipsum. Aliquam senectus neque ut id eget consectetur dictum. Donec posuere pharetra odio consequat scelerisque et, nunc tortor.',
          'Nulla adipiscing erat a erat. Condimentum lorem posuere gravida enim posuere cursus diam.',
        ]}
      />
    </Section>
  </div>
);

export default Conclusion;
