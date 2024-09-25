import React from 'react';
import { useState } from 'react';
import AboutNIELIT from './about_nielit/AboutNIELIT';
import News from './about_nielit/News';
import Students from './about_nielit/Students';
import WhatsNew from './about_nielit/WhatsNew';
import Circulars from './about_nielit/Circulars';
import EmployeeCorner from './about_nielit/EmployeeCorner';

const MissionAndVision = () => {
    const stateObj = {
        about_nielit: true,
        news: false,
        student: false,
        what_new: false,
        circulars: false,
        employee_corner: false
    };

    const [isDisplay, setIsDisplay] = useState(stateObj);
    
    const handleClick = (label) => {        
        setIsDisplay((pre) => ({
            about_nielit: false,
            news: false,
            student: false,
            what_new: false,
            circulars: false,
            employee_corner: false,
            [label]: true,
        }));      
    }
  return (
    <div>
        <div className='max-w-[1150px] mx-auto'>
            <div className='max-w-[800px] shadow-lg border whitespace-nowrap overflow-hidden text-wrap min-h-[160px] relative'>
                <div className='flex gap-2'>
                    <button onClick={() => handleClick('about_nielit')} className='bg-[#07507b] text-white px-2 py-1 font-bold active:scale-95'>About NIELIT</button>
                    <button onClick={() => handleClick('news')} className='bg-[#07507b] text-white px-2 py-1 font-bold active:scale-95'>News</button>
                    <button onClick={() => handleClick('student')} className='bg-[#07507b] text-white px-2 py-1 font-bold active:scale-95'>Students</button>
                    <button onClick={() => handleClick('what_new')} className='bg-[#07507b] text-white px-2 py-1 font-bold active:scale-95'>What's new</button>
                    <button onClick={() => handleClick('circulars')} className='bg-[#07507b] text-white px-2 py-1 font-bold active:scale-95'>Circulars</button>
                    <button onClick={() => handleClick('employee_corner')} className='bg-[#07507b] text-white px-2 py-1 font-bold active:scale-95'>Employee Corner</button>
                </div>
            {isDisplay.about_nielit && <AboutNIELIT/>}
            {isDisplay.news && <News/>}
            {isDisplay.student && <Students/>}
            {isDisplay.what_new && <WhatsNew/>}
            {isDisplay.circulars && <Circulars/>}
            {isDisplay.employee_corner && <EmployeeCorner/>}
            </div>
        </div>
    </div>
  )
}

export default MissionAndVision
