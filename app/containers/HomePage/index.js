/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */
import React from 'react';
import './index.css';
import MyForm from '../../components/MyForm/Form';
import Image from './image.jpg';
import ContactInfo from '../../components/contact_info';
{
  /* import { Map, GoogleApiWrapper } from 'google-maps-react';
import ContactInfo from '../../components/contact_info/index'; */
}

export default function Fruits() {
  return (
    <div className="main_wrapper">
      <div id="main_div">
        <div id="MainPart">
          <br />
          <h2 className="main_header">
            Автосервис ALTAS готов предложить вам полный спектр услуг
          </h2>
          <div className="Main_items">
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

          {/* -----------------------------------------------------END OF ORDER FORM--------------------------------------------------------*/}

          {/* -----------------------------------------------------END OF ORDER FORM--------------------------------------------------------*/}
        </div>{' '}
        {/* #MainPart */}
      </div>{' '}
      {/* MainDiv */}
      <div className="our_service">
        <h3 className="second_headline">
          Предлагаем для вас услуги планового ТО автомобиля
        </h3>
        <MyForm />

        <figure>
          <img src={Image} alt="image" />
          <figcaption>Диагностика авто</figcaption>
        </figure>

        <article>
          Профессионализм персонала и качество оборудования позволяют обеспечить
          нашим клиентам 3-летнюю гарантию без ограничения пробега на монтаж и
          официальную гарантию от завода на оборудование. И это не просто слова,
          мы выполняем свои обязательства. «ТОВ ALTAS» является крупнейшим
          сервисным центром в Украине. Сервисная зона оборудована 50
          современными подъемниками, необходимым диагностическим оборудованием,
          для гарантийного и послегарантийного обслуживания автомобилей. Именно
          так должен выглядеть настоящий автосервис в Киеве. "ALTAS" предлагает
          оригинальные и альтернативные запасные части для автомобилей KIA,
          Opel, Peugeot, Jeep, Chevrolet, Chery, Cadillac.
        </article>
      </div>{' '}
      {/* Our_service */}
      <div className="map_contacts">
        <h4>Наши котакты</h4>
        <div className="infoBlock">
          <p className="textBlock1">
            Адрес: <br />
            г. Киев, Дарнцикий р-н , <br />
            ул. Автопарковая 12/1 <br />
            Телефон:(098) 964-53-12 <br />
            Е-mail:autoservice@gmail.com
          </p>
          <p className="textBlock2">
            Время работы: <br />
            понедельник-пятница: <br />
            8.00 - 22.00 <br />
            суббота, воскресенье: <br />
            10.00 - 22.00 <br />
          </p>
        </div>

        <ContactInfo />
      </div>
      {/* MainWrapper */}
    </div>
  );
}
