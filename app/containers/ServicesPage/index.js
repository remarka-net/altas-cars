
import React from 'react';
import { Helmet } from 'react-helmet';
import H1 from 'components/H1';
import img1 from './img/motor.svg';
import img2 from './img/transmision.svg';
import img3 from './img/brake-disk.svg';
import img4 from './img/battery.svg';
import img5 from './img/shock-absorber.svg';
import img6 from './img/wheel-and-manometer.svg';
import img7 from './img/tachometer.svg';
import img8 from './img/oil.svg';
import car from './img/service_car.jpg';
import pic1 from './img/car2.jpg';
import pic2 from './img/car3.jpg';
import pic3 from './img/car4.jpg';
import order from './img/order_x64.png';
import './index.css';
import Form1 from '../../components/MyForm1/Form';
import Form2 from '../../components/MyForm2/Form';
import Form3 from '../../components/MyForm3/Form';

/*
 *
 *
 *
 */

import List from './List';
import ListItem from './ListItem';

export default function FeaturePage() {
  return (
    <div>
      <p className="subtitle fancy">
        <span>Наши услуги</span>
      </p>

      <h1 className="Services_headline">
        ТОВ "ALTAS" предлагает вам полный спектр услуг
      </h1>
      

      <div className="car_repair">

          <div className="main_icon">
          <img src={img1} alt="motor" />
          <p>Двигатель</p>

          <div className="service_item1">
            <span>Проверка состояния двигателя, замер компрессии. </span>
          </div>
          </div>
        

        <div className="main_icon">
        <img src={img2} alt="" />
        <p>КПП</p>
        <div className="service_item1">
            <span>Собственный алгоритм проверки АКПП. Проверка уровня жидкости и компьютерная диагностика. </span>
          </div>
        </div>
   
        <div className="main_icon">
        <img src={img3} alt="" />
        <p>Тормоза</p>
        <div className="service_item1">
            <span>Проверяем состояние тормозных механизмов, дисков, колодок, антиблокировочной, антипробуксовочной систем и антизаноса. </span>
          </div>
        </div>
       
      </div>

      <div className="main_car_repair">

      <div className="main_icon">
        <img src={img8} alt="" />
        <p>Масло</p>
        <div className="service_item1">
            <span>Проверям работу всех электронных систем и механических узлов, контролируемых этими системами.</span>
          </div>
        </div>
       
        <img className="service_car" src={car} alt="" />
  
        <div className="main_icon">
        <img src={img4} alt="" />
        <p>Аккумулятор</p>
        <div className="service_item1">
            <span>Проверка даты выпуска, напряжения, срока службы и работоспособности. </span>
          </div>
        </div>

      </div>
      <div className="car_repair">

      <div className="main_icon">
      <div className="service_item_bottom">
            <span>Проверка правильной работы бортового компьютера и его показаний.</span>
          </div>
        <img src={img7} alt="" />
        <p>Приборы</p>
        </div>
        <div className="main_icon">
        <div className="service_item_bottom1">
            <span>Равномерность износа, дата производства, состояние и марка шин - важный момент при покупке автомобиля. </span>
          </div>
        <img src={img6} alt="" />
        <p>Шины</p>
        </div>
        <div className="main_icon">
        <div className="service_item_bottom2">
            <span>Это один из самых важных элементов подвески. Они напрямую влияют на управляемость автомобиля, на его устойчивость и плавность хода автомобиля. </span>
          </div>
        <img src={img5} alt="" />
        <p>Гидравлика</p>
        </div>
      </div>
      

      <div className="service_order">
        <img className="service_order_pic" src={pic1} alt="the car" />

        <div className="service_order_article">
          <span>Компьютерная диагностика</span>
          <hr/>
          <p>
            Чтобы ваше транспортное средство работало на протяжении долгого
            времени, не нуждаясь при этом в дорогостоящем ремонте, рекомендуется
            периодически проводить компьютерную диагностику авто. Благодаря
            этому специалисты смогут обнаружить скрытые неполадки, которые в
            скором времени могут стать причиной серьезной поломки.
          </p>
          <form>
          <div className="Btn"><a class="orderBtn" href="#window_container">Заказать<img src={order} width="40px" alt="shopping cart"/></a></div>
          </form>
        </div>
        <Form1 />
      </div>

{/*-----------------------------------------Second form-----------------------------------------------------------------------*/}

      <div className="service_order">
        <img className="service_order_pic" src={pic2} alt="the car" />

        <div className="service_order_article">
          <span>Шиномонтаж</span>
          <hr/>
          <p>
          Как известно, каждое транспортное средство подвергается негативному 
          воздействию окружающей среды. Однако наибольший вред автомобилям наносит
           качество наших дорог. Именно поэтому в любой момент может понадобиться не 
           только балансировка колес, но и полная их замена. Необходимо понимать, что
           своевременное решение проблемы с колесами позволит избежать поломок.
          </p>
          <form>
          <div className="Btn"><a class="orderBtn" href="#window_container1">Заказать<img src={order} width="40px" alt="shopping cart"/></a></div>
          </form>
        </div>
        <Form2 />
      </div>

{/*-----------------------------------------Third form-----------------------------------------------------------------------*/}

<div className="service_order">
        <img className="service_order_pic" src={pic3} alt="the car" />

        <div className="service_order_article">
          <span>Замена масла</span>
          <hr/>
          <p>
          Каждый автомобилист должен помнить, что замена масла в двигателе позволяет решить самую главную задачу 
          - замедление процесса износа мотора. Если вы будете следить за уровнем масла в двигателе, сможете избежать
           ненужных хлопот, которые могут возникнуть в будущем. От выбора  во многом зависит способность двигателя 
           выдерживать неблагоприятные условия
          </p>
          <form>
          <div className="Btn"><a class="orderBtn" href="#window_container2">Заказать<img src={order} width="40px" alt="shopping cart"/></a></div>
          </form>
        </div>
        <Form3 />
      </div>



     </div>



  );
}
