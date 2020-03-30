import React from 'react';
import emailjs from 'emailjs-com';
import './Form.css';
import accepted_icon from './checkmark.svg';
import $ from 'jquery';

export default function ContactUs() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        'gmail',
        'car_diagnostic',
        e.target,
        'user_gVUee7bxzx7Obe10GOfuU',
      )
      .then(
        result => {
          console.log(result.text);
          document.getElementById('window_container2').style.display = 'block';
          /* document.location.reload(true); */

          /* if (document.location.onload = (true)){alert('window onload');} */
        },
        error => {
          console.log(error.text);
        },
      );
  }

  $(document).ready(function(){
    if($( window ).width() < 1201){
    $("#FormSubmit1").attr("value","Заказать"); 
  }
  
  });
  return (
    <form id="contact_formX2" onSubmit={sendEmail}>
      <label>Предварительный заказ</label>
      <hr />

      <input required type="text" placeholder="Ваше ФИО*" name="user_name" />

      <input
        required
        type="text"
        minLength={10}
        placeholder="Номер телефона*"
        name="user_phone"
      />

      <input type="email" placeholder="E-mail" name="user_email" />

      <input id="prodId" name="service_name" type="hidden" value="Расходник2" />

      <input id="FormSubmit1" type="submit" value="Сделать заказ" />

      <div id="window_container2">
        <div id="okno">
          <p>Спасибо! Мы свяжемся с вами в ближайшее время</p>
          <img src={accepted_icon} alt="accepted" />
        </div>
      </div>
    </form>
  );
}
