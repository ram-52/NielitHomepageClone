import React from 'react';
import logo from '../assets/images/NIELIT-Logo.png';
import emblem from '../assets/images/Emblem_of_India1.png';

const MainHeader = () => {
    return (
        <div className='max-w-[1150px] mx-auto'>
            <div className='mx-4'>
                <div className='lg:flex lg:justify-between'>
                    <div className='text-center sm:text-left sm:flex sm:gap-2 sm:items-center'>
                        <img src={logo} className='inline-block my-2 sm:w-[240px] border-r' />
                        <p className='my-2 sm:my-4 text-sm sm:text-lg'>राष्ट्रीय इलेक्ट्रॉनिकी एवं सूचना प्रौद्योगिकी संस्थान <br />
                            National Institute of Electronics & Information Technology
                        </p>
                    </div>
                    <div className='flex items-center gap-2 flex-row-reverse'>
                        <img src={emblem} className='h-[60px] sm:h-[80px]'/>
                        <p className='text-right text-sm sm:text-lg'>
                            <b>Ministry of Electronics & Information Technology <br />
                                Government of India</b></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainHeader