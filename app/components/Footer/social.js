import React from 'react';
import './index.css';
import twitter from './twitter.png';
import instagram from './instagram.png';
import facebook from './facebook.png';


function Social() {
    return (
    <div id="wrapper">
          <div className="social_icons">
            <a href="#"><img src={facebook} alt="facebook icon"/></a>
            <a href="#"><img src={instagram} alt="instagram icon"/></a>
            <a href="#"><img src={twitter} alt="twitter icon"/></a>
          </div>
          <p>autoservice@gmail.com</p>
      </div>
    );
  }
  
  export default Social;