import React from 'react';
import emailjs from 'emailjs-com';
import './Form.css';

export default function ContactUs() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('gmail', 'template_hsjTwTVo', e.target, 'user_gVUee7bxzx7Obe10GOfuU')
      .then((result) => {
          console.log(result.text);
          document.location.reload(true);
      }, (error) => {
          console.log(error.text);
      });
  }
  return (

    <form className="contact-form" onSubmit={sendEmail}>
        <label>Предварительный заказ</label>
        <hr/>

      <input type="text" placeholder="Ваше ФИО*" name="user_name" />

      <input type="numeric" placeholder="Номер телефона*" name="user_phone" />

      <input type="email" placeholder="E-mail" name="user_email" />

      <input type="submit" value="Сделать заказ" />
    </form>

  );
}