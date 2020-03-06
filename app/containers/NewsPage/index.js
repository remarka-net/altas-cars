
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

        <iframe src="http://www.webrss.com/get_mysite.php?mysiteId=109960" width='300' frameborder='0'/>
        
        </div>
       


    );
  }
};

