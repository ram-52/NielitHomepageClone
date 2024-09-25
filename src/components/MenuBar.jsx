import React from 'react';
import Helper from './Helper';
import { useState } from 'react';
import { management, about_us, nielit_centres, students_zone, services, news, contact_us, rti } from '../utils/constant.js';

const MenuBar = () => {
    const stateObj = {
        management: false,
        about_us: false,
        nielit_centres: false,
        students_zone: false,
        services: false,
        news: false,
        contact_us: false,
        rti: false
    };
    const [isDisplay, setIsDisplay] = useState(stateObj);
    const handleMouseEnter = (label) => {
        setIsDisplay((prev) => ({
            ...prev,
            [label]: true
        }));
    }
    const handleMouseLeave = (label) => {        
        setIsDisplay((prev) => ({
            ...prev,
            [label]: false
        }));
    }

    return (
        <div style={{ backgroundColor: '#07507b' }}>
            <div className='max-w-[1150px] mx-auto'>
                <div className='mx-4 py-1'>
                    <div style={{ zIndex: 0 }} className='flex gap-4 justify-between flex-nowrap text-white whitespace-nowrap relative'>
                        <div className='cursor-pointer p-1'>
                            <p className='hover:bg-[#009afd]'>Home</p>
                        </div>
                        <div className='cursor-pointer p-1 relative'>
                            <p onMouseEnter={() => handleMouseEnter('about_us')} className='hover:bg-[#009afd]'>About Us</p>
                            <div onMouseLeave={() => handleMouseLeave('about_us')} style={{ zIndex: 100 }} className=' absolute top-[120%] left-0'>
                                {isDisplay.about_us && <Helper management={about_us} />}
                            </div>
                        </div>
                        <div style={{ zIndex: 0 }} className='cursor-pointer p-1 relative'>
                            <p onMouseEnter={() => handleMouseEnter('management')} className='hover:bg-[#009afd]'>Management</p>
                            <div onMouseLeave={() => handleMouseLeave('management')} style={{ zIndex: 100 }} className=' absolute top-[120%] left-0'>
                                {isDisplay.management && <Helper management={management} />}
                            </div>
                        </div>
                        <div className='cursor-pointer p-1 relative'>
                            <p onMouseEnter={() => handleMouseEnter('nielit_centres')} className='hover:bg-[#009afd]'>NIELIT Centers</p>
                            <div onMouseLeave={() => handleMouseLeave('nielit_centres')} style={{ zIndex: 100 }} className=' absolute top-[120%] left-0'>
                                {isDisplay.nielit_centres && <Helper management={nielit_centres} />}
                            </div>
                        </div>
                        <div className='hover:bg-[#009afd] cursor-pointer p-1 relative'>
                            <p onMouseEnter={() => handleMouseEnter('students_zone')} className='hover:bg-[#009afd]'>Student Zone</p>
                            <div onMouseLeave={() => handleMouseLeave('students_zone')} style={{ zIndex: 100 }} className=' absolute top-[120%] left-0'>
                                {isDisplay.students_zone && <Helper management={students_zone} />}
                            </div>
                        </div>
                        <div className='hover:bg-[#009afd] cursor-pointer p-1 relative'>
                            <p onMouseEnter={() => handleMouseEnter('services')}>Services</p>
                            <div onMouseLeave={() => handleMouseLeave('services')} style={{ zIndex: 100 }} className=' absolute top-[120%] left-0'>
                                {isDisplay.services && <Helper management={services} />}
                            </div>
                        </div>
                        <div className='hover:bg-[#009afd] cursor-pointer p-1 relative'>
                            <p onMouseEnter={() => handleMouseEnter('news')}>News</p>
                            <div onMouseLeave={() => handleMouseLeave('news')} style={{ zIndex: 100 }} className=' absolute top-[120%] left-0'>
                                {isDisplay.news && <Helper management={news} />}
                            </div>
                        </div>
                        <div className='cursor-pointer p-1'><p>Recruitment</p></div>
                        <div className='cursor-pointer p-1'><p>Tenders</p></div>
                        <div className='cursor-pointer p-1 relative'>
                            <p onMouseEnter={() => handleMouseEnter('contact_us')} className='hover:bg-[#009afd]'>Contact</p>
                            <div onMouseLeave={() => handleMouseLeave('contact_us')} style={{ zIndex: 100 }} className=' absolute top-[120%] left-0'>
                                {isDisplay.contact_us && <Helper management={contact_us} />}
                            </div>
                        </div>
                        <div className='cursor-pointer p-1 relative'>
                            <p onMouseEnter={() => handleMouseEnter('rti')} className='hover:bg-[#009afd]'>RTI</p>
                            <div onMouseLeave={() => handleMouseLeave('rti')} style={{ zIndex: 100 }} className=' absolute top-[120%] left-0'>
                                {isDisplay.rti && <Helper management={rti} />}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MenuBar