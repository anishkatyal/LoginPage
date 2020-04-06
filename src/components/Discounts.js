import React from 'react';
import d1 from './images/discount.png';
import d2 from './images/discount1.png';
import d3 from './images/discount2.png';

import './Discounts.css';
const Discount = () => {
    return (                           
                <div className="dd"><ul> 
                    <li> 
                        <div className="discount"> 
                            <a href="#">
                                 <img src={d1} height="400px" width="425px" />  
                            </a>  
                        </div> 
                    </li>
                    <li>
                           <div className="discount1"> <a href="#"><img src={d2} height="400px" width="425px" />  </a>   
                           </div>
                     </li>
                     <li>
                           <div className="discount2"> <a href="#"><img src={d3} height="400px" width="425px" />  </a>   
                           </div>
                     </li>
                </ul>
                </div>
    )
}

export default Discount;