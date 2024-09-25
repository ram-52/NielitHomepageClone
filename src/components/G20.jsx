import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import education from '../assets/images/recognition/education-panel.jpg';
import elearning from '../assets/images/recognition/elearing-panel.jpg';
import faculty from '../assets/images/recognition/faculty_Dev.jpg';
import g20 from '../assets/images/recognition/g20-logo.png';
import ISMS from '../assets/images/recognition/ISMS.jpg';
import Public_Grienvences from '../assets/images/recognition/Public_Grievances.jpg';
import recognition from '../assets/images/recognition/recognition.jpg';

const G20 = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5, // Display 3 lines at once
        slidesToScroll: 1, // Scroll one line at a time
        autoplay: true,
        autoplaySpeed: 3000
    };

    return (
        <div className='my-8 px-4'>
            <Slider {...settings}>
                <div><img  className='inline-block mx-4' src={education} alt='education'/></div>
                <div><img className='inline-block mx-4' src={elearning} alt='education'/></div>
                <div><img className='inline-block mx-4' src={faculty} alt='education'/></div>
                <div><img className='inline-block mx-4' src={g20} alt='education'/></div>

                <div><img className='inline-block mx-4' src={ISMS} alt='education'/></div>
                <div><img className='inline-block mx-4' src={Public_Grienvences} alt='education'/></div>
                <div><img className='inline-block mx-4' src={recognition} alt='education'/></div>
                <div><img className='inline-block mx-4' src={faculty} alt='education'/></div>
            </Slider>
        </div>
    )
}

export default G20