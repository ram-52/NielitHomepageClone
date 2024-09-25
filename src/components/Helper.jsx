import React from 'react'

const Helper = ({ management }) => {
    return (
        <div style={{ backgroundColor: '#e4f4fd', zIndex: 100 }} className='text-black relative'>
            <ul className='px-2 py-3'>
                {
                    management.map((item, idx) => (
                        <li key={idx} className='hover:bg-[#009afd]'>{item}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Helper
