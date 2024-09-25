import React from 'react';
import acedemic from '../../assets/images/academic.jpg';;
import nielit_news from '../../assets/images/nielit_news.jpg';
import press from '../../assets/images/press.jpg';

const News = () => {
    return (
        <div className='my-6'>
            <div className='flex items-center gap-4 my-4 border'>
                <img src={acedemic} />
                <div>
                    <h3>Introduction</h3>
                    <li style={{listStyleType: 'square'}}>Guidelines for establishment of Examination Centres for the conduct of the online examination</li>
                    <button className='text-blue-800 font-medium cursor-pointer'>View More</button>
                </div>
            </div>
            <div className='flex items-center gap-4 my-4 border'>
                <img src={nielit_news} />
                <div>
                    <h3>Introduction</h3>
                    <li style={{listStyleType: 'square'}}>Guidelines for establishment of Examination Centres for the conduct of the online examination</li>
                    <button className='text-blue-800 font-medium cursor-pointer'>View More</button>
                </div>
            </div>
            <div className='flex items-center gap-4 my-4 border'>
                <img src={press} className='w-[105px]'/>
                <div>
                    <h3>Introduction</h3>
                    <li style={{listStyleType: 'square'}} className=''>Guidelines for establishment of Examination Centres for the conduct of the online examination</li>
                    <button className='text-blue-800 font-medium cursor-pointer'>View More</button>
                </div>
            </div>
        </div>
    )
}

export default News