import React, {Component} from 'react';
import DashHeader from '../Header/DashHeader';
import phone1 from '../images/note8.png';
import TV1 from '../images/TV.png';
import fridge1 from '../images/fridge.png';
import wm1 from '../images/washing.png';
import DashFooter from '../Footer/DashFooter';
import phone2 from '../images/oneplus.png';
import phone3 from '../images/iphone.png';
import phone4 from '../images/nova.png';
import phone5 from '../images/vivo.png';
import TV2 from '../images/TV2.png';
import TV3 from '../images/TV3.png';
import TV4 from '../images/TV4.png';
import fridge2 from '../images/rg1.png';
import fridge3 from '../images/rg2.png';
import fridge4 from '../images/rg3.png';
import fridge5 from '../images/rg4.png';
import wm2 from '../images/washing1.png';
import wm3 from '../images/washing2.png';
import wm4 from '../images/washing3.png';

import './Electronics.css';
import AddCart from '../AddCart';

class Electronics extends Component{
render(){
    return(
    <div className="elec">    
        <DashHeader />
       <h1>Mobiles</h1>        
        <br/>
        <ul>
         <li> <div className="mob" >
        <a href="#"><img src={phone1} height="100px" width="100px" />    
        <p>Redmi Note 8 Pro</p>  
        </a>
        <AddCart/>
        </div>
        </li>

        <li><div className="mob1"><a href="#"><img src={phone2} height="100px" width="100px" /> 
        <p>One Plus 7t</p> 
        </a>    
        <AddCart/>
        </div>
        </li>

        <li><div className="mob2"><a href="#"><img src={phone3} height="100px" width="80px" /> 
        <p>IPhone XR</p> 
        </a>    
        <AddCart/>
        </div>
        </li>
        
        <li><div className="mob3"><a href="#"><img src={phone4} height="100px" width="60px" /> 
        <p>Nova 3</p> 
        </a>    
        <AddCart/>
        </div>
        </li>

        <li><div className="mob4"><a href="#"><img src={phone5} height="100px" width="60px" /> 
        <p>Vivo S1</p> 
        </a>    
        <AddCart/>
        </div>
        </li>
        </ul>
        <br />
    <h1>Television</h1>        
        <ul>
            <li>
               <div className="tv"> <a href="#"><img src={TV1} height="150px" width="150px" />
                <p>LG 32 inch HD Smart TV </p></a>
                <AddCart/>
                </div>
            </li>
            <li>
               <div className="tv1"> <a href="#"><img src={TV2} height="150px" width="150px" />
                <p>TCL 43 inch 4K UHD Smart TV </p></a>
                <AddCart/>
                </div>
            </li>
            <li>
               <div className="tv2"> <a href="#"><img src={TV3} height="150px" width="150px" />
                <p>Panasonic 24 inch HD Ready LED TV </p></a>
                <AddCart/>
                </div>
            </li>
            <li>
               <div className="tv3"> <a href="#"><img src={TV4} height="150px" width="150px" />
                <p>Samsung 32 inch HD Ready LED TV</p></a>
                <AddCart/>
               </div>
            </li>
        </ul>
        
        <br />
        <h1>Refrigrator</h1>
        <ul>
            <li>
                <div className="fridge"><a href="#"><img src={fridge1} height="150px" width="150px" />
                    <p>Whirlpool 190L Single Door Refrigerator</p></a>
                    <AddCart/>
                </div>
            </li>
            <li>
                <div className="fridge1"><a href="#"><img src={fridge2} height="150px" width="150px" />
                    <p>Whirlpool 440L Double Door Refrigerator</p></a>
                    <AddCart/>
                 </div>
            </li>
            <li>
                <div className="fridge2"><a href="#"><img src={fridge3} height="150px" width="100px" />
                    <p>LG 190L Direct Cool Single Door</p></a>
                    <AddCart/>
                 </div>
            </li>
            <li>
                <div className="fridge3"><a href="#"><img src={fridge4} height="150px" width="100px" />
                    <p>Samsung 192L Direct Cool Single Door</p></a>
                    <AddCart/>
                </div>
            </li>
           
        </ul>
        <br />
        <h1>Washing Machines</h1>
        <ul>
            <li>
                <div className="machine"><a href="#"><img src={wm1} height="150px" width="150px" />
                    <p>Whirlpool 7 kg 5 Star Semi Automatic</p></a>
                    <AddCart/>
                </div>
            </li>
            <li>
                <div className="machine1"><a href="#"><img src={wm2} height="150px" width="150px" />
                    <p>LG 7 kg 4 Star Semi Automatic</p></a>
                    <AddCart/>
                 </div>
            </li>
            <li>
                <div className="machine2"><a href="#"><img src={wm3} height="150px" width="100px" />
                    <p>Bosch 7 kg ExpressWash Fully Automatic</p></a>
                    <AddCart/>
                 </div>
            </li>
            <li>
                <div className="machine3"><a href="#"><img src={wm4} height="150px" width="100px" />
                    <p>Samsung 192L Direct Cool Single Door</p></a>
                    <AddCart/>
                </div>
            </li>
           
        </ul>

    </div>
    )
}
}

export default Electronics;