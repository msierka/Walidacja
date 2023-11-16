import React, { Component } from 'react';
import './App.css';
class App extends Component {
  state = { 
    name: '',
    email: '',
    password: '',
    check: false,
    error : {
      name_error : false,
      email_error : false,
      password_error: false,
      check_error: false,
    }
   } 

   mess = {
    name_error : 'Login powinien mieć więcej niż 6 znaków oraz nie zawierać spacji',
    email_error : 'Email musi zawierać znak @',
    password_error: 'Hasło musi składać się z 6 znaków',
    check_error: 'Niezaznaczona zgoda',
   }


handleSubmit=e=>{
  e.preventDefault();
  const validation = this.formValidation();
  if(validation.correct){
    console.log("formularz wysłany")
    this.setState({
    name: '',
    email: '',
    password: '',
    check: false,
    error : {
      name_error : false,
      email_error : false,
      password_error: false,
      check_error: false,
    }})
  } else {
    this.setState({
      name: '',
      email: '',
      password: '',
      check: false,
      error : {
        name_error : !validation.name_error,
        email_error : !validation.email_error,
        password_error: !validation.password_error,
        check_error: !validation.check_error,
      }})
  }
  
}

formValidation=()=>{
  let name_error = false;
  let email_error = false;
  let password_error = false;
  let check_error = false;
  let correct = false;

  if(this.state.name.length > 6 && this.state.name.indexOf(' ') === -1) {
    name_error = true;
  }
  if(this.state.email.indexOf('@') !== -1) {
    email_error = true;
  }
  if(this.state.password.length === 6 ) {
    password_error = true;
  }
  if(this.state.check) {
    check_error = true;
  }
  if(name_error && email_error && password_error && check_error ){
    correct = true;
  }
  return {
    name_error,
    email_error,
    password_error,
    check_error,
    correct
  }
}


handleChange=e=>{
  const type=e.target.type;
  const name=e.target.name;
  if(name ==='name' || name === 'email' || name==='password'){
    const value = e.target.value;
    this.setState({
      [name]: value
    })
  }else if(name === 'check'){
    const value = e.target.checked;
    this.setState({
      check: value
    })
  }

}


  render() { 
    const {name_error, email_error, password_error, check_error} = this.mess;
    return (
      <form onSubmit={this.handleSubmit} noValidate>
        <label htmlFor="text"> Twój login
          <input type="text" id="text" name="name" value={this.state.name} onChange={this.handleChange}/>
        {this.state.error.name_error && <span>{name_error}</span>}
         </label> 
         <label htmlFor="email"> Twój email
          <input type="email" id="email" name="email" value={this.state.email} onChange={this.handleChange}/>
          {this.state.error.email_error && <span>{email_error}</span>}
         </label> 
         <label htmlFor="password"> Twoje hasło
          <input type="password" id="password" name="password" value={this.state.password} onChange={this.handleChange}/>
          {this.state.error.password_error && <span>{password_error}</span>}
         </label> 
         <label htmlFor="checkbox"> 
          <input type="checkbox" id="checkbox" name="check" value={this.state.check} onChange={this.handleChange}/> Wyrażam zgodę
         </label> 
         {this.state.error.check_error && <span>{check_error}</span>}
         <button>Zapisz się</button>
         
      </form>
    );
  }
}
 
export default App;