import React from 'react';
import './index.css';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';

import Img from './Img';
import NavBar from './NavBar';
import HeaderLink from './HeaderLink';
import messages from './messages';
import Logo from './Logo.png';
import HeaderLink2 from './HeaderLink2';


function Header() {
  return (
    <header className="main">
        <HeaderLink2 to="/"><Img src={Logo} id="Logo" /></HeaderLink2>
         
      <ul id="headlines">
      <li>
            <HeaderLink to="/ServicesPage">Услуги</HeaderLink>
          </li>
          <li>
            <HeaderLink to="/RepairPage">Регламент ТО</HeaderLink>
          </li>
          <li>
            <HeaderLink to="/">АвтоНовости</HeaderLink>
          </li>
          <li>
            <HeaderLink to="/">Торговая площадка</HeaderLink>
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
