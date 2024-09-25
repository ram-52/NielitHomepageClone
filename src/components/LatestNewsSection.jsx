import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { latest_news } from '../utils/constant.js';

const LatestNewsSection = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        vertical: true, // This enables vertical sliding
        verticalSwiping: true, // This allows vertical swiping
    };
    return (
        <div className='my-14'>
            <div className='max-w-[1150px] mx-auto'>
                <div className='max-w-[800px] shadow-lg border whitespace-nowrap overflow-ellipsis h-[160px] relative p-2'>
                    <Slider {...settings}>
                        {latest_news.map((val, idx) => (
                            <p key={idx} className='hover:bg-[#d0e7f5] border-b cursor-pointer px-2 text-sm'>{val}</p>
                        ))}
                    </Slider>
                    <button className='absolute text-white text-2xl bg-[#07507b] bottom-[100%] px-2 left-0'>Latest News</button>
                </div>
            </div>

        </div>
    )
}

export default LatestNewsSection