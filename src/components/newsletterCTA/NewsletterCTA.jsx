import React from 'react';
import EmailCapture from '../EmailCapture';

import HeadingandSupportingText from '../heading/HeadingandSupportingText';


const NewsletterCTA = () => {
  return (
    <section className="newsletter">
      <div className="newsletter__content">
        <HeadingandSupportingText
          heading="Sign up for our newsletter"
          supportingtTxt="
        Be the first to know about releases and industry news and insights."
        />
        <EmailCapture className="newsletter__hint-text">
          We care about your data in our &nbsp;
          <a href="/" className="privacy-policy-link">
            privacy policy.
          </a>
        </EmailCapture>
      </div>
    </section>
  );
};

export default NewsletterCTA;
