/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import './index.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import main_pic from './main_pic.jpg';
import Forms from "../../components/Custom_form/index2";

export default function Fruits() {
  return (
    <div className="main_wrapper">
      <div id="main_div">
        <div id="MainPart">
            <br />
            <h2 className="main_header">Автосервис ALTAS готов предложить вам полный спектр услуг</h2>

              <div className="car_item1">
                <span>Проверка и диагностика двигателя</span>
              </div>
              <div className="car_item1_extend">
                Проверка ресурса движка, замена масла, заправка кондиционера.
              </div>

              <div className="car_item2">
                <span>Проверка электроники</span>
              </div>
              <div className="car_item2_extend">
                Проверка системы авто на ошибки, замена проводки.
              </div>

              <div className="car_item3">
                <span>Полная диагностика авто</span>
              </div>
              <div className="car_item3_extend">
                Компьютерная диагностика технического состояния авто.
              </div>

              <div className="car_item4">
                <span>Проверка на правильность пробега</span>
              </div>
              <div className="car_item4_extend">
                Определяем реальный километраж авто.
              </div>

              <div className="car_item5">
                <span>Десятки других пунктов</span>
              </div>
              <div className="car_item5_extend">
                Полировка, покраска, рихтовка дисков, вулканизация шин...
              </div>

              <div className="car_item6">
                <span>Проверка на автоугон</span>
              </div>
              <div className="car_item6_extend">
                Полная юридическая проверка авто при продаже, а также
                сопровождение сделки.
              </div>
          </div>
        </div>


      <div className="our_service">

        <h3 className="second_headline">Предлагаем для вас услуги планового ТО автомобиля</h3>

     
{/*TODO make forms with Formik */}

        <Forms />
      </div>

    </div>
    
  );
}
