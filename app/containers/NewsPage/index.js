
import React from 'react';
import './index.css';
import { render } from "react-dom";
import loader from './ajax-loader.gif';
import $ from 'jquery';


export default class Colorful extends React.Component {


  render() {

    $(document).ready(function() {
      $('#indicator').show();
      getRSS("http://feeds2.feedburner.com/jquery/");
  }) ;
    
    // change code below this line
    return (

      <div>
        
        <div className="Info_head">
        <p className="subtitle fancy">
          <span>АвтоНовости</span>
        </p>
        </div>

        <img src={src} id="indicator" alt="загрузка" />
        <div id="rssContent"></div> 

      {/* 
      <div className="NewsBlock">
      
      <iframe src="https://www.feedgrabbr.com/inframe/?widgetid=980aa301ccab21db605d11d0e" allowtransparency="true" ></iframe>
      </div>
        */}
        
        </div>
       


    );
  }
};


