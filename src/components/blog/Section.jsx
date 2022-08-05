import React from 'react';
import AvatarSocialLinks from '../AvatarSocialLinks';
import BlockQuote from '../BlockQuote';
import BlogConclusion from './Conclusion';
import BlogDetail from './Detail';
import BlogImage from './Image';
import BlogIntroduction from './Introduction';
import OtherResources from './OtherResources';
import ParagraphSection from '../paragraphSection/ParagraphSection';
import Section from '../section/Section';

import './section.scss';

const BlogSection = ({ author, avatarImage }) => {
  return (
    <main className="blog-main">
      <section className="blog-main__brief">
        <ParagraphSection
          paragraphs={[
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donecullamcorper mattis lorem non. Ultrices praesent amet ipsum justo massa. Eu dolor aliquet risus gravida nunc at feugiat consequat purus. Non massa enim vitae duis mattis. Vel in ultricies vel fringilla.',
          ]}
        />
      </section>
      <BlogIntroduction />
      <BlogImage
        style={{ marginTop: '48px' }}
        imgURL="assets/Image.png"
        caption={
          <>
            Image courtesy of Laura Davidson via&nbsp;
            <a href="/" className="underline">
              Unsplash
            </a>
          </>
        }
      />
      <BlockQuote
        quote="In a world older and more complete than ours they move finished and complete, gifted with extensions of the senses we have lost or never attained, living by voices we shall never hear."
        author={author}
      />
      <BlogDetail />
      <Section heading={'Software and tools'}>
        <ParagraphSection
          paragraphs={[
            'Pharetra morbi libero id aliquam elit massa integer tellus. Quis felis aliquam ullamcorper porttitor. Pulvinar ullamcorper sit dictumst ut eget a, elementum eu. Maecenas est morbi mattis id in ac pellentesque ac.',
          ]}
        />
      </Section>
      <OtherResources />
      <BlogImage
        style={{ marginTop: '48px' }}
        imgURL="assets/lady-wearing-plad.png"
        caption={
          <>
            Image courtesy of Alex Loup via&nbsp;
            <a href="/" className="underline">
              Unsplash
            </a>
          </>
        }
      />
      <BlogConclusion />
      <AvatarSocialLinks author={author} authorImage={avatarImage} />
    </main>
  );
};

export default BlogSection;
