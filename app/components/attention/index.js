import React from 'react';
import './index.css';
import lamp from './lamp.png';

function Attention() {

    return(

<div className="attention">

    <p>

      Вы никогда не задумывались, как выглядит генератор переменного тока или водяной насос в автомобилях? К сожалению, многие владельцы транспортных средств не знакомы с устройством автомобилей, не говоря уже о его обслуживании и ремонте. Да, намного удобнее обслуживать автомобиль в технических дилерских центрах, в которых вам даже нет необходимости самостоятельно приобретать запчасти.

      </p>

      <img src={lamp} alt="idea"/>

      </div>


);
}
 
export default Attention