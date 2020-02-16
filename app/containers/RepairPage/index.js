
import React from 'react';
import './index.css';
import $ from 'jquery';
import Audi from './images/Audi-logo.png';
import BMW from './images/BMW-logo.png';
import Chevrolet from './images/Chevrolet-logo.png';
import Daewoo from './images/Daewoo-logo.png';
import Ford from './images/Ford-logo.png';
import Honda from './images/Honda-logo.png';
import Hyundai from './images/Hyundai-logo.png';
import Kia from './images/Kia-logo.png';
import Mazda from './images/Mazda-logo.png';
import Mercedes from './images/Mercedes-logo.png';
import Mitsubishi from './images/Mitsubishi-logo.png';
import Nissan from './images/Nissan-logo.png';
import Opel from './images/Opel-logo.png';
import Peugeot from './images/Peugeot-logo.png';
import Renault from './images/Renault-logo.svg';
import Skoda from './images/Skoda-logo.png';
import Toyota from './images/Toyota-logo.png';
import Volkswagen from './images/Volkswagen-logo.png';


export default function Fruits() {

  $(document).ready(function(){
 
    // Когда на ссылку щелкнули  
    $("a.tab").click(function () {
    
    // выключить все закладки  
    $(".active").removeClass("active");
    
    // включить эту закладку  
    $(this).addClass("active");
    
    // свернуть все элементы с классом 'content' 
    $(".content").hide();
    
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
      <li><a href="#" title="content_4" class="tab">
    <img src={Daewoo} alt="Daewoo"/>
      </a></li>
      <li><a href="#" title="content_5" class="tab">
    <img src={Ford} alt="Ford"/>
      </a></li>
      <li><a href="#" title="content_6" class="tab">
    <img src={Honda} alt="Honda"/>
      </a></li>
      <li><a href="#" title="content_7" class="tab">
    <img src={Hyundai} alt="Hyundai"/>
      </a></li>
       <li><a href="#" title="content_8" class="tab">
    <img src={Kia} alt="Kia"/>
      </a></li>
      <li><a href="#" title="content_9" class="tab">
    <img src={Mazda} alt="Mazda"/>
      </a></li>
      <li><a href="#" title="content_10" class="tab">
    <img src={Mercedes} alt="Mercedes"/>
      </a></li>
      <li><a href="#" title="content_11" class="tab">
    <img src={Mitsubishi} alt="Mitsubishi"/>
      </a></li>
      <li><a href="#" title="content_12" class="tab">
    <img src={Nissan} alt="Nissan"/>
      </a></li>
      <li><a href="#" title="content_13" class="tab">
    <img src={Opel} alt="Opel"/>
      </a></li>
      <li><a href="#" title="content_14" class="tab">
    <img src={Peugeot} alt="Peugeot"/>
      </a></li>
      <li><a href="#" title="content_15" class="tab">
    <img src={Renault} alt="Renault"/>
      </a></li>
      <li><a href="#" title="content_16" class="tab">
    <img src={Skoda} alt="Skoda"/>
      </a></li>
      <li><a href="#" title="content_17" class="tab">
    <img src={Toyota} alt="Toyota"/>
      </a></li>
      <li><a href="#" title="content_18" class="tab">
    <img src={Volkswagen} alt="Volkswagen"/>
      </a></li> 
</ul>
 
        <div id="content_1" class="content">
         <p className="Auto_headline">ТО для автомобиля Audi A8</p>
         <p className="Auto_text">
         Audi A8 — высококомфортный скоростной седан представительского класса, флагман модельного ряда Audi. Впервые был показана в феврале 1994. Автомобиль с передним или полным (quattro) приводом, несущим кузовом из алюминиевого сплава, изготовленного по технологии «пространственная рама» имеет богатое оснащение на основе электроники и современных технологий. Audi A8 1994 год Полноприводная модификация 2.8 quattro вышла в 1995. В июне того же года устанавливается новый двигатель 3,7 V8. В январе 1996 года появляется двигатель 2,8 V6 30 клапанов (193 л.с.). Расширена комплектация всех модификаций серии А8. До 1996 года кондиционер входил в серийную комплектацию лишь автомобилей оснащенных «восьмеркоами». Теперь кондиционером без доплатя могут пользоваться и владельцы автомобилей с 6-цилиндровыми моторами. Переднеприводный вариант дополнительно оснащаетсяы противобуксовочной системой, четырьмя боковыми надувными подушками безопасности (плюс подушки безопасности для водителя и переднего пассажира). <br />Новая гамма двигателей 1997 года — это, в первую очередь V-образный шестицилиндровый дизель с турбонаддувом и непосредственным впрыском. Его рабочий объем составляет 2,5 л, а мощность достигает 150 л.с. Уравновешенность, мощностные характеристики, а также экономические показатели ставят двигатель 2,5 TDI в один ряд с лучшими моторами в своем классе. Помимо этого, А8 выпускается с 2,8-литровым шестицилиндровым двигателем, а также с V-образной «восьмеркой» рабочим объемом 3,7 и 4,2 л мощностью 230 и 300 л.с. соответственно. Автомобиль может комплектоваться как механической коробкой, так и пятискоростным «автоматом» фирмы ZF. Модель S8 представляет собой особо скоростной вариант A8 и оснащена V-образной «восьмеркой» с повышенной до 340 л.с. мощностью и механической 6-ступенчатой коробкой передач. В ноябре 1998 в Германии представлена новая модификация Audi A8, в июне 1999 появилась модель с увеличенной мощностью, в феврале 2000 — с новым двигателем 2,5 V6 Tdi (180 л. с.). Кузов автомобиля полностью изготовлен из легких сплавов по технологии Space Frame («пространственная рама»). На раму, сваренную из алюминиевых профилей, навешиваются панели из алюминия — крылья, крыша, боковины. Все детали сделаны из специального алюминиевого сплава, который не подвержен коррозии, легко поддаются переработке и лучше поглощают энергию удара. Передняя и задняя подвески независимые, четырехрычажные, собранные на подрамнике. Audi A8 1999 год Модернизированный вариант внешне отличается от предыдущего новой решеткой радиатора, видоизмененными бамперами и дверными ручками, а также фарами головного света с гладким стеклом.<br /> В целом отличия мало заметны. Несколько изменена конструкция кузова. Электронная система стабилизации движения теперь входит в серийное оснащение. Богато оформленный салон оборудован подушками безопасности в области головы для сидящих спереди и сзади. Заново спроектировано внутреннее освещение салона. Восьмицилиндровые двигатели оснащены новыми головками с пятью клапанами на цилиндр и впускным трактом переменной длины. В результате мощность двигателя объемом 3.7 литра выросла до 191 кВт, крутящий момент — до 350 Нм, а мощность двигателя объемом 4.2 литра — до 228 кВт, крутящий момент — 410 Нм. Для уменьшения неподрессоренной массы и улучшения характеристик управляемости привода колес также изготовляются из алюминиевого сплава.
         </p>
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

        <div id="content_4" class="content">
         <ul>
             <li><a href="">Daewoo<small>4 Posts</small></a></li>
             <li><a href="">Daewoo <small>32 Posts</small></a></li>
             <li><a href="">Daewoo<small>2 Posts</small></a></li>
             <li><a href="">Daewoo<small>19 Posts</small></a></li>
             <li><a href="">Daewoo <small>6 Posts</small></a></li>
             <li><a href="">Daewoo <small>8 Posts</small></a></li>
 </ul>
        </div>

        <div id="content_5" class="content">
         <ul>
             <li><a href="">Ford<small>4 Posts</small></a></li>
             <li><a href="">Ford <small>32 Posts</small></a></li>
             <li><a href="">Ford<small>2 Posts</small></a></li>
             <li><a href="">Ford<small>19 Posts</small></a></li>
             <li><a href="">Ford<small>6 Posts</small></a></li>
             <li><a href="">Ford<small>8 Posts</small></a></li>
 </ul>
        </div>

        <div id="content_6" class="content">
         <ul>
             <li><a href="">Honda<small>4 Posts</small></a></li>
             <li><a href="">Honda<small>32 Posts</small></a></li>
             <li><a href="">Honda<small>2 Posts</small></a></li>
             <li><a href="">Honda<small>19 Posts</small></a></li>
             <li><a href="">Honda<small>6 Posts</small></a></li>
             <li><a href="">Honda<small>8 Posts</small></a></li>
 </ul>
        </div>

        <div id="content_7" class="content">
        <p className="Auto_headline">ТО для автомобиля Hundai Santa Fe</p>
        <table id="Auto_table">
          <tr className="first_row">
          <th className="table_headline">Требует замены <span>(тыс. км.)</span></th>

          <th>15</th>
          <th>30</th>
          <th>45</th>
          <th>60</th>
          <th>75</th>
          <th>90</th>
          <th>105</th>
          <th>120</th>
          </tr>
          <tr className="first_title">
            <td>Моторное масло и фильтр</td>

            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr className="second_title">
            <td>Салонный фильтр</td>

            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr className="third_title">
            <td>Свечи зажигания</td>

            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr className="fourth_title">
            <td>Жидкость гидропривода</td>

            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr className="fifth_title">
            <td>Тормозная жидкость</td>

            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr className="sixth_title">
            <td>Воздушный фильтр</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr className="seventh_title">
            <td>Топливный фильтр</td>

            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr className="eighth_title">
            <td>Ремень ГРМ</td>

            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr className="nineth_title">
            <td>Масло в МКПП</td>
            
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr className="tenth_title">
            <td>Охлаждающая жидкость</td>

            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr className="eleventh_title">
            <td>Масло в раздаточной коробке</td>

            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </table>
        </div>

        <div id="content_8" class="content">
         <ul>
             <li><a href="">Honda<small>4 Posts</small></a></li>
             <li><a href="">Honda<small>32 Posts</small></a></li>
             <li><a href="">Honda<small>2 Posts</small></a></li>
             <li><a href="">Honda<small>19 Posts</small></a></li>
             <li><a href="">Honda<small>6 Posts</small></a></li>
             <li><a href="">Honda<small>8 Posts</small></a></li>
 </ul>
        </div>
        
        <div id="content_9" class="content">
         <ul>
             <li><a href="">Honda<small>4 Posts</small></a></li>
             <li><a href="">Honda<small>32 Posts</small></a></li>
             <li><a href="">Honda<small>2 Posts</small></a></li>
             <li><a href="">Honda<small>19 Posts</small></a></li>
             <li><a href="">Honda<small>6 Posts</small></a></li>
             <li><a href="">Honda<small>8 Posts</small></a></li>
 </ul>
        </div>
        <div id="content_10" class="content">
         <ul>
             <li><a href="">Honda<small>4 Posts</small></a></li>
             <li><a href="">Honda<small>32 Posts</small></a></li>
             <li><a href="">Honda<small>2 Posts</small></a></li>
             <li><a href="">Honda<small>19 Posts</small></a></li>
             <li><a href="">Honda<small>6 Posts</small></a></li>
             <li><a href="">Honda<small>8 Posts</small></a></li>
 </ul>
        </div>
        <div id="content_11" class="content">
         <ul>
             <li><a href="">Honda<small>4 Posts</small></a></li>
             <li><a href="">Honda<small>32 Posts</small></a></li>
             <li><a href="">Honda<small>2 Posts</small></a></li>
             <li><a href="">Honda<small>19 Posts</small></a></li>
             <li><a href="">Honda<small>6 Posts</small></a></li>
             <li><a href="">Honda<small>8 Posts</small></a></li>
 </ul>
        </div>
        <div id="content_12" class="content">
         <ul>
             <li><a href="">Honda<small>4 Posts</small></a></li>
             <li><a href="">Honda<small>32 Posts</small></a></li>
             <li><a href="">Honda<small>2 Posts</small></a></li>
             <li><a href="">Honda<small>19 Posts</small></a></li>
             <li><a href="">Honda<small>6 Posts</small></a></li>
             <li><a href="">Honda<small>8 Posts</small></a></li>
 </ul>
        </div>

        <div id="content_13" class="content">
         <ul>
             <li><a href="">Honda<small>4 Posts</small></a></li>
             <li><a href="">Honda<small>32 Posts</small></a></li>
             <li><a href="">Honda<small>2 Posts</small></a></li>
             <li><a href="">Honda<small>19 Posts</small></a></li>
             <li><a href="">Honda<small>6 Posts</small></a></li>
             <li><a href="">Honda<small>8 Posts</small></a></li>
 </ul>
        </div>
        <div id="content_14" class="content">
         <ul>
             <li><a href="">Honda<small>4 Posts</small></a></li>
             <li><a href="">Honda<small>32 Posts</small></a></li>
             <li><a href="">Honda<small>2 Posts</small></a></li>
             <li><a href="">Honda<small>19 Posts</small></a></li>
             <li><a href="">Honda<small>6 Posts</small></a></li>
             <li><a href="">Honda<small>8 Posts</small></a></li>
 </ul>
        </div>
        <div id="content_15" class="content">
         <ul>
             <li><a href="">Honda<small>4 Posts</small></a></li>
             <li><a href="">Honda<small>32 Posts</small></a></li>
             <li><a href="">Honda<small>2 Posts</small></a></li>
             <li><a href="">Honda<small>19 Posts</small></a></li>
             <li><a href="">Honda<small>6 Posts</small></a></li>
             <li><a href="">Honda<small>8 Posts</small></a></li>
 </ul>
        </div>
        <div id="content_16" class="content">
         <ul>
             <li><a href="">Honda<small>4 Posts</small></a></li>
             <li><a href="">Honda<small>32 Posts</small></a></li>
             <li><a href="">Honda<small>2 Posts</small></a></li>
             <li><a href="">Honda<small>19 Posts</small></a></li>
             <li><a href="">Honda<small>6 Posts</small></a></li>
             <li><a href="">Honda<small>8 Posts</small></a></li>
 </ul>
        </div>
        <div id="content_17" class="content">
         <ul>
             <li><a href="">Honda<small>4 Posts</small></a></li>
             <li><a href="">Honda<small>32 Posts</small></a></li>
             <li><a href="">Honda<small>2 Posts</small></a></li>
             <li><a href="">Honda<small>19 Posts</small></a></li>
             <li><a href="">Honda<small>6 Posts</small></a></li>
             <li><a href="">Honda<small>8 Posts</small></a></li>
 </ul>
        </div>
        <div id="content_18" class="content">
         <ul>
             <li><a href="">Honda<small>4 Posts</small></a></li>
             <li><a href="">Honda<small>32 Posts</small></a></li>
             <li><a href="">Honda<small>2 Posts</small></a></li>
             <li><a href="">Honda<small>19 Posts</small></a></li>
             <li><a href="">Honda<small>6 Posts</small></a></li>
             <li><a href="">Honda<small>8 Posts</small></a></li>
 </ul>
        </div>
 
    </div>
 
</div>



    </div> /*Main DIV*/
  );
}
