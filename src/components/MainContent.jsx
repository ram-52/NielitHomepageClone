import React from 'react';
import LatestNewsSection from './LatestNewsSection';
import MissionAndVision from './MissionAndVision';
import LatestEvents from './LatestEvents';
import G20 from './G20';

const MainContent = () => {
    return (
        <div className='max-w-[1150px] mx-auto'>
            <div className='flex gap-2 flex-col sm:flex-row px-4'>
                <div>
                    <LatestNewsSection />
                    <MissionAndVision />
                </div>
                <LatestEvents className='w-[200px] border' />
            </div>
            <G20/>
        </div>
    )
}

export default MainContent

