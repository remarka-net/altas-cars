import React, { Component } from 'react';
import axios from 'axios';
import './index.css';

const GOOGLE_FORM_MESSAGE_ID = 'entry.1584206392'
const GOOGLE_FORM_EMAIL_ID = 'entry.142746970'
const CORS_PROXY = 'https://altas-cars.herokuapp.com/'     //'https://altas-cars.herokuapp.com/';
const GOOGLE_FORM_ACTION = 'https://docs.google.com/forms/d/e/1FAIpQLSdQKaSnALM4DksVI9YJBSe0UbhIsXi-MvwcHme1BxXukRr8GQ/formResponse';

// action="https://docs.google.com/forms/d/e/1FAIpQLSdQKaSnALM4DksVI9YJBSe0UbhIsXi-MvwcHme1BxXukRr8GQ/formResponse"

class ContactBox extends Component {
  constructor(props){
    super(props)
    this.state = { 
      name: '', 
      email: '', 
      showForm: false,
      sendingMessage: false,
      messageSent: false,
      messageError: false
    }
  }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.setState({
      sendingMessage: true
    })
    this.sendMessage()
  }

  handleFormToggle = () => {
    this.setState( 
      (prevState) => {
        const { showForm } = prevState
        return {
          showForm: !showForm
        } 
      }
    )
  }

  handleReturnButton = () => {
    this.setState(
      {
        showForm: false,
        messageSent: false,
        messageError: false
      }
    )
  }

  sendMessage = () => {
    const formData = new FormData()
    formData.append(GOOGLE_FORM_MESSAGE_ID, this.state.name)
    formData.append(GOOGLE_FORM_EMAIL_ID, this.state.email)

    axios.post(CORS_PROXY + GOOGLE_FORM_ACTION,formData)
      .then(() => {
        this.setState({ 
          messageSent: true,
          sendingMessage: false,
          message: '',
          email: ''
        })
      }).catch(() => {
        this.setState({ 
          messageError: true,
          sendingMessage: false
        })
      })
  }

  returnButton = () => <button id='return-button' className='btn btn-default btn-xs' onClick={this.handleReturnButton}>Return</button>

  render() {
    if(this.state.sendingMessage){
      return(
        <div>Sending...</div>
      )
    }

    if(this.state.messageSent){
      return(
        <React.Fragment>
          <div className='success-message'>Sent! I will respond you</div>
          {this.returnButton()}
        </React.Fragment>
      )
    }

    if(this.state.messageError){
      return(
        <React.Fragment>
          <div className='error-message'>Sorry, your message was not sent. Contact me at: pavlouk2012@gmail.com</div>
          {this.returnButton()}
        </React.Fragment>
      )
    }

    if(this.state.showForm === false){
      return(
        <button id='contact-button' className='btn btn-sm' onClick={this.handleFormToggle}>Contact</button>
      )
    }

    return(
      <React.Fragment>
            <div className='form-group row'>
              <label htmlFor='message' className='col-sm-2 col-form-label'>
                Name:
              </label>
              <div className='col-sm-8'>
                <textarea 
                  id='message'
                  name='message'
                  className='form-control'
                  required
                  value={this.state.message} 
                  onChange={this.handleChange} 
                  rows='6'
                />
              </div>
            </div>
            <div className='form-container'>
          <form onSubmit={this.handleSubmit}>
            <div className='form-group row'>
              <label htmlFor='email' className='col-sm-2 col-form-label'>
                Email:
              </label>
              <div className='col-sm-8'>
                <input 
                  type='email' 
                  name='email'
                  id='email'
                  className='form-control'
                  value={this.state.email} 
                  onChange={this.handleChange}
                  required
                />
              </div>
            </div>
            <div>
              <button type='button' id='cancel-button' className='btn btn-default btn-sm btn-action' onClick={this.handleFormToggle}>Cancel</button>
              <button type='submit' className='btn btn-sm btn-default btn-action'>Submit</button>
            </div>
          </form>
        </div>
      </React.Fragment>
    )
  }
}

export default ContactBox