import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from '../assets/images/img1.jpg';
import img2 from '../assets/images/img2.jpeg';
import img3 from '../assets/images/img3.png';
import img4 from '../assets/images/img4.jpg';

const ImageSlider = () => {
    const images = [img1, img2, img3, img4];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        <div className="w-full">
            <Slider {...settings}>
                {images.map((img, index) => (
                    <div key={index}>
                        <img src={img} alt={`Slide ${index}`} className="w-full h-[150px] lg:h-[350px] " />
                    </div>
                ))}
            </Slider>
        </div>
    )
}

export default ImageSlider