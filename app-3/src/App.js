import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component{
  constructor(){
    super()
    this.state = {
      stuff: ['Backpack', 'Tent', 'Water', 'Food', 'Sleeping Bag', 'Pillow', 'Flashlight', 'Firewood', 'Tp', 'Sunscreen', 'Bug Spray'],
      input: ''
    }
  }

  userInput(val){
    this.setState({
      input: val
    })
  }


  render(){
    let stuffArr = this.state.stuff.filter((e,i) => {
      return e.includes(this.state.input)
    })
    .map((e,i) => {
        return <h2 key = {i}>{e}</h2>
      })
    
    return (
    <div className = 'App'>
      <input onChange = {(e) => this.userInput(e.target.value)}/>
      <div>{stuffArr}</div>
    </div>
    )

  }
}
export default App;
