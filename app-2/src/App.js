import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component{
  constructor(){
    super()
    this.state = {
      arr: ['Quinn', 'Ani', 'Obi', 'Pheobe', 'Max', 'Stasheff']
    }
  }

  // h4Array(arr){
  //   let arrH = []
  //   for(let i=0; i<arr.length; i++){
      
  //   }
  // }
  render(){
    let arrH = this.state.arr.map((e,i) =>{
      return <h2 key = {i}>{e}</h2>
      })
    
    return <div className = 'App'>{arrH}</div>
  }
}


export default App;
