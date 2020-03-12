import React, {Component} from 'react';
import './DashFooter.css';
class DashFooter extends Component{
    render(){
        return(
            <footer className="foot">
                <div className="ff">
                    <div className="foot1">
                    <p>About</p>
                    <a href="#">Contact Us</a>
                    <br/>
                    <a href="#">About Us</a>
                    <br/>
                    <a href="#">Carriers</a>
                    <br/>
                    <a href="#">Stories</a>
                    <br/>
                    <a href="#">Press</a>

                </div>
                <div className="foot2">
                <p>Help</p>
                    <a href="#">Payments</a>
                    <br/>
                    <a href="#">Shipping</a>
                    <br/>
                    <a href="#">Cancellation & Returns</a>
                    <br/>
                    <a href="#">FAQ</a>
                    <br/>
                    <a href="#">Security</a>
                </div>
                <div className="foot3">
                <p>Social</p>
                    <a href="#">Facebook</a>
                    <br/>
                    <a href="#">Twitter</a>
                    <br/>
                    <a href="#">Youtube</a>
                </div>
                </div>
                </footer>
        )
    }
}

export default DashFooter;