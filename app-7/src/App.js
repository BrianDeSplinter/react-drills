import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import NewTask from './NewTask.js'
import List from './List.js'
import ToDo from './ToDo.js'

class App extends Component{
  constructor(){
    super()
    this.state = {
      list: []
    }
    this.addTask = this.addTask.bind(this)
  }

  addTask(task){
    this.setState({list: [...this.state.list, task]})
  }

  render(){
    
    return(
      <div className= 'App'>
        <h1>My to-do List:</h1>
        <NewTask add={this.addTask}/>
        <List task={this.state.list}/>
        
      </div>
    )
  }
}

export default App;