import React, { Component } from 'react';
import './index.css';
import axios from 'axios';




class MyForm extends Component {

  return(

<div class="container">

<div class="row">
  <div class="col-sm-4">
    <form action="mail.php" method="POST">
      <legend>Заголовок формы</legend>

      <div class="form-group">
        <label for="">Введите ваше имя</label>
        <input type="text" class="form-control" id="" name="user_name" placeholder="Например, Иван">
      </div>
    
      <div class="form-group">
        <label for="">Введите номер телефона</label>
        <input type="text" class="form-control" id="" name="user_phone" placeholder="+7 (999) 99 99 999">
      </div>
    
      <div class="form-group">
        <label for="">Введите email</label>
        <input type="text" class="form-control" id="" name="user_email" placeholder="mail@mail.ru">
      </div>
    
      <button type="submit" class="btn btn-primary">Отправить форму</button>
    </form>
  </div><!-- .col-sm-4 -->
</div> <!-- .row -->

</div><!-- /.container -->

  );
  }

  export default MyForm