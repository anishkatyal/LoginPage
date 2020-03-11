import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
import './Dashboard.css';

class Dashboard extends Component{
    render(){
        return(
         <div>   <h1 className="main">Welcome to shopping page</h1>
           <Link to="/login"> <button className="but">Logout</button></Link>
            </div>
        )
    }
}

export default Dashboard;