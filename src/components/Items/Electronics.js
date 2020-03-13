import React, {Component} from 'react';
import DashHeader from '../Header/DashHeader';
import phone1 from '../images/iphone.png';
import TV from '../images/TV.png';
import fridge from '../images/fridge.png';
import wm from '../images/washing.png';
import DashFooter from '../Footer/DashFooter';


import './Electronics.css';

class Electronics extends Component{
render(){
    return(
    <div className="elec">    
        <DashHeader />
        <a href="#">Mobiles</a>
        <br/>
        <img src={phone1} height="100px" width="100px" />
        <p>Redmi Note 8 Pro</p>
        <a href="#">Television</a>
        <br/>
        <img src={TV} height="150px" width="150px" />
        <p>Sanyo 107.95 cm (43 Inches) 4K UHD </p>
        <a href="#">Refrigrators</a>
        <br/>
        <img src={fridge} height="150px" width="150px" />
        <p>Whirlpool 190 L 2 Star Direct-Cool Single Door Refrigerator</p>
        <a href="#">Washing Machine</a>
        <br/>
        <img src={wm} height="150px" width="150px" />
        <p>LG 6 kg Inverter Fully-Automatic Front Loading Washing Machine</p>
        <DashFooter />

        </div>
    )
}
}

export default Electronics;