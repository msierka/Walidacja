import React, { Component } from 'react';
import './App.css';
class App extends Component {
  state = { 
    name: '',
    email: '',
    password: '',
    check: false,
    error : {
      name_error : true,
      email_error : true,
      password_error: true,
      check_error: true,
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
      <form onSubmit={this.handleSubmit}>
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