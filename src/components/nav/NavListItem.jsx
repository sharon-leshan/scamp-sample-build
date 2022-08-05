import React from 'react';

import { ReactComponent as ArrowDown } from '../../assets/icons/arrow-down.svg';

const NavListItem = ({ className, text, isDropdown }) => (
  <li className={className}>
    <a href="/">{text}</a>
    {isDropdown ? <ArrowDown style={{ marginLeft: '13px' }} /> : null}
  </li>
);

export default NavListItem;
