import React from 'react';
import { links } from '../../data/footerLinks';
import Copyright from '../../components/Copyright';
import FooterLinks from '../../components/footer/FooterLinks';
import FooterSection from '../../components/footer/FooterSection';
import './footerCopyrightLinks.scss';

const CopyRightLinks = () => (
  <FooterSection
    ariaLabel="privacy, terms and cookies links"
    className="copyright-links"
  >
    <div className="copyright-links__content">
      <FooterLinks data={links} isOnlyRow />
      <Copyright />
    </div>
  </FooterSection>
);

export default CopyRightLinks;
