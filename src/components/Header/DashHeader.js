import React, { Component } from 'react';
import './DashHeader.css';
import ReactDOM from 'react-dom';
import Logo from '../images/shop.png';

import {Link} from 'react-router-dom';

class DashHeader extends Component{
    render(){
        return(
         <header className="head">
            <div>  
             <a href="/"><img className="img" src={Logo} alt="website logo" width="80px" height="20px"/></a>
             
             <input className="main" type="search" placeholder="search for Items" />
             </div>
             <div>
          <button className="cart">Cart</button> 
          <Link to="/login"><button className="logout">Logout</button></Link>
          
            </div>
            </header>
        )
    }
}

export default DashHeader;