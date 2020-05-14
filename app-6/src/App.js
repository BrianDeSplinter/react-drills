import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import ToDo from './ToDo.js'

class App extends Component{
  constructor(){
    super()
    this.state = {
      input: '',
      list: []
    }
    this.addItem = this.addItem.bind(this)
  }

  takeInput(value){
    this.setState({
      input: value
    })
  }

  addItem(){
    this.setState({
      list: [...this.state.list, this.state.input],
      input: ''
    })
  }

  render(){
    let list = this.state.list.map((e, i) =>{
      return <ToDo key={i} task={e}/>
    })
    return(
      <div className= 'App'>
        <h1>My to-do List:</h1>
        <input className= 'input' 
          value={this.state.input}
          placeholder= 'Enter new task' 
          onChange = {(e)  => this.takeInput(e.target.value)}/>
        <button className= 'Button' onClick={this.addItem}>Add</button>
        {list}
      </div>
    )
  }
}

export default App;
