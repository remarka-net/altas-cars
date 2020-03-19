
import React from 'react';
import pic1 from './modern1.jpg';
import pic2 from './modern2.jpg';
import pic3 from './modern3.jpg';
import order from './order_x64.png';
import MyFormX from '../../components/MyFormX/Form';
import MyFormX1 from '../../components/MyFormX1/Form';
import MyFormX2 from '../../components/MyFormX2/Form';
import './index.css';
import $ from 'jquery';


export default class Trade extends React.Component {
  render() {
    $(document).ready(function($) {
      $('a[href="#contact_formX1"],a[href="#contact_formX2"],a[href="#contact_formX3"]').bind('click.smoothscroll',function (e) {
        e.preventDefault();
        var target = this.hash,
            $target = $(target);
    
        $('html, body').stop().animate( {
          'scrollTop': $target.offset().top-40
        }, 900, 'swing', function () {
          window.location.hash = target;
        } );
      } );
    } );
    
    return (
      <div>
        
        <div className="Info_head">
        <p className="subtitle fancy">
      <span>Торговая площадка</span>
    </p>
    </div>
    
    <div id="trade_blocks">
      

    <div className="trade_block">
    <MyFormX />
<img className="order_img" src={pic1} alt=""/>

<h3>Товар 1</h3>

<p>
Идейные соображения высшего порядка, а также консультация с широким активом 
обеспечивает широкому кругу (специалистов) участие в формировании направлений
 прогрессивного развития. Повседневная практика показывает, что постоянный 
 количественный рост и сфера нашей активности способствует подготовки и реализации 
 дальнейших направлений развития. 
</p>
<form>
            <div className="Btn">
              <a className="orderBtn" href="#contact_formX1">
                Заказать
                <img src={order} width="40px" alt="shopping cart" />
              </a>
            </div>
          </form>
          
</div>


<div className="trade_block">
<MyFormX1 />
<img className="order_img" src={pic2} alt=""/>

<h3>Товар 2</h3>
<p>
Идейные соображения высшего порядка, а также консультация с широким активом 
обеспечивает широкому кругу (специалистов) участие в формировании направлений
 прогрессивного развития. Повседневная практика показывает, что постоянный 
 количественный рост и сфера нашей активности способствует подготовки и реализации 
 дальнейших направлений развития. 
</p>
<form>
            <div className="Btn">
              <a className="orderBtn" href="#contact_formX2">
                Заказать
                <img src={order} width="40px" alt="shopping cart" />
              </a>
            </div>
          </form>
</div>


<div className="trade_block">
  <MyFormX2 />
<img className="order_img" src={pic3} alt=""/>

<h3>Товар 3</h3>
<p>
Идейные соображения высшего порядка, а также консультация с широким активом 
обеспечивает широкому кругу (специалистов) участие в формировании направлений
 прогрессивного развития. Повседневная практика показывает, что постоянный 
 количественный рост и сфера нашей активности способствует подготовки и реализации 
 дальнейших направлений развития. 
</p>
<form>
            <div className="Btn">
              <a className="orderBtn" href="#contact_formX3">
                Заказать
                <img  src={order} width="40px" alt="shopping cart" />
              </a>
            </div>
          </form>
</div>

</div>




    </div>
      

    );
  }
};

