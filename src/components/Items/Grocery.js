import React, {Component} from 'react';
import './Grocery.css';
import house1 from '../images/h1.png';
import house2 from '../images/h2.png';
import house3 from '../images/h3.png';
import house4 from '../images/h4.png';
import snack1 from '../images/c1.png';
import snack2 from '../images/c2.png';
import snack3 from '../images/c3.png';
import snack4 from '../images/c4.png';
import AddCart from '../AddCart';
import DashFooter from '../Footer/DashFooter';
import DashHeader from '../Header/DashHeader';

class Grocery extends Component{
    render(){
        return(
            <div className="grocery">
                    <DashHeader />
                    <h1>Household Items</h1>        
                    <br/>
        <ul>
         <li> 
             <div className="house" >
                <a href="#"><img src={house1} height="150px" width="130px" />    
                    <p>Tide Plus Extra Power </p>  
                </a>
                <AddCart/>
            </div>
         </li>
         <li> 
             <div className="house" >
                <a href="#"><img src={house2} height="150px" width="130px" />    
                    <p>Godrej Aer Twist Gel </p>  
                </a>
                <AddCart/>
            </div>
         </li>
         <li> 
             <div className="house" >
                <a href="#"><img src={house3} height="150px" width="130px" />    
                    <p>Happy Home Aluminium Foil </p>  
                </a>
                <AddCart/>
            </div>
         </li>
         <li> 
             <div className="house" >
                <a href="#"><img src={house4} height="150px" width="130px" />    
                    <p>Woolite Dark Laundry Liquid Detergent</p>  
                </a>
                <AddCart/>
            </div>
         </li>
         </ul>
         <h1>Snacks</h1>        
         <ul>
             <li> 
             <div className="snack" >
                <a href="#"><img src={snack1} height="150px" width="130px" />    
                    <p>Cadbury Dairy Milk Silk Chocolate</p>  
                </a>
                <AddCart/>
            </div>
         </li>
         <li> 
             <div className="snack" >
                <a href="#"><img src={snack2} height="150px" width="130px" />    
                    <p>Grofers Happy Day Rasgulla</p>  
                </a>
                <AddCart/>
            </div>
         </li>
         <li> 
             <div className="snack" >
                <a href="#"><img src={snack3} height="150px" width="130px" />    
                    <p>Bingo Mad Angles Achaari Masti </p>  
                </a>
                <AddCart/>
            </div>
         </li>
         <li> 
             <div className="snack" >
                <a href="#"><img src={snack4} height="150px" width="130px" />    
                    <p>HaveMore Papad</p>  
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

export default Grocery;
