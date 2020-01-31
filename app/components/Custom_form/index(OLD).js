import React, {Component} from 'react';

class Form extends Component {
  state ={
    name: '',
    phone: '',
    email: '',
    emailStatus: ''
  }

  handleChange = input => e => {
    this.setState({
      [input]: e.target.value
    });
  }

  //submit Form
  submitForm = (e) => {
    //console.log(this.state);
    //create a new XMLHTTP request

    var xhr = new XMLHttpRequest();

    //get a ccallback when the server responds
    xhr.addEventListener('load', () => {
      //update the response state
      console.log(xhr.responceText);

    });

    xhr.open('GET', 'http://api.ruvictor.com/sendemail/index.php?sendto=' + email +
    '&name=' + name +
    '&massage' + phone );

    //send the request
    xhr.send();


    e.preventDefault();
  }

  render(){
    const {
      name,
      phone,
      email
    } = this.state;
    return(
      <div className ="formBlock">
        <form onSubmit={this.submitForm}>
          <label>
            <input type="text" placeholder = "Name" value={name} onChange={this.handleChange('name')} />
          </label>
          <label>
            <input type="tel" placeholder = "tel" value={phone} onChange={this.handleChange('tel')}/>
          </label>
          <label>
            <input type="email" placeholder = "email" value={email} onChange={this.handleChange('email')}/>
          </label>
          <label htmlFor="">
            <input type="submit" className="submitBtn" value="Submit" />
          </label>
        </form>

      </div>



    );
  }
}

 export default Form;