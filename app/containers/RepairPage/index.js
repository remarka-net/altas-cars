
import React from 'react';
import './index.css';
import $ from 'jquery';
import Audi from './images/Audi-logo.png';
import BMW from './images/BMW-logo.png';
import Chevrolet from './images/Chevrolet-logo.png';


export default function Fruits() {

  $(document).ready(function(){
 
    // Когда на ссылку щелкнули  
    $("a.tab").click(function () {
    
    // выключить все закладки  
    $(".active").removeClass("active");
    
    // включить эту закладку  
    $(this).addClass("active");
    
    // свернуть все элементы с классом 'content' 
    $(".content").slideUp();
    
    // теперь определить значение атрибута 'title'  и найти элемент с этим id.  Затем развернуть его. 
    var content_show = $(this).attr("title");
    $("#"+content_show).slideDown();
    
    });
    
     });

  return (
    <div id="info">
      <div>
        <p className="subtitle fancy">
          <span>Регламент ТО</span>
        </p>
      </div>

      <p className="repair_headline">
        Выберите нужную марку авто из списка для подробной информации
      </p>

<div id="tabbed_box_1" class="tabbed_box">
 <h4>Browse Site <small>Select a Tab</small></h4>
    <div class="tabbed_area">

	
<ul class="tabs">
    <li><a href="#" title="content_1" class="tab active">
      <img src={Audi} alt="Audi"/>
      </a></li>
    <li><a href="#" title="content_2" class="tab">
    <img src={BMW} alt="BMW"/>
      </a></li>
    <li><a href="#" title="content_3" class="tab">
    <img src={Chevrolet} alt="Chevrolet"/>
      </a></li>
</ul>
 
        <div id="content_1" class="content">
         <ul>
             <li><a href="">HTML Techniques <small>4 Posts</small></a></li>
             <li><a href="">CSS Styling <small>32 Posts</small></a></li>
             <li><a href="">Flash Tutorials <small>2 Posts</small></a></li>
             <li><a href="">Web Miscellanea <small>19 Posts</small></a></li>
             <li><a href="">Site News <small>6 Posts</small></a></li>
             <li><a href="">Web Development <small>8 Posts</small></a></li>
 </ul>
        </div>
        <div id="content_2" class="content">
         <ul>
             <li><a href="">December 2008 <small>6 Posts</small></a></li>
             <li><a href="">November 2008 <small>4 Posts</small></a></li>
             <li><a href="">October 2008 <small>22 Posts</small></a></li>
             <li><a href="">September 2008 <small>12 Posts</small></a></li>
             <li><a href="">August 2008 <small>3 Posts</small></a></li>
             <li><a href="">July 2008 <small>1 Posts</small></a></li>
 </ul>
        </div>
        <div id="content_3" class="content">
         <ul>
             <li><a href="">Home</a></li>
             <li><a href="">About</a></li>
             <li><a href="">Contribute</a></li>
             <li><a href="">Contact</a></li>
 </ul>
        </div>
 
    </div>
 
</div>





    </div> /*Main DIV*/
  );
}
