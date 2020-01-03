/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import './index.css';

export default function Fruits() {
  return (
    <div id="fruits">
      <h2>Главная страница</h2>

      <p id="fruits">Предлагаем для вас услуги планового ТО автомобиля</p>
      <img width="100%" src="https://autobet.com.ua/wp-content/uploads/2019/02/pic-2.jpg" />

    </div>
  );
}
