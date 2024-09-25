import React from 'react';
import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";
const TopHeader = () => {
    return (
        <div className='max-w-[1150px] mx-auto p-1'>
            <div className='my-2 sm:mx-4'>
                <div className='sm:flex gap-2'>
                    <div className='flex justify-between sm:flex-grow'>
                        <div className='flex gap-1'>
                            <a target='_blank' href="https://www.facebook.com/NIELITIndia/"><FaFacebookF className='text-blue-500' /></a>
                            <a target='_blank' href="https://x.com/NIELITIndia"><FaTwitter className='text-blue-500' /></a> 
                            <a target='_blank' href="https://www.youtube.com/NIELITIndia"><FaYoutube className='text-red-500' /></a>
                        </div>
                        <p>हिंदी</p>
                    </div>
                    <div className='hidden sm:block text-sm'>
                        <span className='inline-block mr-2'>Screen Reader Access</span>
                        <span>Skip to main content</span>
                    </div>
                    <div className='text-center'>
                        <input type="text" className='border shadow-sm rounded-sm focus:outline-none' />
                        <button className='bg-blue-600 text-white px-4 inline-block mx-1'>Search</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopHeader