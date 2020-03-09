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
import $ from 'jquery';


function Header() {

  $(document).ready(function(){
  $('.header-btn').on('click', function(){
    $('#headlines').addClass('active').focus();
    $('.header-btn').attr('id', 'active_menu');
  });

  const $menu = $('#headlines');

$(document).mouseup(e => {
   if (!$menu.is(e.target) // if the target of the click isn't the container...
   && $menu.has(e.target).length === 0) // ... nor a descendant of the container
   {
     $menu.removeClass('active');
  }
 });


  $('#headlines').on('focusout', function () {
    $('#headlines').removeClass('active');
  });

   $('#active_menu').on('click', function(){
     $('#headlines').removeClass('active');
     $('#active_menu').removeAttr('id');
   });

  $( '#headlines a' ).on("click", function(){
    $('#headlines').removeClass('active');
  });
  $( 'a[href*="/"]').on("click", function(){
    $('#headlines').removeClass('active');
  });

});
  

  return (
    <header className="main">
      <div class="header-btn">
        <div></div>
        <div></div>
        <div></div>
      </div>

      <HeaderLink2 to="/"><Img src={Logo} id="Logo" /></HeaderLink2>
         
      <ul id="headlines">
        <li>
          <HeaderLink to="/ServicesPage">Услуги</HeaderLink>
        </li>
        <li>
          <HeaderLink to="/RepairPage">Регламент ТО</HeaderLink>
        </li>
        <li>
          <HeaderLink to="/NewsPage">АвтоНовости</HeaderLink>
        </li>
        <li>
          <HeaderLink to="/TradePage">Торговая площадка</HeaderLink>
        </li>
        <li>
          <HeaderLink to="/About">О нас</HeaderLink>
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
