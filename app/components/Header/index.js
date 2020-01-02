import React from 'react';
import { FormattedMessage } from 'react-intl';

import A from './A';
import Img from './Img';
import NavBar from './NavBar';
import HeaderLink from './HeaderLink';
import Banner from './banner.png';
import messages from './messages';
import Logo from './Logo.jpg';

function Header() {
  return (
    <header className="main">
            <Img src={Logo} id="ITM_logo" />
         
      <ul id="headlines">
      <li>
            <HeaderLink to="/ServicesPage">Услуги</HeaderLink>
          </li>
          <li>
            <HeaderLink to="/">Регламент ТО</HeaderLink>
          </li>
          <li>
            <HeaderLink to="/">АвтоНовости</HeaderLink>
          </li>
          <li>
            <HeaderLink to="/">АвтоРынок</HeaderLink>
          </li>
          <li>
            <HeaderLink to="/">О нас</HeaderLink>
          </li>
        </ul>
    </header>
  );
}

export default Header;
