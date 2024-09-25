import React from 'react';
import building from '../../assets/images/building.png';
import logo from '../../assets/images/logo_nlt.png';
import head from '../../assets/images/head.jpg';

const AboutNIELIT = () => {
  return (
    <div className='my-6'>
        <div className='flex items-center gap-4 my-4'>
            <img src={building}/>
            <div>
                <h3>Introduction</h3>
                <p className='text-sm'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet officiis nemo aspernatur eum error, laborum odit ut. Velit dolorem deleniti sint repudiandae, fugiat animi minima ipsum asperiores qui officia. Iure. <span className='text-blue-800 font-medium cursor-pointer'>Read More</span></p>
            </div>
        </div>
        <div className='flex items-center gap-4 my-4'>
            <img src={logo}/>
            <div>
                <h3>Introduction</h3>
                <p className='text-sm'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet officiis nemo aspernatur eum error, laborum odit ut. Velit dolorem deleniti sint repudiandae, fugiat animi minima ipsum asperiores qui officia. Iure. <span className='text-blue-800 font-medium cursor-pointer'>Read More</span></p>
            </div>
        </div>
        <div className='flex items-center gap-4 my-4'>
            <img src={head} className='w-[90px]'/>
            <div>
                <h3>Introduction</h3>
                <p className='text-sm'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet officiis nemo aspernatur eum error, laborum odit ut. Velit dolorem deleniti sint repudiandae, fugiat animi minima ipsum asperiores qui officia. Iure. <span className='text-blue-800 font-medium cursor-pointer'>Read More</span></p>
            </div>
        </div>
    </div>
  )
}

export default AboutNIELIT