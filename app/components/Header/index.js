import React from 'react';
import { FormattedMessage } from 'react-intl';

import A from './A';
import Img from './Img';
import NavBar from './NavBar';
import HeaderLink from './HeaderLink';
import Banner from './banner.jpg';
import messages from './messages';
import Logo from './Logo.jpg';

function Header() {
  return (
    <header className="main">
            <Img src={Logo} id="ITM_logo" />
         
      <ul id="headlines">
      <li>
            <a href="/">Услуги</a>
          </li>
          <li>
            <a href="/">Регламент ТО</a>
          </li>
          <li>
            <a href="/">АвтоНовости</a>
          </li>
          <li>
            <a href="/">АвтоРынок</a>
          </li>
          <li>
            <a href="/">О нас</a>
          </li>
        </ul>
    </header>
  );
}

export default Header;
