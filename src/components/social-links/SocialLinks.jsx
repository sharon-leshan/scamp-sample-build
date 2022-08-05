import React from 'react';

import { ReactComponent as Clipboard } from '../../assets/icons/copy.svg';
import { ReactComponent as Twitter } from '../../assets/icons/twitter-lg.svg';
import { ReactComponent as Facebook } from '../../assets/icons/facebook-lg.svg';
import { ReactComponent as LinkedIn } from '../../assets/icons/linkedIn-lg.svg';

import './social-links.scss';

const SocialLinks = () => {
  return (
    <section aria-label="social links" className="social-links">
      <button className="btn">
        <Clipboard />
        &nbsp;Copy link
      </button>
      <button className="btn">
        <Twitter />
      </button>
      <button className="btn">
        <Facebook />
      </button>
      <button className="btn">
        <LinkedIn />
      </button>
    </section>
  );
};

export default SocialLinks;
