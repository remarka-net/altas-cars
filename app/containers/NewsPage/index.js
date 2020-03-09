
import React from 'react';
import './index.css';
import { render } from "react-dom";


export default class Colorful extends React.Component {


  render() {
    
    // change code below this line
    return (

      <div>
        <p className="subtitle fancy">
          <span>АвтоНовости</span>
        </p>
      <div className="NewsBlock">
      {/* <iframe src="https://www.feedgrabbr.com/inframe/?widgetid=948646d4071838c89e8afb7c4" allowtransparency="true" ></iframe> */}
      <iframe src="https://www.feedgrabbr.com/inframe/?widgetid=980aa301ccab21db605d11d0e" allowtransparency="true" ></iframe>
      </div>
       
        
        </div>
       


    );
  }
};


