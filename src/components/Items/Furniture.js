import React, {Component} from 'react';
import './Furniture.css';
import sofa1 from '../images/s1.png';
import sofa2 from '../images/s2.png';
import sofa3 from '../images/s3.png';
import table1 from '../images/t1.png';
import table2 from '../images/t2.png';
import table3 from '../images/t3.png';
import bed1 from '../images/b1.png';
import bed2 from '../images/b2.png';
import bed3 from '../images/b3.png';
import AddCart from '../AddCart';
import DashHeader from '../Header/DashHeader';
import DashFooter from '../Footer/DashFooter';

class Furniture extends Component{
    render(){
        return(
            <div className="furniture">
            <DashHeader />
            <h1>Sofas</h1>        
            <br/>
<ul>
 <li> 
     <div className="sofa" >
        <a href="#"><img src={sofa1} height="180px" width="220px" />    
            <p>Montoya Corner Left Side Sofa Set</p>  
        </a>
        <AddCart/>
    </div>
 </li>
 <li> 
     <div className="sofa" >
        <a href="#"><img src={sofa2} height="180px" width="220px" />    
            <p>EMILY Fabric Sofa- 3 Seater Beige</p>  
        </a>
        <AddCart/>
    </div>
 </li>
 <li> 
     <div className="sofa" >
        <a href="#"><img src={sofa3} height="180px" width="220px" />    
            <p>Akron Faux Leather Sofa -2 Seater Beige</p>  
        </a>
        <AddCart/>
    </div>
 </li>
 </ul>
 <h1>Tables</h1>        

 <ul>
 <li> 
     <div className="table" >
        <a href="#"><img src={table1} height="180px" width="220px" />    
            <p>Finn Two-Tiered Coffee Table</p>  
        </a>
        <AddCart/>
    </div>
 </li>
 <li> 
     <div className="table" >
        <a href="#"><img src={table2} height="180px" width="220px" />    
            <p>Zecchino-Galaxy Solid Coffee Table</p>  
        </a>
        <AddCart/>
    </div>
 </li>
 <li> 
     <div className="table" >
        <a href="#"><img src={table3} height="180px" width="220px" />    
            <p>Flair Compressed Wood Coffee Table</p>  
        </a>
        <AddCart/>
    </div>
 </li>
 </ul>
 <h1>Beds</h1>        

 <ul>
 <li> 
     <div className="bed" >
        <a href="#"><img src={bed1} height="180px" width="220px" />    
            <p> Montoya Queen Size Bed With Box Storage</p>  
        </a>
        <AddCart/>
    </div>
 </li>
 <li> 
     <div className="bed" >
        <a href="#"><img src={bed2} height="180px" width="220px" />    
            <p>EMILY King-Size Bed</p>  
        </a>
        <AddCart/>
    </div>
 </li>
 <li> 
     <div className="bed" >
        <a href="#"><img src={bed3} height="180px" width="220px" />    
            <p>Alaska King Bed</p>  
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

export default Furniture;
