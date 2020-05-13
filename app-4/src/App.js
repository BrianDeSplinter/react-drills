import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component{
  constructor(){
    super()
    this.state = {
      username: '',
      password: ''
    }
    this.click = this.click.bind(this)
  }

  userName(value){
    this.setState({
      username: value
    })
  }

  passWord(value){
    this.setState({
      password: value
    })
  }

  click(){
    alert(`Username: ${this.state.username}        Password: ${this.state.password}`)
  }

  render(){
    return(
      <div class='App'>
        <input id='Username' onChange = {(e) => this.userName(e.target.value)} placeholder = 'Username'/>
        <input id='Password' onChange = {(e) => this.passWord(e.target.value)} placeholder = 'Password'/>
        <button id='Login' onClick = {this.click}>Login</button>
      </div>
    )
  }
}

export default App;
