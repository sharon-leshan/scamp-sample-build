import React from 'react';

import './badgeGroup.scss';

const BadgeGroup = ({ badge, message, className }) => {
  return (
    <div className={`badge-group ${className}`}>
      <div className="badge-group__title">
        <span className="small-text badge-group__text">{badge}</span>
      </div>
      <span className="small-text badge-group__text">{message}</span>
    </div>
  );
};

export const Badge = ({ badge, ...otherProps }) => {
  return (
    <div className="badge" {...otherProps}>
      <span className="small-text badge__text">{badge}</span>
    </div>
  );
};

export default BadgeGroup;
