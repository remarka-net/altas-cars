

import './index.css';
import img1 from "./img/motor.svg";
import img2 from './img/transmision.svg';
import img3 from './img/brake-disk.svg';
import img4 from './img/battery.svg';
import img5 from './img/shock-absorber.svg';
import img6 from './img/wheel-and-manometer.svg';
import img7 from './img/tachometer.svg';
import img8 from './img/oil.svg';
import car from './img/service_car.jpg';
import pic1 from './img/car1.jpg';
/*
 * 
 *
 * 
 */
import React from 'react';
import { Helmet } from 'react-helmet';

import H1 from 'components/H1';
import List from './List';
import ListItem from './ListItem';

export default function FeaturePage() {
  return (
    <div>
  <p class="subtitle fancy"><span>Наши услуги</span></p>

  <h1 className="Services_headline">ТОВ "ALTAS" предлагает вам полный спектр услуг</h1>

    <div className="car_repair">
    <img src={img1} alt="motor"/>
    <img src={img2} alt=""/>
    <img src={img3} alt=""/>
    </div>
    <div className="main_car_repair">
    <img src={img8} alt=""/>
    <img className="service_car" src={car} alt=""/>
    <img src={img4} alt=""/>
    </div>
    <div className="car_repair">
      <img src={img7} alt=""/>
      <img src={img6} alt=""/>
      <img src={img5} alt=""/>
    </div>

    <div className="service_order">
    <img className="service_order_pic" src={pic1} alt=""/>
    <div className="service_order_article">
    <label>Компьютерная диагностика</label>
    <p>
    Чтобы ваше транспортное средство работало на протяжении
     долгого времени, не нуждаясь при этом в дорогостоящем ремонте,
    рекомендуется периодически проводить компьютерную диагностику 
    авто. Благодаря этому специалисты смогут обнаружить
    скрытые неполадки, которые в скором времени могут стать причиной 
    серьезной поломки. 
    </p>
    </div>
    </div>





    </div>
  );
}
