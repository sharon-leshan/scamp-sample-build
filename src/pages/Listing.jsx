import React from 'react';

import { ReactComponent as Logo } from '../assets/icons/logo.svg';
import { ListingPageFooterC1, ListingPageFooterC2 } from '../data/footerLinks';

import BlogCategories from '../components/blog/Categories';
import BlogOverview from '../components/blog/Overview';
import Footer from '../components/footer/Footer';
import FooterCopyRightLinks from '../components/footer/CopyRightLinks';
import FooterEmailSection from '../components/footer/EmailSection';
import FooterLinks from '../components/footer/FooterLinks';
import FooterSection from '../components/footer/FooterSection';
import HeroContent from '../components/hero/HeroContent';
import HeroSection from '../components/hero/HeroSection';
import NewsletterCTA from '../components/newsletterCTA/NewsletterCTA';
import Pagination from '../components/pagination/Pagination';


const ListingPage = () => {
  return (
    <>
      <div className="container">
        <HeroSection>
          <HeroContent
            subHeading="Our blog"
            heading="Resources and insights"
            supportingText="
        The latest industry news, interviews, technologies, and resources"
          />
        </HeroSection>
        <section aria-label="blog section" className="blog-section">
          <BlogCategories />
          <BlogOverview />
          <Pagination />
        </section>
      </div>
      <NewsletterCTA />
      <Footer>
        <FooterSection ariaLabel="footer logo and links">
          <Logo />
          <div className="footer__content">
            <FooterLinks data={ListingPageFooterC1} />
            <FooterLinks data={ListingPageFooterC2} />
          </div>
        </FooterSection>
        <FooterEmailSection />
        <FooterCopyRightLinks />
      </Footer>
    </>
  );
};

export default ListingPage;
