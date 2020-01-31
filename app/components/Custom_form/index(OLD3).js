import React from 'react';

handleSubmit = (event) => {
      event.preventDefault() 
       //other stuff  this.sendMessage()

    }

    sendMessage = () => { 
         const formData = new FormData() 
          formData.append(GOOGLE_FORM_MESSAGE_ID, this.state.message) 
           formData.append(GOOGLE_FORM_EMAIL_ID, this.state.email) 
            axios.post(CORS_PROXY + GOOGLE_FORM_ACTION_URL, formData)
        .then(() => {   
              this.setState({ 
            message: '',  email: ''    })  }).catch(() => {  
                    this.setState({    messageError: true,  
                        })  })}


<form onSubmit={this.handleSubmit}>
      <input type='email' name='email' value={this.state.email} onChange={this.handleChange} /> 
       <textarea name='message' value={this.state.message} onChange={this.handleChange} />
         <button type='submit'>Submit</button>
         </form>