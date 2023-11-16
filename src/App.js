import React, { Component } from 'react';
import './App.css';
class App extends Component {
  state = { 
    name: '',
    email: '',
    password: '',
    check: false
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
    console.log(value)
    this.setState({
      check: value
    })
  }
  //console.log(type,name)

}


  render() { 
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="text"> Twój login
          <input type="text" id="text" name="name" value={this.state.name} onChange={this.handleChange}/>
         </label> 
         <label htmlFor="email"> Twój email
          <input type="email" id="email" name="email" value={this.state.email} onChange={this.handleChange}/>
         </label> 
         <label htmlFor="password"> Twoje hasło
          <input type="password" id="password" name="password" value={this.state.password} onChange={this.handleChange}/>
         </label> 
         <label htmlFor="checkbox"> 
          <input type="checkbox" id="checkbox" name="check" value={this.state.check} onChange={this.handleChange}/> Wyrażam zgodę
         </label> 
         <button>Zapisz się</button>
         
      </form>
    );
  }
}
 
export default App;