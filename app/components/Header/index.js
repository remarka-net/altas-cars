import React from 'react';
import './index.css';
import { FormattedMessage } from 'react-intl';

import Img from './Img';
import NavBar from './NavBar';
import HeaderLink from './HeaderLink';
import messages from './messages';
import Logo from './Logo.png';


function Header() {
  return (
    <header className="main">
        <Img src={Logo} id="Logo" />
         
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

    <div className="header_contacts">
      <p>
      <a href="tel:+380953160534">(095)-316-05-34</a>
      </p>

      <p>
        <a href="tel:+380982250534">(098)-225-27-47</a>
      </p>

      <span>с 9 до 21 без выходных</span>

      </div>




    </header>
  );
}

export default Header;
