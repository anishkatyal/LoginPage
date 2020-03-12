import React, {Component} from 'react';
import '../Items/Electronics.css';
import Fashion from './Fashion';
class Electronincs extends Component{
    render(){
        return(
            <div className="items">
            <a href="#">Electronics &#x25BC;</a>
            <a href="#">Fashion Wear &#x25BC;</a>
            <a href="#">Home & Furniture &#x25BC;</a>
            <a href="#">Grocery &#x25BC;</a>

            </div>
            
        )
    }
}

export default Electronincs;