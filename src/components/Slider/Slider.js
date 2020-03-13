import React, { Component } from "react";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import '../Slider/Slider.css';

const photos = [
    {
        name: "iPhone",
        url:  "https://o.aolcdn.com/images/dims?quality=85&image_uri=https%3A%2F%2Fo.aolcdn.com%2Fimages%2Fdims%3Fresize%3D2000%252C2000%252Cshrink%26image_uri%3Dhttps%253A%252F%252Fs.yimg.com%252Fos%252Fcreatr-uploaded-images%252F2019-09%252F37b3ce90-d8e2-11e9-b577-90a03892cc72%26client%3Da1acac3e1b3290917d92%26signature%3D2c089dbe76b439ebcbd457cc4c4a82b7b236f7d5&client=amp-blogside-v2&signature=3bbbb90bcab89c8a12a8462d7e568098696764d3"
    },
    {
        name: "TV",
        url:  "https://edge-cdn.pratidintime.com/2018/08/Lemon.png"
    },
    {
        name: "Fridge",
        url:  "https://www.lg.com/in/images/RF/features/2016sbsP-Veyron6-hero20_22112018_D.jpg"
    },
    {
        name: "WashMachine",
        url: "https://cdn.mos.cms.futurecdn.net/9yo7zHvzudftfRBbxtMxsK-768-80.jpg"
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