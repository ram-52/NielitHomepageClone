import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import mou from '../assets/images/latestEvents/mou.png';
import deity from '../assets/images/building.png';
import indiaLogo from '../assets/images/india-gov-logo.jpg';
import mygov from '../assets/images/mygov.jpg';
import nielitLogo from '../assets/images/NIELIT-Logo.png';
import placement from '../assets/images/placement.jpg';

const LatestEvents = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5, // Display 3 lines at once
        slidesToScroll: 1, // Scroll one line at a time
        autoplay: true,
        autoplaySpeed: 3000,
        vertical: true, // Enable vertical sliding
        verticalSwiping: true, // Enable vertical swiping
    };

    return (
        <div className='max-w-[300px] mx-auto'>
            <h1 style={{color: '#09568c'}} className='text-2xl font-bold my-4'>Latest Events</h1>
            <Slider {...settings}>
                <div className='border-b my-4 text-sm hover:bg-[#e0f0ff]'>
                    <div className='flex justify-start gap-2 items-start'>
                        <img src={mou} alt="" className='' />
                        <div className=''>
                            <p>MoU signed with</p>
                            <button className='text-blue-700 font-bold'>View More</button>
                        </div>
                    </div>
                </div>
                <div className='border-b my-4 text-sm hover:bg-[#e0f0ff]'>
                    <div className='flex justify-start gap-2 items-start'>
                        <img src={deity} alt="" />
                        <div>
                            <p>MoU signed with</p>
                            <button className='text-blue-700 font-bold'>View More</button>
                        </div>
                    </div>
                </div>
                <div className='border-b my-4 text-sm hover:bg-[#e0f0ff]'>
                    <div className='flex justify-start gap-2 items-start'>
                        <img src={indiaLogo} alt="" />
                        <div>
                            <p>MoU signed with KAAM Services Pvt.</p>
                            <button className='text-blue-700 font-bold'>View More</button>
                        </div>
                    </div>
                </div>
                <div className='border-b my-4 text-sm hover:bg-[#e0f0ff]'>
                    <div className='flex justify-start gap-2 items-start'>
                        <img src={mygov} alt="" />
                        <div>
                            <p>Launch of NIELIT Alumni</p>
                            <button className='text-blue-700 font-bold'>View More</button>
                        </div>
                    </div>
                </div>
                <div className='border-b my-4 text-sm hover:bg-[#e0f0ff]'>
                    <div className='flex justify-start gap-2 items-start'>
                        <img src={mou} alt="" />
                        <div>
                            <p>MoU signed with</p>
                            <button className='text-blue-700 font-bold'>View More</button>
                        </div>
                    </div>
                </div>
                <div className='border-b my-4 text-sm hover:bg-[#e0f0ff]'>
                    <div className='flex justify-start gap-2 items-start'>
                        <img src={placement} alt="" />
                        <div>
                            <p>Independence Day</p>
                            <button className='text-blue-700 font-bold'>View More</button>
                        </div>
                    </div>
                </div>
            </Slider>
            <h1 style={{color: '#09568c'}} className='text-right font-bold my-4'>View More: NIELIT News</h1>
        </div>
    )
}

export default LatestEvents

