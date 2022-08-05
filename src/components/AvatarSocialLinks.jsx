import React from 'react';

import AvatarGroup from './AvatarGroup';
import SocialLinks from './social-links/SocialLinks';

import './avatarSocialLinks.scss';

const AvatarSocialLinks = ({ author, authorImage }) => (
  <div className="avatar-social">
    <AvatarGroup
      author={author}
      date="Product Designer, Untitled"
      imageURL={authorImage}
    />
    <SocialLinks />
  </div>
);

export default AvatarSocialLinks;
