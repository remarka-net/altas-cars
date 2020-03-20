
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
import Renault from './images/Renault-logo.png';
import Skoda from './images/Skoda-logo.png';
import Toyota from './images/Toyota-logo.png';
import Volkswagen from './images/Volkswagen-logo.png';
import accept from './images/accept.png';


export default function Fruits() {

  $(document).ready(function(){

    $('.pic').parents('td').css('border', '3px solid #0060FF');
   
 
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
      
       <div className="Info_head" id="Info_id">
        <p className="subtitle fancy">
          <span>Регламент ТО</span>
        </p>
      </div>

      <p className="repair_headline">
        Информация о регламенте ТО для каждой марки авто
      </p>

<div id="tabbed_box_1" class="tabbed_box">

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

        <div className="table_block" >

        <table id="Auto_table1" class="delivery">
          <tr className="first_row">
          <th className="table_headline">Требует замены <span>(тыс. км.)</span></th>
          <th><p>10</p></th>
          <th><p>20</p></th>
          <th><p>30</p></th>
          <th><p>40</p></th>
          <th><p>50</p></th>
          <th><p>60</p></th>
          <th><p>70</p></th>
          <th><p>80</p></th>
          <th>
            <p>90</p>
          </th>
          <th>
            <p>100</p>
          </th>
          <th>
            <p>110</p>
          </th>
          <th>
            <p>120</p>
          </th>
          </tr>
          <tr className="first_title">
            <td>Моторное масло и фильтр</td>

            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
          </tr>
          <tr className="second1_title">
            <td>Воздушный фильтр</td>

            <td></td>
            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td></td>
            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td></td>
            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td></td>
            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
          </tr>
          <tr className="third1_title">
            <td>Топливный фильтр</td>

            <td></td>
            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td></td>
            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td></td>
            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td></td>
            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
          </tr>
          <tr className="second_title">
            <td>Салонный фильтр</td>

            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
          </tr>
          <tr className="third_title">
            <td>Свечи зажигания</td>

            <td></td>
            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td></td>
            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td></td>
            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td></td>
            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
          </tr>
          
          <tr className="fifth_title">
            <td>Тормозная жидкость</td>

            <td></td>
            <td></td>
            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td></td>
            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td></td>
            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td></td>
            <td></td>
          </tr>
          <tr className="eighth_title">
            <td>Навесной ремень</td>

            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td></td>
            <td></td>
          </tr>
          <tr className="nineth_title">
            <td>Масло в КПП</td>
            
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
          </tr>
        
        </table>

        </div>

        <p className="Auto_headline1">Дополнительное инфо о модели</p>



         <p className="Auto_text">
         Audi A8 — высококомфортный скоростной седан представительского класса, флагман модельного ряда Audi. Впервые был показана в феврале 1994. Автомобиль с передним или полным (quattro) приводом, несущим кузовом из алюминиевого сплава, изготовленного по технологии «пространственная рама» имеет богатое оснащение на основе электроники и современных технологий. Audi A8 1994 год Полноприводная модификация 2.8 quattro вышла в 1995. В июне того же года устанавливается новый двигатель 3,7 V8. В январе 1996 года появляется двигатель 2,8 V6 30 клапанов (193 л.с.). Расширена комплектация всех модификаций серии А8. До 1996 года кондиционер входил в серийную комплектацию лишь автомобилей оснащенных «восьмеркоами». Теперь кондиционером без доплатя могут пользоваться и владельцы автомобилей с 6-цилиндровыми моторами. Переднеприводный вариант дополнительно оснащаетсяы противобуксовочной системой, четырьмя боковыми надувными подушками безопасности (плюс подушки безопасности для водителя и переднего пассажира). <br />Новая гамма двигателей 1997 года — это, в первую очередь V-образный шестицилиндровый дизель с турбонаддувом и непосредственным впрыском. Его рабочий объем составляет 2,5 л, а мощность достигает 150 л.с. Уравновешенность, мощностные характеристики, а также экономические показатели ставят двигатель 2,5 TDI в один ряд с лучшими моторами в своем классе. Помимо этого, А8 выпускается с 2,8-литровым шестицилиндровым двигателем, а также с V-образной «восьмеркой» рабочим объемом 3,7 и 4,2 л мощностью 230 и 300 л.с. соответственно. Автомобиль может комплектоваться как механической коробкой, так и пятискоростным «автоматом» фирмы ZF. Модель S8 представляет собой особо скоростной вариант A8 и оснащена V-образной «восьмеркой» с повышенной до 340 л.с. мощностью и механической 6-ступенчатой коробкой передач. В ноябре 1998 в Германии представлена новая модификация Audi A8, в июне 1999 появилась модель с увеличенной мощностью, в феврале 2000 — с новым двигателем 2,5 V6 Tdi (180 л. с.). Кузов автомобиля полностью изготовлен из легких сплавов по технологии Space Frame («пространственная рама»). На раму, сваренную из алюминиевых профилей, навешиваются панели из алюминия — крылья, крыша, боковины. Все детали сделаны из специального алюминиевого сплава, который не подвержен коррозии, легко поддаются переработке и лучше поглощают энергию удара. Передняя и задняя подвески независимые, четырехрычажные, собранные на подрамнике. Audi A8 1999 год Модернизированный вариант внешне отличается от предыдущего новой решеткой радиатора, видоизмененными бамперами и дверными ручками, а также фарами головного света с гладким стеклом.<br /> В целом отличия мало заметны. Несколько изменена конструкция кузова. Электронная система стабилизации движения теперь входит в серийное оснащение. Богато оформленный салон оборудован подушками безопасности в области головы для сидящих спереди и сзади. Заново спроектировано внутреннее освещение салона. Восьмицилиндровые двигатели оснащены новыми головками с пятью клапанами на цилиндр и впускным трактом переменной длины. В результате мощность двигателя объемом 3.7 литра выросла до 191 кВт, крутящий момент — до 350 Нм, а мощность двигателя объемом 4.2 литра — до 228 кВт, крутящий момент — 410 Нм. Для уменьшения неподрессоренной массы и улучшения характеристик управляемости привода колес также изготовляются из алюминиевого сплава.
         </p>



        </div>

        <div id="content_2" class="content">
         
        <p className="Auto_headline">ТО для автомобиля BMW X5</p>

        <div className="table_block" >

        <table id="Auto_table1">
          <tr className="first_row">
          <th className="table_headline">Требует замены <span>(тыс. км.)</span></th>

          <th><p>10</p></th>
          <th><p>20</p></th>
          <th><p>30</p></th>
          <th><p>40</p></th>
          <th><p>50</p></th>
          <th><p>60</p></th>
          <th><p>70</p></th>
          <th><p>80</p></th>
          <th>
            <p>90</p>
          </th>
          <th>
            <p>100</p>
          </th>
          <th>
            <p>110</p>
          </th>
          <th>
            <p>120</p>
          </th>
          </tr>
          <tr className="first_title">
            <td>Моторное масло и фильтр</td>

            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
          </tr>
          <tr className="second1_title">
            <td>Воздушный фильтр</td>

            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
          </tr>
          <tr className="third1_title">
            <td>Топливный фильтр(подвесной)</td>

            <td></td>
            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td></td>
            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td></td>
            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td></td>
            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
          </tr>
          <tr className="seventh_title">
            <td>Топливный фильтр(погружной)</td>

            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr className="second_title">
            <td>Салонный фильтр</td>

            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
          </tr>
          
          <tr className="fifth_title">
            <td>Свечи зажигания</td>

            <td></td>
            <td></td>
            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td></td>
            <td></td>
            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td></td>
            <td></td>
            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
          </tr>
          <tr className="eighth_title">
            <td>Масло в МКПП</td>

            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr className="nineth_title">
            <td>Масло в АКПП</td>
            
            <td></td>
            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td></td>
            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td></td>
            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td></td>
            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
          </tr>
        
        </table>
        </div>

        <p className="Auto_headline1">Дополнительное инфо о модели</p>



         <p className="Auto_text">
         BMW X5, дебютировавший в 1999 году, стал первым серийным кроссовером марки. Производство машин велось на заводах в США и Мексике.

При создании автомобиля использовался опыт принадлежавшей баварцам британской компании Rover, выпускавшей внедорожники Land Rover. Кроссовер имел систему постоянного полного привода (62% крутящего момента передавалось на задние колёса) и пневмоподвеску всех колёс.

Базовые BMW X5 оснащались рядными шестицилиндровыми бензиновыми и дизельными моторами, у более мощного варианта под капотом стоял бензиновый двигатель V8 4.4, развивающий 286 л. с. В 2002 году на рынок вышла «заряженная» версия BMW X5 4.6is с восьмицилиндровым мотором мощностью 347 сил. Коробки передач — механическая или автоматическая.

В результате рестайлинга 2003 года кроссовер получил обновлённый дизайн, модернизированный мотор 4.4 и новый двигатель V8 4.8 мощностью 360 л. с. Тогда же у автомобиля появилась новая полноприводная трансмиссия xDrive с муфтой в приводе передних колёс.

BMW X5 официально продавался и в России, его главными конкурентами были Mercedes-Benz ML, Lexus RX и Porsche Cayenne. Первое время на нашем рынке предлагались только бензиновые машины, а в 2004 году у дилеров появились и дизельные кроссоверы.

Первое поколение модели BMW X5 выпускали до 2006 года, всего было сделано 617 029 таких машин. 
         </p>
        </div>
        <div id="content_3" class="content">
        <p className="Auto_headline">ТО для автомобиля Chevrolet Lacetti</p>
        <div className="table_block" >
        <table id="Auto_table1">
          <tr className="first_row">
          <th className="table_headline">Требует замены <span>(тыс. км.)</span></th>

          <th><p>10</p></th>
          <th><p>20</p></th>
          <th><p>30</p></th>
          <th><p>40</p></th>
          <th><p>50</p></th>
          <th><p>60</p></th>
          <th><p>70</p></th>
          <th><p>80</p></th>
          <th>
            <p>90</p>
          </th>
          <th>
            <p>100</p>
          </th>
          <th>
            <p>110</p>
          </th>
          <th>
            <p>120</p>
          </th>
          </tr>
          <tr className="first_title">
            <td>Моторное масло и фильтр</td>

            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
          </tr>
          <tr className="second1_title">
            <td>Воздушный фильтр</td>

            <td></td>
            <td></td>
            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr className="third1_title">
            <td>Топливный фильтр</td>

            <td></td>
            <td></td>
            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr className="second_title">
            <td>Салонный фильтр</td>

            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
          </tr>
          <tr className="third_title">
            <td>Свечи зажигания</td>

            <td></td>
            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td></td>
            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td></td>
            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td></td>
            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
          </tr>
          <tr className="fourth_title">
            <td>Охлаждающая жидкость</td>

            <td></td>
            <td></td>
            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr className="fifth_title">
            <td>Тормозная жидкость</td>

            <td></td>
            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td></td>
            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td></td>
            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td></td>
            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
          </tr>
          <tr className="eighth_title">
            <td>Ремень ГРМ</td>

            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
          </tr>
          <tr className="nineth_title">
            <td>Масло в КПП</td>
            
            <td></td>
            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td></td>
            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td></td>
            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td></td>
            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
          </tr>
        
        </table>
       </div>

        <p className="Auto_headline1">Дополнительное инфо о модели</p>
         <p className="Auto_text">
         тилетней гарантией.

На Нью-Йоркском автосалоне 2012 состоялся дебют фейслифтинговой версии Santa Fe третьего поколения. Автомобиль представили в двух исполнениях – пятиместной Sport и семиместной с увеличенной колесной базой. Российская презентация новинки состоялась в рамках Московского автосалона 2012. 

Обновленный Santa Fe стал солиднее и брутальнее. Дизайн модели выполнен в текущем фирменном стиле Fluidic Sculpture с шестиугольной решеткой радиатора, узкой светотехникой и многочисленными подштамповками. Фейслифтинг затронул передний и задний бамперы, окантовки противотуманных фар, рейлинги на крыше, а также рисунок колесных дисков. Стильный дизайн боковых линий, не только наполнен динамизмом, но и, по словам конструкторов, привел к снижению коэффициента лобового сопротивления до 0,34. <br />

На американском рынке базовый пятиместный Hyundai Santa Fe 2013 продается с приставкой Sport. Его габаритная длина составляет 4 690 мм, ширина – 1 880, высота – 1 680, а величина колесной базы – 2 700 мм. Семиместный вариант кроссовера получился на 215 мм длинее, на 5 мм шире, на 10 мм выше, а колесная база растянута до 2 800 мм, что на 10 см больше, чем у версии Sport. Но оформление салона у обеих модификаций одинаковое – с новой передней панелью и улучшенными материалами отделки. <br />

Салон выдержан в духе последних моделей Hyundai. Оптитронная приборная панель с приятной голубой подсветкой оборудована цветным 4,3-дюймовым дисплеем для вывода вспомогательной информации. Посередине центральной консоли расположен 8-дюймовый LCD-дисплей, на который выводится вся необходимая информация, а также данные навигационной системы. Кстати, последнюю можно заказать с одним из двух вариантов программного обеспечения: Navitel или Navteq. По словам представителей Hyundai такой выбор обусловлен локальными предпочтениями клиентов.  <br />
Обновленный Santa Fe доступен в пяти комплектациях: Comfort, Dynamic, Sport, High-Tech и Family. Стандартное оборудование комплектации Comfort включает в себя 6 подушек безопасности, систему курсовой устойчивости ESP, светодиодные ходовые огни, датчик дождя, легкосплавные диски R17, подогрев передних кресел, электропривод зеркал с подогревом, маршрутный компьютер, электроусилитель руля, ABS, HAS, DBC, ESC. В данной комплектации Hyunda Santa Fe имеет две версии – переднеприводную и полноприводную.
         </p>
        </div>

        <div id="content_4" class="content">
        <p className="Auto_headline">ТО для автомобиля Daewoo Matiz</p>
        <div className="table_block" >
        <table id="Auto_table1">
          <tr className="first_row">
          <th className="table_headline">Требует замены <span>(тыс. км.)</span></th>

          <th><p>10</p></th>
          <th><p>20</p></th>
          <th><p>30</p></th>
          <th><p>40</p></th>
          <th><p>50</p></th>
          <th><p>60</p></th>
          <th><p>70</p></th>
          <th><p>80</p></th>
          <th>
            <p>90</p>
          </th>
          <th>
            <p>100</p>
          </th>
          <th>
            <p>110</p>
          </th>
          <th>
            <p>120</p>
          </th>
          </tr>
          <tr className="first_title">
            <td>Моторное масло и фильтр</td>

            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
          </tr>
          <tr className="second1_title">
            <td>Воздушный фильтр</td>

            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
          </tr>
          <tr className="third1_title">
            <td>Топливный фильтр</td>

            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
          </tr>
          <tr className="second_title">
            <td>Салонный фильтр</td>

            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
          </tr>
          
          <tr className="fourth_title">
            <td>Охлаждающая жидкость</td>

            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
          </tr>
          <tr className="fifth_title">
            <td>Тормозная жидкость</td>

            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
          </tr>
          
          <tr className="nineth_title">
            <td>Масло в КПП</td>
            
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
          </tr>
        
        </table>
        </div>

        <p className="Auto_headline1">Дополнительное инфо о модели</p>
         <p className="Auto_text">
         тилетней гарантией.

На Нью-Йоркском автосалоне 2012 состоялся дебют фейслифтинговой версии Santa Fe третьего поколения. Автомобиль представили в двух исполнениях – пятиместной Sport и семиместной с увеличенной колесной базой. Российская презентация новинки состоялась в рамках Московского автосалона 2012. 

Обновленный Santa Fe стал солиднее и брутальнее. Дизайн модели выполнен в текущем фирменном стиле Fluidic Sculpture с шестиугольной решеткой радиатора, узкой светотехникой и многочисленными подштамповками. Фейслифтинг затронул передний и задний бамперы, окантовки противотуманных фар, рейлинги на крыше, а также рисунок колесных дисков. Стильный дизайн боковых линий, не только наполнен динамизмом, но и, по словам конструкторов, привел к снижению коэффициента лобового сопротивления до 0,34. <br />

На американском рынке базовый пятиместный Hyundai Santa Fe 2013 продается с приставкой Sport. Его габаритная длина составляет 4 690 мм, ширина – 1 880, высота – 1 680, а величина колесной базы – 2 700 мм. Семиместный вариант кроссовера получился на 215 мм длинее, на 5 мм шире, на 10 мм выше, а колесная база растянута до 2 800 мм, что на 10 см больше, чем у версии Sport. Но оформление салона у обеих модификаций одинаковое – с новой передней панелью и улучшенными материалами отделки. <br />

Салон выдержан в духе последних моделей Hyundai. Оптитронная приборная панель с приятной голубой подсветкой оборудована цветным 4,3-дюймовым дисплеем для вывода вспомогательной информации. Посередине центральной консоли расположен 8-дюймовый LCD-дисплей, на который выводится вся необходимая информация, а также данные навигационной системы. Кстати, последнюю можно заказать с одним из двух вариантов программного обеспечения: Navitel или Navteq. По словам представителей Hyundai такой выбор обусловлен локальными предпочтениями клиентов.  <br />
Обновленный Santa Fe доступен в пяти комплектациях: Comfort, Dynamic, Sport, High-Tech и Family. Стандартное оборудование комплектации Comfort включает в себя 6 подушек безопасности, систему курсовой устойчивости ESP, светодиодные ходовые огни, датчик дождя, легкосплавные диски R17, подогрев передних кресел, электропривод зеркал с подогревом, маршрутный компьютер, электроусилитель руля, ABS, HAS, DBC, ESC. В данной комплектации Hyunda Santa Fe имеет две версии – переднеприводную и полноприводную.
         </p>
        </div>

        <div id="content_5" class="content">
        <p className="Auto_headline">ТО для автомобиля Ford Focus 3</p>
        <div className="table_block" >
        <table id="Auto_table1">
          <tr className="first_row">
          <th className="table_headline">Требует замены <span>(тыс. км.)</span></th>

          <th><p>10</p></th>
          <th><p>20</p></th>
          <th><p>30</p></th>
          <th><p>40</p></th>
          <th><p>50</p></th>
          <th><p>60</p></th>
          <th><p>70</p></th>
          <th><p>80</p></th>
          <th>
            <p>90</p>
          </th>
          <th>
            <p>100</p>
          </th>
          <th>
            <p>110</p>
          </th>
          <th>
            <p>120</p>
          </th>
          </tr>
          <tr className="first_title">
            <td>Моторное масло и фильтр</td>

            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
          </tr>
          <tr className="second1_title">
            <td>Воздушный фильтр</td>

            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
          </tr>
          <tr className="second_title">
            <td>Салонный фильтр</td>

            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
          </tr>

          <tr className="third_title">
            <td>Свечи зажигания</td>

            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td></td>
            <td></td>
          </tr>
          
          <tr className="fourth_title">
            <td>Тормозная жидкость</td>

            <td></td>
            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td></td>
            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td></td>
            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td></td>
            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
          </tr>
          
          <tr className="nineth_title">
            <td>Ремнь ГРМ</td>
            
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
          </tr>
        
        </table>
        </div>

        <p className="Auto_headline1">Дополнительное инфо о модели</p>
         <p className="Auto_text">
         тилетней гарантией.

На Нью-Йоркском автосалоне 2012 состоялся дебют фейслифтинговой версии Santa Fe третьего поколения. Автомобиль представили в двух исполнениях – пятиместной Sport и семиместной с увеличенной колесной базой. Российская презентация новинки состоялась в рамках Московского автосалона 2012. 

Обновленный Santa Fe стал солиднее и брутальнее. Дизайн модели выполнен в текущем фирменном стиле Fluidic Sculpture с шестиугольной решеткой радиатора, узкой светотехникой и многочисленными подштамповками. Фейслифтинг затронул передний и задний бамперы, окантовки противотуманных фар, рейлинги на крыше, а также рисунок колесных дисков. Стильный дизайн боковых линий, не только наполнен динамизмом, но и, по словам конструкторов, привел к снижению коэффициента лобового сопротивления до 0,34. <br />

На американском рынке базовый пятиместный Hyundai Santa Fe 2013 продается с приставкой Sport. Его габаритная длина составляет 4 690 мм, ширина – 1 880, высота – 1 680, а величина колесной базы – 2 700 мм. Семиместный вариант кроссовера получился на 215 мм длинее, на 5 мм шире, на 10 мм выше, а колесная база растянута до 2 800 мм, что на 10 см больше, чем у версии Sport. Но оформление салона у обеих модификаций одинаковое – с новой передней панелью и улучшенными материалами отделки. <br />

Салон выдержан в духе последних моделей Hyundai. Оптитронная приборная панель с приятной голубой подсветкой оборудована цветным 4,3-дюймовым дисплеем для вывода вспомогательной информации. Посередине центральной консоли расположен 8-дюймовый LCD-дисплей, на который выводится вся необходимая информация, а также данные навигационной системы. Кстати, последнюю можно заказать с одним из двух вариантов программного обеспечения: Navitel или Navteq. По словам представителей Hyundai такой выбор обусловлен локальными предпочтениями клиентов.  <br />
Обновленный Santa Fe доступен в пяти комплектациях: Comfort, Dynamic, Sport, High-Tech и Family. Стандартное оборудование комплектации Comfort включает в себя 6 подушек безопасности, систему курсовой устойчивости ESP, светодиодные ходовые огни, датчик дождя, легкосплавные диски R17, подогрев передних кресел, электропривод зеркал с подогревом, маршрутный компьютер, электроусилитель руля, ABS, HAS, DBC, ESC. В данной комплектации Hyunda Santa Fe имеет две версии – переднеприводную и полноприводную.
         </p>
        </div>

        <div id="content_6" class="content">
        <p className="Auto_headline">ТО для автомобиля Honda CRV-III</p>
        <div className="table_block" >
        <table id="Auto_table1">
          <tr className="first_row">
          <th className="table_headline">Требует замены <span>(тыс. км.)</span></th>

          <th><p>10</p></th>
          <th><p>20</p></th>
          <th><p>30</p></th>
          <th><p>40</p></th>
          <th><p>50</p></th>
          <th><p>60</p></th>
          <th><p>70</p></th>
          <th><p>80</p></th>
          <th>
            <p>90</p>
          </th>
          <th>
            <p>100</p>
          </th>
          <th>
            <p>110</p>
          </th>
          <th>
            <p>120</p>
          </th>
          </tr>
          <tr className="first_title">
            <td>Моторное масло и фильтр</td>

            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
          </tr>
          <tr className="second1_title">
            <td>Воздушный фильтр</td>

            <td></td>
            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td></td>
            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td></td>
            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td></td>
            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
          </tr>
          <tr className="third1_title">
            <td>Топливный фильтр</td>

            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr className="seventh_title">
            <td>Топливный фильтр(погружной)</td>

            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr className="second_title">
            <td>Салонный фильтр</td>

            <td></td>
            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td></td>
            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td></td>
            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td></td>
            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
          </tr>
          
          <tr className="fifth_title">
            <td>Свечи зажигания</td>

            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
          </tr>
          <tr className="eighth_title">
            <td>Масло в АКПП</td>

            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
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
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
          </tr>

          <tr className="tenth_title">
          <td>Приводной ремень</td>

            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        
        </table>
        </div>

        <p className="Auto_headline1">Дополнительное инфо о модели</p>



         <p className="Auto_text">
         BMW X5, дебютировавший в 1999 году, стал первым серийным кроссовером марки. Производство машин велось на заводах в США и Мексике.

При создании автомобиля использовался опыт принадлежавшей баварцам британской компании Rover, выпускавшей внедорожники Land Rover. Кроссовер имел систему постоянного полного привода (62% крутящего момента передавалось на задние колёса) и пневмоподвеску всех колёс.

Базовые BMW X5 оснащались рядными шестицилиндровыми бензиновыми и дизельными моторами, у более мощного варианта под капотом стоял бензиновый двигатель V8 4.4, развивающий 286 л. с. В 2002 году на рынок вышла «заряженная» версия BMW X5 4.6is с восьмицилиндровым мотором мощностью 347 сил. Коробки передач — механическая или автоматическая.

В результате рестайлинга 2003 года кроссовер получил обновлённый дизайн, модернизированный мотор 4.4 и новый двигатель V8 4.8 мощностью 360 л. с. Тогда же у автомобиля появилась новая полноприводная трансмиссия xDrive с муфтой в приводе передних колёс.

BMW X5 официально продавался и в России, его главными конкурентами были Mercedes-Benz ML, Lexus RX и Porsche Cayenne. Первое время на нашем рынке предлагались только бензиновые машины, а в 2004 году у дилеров появились и дизельные кроссоверы.

Первое поколение модели BMW X5 выпускали до 2006 года, всего было сделано 617 029 таких машин. 
         </p>
        </div>

        {/*-------------------------------------------Start of Hyundai content------------------------------------------------------------------------------------------------------------------------------*/}

       

       

        {/*-------------------------------------------Start of Hyundai content------------------------------------------------------------------------------------------------------------------------------*/}

        <div id="content_7" class="content">
        <p className="Auto_headline">ТО для автомобиля Hundai Santa Fe</p>

        <div className="table_block" >
        <table id="Auto_table">
          <tr className="first_row">
          <th className="table_headline">Требует замены <span>(тыс. км.)</span></th>

          <th><p>10</p></th>
          <th><p>20</p></th>
          <th><p>30</p></th>
          <th><p>40</p></th>
          <th><p>50</p></th>
          <th><p>60</p></th>
          <th><p>70</p></th>
          <th><p>80</p></th>
          <th>
            <p>90</p>
          </th>
          <th>
            <p>100</p>
          </th>
          <th>
            <p>110</p>
          </th>
          <th>
            <p>120</p>
          </th>
          </tr>
          <tr className="first_title">
            <td>Моторное масло и фильтр</td>

            <td><img src={accept} alt="accept"/></td>
            <td><img src={accept} alt="accept"/></td>
            <td><img src={accept} alt="accept"/></td>
            <td><img src={accept} alt="accept"/></td>
            <td><img src={accept} alt="accept"/></td>
            <td><img src={accept} alt="accept"/></td>
            <td><img src={accept} alt="accept"/></td>
            <td><img src={accept} alt="accept"/></td>
            <td><img src={accept} alt="accept"/></td>
            <td><img src={accept} alt="accept"/></td>
            <td><img src={accept} alt="accept"/></td>
            <td><img src={accept} alt="accept"/></td>
          </tr>
          <tr className="second1_title">
            <td>Воздушный фильтр</td>

            <td></td>
            <td></td>
            <td><img src={accept} alt="accept"/></td>
            <td></td>
            <td></td>
            <td><img src={accept} alt="accept"/></td>
            <td></td>
            <td></td>
            <td><img src={accept} alt="accept"/></td>
            <td></td>
            <td></td>
            <td><img src={accept} alt="accept"/></td>
          </tr>
          <tr className="third1_title">
            <td>Топливный фильтр</td>

            <td></td>
            <td></td>
            <td></td>
            <td><img src={accept} alt="accept"/></td>
            <td></td>
            <td></td>
            <td></td>
            <td><img src={accept} alt="accept"/></td>
            <td></td>
            <td></td>
            <td></td>
            <td><img src={accept} alt="accept"/></td>
          </tr>
          <tr className="second_title">
            <td>Салонный фильтр</td>

            <td><img src={accept} alt="accept"/></td>
            <td><img src={accept} alt="accept"/></td>
            <td><img src={accept} alt="accept"/></td>
            <td><img src={accept} alt="accept"/></td>
            <td><img src={accept} alt="accept"/></td>
            <td><img src={accept} alt="accept"/></td>
            <td><img src={accept} alt="accept"/></td>
            <td><img src={accept} alt="accept"/></td>
            <td><img src={accept} alt="accept"/></td>
            <td><img src={accept} alt="accept"/></td>
            <td><img src={accept} alt="accept"/></td>
            <td><img src={accept} alt="accept"/></td>
          </tr>
          <tr className="third_title">
            <td>Свечи зажигания</td>

            <td></td>
            <td><img src={accept} alt="accept"/></td>
            <td></td>
            <td><img src={accept} alt="accept"/></td>
            <td></td>
            <td><img src={accept} alt="accept"/></td>
            <td></td>
            <td><img src={accept} alt="accept"/></td>
            <td></td>
            <td><img src={accept} alt="accept"/></td>
            <td></td>
            <td><img src={accept} alt="accept"/></td>
          </tr>
          <tr className="fourth_title">
            <td>Жидкость гидропривода</td>

            <td></td>
            <td><img src={accept} alt="accept"/></td>
            <td></td>
            <td><img src={accept} alt="accept"/></td>
            <td></td>
            <td><img src={accept} alt="accept"/></td>
            <td></td>
            <td><img src={accept} alt="accept"/></td>
            <td></td>
            <td><img src={accept} alt="accept"/></td>
            <td></td>
            <td><img src={accept} alt="accept"/></td>
          </tr>
          <tr className="fifth_title">
            <td>Тормозная жидкость</td>

            <td></td>
            <td><img src={accept} alt="accept"/></td>
            <td></td>
            <td><img src={accept} alt="accept"/></td>
            <td></td>
            <td><img src={accept} alt="accept"/></td>
            <td></td>
            <td><img src={accept} alt="accept"/></td>
            <td></td>
            <td><img src={accept} alt="accept"/></td>
            <td></td>
            <td><img src={accept} alt="accept"/></td>
          </tr>
          <tr className="eighth_title">
            <td>Ремень ГРМ</td>

            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td><img src={accept} alt="accept"/></td>
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
            <td><img src={accept} alt="accept"/></td>
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
            <td><img src={accept} alt="accept"/></td>
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
            <td><img src={accept} alt="accept"/></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </table>
        </div>

        <p className="Auto_headline1">Дополнительное инфо о модели</p>
         <p className="Auto_text">
         тилетней гарантией.

На Нью-Йоркском автосалоне 2012 состоялся дебют фейслифтинговой версии Santa Fe третьего поколения. Автомобиль представили в двух исполнениях – пятиместной Sport и семиместной с увеличенной колесной базой. Российская презентация новинки состоялась в рамках Московского автосалона 2012. 

Обновленный Santa Fe стал солиднее и брутальнее. Дизайн модели выполнен в текущем фирменном стиле Fluidic Sculpture с шестиугольной решеткой радиатора, узкой светотехникой и многочисленными подштамповками. Фейслифтинг затронул передний и задний бамперы, окантовки противотуманных фар, рейлинги на крыше, а также рисунок колесных дисков. Стильный дизайн боковых линий, не только наполнен динамизмом, но и, по словам конструкторов, привел к снижению коэффициента лобового сопротивления до 0,34. <br />

На американском рынке базовый пятиместный Hyundai Santa Fe 2013 продается с приставкой Sport. Его габаритная длина составляет 4 690 мм, ширина – 1 880, высота – 1 680, а величина колесной базы – 2 700 мм. Семиместный вариант кроссовера получился на 215 мм длинее, на 5 мм шире, на 10 мм выше, а колесная база растянута до 2 800 мм, что на 10 см больше, чем у версии Sport. Но оформление салона у обеих модификаций одинаковое – с новой передней панелью и улучшенными материалами отделки. <br />

Салон выдержан в духе последних моделей Hyundai. Оптитронная приборная панель с приятной голубой подсветкой оборудована цветным 4,3-дюймовым дисплеем для вывода вспомогательной информации. Посередине центральной консоли расположен 8-дюймовый LCD-дисплей, на который выводится вся необходимая информация, а также данные навигационной системы. Кстати, последнюю можно заказать с одним из двух вариантов программного обеспечения: Navitel или Navteq. По словам представителей Hyundai такой выбор обусловлен локальными предпочтениями клиентов.  <br />
Обновленный Santa Fe доступен в пяти комплектациях: Comfort, Dynamic, Sport, High-Tech и Family. Стандартное оборудование комплектации Comfort включает в себя 6 подушек безопасности, систему курсовой устойчивости ESP, светодиодные ходовые огни, датчик дождя, легкосплавные диски R17, подогрев передних кресел, электропривод зеркал с подогревом, маршрутный компьютер, электроусилитель руля, ABS, HAS, DBC, ESC. В данной комплектации Hyunda Santa Fe имеет две версии – переднеприводную и полноприводную.
         </p>

         <p className="Auto_headline">ТО для автомобиля Hundai Tucson ix35</p>

         <div className="table_block" >
        <table id="Auto_table1">
          <tr className="first_row">
          <th className="table_headline">Требует замены <span>(тыс. км.)</span></th>

          <th><p>10</p></th>
          <th><p>20</p></th>
          <th><p>30</p></th>
          <th><p>40</p></th>
          <th><p>50</p></th>
          <th><p>60</p></th>
          <th><p>70</p></th>
          <th><p>80</p></th>
          <th>
            <p>90</p>
          </th>
          <th>
            <p>100</p>
          </th>
          <th>
            <p>110</p>
          </th>
          <th>
            <p>120</p>
          </th>
          </tr>
          <tr className="first_title">
            <td>Моторное масло и фильтр</td>

            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
          </tr>
          <tr className="second1_title">
            <td>Воздушный фильтр</td>

            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
          </tr>
          <tr className="third1_title">
            <td>Топливный фильтр (бензин)</td>

            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
          </tr>
          <tr className="second_title">
            <td>Салонный фильтр</td>

            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
          </tr>
          <tr className="third_title">
            <td>Свечи зажигания</td>

            <td></td>
            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td></td>
            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td></td>
            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td></td>
            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
          </tr>
          <tr className="fourth_title">
            <td>Жидкость гидропривода</td>

            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
          </tr>
          <tr className="fifth_title">
            <td>Тормозная жидкость</td>

            <td></td>
            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td></td>
            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td></td>
            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td></td>
            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
          </tr>
          <tr className="eighth_title">
            <td>Ремень ГРМ</td>

            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
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
            <td></td>
            <td></td>
            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
          </tr>
          <tr className="tenth_title">
            <td>Масло в АКПП</td>

            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        
        </table>
        </div>

        <p className="Auto_headline1">Дополнительное инфо о модели</p>
         <p className="Auto_text">
         тилетней гарантией.

На Нью-Йоркском автосалоне 2012 состоялся дебют фейслифтинговой версии Santa Fe третьего поколения. Автомобиль представили в двух исполнениях – пятиместной Sport и семиместной с увеличенной колесной базой. Российская презентация новинки состоялась в рамках Московского автосалона 2012. 

Обновленный Santa Fe стал солиднее и брутальнее. Дизайн модели выполнен в текущем фирменном стиле Fluidic Sculpture с шестиугольной решеткой радиатора, узкой светотехникой и многочисленными подштамповками. Фейслифтинг затронул передний и задний бамперы, окантовки противотуманных фар, рейлинги на крыше, а также рисунок колесных дисков. Стильный дизайн боковых линий, не только наполнен динамизмом, но и, по словам конструкторов, привел к снижению коэффициента лобового сопротивления до 0,34. <br />

На американском рынке базовый пятиместный Hyundai Santa Fe 2013 продается с приставкой Sport. Его габаритная длина составляет 4 690 мм, ширина – 1 880, высота – 1 680, а величина колесной базы – 2 700 мм. Семиместный вариант кроссовера получился на 215 мм длинее, на 5 мм шире, на 10 мм выше, а колесная база растянута до 2 800 мм, что на 10 см больше, чем у версии Sport. Но оформление салона у обеих модификаций одинаковое – с новой передней панелью и улучшенными материалами отделки. <br />

Салон выдержан в духе последних моделей Hyundai. Оптитронная приборная панель с приятной голубой подсветкой оборудована цветным 4,3-дюймовым дисплеем для вывода вспомогательной информации. Посередине центральной консоли расположен 8-дюймовый LCD-дисплей, на который выводится вся необходимая информация, а также данные навигационной системы. Кстати, последнюю можно заказать с одним из двух вариантов программного обеспечения: Navitel или Navteq. По словам представителей Hyundai такой выбор обусловлен локальными предпочтениями клиентов.  <br />
Обновленный Santa Fe доступен в пяти комплектациях: Comfort, Dynamic, Sport, High-Tech и Family. Стандартное оборудование комплектации Comfort включает в себя 6 подушек безопасности, систему курсовой устойчивости ESP, светодиодные ходовые огни, датчик дождя, легкосплавные диски R17, подогрев передних кресел, электропривод зеркал с подогревом, маршрутный компьютер, электроусилитель руля, ABS, HAS, DBC, ESC. В данной комплектации Hyunda Santa Fe имеет две версии – переднеприводную и полноприводную.
         </p>

        </div>

{/* ---------------------------------------------------The end of Hyundai content----------------------------------------------------------------------------------------------------------------------------*/}

        <div id="content_8" class="content">
        <p className="Auto_headline">ТО для автомобиля Hundai KIA Ceed</p>

        <div className="table_block">

        <table id="Auto_table1">
          <tr className="first_row">
          <th className="table_headline">Требует замены <span>(тыс. км.)</span></th>

          <th><p>10</p></th>
          <th><p>20</p></th>
          <th><p>30</p></th>
          <th><p>40</p></th>
          <th><p>50</p></th>
          <th><p>60</p></th>
          <th><p>70</p></th>
          <th><p>80</p></th>
          <th>
            <p>90</p>
          </th>
          <th>
            <p>100</p>
          </th>
          <th>
            <p>110</p>
          </th>
          <th>
            <p>120</p>
          </th>
          </tr>
          <tr className="first_title">
            <td>Моторное масло и фильтр</td>

            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
          </tr>
          <tr className="second1_title">
            <td>Воздушный фильтр</td>

            <td></td>
            <td></td>
            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td></td>
            <td></td>
            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td></td>
            <td></td>
            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
          </tr>
          <tr className="third1_title">
            <td>Топливный фильтр</td>

            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr className="second_title">
            <td>Салонный фильтр</td>

            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
          </tr>
          <tr className="third_title">
            <td>Свечи зажигания</td>

            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr className="fourth_title">
            <td>Приводной ремень</td>

            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
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
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td></td>
            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td></td>
            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td></td>
            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
          </tr>
          <tr className="eighth_title">
            <td>Ремень ГРМ</td>

            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
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
            <td></td>
            <td></td>
            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
          </tr>
          <tr className="tenth_title">
            <td>Масло в АКПП</td>

            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        
        </table>
        </div>

        <p className="Auto_headline1">Дополнительное инфо о модели</p>
         <p className="Auto_text">
         тилетней гарантией.

На Нью-Йоркском автосалоне 2012 состоялся дебют фейслифтинговой версии Santa Fe третьего поколения. Автомобиль представили в двух исполнениях – пятиместной Sport и семиместной с увеличенной колесной базой. Российская презентация новинки состоялась в рамках Московского автосалона 2012. 

Обновленный Santa Fe стал солиднее и брутальнее. Дизайн модели выполнен в текущем фирменном стиле Fluidic Sculpture с шестиугольной решеткой радиатора, узкой светотехникой и многочисленными подштамповками. Фейслифтинг затронул передний и задний бамперы, окантовки противотуманных фар, рейлинги на крыше, а также рисунок колесных дисков. Стильный дизайн боковых линий, не только наполнен динамизмом, но и, по словам конструкторов, привел к снижению коэффициента лобового сопротивления до 0,34. <br />

На американском рынке базовый пятиместный Hyundai Santa Fe 2013 продается с приставкой Sport. Его габаритная длина составляет 4 690 мм, ширина – 1 880, высота – 1 680, а величина колесной базы – 2 700 мм. Семиместный вариант кроссовера получился на 215 мм длинее, на 5 мм шире, на 10 мм выше, а колесная база растянута до 2 800 мм, что на 10 см больше, чем у версии Sport. Но оформление салона у обеих модификаций одинаковое – с новой передней панелью и улучшенными материалами отделки. <br />

Салон выдержан в духе последних моделей Hyundai. Оптитронная приборная панель с приятной голубой подсветкой оборудована цветным 4,3-дюймовым дисплеем для вывода вспомогательной информации. Посередине центральной консоли расположен 8-дюймовый LCD-дисплей, на который выводится вся необходимая информация, а также данные навигационной системы. Кстати, последнюю можно заказать с одним из двух вариантов программного обеспечения: Navitel или Navteq. По словам представителей Hyundai такой выбор обусловлен локальными предпочтениями клиентов.  <br />
Обновленный Santa Fe доступен в пяти комплектациях: Comfort, Dynamic, Sport, High-Tech и Family. Стандартное оборудование комплектации Comfort включает в себя 6 подушек безопасности, систему курсовой устойчивости ESP, светодиодные ходовые огни, датчик дождя, легкосплавные диски R17, подогрев передних кресел, электропривод зеркал с подогревом, маршрутный компьютер, электроусилитель руля, ABS, HAS, DBC, ESC. В данной комплектации Hyunda Santa Fe имеет две версии – переднеприводную и полноприводную.
         </p>
        </div>
        
        <div id="content_9" class="content">
        <p className="Auto_headline">ТО для автомобиля Mazda 6 2006</p>
        <div className="table_block" >
        <table id="Auto_table1">
          <tr className="first_row">
          <th className="table_headline">Требует замены <span>(тыс. км.)</span></th>

          <th><p>10</p></th>
          <th><p>20</p></th>
          <th><p>30</p></th>
          <th><p>40</p></th>
          <th><p>50</p></th>
          <th><p>60</p></th>
          <th><p>70</p></th>
          <th><p>80</p></th>
          <th>
            <p>90</p>
          </th>
          <th>
            <p>100</p>
          </th>
          <th>
            <p>110</p>
          </th>
          <th>
            <p>120</p>
          </th>
          </tr>
          <tr className="first_title">
            <td>Моторное масло и фильтр</td>

            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
          </tr>
          <tr className="second1_title">
            <td>Воздушный фильтр</td>

            <td></td>
            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td></td>
            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td></td>
            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td></td>
            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
          </tr>
          <tr className="third1_title">
            <td>Топливный фильтр</td>

            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
          </tr>
          <tr className="second_title">
            <td>Салонный фильтр</td>

            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
          </tr>
          <tr className="third_title">
            <td>Свечи зажигания</td>

            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
          </tr>
          <tr className="fifth_title">
            <td>Тормозная жидкость</td>

            <td></td>
            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td></td>
            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td></td>
            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td></td>
            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
          </tr>
          <tr className="nineth_title">
            <td>Масло в МКПП</td>
            
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
          </tr>
        
        </table>
        </div>

        <p className="Auto_headline1">Дополнительное инфо о модели</p>
         <p className="Auto_text">
         тилетней гарантией.

На Нью-Йоркском автосалоне 2012 состоялся дебют фейслифтинговой версии Santa Fe третьего поколения. Автомобиль представили в двух исполнениях – пятиместной Sport и семиместной с увеличенной колесной базой. Российская презентация новинки состоялась в рамках Московского автосалона 2012. 

Обновленный Santa Fe стал солиднее и брутальнее. Дизайн модели выполнен в текущем фирменном стиле Fluidic Sculpture с шестиугольной решеткой радиатора, узкой светотехникой и многочисленными подштамповками. Фейслифтинг затронул передний и задний бамперы, окантовки противотуманных фар, рейлинги на крыше, а также рисунок колесных дисков. Стильный дизайн боковых линий, не только наполнен динамизмом, но и, по словам конструкторов, привел к снижению коэффициента лобового сопротивления до 0,34. <br />

На американском рынке базовый пятиместный Hyundai Santa Fe 2013 продается с приставкой Sport. Его габаритная длина составляет 4 690 мм, ширина – 1 880, высота – 1 680, а величина колесной базы – 2 700 мм. Семиместный вариант кроссовера получился на 215 мм длинее, на 5 мм шире, на 10 мм выше, а колесная база растянута до 2 800 мм, что на 10 см больше, чем у версии Sport. Но оформление салона у обеих модификаций одинаковое – с новой передней панелью и улучшенными материалами отделки. <br />

Салон выдержан в духе последних моделей Hyundai. Оптитронная приборная панель с приятной голубой подсветкой оборудована цветным 4,3-дюймовым дисплеем для вывода вспомогательной информации. Посередине центральной консоли расположен 8-дюймовый LCD-дисплей, на который выводится вся необходимая информация, а также данные навигационной системы. Кстати, последнюю можно заказать с одним из двух вариантов программного обеспечения: Navitel или Navteq. По словам представителей Hyundai такой выбор обусловлен локальными предпочтениями клиентов.  <br />
Обновленный Santa Fe доступен в пяти комплектациях: Comfort, Dynamic, Sport, High-Tech и Family. Стандартное оборудование комплектации Comfort включает в себя 6 подушек безопасности, систему курсовой устойчивости ESP, светодиодные ходовые огни, датчик дождя, легкосплавные диски R17, подогрев передних кресел, электропривод зеркал с подогревом, маршрутный компьютер, электроусилитель руля, ABS, HAS, DBC, ESC. В данной комплектации Hyunda Santa Fe имеет две версии – переднеприводную и полноприводную.
         </p>
        </div>
        <div id="content_10" class="content">
        <p className="Auto_headline">ТО для Mercedes</p>
        <div className="table_block" >
        <table id="Auto_table1">
          <tr className="first_row">
          <th className="table_headline">Требует замены <span>(тыс. км.)</span></th>

          <th><p>10</p></th>
          <th><p>20</p></th>
          <th><p>30</p></th>
          <th><p>40</p></th>
          <th><p>50</p></th>
          <th><p>60</p></th>
          <th><p>70</p></th>
          <th><p>80</p></th>
          <th>
            <p>90</p>
          </th>
          <th>
            <p>100</p>
          </th>
          <th>
            <p>110</p>
          </th>
          <th>
            <p>120</p>
          </th>
          </tr>
          <tr className="first_title">
            <td>Моторное масло и фильтр</td>

            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
          </tr>
          <tr className="second1_title">
            <td>Воздушный фильтр</td>

            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
          </tr>
          <tr className="third1_title">
            <td>Охлаждающая жидкость</td>

            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
          </tr>
          <tr className="second_title">
            <td>Салонный фильтр</td>

            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
          </tr>
          <tr className="third_title">
            <td>Свечи зажигания</td>

            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
          </tr>
          <tr className="fifth_title">
            <td>Тормозная жидкость</td>

            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
          </tr>
          <tr className="nineth_title">
            <td>Масло в AКПП</td>
            
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
          </tr>
        
        </table>
        </div>

        <p className="Auto_headline1">Дополнительное инфо о модели</p>
         <p className="Auto_text">
         тилетней гарантией.

На Нью-Йоркском автосалоне 2012 состоялся дебют фейслифтинговой версии Santa Fe третьего поколения. Автомобиль представили в двух исполнениях – пятиместной Sport и семиместной с увеличенной колесной базой. Российская презентация новинки состоялась в рамках Московского автосалона 2012. 

Обновленный Santa Fe стал солиднее и брутальнее. Дизайн модели выполнен в текущем фирменном стиле Fluidic Sculpture с шестиугольной решеткой радиатора, узкой светотехникой и многочисленными подштамповками. Фейслифтинг затронул передний и задний бамперы, окантовки противотуманных фар, рейлинги на крыше, а также рисунок колесных дисков. Стильный дизайн боковых линий, не только наполнен динамизмом, но и, по словам конструкторов, привел к снижению коэффициента лобового сопротивления до 0,34. <br />

На американском рынке базовый пятиместный Hyundai Santa Fe 2013 продается с приставкой Sport. Его габаритная длина составляет 4 690 мм, ширина – 1 880, высота – 1 680, а величина колесной базы – 2 700 мм. Семиместный вариант кроссовера получился на 215 мм длинее, на 5 мм шире, на 10 мм выше, а колесная база растянута до 2 800 мм, что на 10 см больше, чем у версии Sport. Но оформление салона у обеих модификаций одинаковое – с новой передней панелью и улучшенными материалами отделки. <br />

Салон выдержан в духе последних моделей Hyundai. Оптитронная приборная панель с приятной голубой подсветкой оборудована цветным 4,3-дюймовым дисплеем для вывода вспомогательной информации. Посередине центральной консоли расположен 8-дюймовый LCD-дисплей, на который выводится вся необходимая информация, а также данные навигационной системы. Кстати, последнюю можно заказать с одним из двух вариантов программного обеспечения: Navitel или Navteq. По словам представителей Hyundai такой выбор обусловлен локальными предпочтениями клиентов.  <br />
Обновленный Santa Fe доступен в пяти комплектациях: Comfort, Dynamic, Sport, High-Tech и Family. Стандартное оборудование комплектации Comfort включает в себя 6 подушек безопасности, систему курсовой устойчивости ESP, светодиодные ходовые огни, датчик дождя, легкосплавные диски R17, подогрев передних кресел, электропривод зеркал с подогревом, маршрутный компьютер, электроусилитель руля, ABS, HAS, DBC, ESC. В данной комплектации Hyunda Santa Fe имеет две версии – переднеприводную и полноприводную.
         </p>
        </div>
        <div id="content_11" class="content">
        <p className="Auto_headline">ТО для Mitsubishi Outlander 3</p>
        <div className="table_block" >
        <table id="Auto_table1">
          <tr className="first_row">
          <th className="table_headline">Требует замены <span>(тыс. км.)</span></th>

          <th><p>10</p></th>
          <th><p>20</p></th>
          <th><p>30</p></th>
          <th><p>40</p></th>
          <th><p>50</p></th>
          <th><p>60</p></th>
          <th><p>70</p></th>
          <th><p>80</p></th>
          <th>
            <p>90</p>
          </th>
          <th>
            <p>100</p>
          </th>
          <th>
            <p>110</p>
          </th>
          <th>
            <p>120</p>
          </th>
          </tr>
          <tr className="first_title">
            <td>Моторное масло и фильтр</td>

            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
          </tr>
          <tr className="second1_title">
            <td>Воздушный фильтр</td>

            <td></td>
            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td></td>
            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td></td>
            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td></td>
            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
          </tr>
          <tr className="third1_title">
            <td>Охлаждающая жидкость</td>

            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
          </tr>
          <tr className="second_title">
            <td>Салонный фильтр</td>

            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
          </tr>
          <tr className="third_title">
            <td>Свечи зажигания</td>

            <td></td>
            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td></td>
            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td></td>
            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td></td>
            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
          </tr>
          <tr className="fifth_title">
            <td>Тормозная жидкость</td>

            <td></td>
            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td></td>
            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td></td>
            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td></td>
            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
          </tr>
          <tr className="nineth_title">
            <td>Масло в AКПП</td>
            
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td></td>
            <td></td>
          </tr>
          <tr className="tenth_title">
            <td>Масло в MКПП</td>
            
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td></td>
            <td></td>
          </tr>
          <tr className="eleventh_title">
            <td>Ремень ГРМ</td>

            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        
        </table>
        </div>

        <p className="Auto_headline1">Дополнительное инфо о модели</p>
         <p className="Auto_text">
         тилетней гарантией.

На Нью-Йоркском автосалоне 2012 состоялся дебют фейслифтинговой версии Santa Fe третьего поколения. Автомобиль представили в двух исполнениях – пятиместной Sport и семиместной с увеличенной колесной базой. Российская презентация новинки состоялась в рамках Московского автосалона 2012. 

Обновленный Santa Fe стал солиднее и брутальнее. Дизайн модели выполнен в текущем фирменном стиле Fluidic Sculpture с шестиугольной решеткой радиатора, узкой светотехникой и многочисленными подштамповками. Фейслифтинг затронул передний и задний бамперы, окантовки противотуманных фар, рейлинги на крыше, а также рисунок колесных дисков. Стильный дизайн боковых линий, не только наполнен динамизмом, но и, по словам конструкторов, привел к снижению коэффициента лобового сопротивления до 0,34. <br />

На американском рынке базовый пятиместный Hyundai Santa Fe 2013 продается с приставкой Sport. Его габаритная длина составляет 4 690 мм, ширина – 1 880, высота – 1 680, а величина колесной базы – 2 700 мм. Семиместный вариант кроссовера получился на 215 мм длинее, на 5 мм шире, на 10 мм выше, а колесная база растянута до 2 800 мм, что на 10 см больше, чем у версии Sport. Но оформление салона у обеих модификаций одинаковое – с новой передней панелью и улучшенными материалами отделки. <br />

Салон выдержан в духе последних моделей Hyundai. Оптитронная приборная панель с приятной голубой подсветкой оборудована цветным 4,3-дюймовым дисплеем для вывода вспомогательной информации. Посередине центральной консоли расположен 8-дюймовый LCD-дисплей, на который выводится вся необходимая информация, а также данные навигационной системы. Кстати, последнюю можно заказать с одним из двух вариантов программного обеспечения: Navitel или Navteq. По словам представителей Hyundai такой выбор обусловлен локальными предпочтениями клиентов.  <br />
Обновленный Santa Fe доступен в пяти комплектациях: Comfort, Dynamic, Sport, High-Tech и Family. Стандартное оборудование комплектации Comfort включает в себя 6 подушек безопасности, систему курсовой устойчивости ESP, светодиодные ходовые огни, датчик дождя, легкосплавные диски R17, подогрев передних кресел, электропривод зеркал с подогревом, маршрутный компьютер, электроусилитель руля, ABS, HAS, DBC, ESC. В данной комплектации Hyunda Santa Fe имеет две версии – переднеприводную и полноприводную.
         </p>
        </div>
        <div id="content_12" class="content">
        <p className="Auto_headline">ТО для Nissan Qashqai</p>
        <div className="table_block" >
        <table id="Auto_table1">
          <tr className="first_row">
          <th className="table_headline">Требует замены <span>(тыс. км.)</span></th>

          <th><p>10</p></th>
          <th><p>20</p></th>
          <th><p>30</p></th>
          <th><p>40</p></th>
          <th><p>50</p></th>
          <th><p>60</p></th>
          <th><p>70</p></th>
          <th><p>80</p></th>
          <th>
            <p>90</p>
          </th>
          <th>
            <p>100</p>
          </th>
          <th>
            <p>110</p>
          </th>
          <th>
            <p>120</p>
          </th>
          </tr>
          <tr className="first_title">
            <td>Моторное масло и фильтр</td>

            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
          </tr>
          <tr className="second1_title">
            <td>Воздушный фильтр</td>

            <td></td>
            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td></td>
            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td></td>
            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td></td>
            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
          </tr>
          <tr className="second_title">
            <td>Салонный фильтр</td>

            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
          </tr>
          <tr className="third1_title">
            <td>Охлаждающая жидкость</td>

            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
         
          <tr className="third_title">
            <td>Свечи зажигания</td>

            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
          </tr>
          <tr className="fifth_title">
            <td>Тормозная жидкость</td>

            <td></td>
            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td></td>
            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td></td>
            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td></td>
            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
          </tr>
          <tr className="nineth_title">
            <td>Масло в AКПП</td>
            
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
          </tr>
          <tr className="tenth_title">
            <td>Масло в MКПП</td>
            
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr className="eleventh_title">
            <td>Ремень ГРМ</td>

            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        
        </table>
        </div>

        <p className="Auto_headline1">Дополнительное инфо о модели</p>
         <p className="Auto_text">
         тилетней гарантией.

На Нью-Йоркском автосалоне 2012 состоялся дебют фейслифтинговой версии Santa Fe третьего поколения. Автомобиль представили в двух исполнениях – пятиместной Sport и семиместной с увеличенной колесной базой. Российская презентация новинки состоялась в рамках Московского автосалона 2012. 

Обновленный Santa Fe стал солиднее и брутальнее. Дизайн модели выполнен в текущем фирменном стиле Fluidic Sculpture с шестиугольной решеткой радиатора, узкой светотехникой и многочисленными подштамповками. Фейслифтинг затронул передний и задний бамперы, окантовки противотуманных фар, рейлинги на крыше, а также рисунок колесных дисков. Стильный дизайн боковых линий, не только наполнен динамизмом, но и, по словам конструкторов, привел к снижению коэффициента лобового сопротивления до 0,34. <br />

На американском рынке базовый пятиместный Hyundai Santa Fe 2013 продается с приставкой Sport. Его габаритная длина составляет 4 690 мм, ширина – 1 880, высота – 1 680, а величина колесной базы – 2 700 мм. Семиместный вариант кроссовера получился на 215 мм длинее, на 5 мм шире, на 10 мм выше, а колесная база растянута до 2 800 мм, что на 10 см больше, чем у версии Sport. Но оформление салона у обеих модификаций одинаковое – с новой передней панелью и улучшенными материалами отделки. <br />

Салон выдержан в духе последних моделей Hyundai. Оптитронная приборная панель с приятной голубой подсветкой оборудована цветным 4,3-дюймовым дисплеем для вывода вспомогательной информации. Посередине центральной консоли расположен 8-дюймовый LCD-дисплей, на который выводится вся необходимая информация, а также данные навигационной системы. Кстати, последнюю можно заказать с одним из двух вариантов программного обеспечения: Navitel или Navteq. По словам представителей Hyundai такой выбор обусловлен локальными предпочтениями клиентов.  <br />
Обновленный Santa Fe доступен в пяти комплектациях: Comfort, Dynamic, Sport, High-Tech и Family. Стандартное оборудование комплектации Comfort включает в себя 6 подушек безопасности, систему курсовой устойчивости ESP, светодиодные ходовые огни, датчик дождя, легкосплавные диски R17, подогрев передних кресел, электропривод зеркал с подогревом, маршрутный компьютер, электроусилитель руля, ABS, HAS, DBC, ESC. В данной комплектации Hyunda Santa Fe имеет две версии – переднеприводную и полноприводную.
         </p>
        </div>

        <div id="content_13" class="content">
        <p className="Auto_headline">ТО для Opel Astra J</p>
        <div className="table_block" >
        <table id="Auto_table1">
          <tr className="first_row">
          <th className="table_headline">Требует замены <span>(тыс. км.)</span></th>

          <th><p>10</p></th>
          <th><p>20</p></th>
          <th><p>30</p></th>
          <th><p>40</p></th>
          <th><p>50</p></th>
          <th><p>60</p></th>
          <th><p>70</p></th>
          <th><p>80</p></th>
          <th>
            <p>90</p>
          </th>
          <th>
            <p>100</p>
          </th>
          <th>
            <p>110</p>
          </th>
          <th>
            <p>120</p>
          </th>
          </tr>
          <tr className="first_title">
            <td>Моторное масло и фильтр</td>

            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
          </tr>
          <tr className="second1_title">
            <td>Воздушный фильтр</td>

            <td></td>
            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td></td>
            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td></td>
            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td></td>
            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
          </tr>
          <tr className="second_title">
            <td>Салонный фильтр</td>

            <td></td>
            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td></td>
            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td></td>
            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td></td>
            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
          </tr>
          <tr className="third1_title">
            <td>Охлаждающая жидкость</td>

            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td></td>
            <td></td>
          </tr>
         
          <tr className="third_title">
            <td>Свечи зажигания</td>

            <td></td>
            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td></td>
            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td></td>
            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td></td>
            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
          </tr>
          <tr className="fifth_title">
            <td>Тормозная жидкость</td>

            <td></td>
            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td></td>
            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td></td>
            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td></td>
            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
          </tr>
          <tr className="nineth_title">
            <td>Масло в КПП</td>
            
            <td></td>
            <td></td>
            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td></td>
            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td></td>
            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
          </tr>
          <tr className="tenth_title">
            <td>Приводной ремень</td>
            
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr className="eleventh_title">
            <td>Ремень ГРМ</td>

            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        
        </table>
        </div>
        <p className="Auto_headline1">Дополнительное инфо о модели</p>
         <p className="Auto_text">
         тилетней гарантией.

На Нью-Йоркском автосалоне 2012 состоялся дебют фейслифтинговой версии Santa Fe третьего поколения. Автомобиль представили в двух исполнениях – пятиместной Sport и семиместной с увеличенной колесной базой. Российская презентация новинки состоялась в рамках Московского автосалона 2012. 

Обновленный Santa Fe стал солиднее и брутальнее. Дизайн модели выполнен в текущем фирменном стиле Fluidic Sculpture с шестиугольной решеткой радиатора, узкой светотехникой и многочисленными подштамповками. Фейслифтинг затронул передний и задний бамперы, окантовки противотуманных фар, рейлинги на крыше, а также рисунок колесных дисков. Стильный дизайн боковых линий, не только наполнен динамизмом, но и, по словам конструкторов, привел к снижению коэффициента лобового сопротивления до 0,34. <br />

На американском рынке базовый пятиместный Hyundai Santa Fe 2013 продается с приставкой Sport. Его габаритная длина составляет 4 690 мм, ширина – 1 880, высота – 1 680, а величина колесной базы – 2 700 мм. Семиместный вариант кроссовера получился на 215 мм длинее, на 5 мм шире, на 10 мм выше, а колесная база растянута до 2 800 мм, что на 10 см больше, чем у версии Sport. Но оформление салона у обеих модификаций одинаковое – с новой передней панелью и улучшенными материалами отделки. <br />

Салон выдержан в духе последних моделей Hyundai. Оптитронная приборная панель с приятной голубой подсветкой оборудована цветным 4,3-дюймовым дисплеем для вывода вспомогательной информации. Посередине центральной консоли расположен 8-дюймовый LCD-дисплей, на который выводится вся необходимая информация, а также данные навигационной системы. Кстати, последнюю можно заказать с одним из двух вариантов программного обеспечения: Navitel или Navteq. По словам представителей Hyundai такой выбор обусловлен локальными предпочтениями клиентов.  <br />
Обновленный Santa Fe доступен в пяти комплектациях: Comfort, Dynamic, Sport, High-Tech и Family. Стандартное оборудование комплектации Comfort включает в себя 6 подушек безопасности, систему курсовой устойчивости ESP, светодиодные ходовые огни, датчик дождя, легкосплавные диски R17, подогрев передних кресел, электропривод зеркал с подогревом, маршрутный компьютер, электроусилитель руля, ABS, HAS, DBC, ESC. В данной комплектации Hyunda Santa Fe имеет две версии – переднеприводную и полноприводную.
         </p>
        </div>

        <div id="content_14" class="content">
        <p className="Auto_headline">ТО для Peugeot 107</p>
        <div className="table_block" >
        <table id="Auto_table1">
          <tr className="first_row">
          <th className="table_headline">Требует замены <span>(тыс. км.)</span></th>

          <th><p>10</p></th>
          <th><p>20</p></th>
          <th><p>30</p></th>
          <th><p>40</p></th>
          <th><p>50</p></th>
          <th><p>60</p></th>
          <th><p>70</p></th>
          <th><p>80</p></th>
          <th>
            <p>90</p>
          </th>
          <th>
            <p>100</p>
          </th>
          <th>
            <p>110</p>
          </th>
          <th>
            <p>120</p>
          </th>
          </tr>
          <tr className="first_title">
            <td>Моторное масло и фильтр</td>

            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
          </tr>
          <tr className="second1_title">
            <td>Воздушный фильтр</td>

            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
          </tr>
          <tr className="second_title">
            <td>Салонный фильтр</td>

            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
          </tr>
          <tr className="third1_title">
            <td>Топливный фильтр</td>

            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
          </tr>
          <tr className="third_title">
            <td>Свечи зажигания</td>

            <td></td>
            <td></td>
            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td></td>
            <td></td>
            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td></td>
            <td></td>
            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
          </tr>
          <tr className="third1_title">
            <td>Охлаждающая жидкость</td>

            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
          </tr>
         
         
          <tr className="fifth_title">
            <td>Тормозная жидкость</td>

            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr className="nineth_title">
            <td>Масло в КПП</td>
            
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
          </tr>
          
        
        </table>
        </div>
        <p className="Auto_headline1">Дополнительное инфо о модели</p>
         <p className="Auto_text">
         тилетней гарантией.

На Нью-Йоркском автосалоне 2012 состоялся дебют фейслифтинговой версии Santa Fe третьего поколения. Автомобиль представили в двух исполнениях – пятиместной Sport и семиместной с увеличенной колесной базой. Российская презентация новинки состоялась в рамках Московского автосалона 2012. 

Обновленный Santa Fe стал солиднее и брутальнее. Дизайн модели выполнен в текущем фирменном стиле Fluidic Sculpture с шестиугольной решеткой радиатора, узкой светотехникой и многочисленными подштамповками. Фейслифтинг затронул передний и задний бамперы, окантовки противотуманных фар, рейлинги на крыше, а также рисунок колесных дисков. Стильный дизайн боковых линий, не только наполнен динамизмом, но и, по словам конструкторов, привел к снижению коэффициента лобового сопротивления до 0,34. <br />

На американском рынке базовый пятиместный Hyundai Santa Fe 2013 продается с приставкой Sport. Его габаритная длина составляет 4 690 мм, ширина – 1 880, высота – 1 680, а величина колесной базы – 2 700 мм. Семиместный вариант кроссовера получился на 215 мм длинее, на 5 мм шире, на 10 мм выше, а колесная база растянута до 2 800 мм, что на 10 см больше, чем у версии Sport. Но оформление салона у обеих модификаций одинаковое – с новой передней панелью и улучшенными материалами отделки. <br />

Салон выдержан в духе последних моделей Hyundai. Оптитронная приборная панель с приятной голубой подсветкой оборудована цветным 4,3-дюймовым дисплеем для вывода вспомогательной информации. Посередине центральной консоли расположен 8-дюймовый LCD-дисплей, на который выводится вся необходимая информация, а также данные навигационной системы. Кстати, последнюю можно заказать с одним из двух вариантов программного обеспечения: Navitel или Navteq. По словам представителей Hyundai такой выбор обусловлен локальными предпочтениями клиентов.  <br />
Обновленный Santa Fe доступен в пяти комплектациях: Comfort, Dynamic, Sport, High-Tech и Family. Стандартное оборудование комплектации Comfort включает в себя 6 подушек безопасности, систему курсовой устойчивости ESP, светодиодные ходовые огни, датчик дождя, легкосплавные диски R17, подогрев передних кресел, электропривод зеркал с подогревом, маршрутный компьютер, электроусилитель руля, ABS, HAS, DBC, ESC. В данной комплектации Hyunda Santa Fe имеет две версии – переднеприводную и полноприводную.
         </p>
        </div>
        <div id="content_15" class="content">
        <p className="Auto_headline">ТО для Renault Logan 2</p>
        <div className="table_block" >
        <table id="Auto_table1">
          <tr className="first_row">
          <th className="table_headline">Требует замены <span>(тыс. км.)</span></th>

          <th><p>10</p></th>
          <th><p>20</p></th>
          <th><p>30</p></th>
          <th><p>40</p></th>
          <th><p>50</p></th>
          <th><p>60</p></th>
          <th><p>70</p></th>
          <th><p>80</p></th>
          <th>
            <p>90</p>
          </th>
          <th>
            <p>100</p>
          </th>
          <th>
            <p>110</p>
          </th>
          <th>
            <p>120</p>
          </th>
          </tr>
          <tr className="first_title">
            <td>Моторное масло и фильтр</td>

            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
          </tr>
          <tr className="second1_title">
            <td>Воздушный фильтр</td>

            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
          </tr>
          <tr className="second_title">
            <td>Салонный фильтр</td>

            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
          </tr>
          <tr className="third_title">
            <td>Свечи зажигания</td>

            <td></td>
            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td></td>
            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td></td>
            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td></td>
            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
          </tr>
          <tr className="third1_title">
            <td>Охлаждающая жидкость</td>

            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
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
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr className="eleventh_title">
            <td>Навесной ремень</td>

            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          
          <tr className="eleventh_title">
            <td>Ремень ГРМ</td>

            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        
        </table>
        </div>
        <p className="Auto_headline1">Дополнительное инфо о модели</p>
         <p className="Auto_text">
         тилетней гарантией.

На Нью-Йоркском автосалоне 2012 состоялся дебют фейслифтинговой версии Santa Fe третьего поколения. Автомобиль представили в двух исполнениях – пятиместной Sport и семиместной с увеличенной колесной базой. Российская презентация новинки состоялась в рамках Московского автосалона 2012. 

Обновленный Santa Fe стал солиднее и брутальнее. Дизайн модели выполнен в текущем фирменном стиле Fluidic Sculpture с шестиугольной решеткой радиатора, узкой светотехникой и многочисленными подштамповками. Фейслифтинг затронул передний и задний бамперы, окантовки противотуманных фар, рейлинги на крыше, а также рисунок колесных дисков. Стильный дизайн боковых линий, не только наполнен динамизмом, но и, по словам конструкторов, привел к снижению коэффициента лобового сопротивления до 0,34. <br />

На американском рынке базовый пятиместный Hyundai Santa Fe 2013 продается с приставкой Sport. Его габаритная длина составляет 4 690 мм, ширина – 1 880, высота – 1 680, а величина колесной базы – 2 700 мм. Семиместный вариант кроссовера получился на 215 мм длинее, на 5 мм шире, на 10 мм выше, а колесная база растянута до 2 800 мм, что на 10 см больше, чем у версии Sport. Но оформление салона у обеих модификаций одинаковое – с новой передней панелью и улучшенными материалами отделки. <br />

Салон выдержан в духе последних моделей Hyundai. Оптитронная приборная панель с приятной голубой подсветкой оборудована цветным 4,3-дюймовым дисплеем для вывода вспомогательной информации. Посередине центральной консоли расположен 8-дюймовый LCD-дисплей, на который выводится вся необходимая информация, а также данные навигационной системы. Кстати, последнюю можно заказать с одним из двух вариантов программного обеспечения: Navitel или Navteq. По словам представителей Hyundai такой выбор обусловлен локальными предпочтениями клиентов.  <br />
Обновленный Santa Fe доступен в пяти комплектациях: Comfort, Dynamic, Sport, High-Tech и Family. Стандартное оборудование комплектации Comfort включает в себя 6 подушек безопасности, систему курсовой устойчивости ESP, светодиодные ходовые огни, датчик дождя, легкосплавные диски R17, подогрев передних кресел, электропривод зеркал с подогревом, маршрутный компьютер, электроусилитель руля, ABS, HAS, DBC, ESC. В данной комплектации Hyunda Santa Fe имеет две версии – переднеприводную и полноприводную.
         </p>
        </div>
        <div id="content_16" class="content">
        <p className="Auto_headline">ТО для Skoda Fabia II</p>
        <div className="table_block" >
        <table id="Auto_table1">
          <tr className="first_row">
          <th className="table_headline">Требует замены <span>(тыс. км.)</span></th>

          <th><p>10</p></th>
          <th><p>20</p></th>
          <th><p>30</p></th>
          <th><p>40</p></th>
          <th><p>50</p></th>
          <th><p>60</p></th>
          <th><p>70</p></th>
          <th><p>80</p></th>
          <th>
            <p>90</p>
          </th>
          <th>
            <p>100</p>
          </th>
          <th>
            <p>110</p>
          </th>
          <th>
            <p>120</p>
          </th>
          </tr>
          <tr className="first_title">
            <td>Моторное масло и фильтр</td>

            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
          </tr>
          <tr className="second1_title">
            <td>Воздушный фильтр</td>

            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
          </tr>
          <tr className="second_title">
            <td>Салонный фильтр</td>

            <td></td>
            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td></td>
            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td></td>
            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td></td>
            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
          </tr>
          <tr className="third_title">
            <td>Свечи зажигания</td>

            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
          </tr>
         
          <tr className="fifth_title">
            <td>Тормозная жидкость</td>

            <td></td>
            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td></td>
            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td></td>
            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td></td>
            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
          </tr>
          <tr className="eleventh_title">
            <td>Приводной ремень</td>

            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          
          <tr className="eleventh_title">
            <td>Ремень ГРМ</td>

            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        
        </table>
        </div>
        <p className="Auto_headline1">Дополнительное инфо о модели</p>
         <p className="Auto_text">
         тилетней гарантией.

На Нью-Йоркском автосалоне 2012 состоялся дебют фейслифтинговой версии Santa Fe третьего поколения. Автомобиль представили в двух исполнениях – пятиместной Sport и семиместной с увеличенной колесной базой. Российская презентация новинки состоялась в рамках Московского автосалона 2012. 

Обновленный Santa Fe стал солиднее и брутальнее. Дизайн модели выполнен в текущем фирменном стиле Fluidic Sculpture с шестиугольной решеткой радиатора, узкой светотехникой и многочисленными подштамповками. Фейслифтинг затронул передний и задний бамперы, окантовки противотуманных фар, рейлинги на крыше, а также рисунок колесных дисков. Стильный дизайн боковых линий, не только наполнен динамизмом, но и, по словам конструкторов, привел к снижению коэффициента лобового сопротивления до 0,34. <br />

На американском рынке базовый пятиместный Hyundai Santa Fe 2013 продается с приставкой Sport. Его габаритная длина составляет 4 690 мм, ширина – 1 880, высота – 1 680, а величина колесной базы – 2 700 мм. Семиместный вариант кроссовера получился на 215 мм длинее, на 5 мм шире, на 10 мм выше, а колесная база растянута до 2 800 мм, что на 10 см больше, чем у версии Sport. Но оформление салона у обеих модификаций одинаковое – с новой передней панелью и улучшенными материалами отделки. <br />

Салон выдержан в духе последних моделей Hyundai. Оптитронная приборная панель с приятной голубой подсветкой оборудована цветным 4,3-дюймовым дисплеем для вывода вспомогательной информации. Посередине центральной консоли расположен 8-дюймовый LCD-дисплей, на который выводится вся необходимая информация, а также данные навигационной системы. Кстати, последнюю можно заказать с одним из двух вариантов программного обеспечения: Navitel или Navteq. По словам представителей Hyundai такой выбор обусловлен локальными предпочтениями клиентов.  <br />
Обновленный Santa Fe доступен в пяти комплектациях: Comfort, Dynamic, Sport, High-Tech и Family. Стандартное оборудование комплектации Comfort включает в себя 6 подушек безопасности, систему курсовой устойчивости ESP, светодиодные ходовые огни, датчик дождя, легкосплавные диски R17, подогрев передних кресел, электропривод зеркал с подогревом, маршрутный компьютер, электроусилитель руля, ABS, HAS, DBC, ESC. В данной комплектации Hyunda Santa Fe имеет две версии – переднеприводную и полноприводную.
         </p>
        </div>

        <div id="content_17" class="content">
        <p className="Auto_headline">ТО для Toyota Camry</p>
        <div className="table_block" >
        <table id="Auto_table1">
          <tr className="first_row">
          <th className="table_headline">Требует замены <span>(тыс. км.)</span></th>

          <th><p>10</p></th>
          <th><p>20</p></th>
          <th><p>30</p></th>
          <th><p>40</p></th>
          <th><p>50</p></th>
          <th><p>60</p></th>
          <th><p>70</p></th>
          <th><p>80</p></th>
          <th>
            <p>90</p>
          </th>
          <th>
            <p>100</p>
          </th>
          <th>
            <p>110</p>
          </th>
          <th>
            <p>120</p>
          </th>
          </tr>
          <tr className="first_title">
            <td>Моторное масло и фильтр</td>

            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
          </tr>
          <tr className="second1_title">
            <td>Воздушный фильтр</td>

            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
          </tr>
          <tr className="second_title">
            <td>Салонный фильтр</td>

            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
          </tr>
          <tr className="third1_title">
            <td>Топливный фильтр</td>

            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
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
            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
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
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
          </tr>
          <tr className="nineth_title">
            <td>Масло в КПП</td>
            
            <td></td>
            <td></td>
            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
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
        <p className="Auto_headline1">Дополнительное инфо о модели</p>
         <p className="Auto_text">
         тилетней гарантией.

На Нью-Йоркском автосалоне 2012 состоялся дебют фейслифтинговой версии Santa Fe третьего поколения. Автомобиль представили в двух исполнениях – пятиместной Sport и семиместной с увеличенной колесной базой. Российская презентация новинки состоялась в рамках Московского автосалона 2012. 

Обновленный Santa Fe стал солиднее и брутальнее. Дизайн модели выполнен в текущем фирменном стиле Fluidic Sculpture с шестиугольной решеткой радиатора, узкой светотехникой и многочисленными подштамповками. Фейслифтинг затронул передний и задний бамперы, окантовки противотуманных фар, рейлинги на крыше, а также рисунок колесных дисков. Стильный дизайн боковых линий, не только наполнен динамизмом, но и, по словам конструкторов, привел к снижению коэффициента лобового сопротивления до 0,34. <br />

На американском рынке базовый пятиместный Hyundai Santa Fe 2013 продается с приставкой Sport. Его габаритная длина составляет 4 690 мм, ширина – 1 880, высота – 1 680, а величина колесной базы – 2 700 мм. Семиместный вариант кроссовера получился на 215 мм длинее, на 5 мм шире, на 10 мм выше, а колесная база растянута до 2 800 мм, что на 10 см больше, чем у версии Sport. Но оформление салона у обеих модификаций одинаковое – с новой передней панелью и улучшенными материалами отделки. <br />

Салон выдержан в духе последних моделей Hyundai. Оптитронная приборная панель с приятной голубой подсветкой оборудована цветным 4,3-дюймовым дисплеем для вывода вспомогательной информации. Посередине центральной консоли расположен 8-дюймовый LCD-дисплей, на который выводится вся необходимая информация, а также данные навигационной системы. Кстати, последнюю можно заказать с одним из двух вариантов программного обеспечения: Navitel или Navteq. По словам представителей Hyundai такой выбор обусловлен локальными предпочтениями клиентов.  <br />
Обновленный Santa Fe доступен в пяти комплектациях: Comfort, Dynamic, Sport, High-Tech и Family. Стандартное оборудование комплектации Comfort включает в себя 6 подушек безопасности, систему курсовой устойчивости ESP, светодиодные ходовые огни, датчик дождя, легкосплавные диски R17, подогрев передних кресел, электропривод зеркал с подогревом, маршрутный компьютер, электроусилитель руля, ABS, HAS, DBC, ESC. В данной комплектации Hyunda Santa Fe имеет две версии – переднеприводную и полноприводную.
         </p>
        </div>
        <div id="content_18" class="content">
        <p className="Auto_headline">ТО для Volkswagen Polo Sedan</p>

        <div className="table_block" >
        <table id="Auto_table1">
          <tr className="first_row">
          <th className="table_headline">Требует замены <span>(тыс. км.)</span></th>

          <th><p>10</p></th>
          <th><p>20</p></th>
          <th><p>30</p></th>
          <th><p>40</p></th>
          <th><p>50</p></th>
          <th><p>60</p></th>
          <th><p>70</p></th>
          <th><p>80</p></th>
          <th>
            <p>90</p>
          </th>
          <th>
            <p>100</p>
          </th>
          <th>
            <p>110</p>
          </th>
          <th>
            <p>120</p>
          </th>
          </tr>
          <tr className="first_title">
            <td>Моторное масло и фильтр</td>

            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
          </tr>
          <tr className="second1_title">
            <td>Воздушный фильтр</td>

            <td></td>
            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td></td>
            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td></td>
            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td></td>
            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
          </tr>
          <tr className="second_title">
            <td>Салонный фильтр</td>

            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
          </tr>
          <tr className="third1_title">
            <td>Топливный фильтр</td>

            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
          </tr>
          <tr className="third_title">
            <td>Свечи зажигания</td>

            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
          </tr>
         
          <tr className="fifth_title">
            <td>Тормозная жидкость</td>

            <td></td>
            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td></td>
            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td></td>
            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
            <td></td>
            <td></td>
            <td><img className="pic" src={accept} alt="accept"/></td>
          </tr>
          
    
        
        </table>
        </div>

        <p className="Auto_headline1">Дополнительное инфо о модели</p>
         <p className="Auto_text">
         тилетней гарантией.

На Нью-Йоркском автосалоне 2012 состоялся дебют фейслифтинговой версии Santa Fe третьего поколения. Автомобиль представили в двух исполнениях – пятиместной Sport и семиместной с увеличенной колесной базой. Российская презентация новинки состоялась в рамках Московского автосалона 2012. 

Обновленный Santa Fe стал солиднее и брутальнее. Дизайн модели выполнен в текущем фирменном стиле Fluidic Sculpture с шестиугольной решеткой радиатора, узкой светотехникой и многочисленными подштамповками. Фейслифтинг затронул передний и задний бамперы, окантовки противотуманных фар, рейлинги на крыше, а также рисунок колесных дисков. Стильный дизайн боковых линий, не только наполнен динамизмом, но и, по словам конструкторов, привел к снижению коэффициента лобового сопротивления до 0,34. <br />

На американском рынке базовый пятиместный Hyundai Santa Fe 2013 продается с приставкой Sport. Его габаритная длина составляет 4 690 мм, ширина – 1 880, высота – 1 680, а величина колесной базы – 2 700 мм. Семиместный вариант кроссовера получился на 215 мм длинее, на 5 мм шире, на 10 мм выше, а колесная база растянута до 2 800 мм, что на 10 см больше, чем у версии Sport. Но оформление салона у обеих модификаций одинаковое – с новой передней панелью и улучшенными материалами отделки. <br />

Салон выдержан в духе последних моделей Hyundai. Оптитронная приборная панель с приятной голубой подсветкой оборудована цветным 4,3-дюймовым дисплеем для вывода вспомогательной информации. Посередине центральной консоли расположен 8-дюймовый LCD-дисплей, на который выводится вся необходимая информация, а также данные навигационной системы. Кстати, последнюю можно заказать с одним из двух вариантов программного обеспечения: Navitel или Navteq. По словам представителей Hyundai такой выбор обусловлен локальными предпочтениями клиентов.  <br />
Обновленный Santa Fe доступен в пяти комплектациях: Comfort, Dynamic, Sport, High-Tech и Family. Стандартное оборудование комплектации Comfort включает в себя 6 подушек безопасности, систему курсовой устойчивости ESP, светодиодные ходовые огни, датчик дождя, легкосплавные диски R17, подогрев передних кресел, электропривод зеркал с подогревом, маршрутный компьютер, электроусилитель руля, ABS, HAS, DBC, ESC. В данной комплектации Hyunda Santa Fe имеет две версии – переднеприводную и полноприводную.
         </p>
        </div>
 
    </div>

    </div>
 




    </div> /*Main DIV*/
  );
}
