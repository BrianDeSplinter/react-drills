import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Image from './Image.js'

class App extends Component{
  render(){
    return(
      <div className= 'App'>
        <Image img={'https://66.media.tumblr.com/ea6b229fd50329f7baaf3ac36d311d8b/tumblr_inline_pnx8aa3mhe1u3y9qz_540.jpg'}/>
      </div>
    )
  }
}

export default App
