import React, { Component } from "react";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import '../Slider/Slider.css';

const photos = [
    {
        name: "iPhone",
        url:  "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR7yoa9y-nJsXmtJjBgGR28EMTnosGK5ysxrhbUTLoP_3FZbTJ-"
    },
    {
        name: "TV",
        url:  "https://edge-cdn.pratidintime.com/2018/08/Lemon.png"
    },
    {
        name: "Fridge",
        url:  "https://www.lg.com/in/images/RF/features/2016sbsP-Veyron6-hero20_22112018_D.jpg"
    }
]
class Sliders extends Component{
    render(){
        const settings ={
            dots: true,
            fade: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            arrows: true,
            slidesToScroll: 1,
            className: "slides"
        }
        return(
            <div className="App">
            <Slider {...settings}>
            {photos.map((photo) => {
                return(
                    <div>
                        <img width="1500px" height="600px" src={photo.url} />
                        </div>
                )
            })}

                </Slider>
            </div>
        )
    };
}

export default Sliders;