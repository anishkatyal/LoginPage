import React, {Component} from 'react';
import '../Items/Items.css';
import Fashion from './Fashion';
import {Link} from 'react-router-dom';

class Items extends Component{
    render(){
        return(
            <div className="items">
           <a href="/electronics">Electronics &#x25BC;</a>
            <a href="#">Fashion Wear &#x25BC;</a>
            <a href="#">Home & Furniture &#x25BC;</a>
            <a href="#">Grocery &#x25BC;</a>

            </div>
            
        )
    }
}

export default Items;