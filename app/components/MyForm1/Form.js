import React from 'react';
import emailjs from 'emailjs-com';
import './Form.css';

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
          alert("Спасибо, мы свяжемся с вами в ближайшее время");
            /*document.location.reload(true); */
            window.location.href = window.location.href.split( '#' )[0];
            

          /*if (document.location.onload = (true)){alert('window onload');} */
        },
        error => {
          console.log(error.text);
        },
      );
      function loadImage(){
        alert("hello world!");
      }
  }
  return (
    <form id="window_container" onSubmit={sendEmail}>
      <label name="service_name">Предварительный заказ</label>
      <hr />

      <input required type="text" placeholder="Ваше ФИО*" name="user_name" />

      <input required type="numeric" placeholder="Номер телефона*" name="user_phone" />

      <input type="email" placeholder="E-mail" name="user_email" />

      <input id="prodId" name="service_name" type="hidden" value="Компьютерная диагностика"></input>

      <input type="submit" value="Сделать заказ"  />
    </form>
  );
}