import React, {Component} from 'react';

class NewTask extends Component{
  constructor(){
      super()
      this.state ={
          input: ''
      }
      this.addItem = this.addItem.bind(this)
  }
  takeInput(value){
    this.setState({
      input: value
    })
  }

  addItem(){
    this.props.add(this.state.input)
    this.setState({
        input: ''
    }) 
    }
  
  render(){
      return(
        <div>
            <input className= 'input' 
                value={this.state.input}
                placeholder= 'Enter new task' 
                onChange = {(e)  => this.takeInput(e.target.value)}/>
            <button className= 'Button' onClick={this.addItem}>Add</button>
        </div>
      )
    }
}

export default NewTask;
