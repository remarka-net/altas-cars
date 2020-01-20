/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import './index.css';
import main_pic from './main_pic.jpg';

export default function Fruits() {
  return (
    <div id="fruits">
      <h2 className="main_header">Мы предлагаем новую систему обслуживания автомобилей. В её основе — индивидуальный подход
         и оптимизация затрат наших клиентов. Современное оборудование, укомплектованные боксы и опыт 
         наших мастеров, позволяют решать любые поставленные задачи. Мы успешно работаем более 12 лет и 
         знаем свое дело достаточно хорошо.</h2>

    </div>
  );
}
