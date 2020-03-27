import React from 'react';
import './index.css';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';

import $ from 'jquery';
import Img from './Img';
import NavBar from './NavBar';
import HeaderLink from './HeaderLink';
import messages from './messages';
import Logo from './Logo.png';
import Logo_m from './Logo_new.png';
import HeaderLink2 from './HeaderLink2';

function Header() {
  $(document).ready(function() {

    if($( window ).width() < 1201){
      $('.logo2').css("display","block");
    
    
     $('.header-btn').on('click', function(){  //при клике на кнопку меню
      if($('.header-btn').hasClass('active_menu')){
        $menu.removeClass('active');
        $('.header-btn').removeClass('active_menu');
        $('.menu-container').css({"z-index":"-1", "background":"rgba(0, 0, 0, 0)"});
        $('html, body').css({
          overflow: 'auto',
          height: 'auto'
      });
        $('#main_div').css("filter", "");
        $('#info').css("filter", "");
        $('.Services_main').css("filter", "");
        $('.NewsContent').css("filter", "");
        $('#Main_trade').css("filter", "");
        $('#m_part').css("filter", "");
      }else{
        $('#headlines').addClass('active'); 
        $('.header-btn').addClass('active_menu');
        $('.menu-container').css({"z-index":"999", "background":"rgba(0,0,0,0.3)"});
        $('html, body').css({
          overflow: 'hidden',
          height: '100%'
      });
      //just bluring our main div
      $('#main_div').css("filter", "blur(4px)");
      $('#info').css("filter", "blur(4px)");
      $('.Services_main').css("filter", "blur(4px)");
      $('.NewsContent').css("filter", "blur(4px)");
      $('#Main_trade').css("filter", "blur(4px)");
      $('#m_part').css("filter", "blur(4px)");
      }
    });

    const $menu = $('#headlines');
    const $button = $('.header-btn');

  $(document).mouseup(e => {
   if (!$menu.is(e.target) && !$button.is(e.target)// if the target of the click isn't the container...
   && $menu.has(e.target).length === 0)  {      // ... nor a descendant of the container
    // $('.menu-container').css("display", "none");
    $menu.removeClass('active');
    $('.header-btn').removeClass('active_menu');
    $('.menu-container').css({"z-index":"-1", "background":"rgba(0,0,0,0)"});
    $('html, body').css({
      overflow: 'auto',
      height: 'auto'
  });
    $('#main_div').css("filter", "");
    $('#info').css("filter", "");
    $('.Services_main').css("filter", "");
    $('.NewsContent').css("filter", "");
    $('#Main_trade').css("filter", "");
    $('#m_part').css("filter", "");
  }
 });
    $( '#headlines a' ).on("click", function(){
      $('#headlines').removeClass('active');
      $('.header-btn').removeClass('active_menu');
      $('.menu-container').css({"z-index":"-1", "background":"rgba(0,0,0,0)"});
      $('html, body').css({
        overflow: 'auto',
        height: 'auto'
    });
      $('#main_div').css("filter", "");
    });
    // $( 'a[href*="/"]').on("click", function(){
    // //   $('#headlines').removeClass('active');
    // //   $('.header-btn').removeClass('active_menu');
    // //   $('.menu-container').css({"z-index":"-1", "background":"rgba(0,0,0,0)"});
    // //   $('html, body').css({
    // //     overflow: 'auto',
    // //     height: 'auto'
    // // });
    //   $('#main_div').css("filter", "");
    // });
  }else{
    $(".logo1").css("display","block"); 
    $('.logo2').css("display","none");
  }
  
  });

  return (
    <header className="main">
      <div className="header-btn">
        <div />
        <div />
        <div />
      </div>

      <HeaderLink2 to="/">
        <Img className="Main_logo logo1" src={Logo}  id="Logo" />
        <Img className="Main_logo logo2" src={Logo_m}  id="Logo" />
        <img src="" alt=""/>
      </HeaderLink2>
      <div className="menu-container">
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
      </div>

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
