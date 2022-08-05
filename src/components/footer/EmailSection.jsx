import React from 'react';
import EmailCapture from '../EmailCapture';
import FooterSection from './FooterSection';

const EmailSection = () => (
  <FooterSection ariaLabel="email capture">
    <EmailCapture className="footer__email-capture">
      Stay up to date
    </EmailCapture>
  </FooterSection>
);

export default EmailSection;
