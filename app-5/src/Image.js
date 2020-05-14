import React, {Component} from 'react';

class Image extends Component{
    render(){
        return (
        <div>
            <img alt= 'This is a picture' src = {this.props.img}/>
        </div>
        )
    }
}
export default Image