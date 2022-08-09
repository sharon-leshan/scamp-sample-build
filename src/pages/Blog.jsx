import React from 'react';
import { useParams } from 'react-router-dom';

import useWindowSize from '../hooks/useWindowSize';
import { blogs as blogCardData } from '../data/blogs';
import { BlogPageFooterC1, BlogPageFooterC2 } from '../data/footerLinks';
import { ReactComponent as Logo } from '../assets/icons/logo.svg';

import AvatarGroup from '../components/AvatarGroup';
import BlogImage from '../components/blog/Image';
import BlogSection from '../components/blog/Section';
import BlogTypeCategories from '../components/blog/CategoryType';
import Footer from '../components/footer/Footer';
import HeadingandSupportingText from '../components/heading/HeadingandSupportingText';
import HeroContent from '../components/hero/HeroContent';
import HeroSection from '../components/hero/HeroSection';
import MorePosts from '../components/MorePosts';
import Section from '../components/section/Section';
import FooterEmailSection from '../components/footer/EmailSection';
import FooterCopyRightLinks from '../components/footer/CopyRightLinks';
import FooterLinks from '../components/footer/FooterLinks';
import FooterSection from '../components/footer/FooterSection';
import EmailCapture from '../components/EmailCapture';

const Blog = () => {
  const { width } = useWindowSize();
  const { blogId } = useParams();
  const blog = blogCardData[blogId - 1];
  const {
    categoryType,
    datePosted,
    title,
    text,
    authorImage,
    author,
    imageURL,
  } = blog;
  return (
    <>
      <div className="blog-post container">
        <HeroSection>
          <HeroContent
            subHeading={`Published on ${datePosted}`}
            heading={title}
            supportingText={text}
            className="align-center"
          >
            <BlogTypeCategories categories={categoryType} />
            {width < 900 && (
              <AvatarGroup
                imageURL={authorImage}
                author={author}
                date={datePosted}
                style={{ marginTop: '32px' }}
              />
            )}
          </HeroContent>
          <BlogImage imgURL={imageURL} style={{ marginTop: '48px' }} />
        </HeroSection>
        <BlogSection author={author} avatarImage={authorImage} />
        <Section>
          <HeadingandSupportingText
            heading="From the blog"
            supportingtTxt="The latest industry news, interviews, technologies, and resources."
          />
          <MorePosts />
        </Section>
      </div>
      <FooterSection className="blog-post__newsletter-CTA">
        <HeadingandSupportingText
          heading="Join our newsletter"
          supportingtTxt="Sign up for the very best tutorials and the latest news."
        />
        <EmailCapture>
          We care about your data in our privacy policy.
        </EmailCapture>
      </FooterSection>
      <Footer className="footer__container blog-post__footer">
        <FooterSection
          ariaLabel="footer logo and company info"
          className="blog-post__footer__section"
        >
          <Logo />
          <p>
            Design amazing digital experiences that create more happy in the
            world.
          </p>
        </FooterSection>
        <FooterEmailSection />
        <FooterSection className="blog-post__footer__resources">
          <FooterLinks data={BlogPageFooterC1} heading="Product" />
          <FooterLinks data={BlogPageFooterC2} heading="Resources" />
        </FooterSection>
        <FooterCopyRightLinks />
      </Footer>
    </>
  );
};

export default Blog;
