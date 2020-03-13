import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
import './Dashboard.css';
import DashHeader from './Header/DashHeader';
import DashFooter from './Footer/DashFooter';
import Items from './Items/Items';
import Sliders from './Slider/Slider';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css'


class Dashboard extends Component{
    render(){
        return(
        <div className="scr"> 
            <DashHeader />
            <Items />
            <Sliders />
            <DashFooter />
        </div>
        )
    }
}

export default Dashboard;