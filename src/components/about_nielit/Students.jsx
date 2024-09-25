import React from 'react';
import courses from '../../assets/images/courses.jpg';
import admit_cards from '../../assets/images/admit_cards.jpg';
import placement from '../../assets/images/placement.jpg';

const Students = () => {
    return (
        <div className='my-6'>
            <div className='flex items-center gap-4 my-4 border'>
                <img src={courses} />
                <div>
                    <h3 className='text-xl'>Courses</h3>
                    <li className='text-sm' style={{ listStyleType: 'square' }}>Formal Courses</li>
                    <li className='text-sm' style={{ listStyleType: 'square' }}>Non-Formal Courses</li>
                    <li className='text-sm' style={{ listStyleType: 'square' }}>Digital Literacy Courses</li>
                    <li className='text-sm' style={{ listStyleType: 'square' }}>Short Term Courses Software</li>
                    <li className='text-sm' style={{ listStyleType: 'square' }}>Short Term Courses Hardware</li>
                </div>
            </div>
            <div className='flex items-center gap-4 my-4 border'>
                <img src={admit_cards} />
                <div>
                    <h3 className='text-xl'>Admit Card & Results</h3>
                    <li className='text-sm' style={{ listStyleType: 'square' }}>Admit Cards</li>
                    <li className='text-sm' style={{ listStyleType: 'square' }}>Results</li>
                </div>
            </div>
            <div className='flex items-center gap-4 my-4 border'>
                <img src={placement} />
                <div>
                    <h3 className='text-xl'>Placement</h3>
                    <li style={{ listStyleType: 'square' }} className='text-sm'>In order to provide an impetus to NIELIT qualifiers, efforts are being made to facilitate and empower these qualifiers by way of a dedicated placement portal</li>
                </div>
            </div>
        </div>
    )
}

export default Students