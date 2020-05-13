import React, {Component} from 'react';


class App extends Component{
  constructor(){
    super()
    this.state ={
      input: ''
    }
  }

  updateInput(val){
    this.setState({
      input: val
    })
  }

  render(){
    return(
      <div>
        <input onChange= {e => this.updateInput(e.target.value)}/>
        <p>{this.state.input}</p>
      </div>
    )
  }

}

export default App;
