import React, { Component} from 'react';
import DashHeader from '../Header/DashHeader';
import tshirt from '../images/m1.png';
import round from '../images/m2.png';
import jeans from '../images/m3.png';
import jacket from '../images/m4.png';
import shirt from '../images/m5.png';
import shoes from '../images/m6.png';
import tshirt1 from '../images/w1.png';
import round1 from '../images/w2.png';
import jeans1 from '../images/w3.png';
import jacket1 from '../images/w4.png';
import shirt1 from '../images/w5.png';
import shoes1 from '../images/w6.png';
import AddCart from '../AddCart';
import '../Items/Fashion.css';
import DashFooter from '../Footer/DashFooter';

class Fashion extends Component{
    render(){
        return(
            <div className="fashion">
                    <DashHeader />
                    <h1>Mens Wear</h1>        
                    <br/>
        <ul>
         <li> 
             <div className="men" >
                <a href="#"><img src={tshirt} height="150px" width="130px" />    
                    <p>Himalaya Loni Men Polo</p>  
                </a>
                <AddCart/>
            </div>
         </li>
         <li> 
             <div className="men" >
                <a href="#"><img src={round} height="150px" width="130px" />    
                    <p>UDNAG Unisex Round Neck </p>  
                </a>
                <AddCart/>
            </div>
         </li>
         <li> 
             <div className="men" >
                <a href="#"><img src={jeans} height="150px" width="130px" />    
                    <p>RedOx Denim Tapered Narrow Fit</p>  
                </a>
                <AddCart/>
            </div>
         </li>
         <li> 
             <div className="men" >
                <a href="#"><img src={jacket} height="150px" width="130px" />    
                    <p>WQ&EnergyMen Jacket</p>  
                </a>
                <AddCart/>
            </div>
         </li>
         <li> 
             <div className="men" >
                <a href="#"><img src={shirt} height="150px" width="130px" />    
                    <p>PSK Cotton Blend Men's Shirt</p>  
                </a>
                <AddCart/>
            </div>
         </li>
         <li> 
             <div className="men" >
                <a href="#"><img src={shoes} height="150px" width="130px" />    
                    <p>Costoso Italiano Men's Tan Leather Sneakers</p>  
                </a>
                <AddCart/>
            </div>
         </li>
         </ul>
         <h1>Women Wear</h1>        
         <ul>
             <li> 
             <div className="women" >
                <a href="#"><img src={tshirt1} height="150px" width="130px" />    
                    <p>FUNDAY FASHION Women's Denim Jacket</p>  
                </a>
                <AddCart/>
            </div>
         </li>
         <li> 
             <div className="women" >
                <a href="#"><img src={round1} height="150px" width="130px" />    
                    <p>Ahalyaa Women's Black A-Line Kurta </p>  
                </a>
                <AddCart/>
            </div>
         </li>
         <li> 
             <div className="women" >
                <a href="#"><img src={jeans1} height="150px" width="130px" />    
                    <p>Khushal K Women's Rayon Printed Kurta With Palazzo </p>  
                </a>
                <AddCart/>
            </div>
         </li>
         <li> 
             <div className="women" >
                <a href="#"><img src={jacket1} height="150px" width="130px" />    
                    <p>FidgetGear Women's Warm Fleeced Hoodie </p>  
                </a>
                <AddCart/>
            </div>
         </li>
         <li> 
             <div className="women" >
                <a href="#"><img src={shirt1} height="150px" width="130px" />    
                    <p>AirSoon Elegant Velvet Casual Shoes</p>  
                </a>
                <AddCart/>
            </div>
         </li>
         <li> 
             <div className="women" >
                <a href="#"><img src={shoes1} height="150px" width="130px" />    
                    <p>Fashion Hub Women's Denim Jeans</p>  
                </a>
                <AddCart/>
            </div>
         </li>
         
        </ul>
        <DashFooter/>
    </div>
        )
    }
}

export default Fashion;