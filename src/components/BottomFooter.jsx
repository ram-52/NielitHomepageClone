import React from 'react'

const BottomFooter = () => {
    const getAndShowDate = () => {
        const dt = new Date();
        const date = dt.getDate();
        const month = dt.getMonth();
        const year = dt.getFullYear();
        const full_date = date+'-'+month+'-'+year + '  ' + dt.getHours() + ':'+dt.getMinutes()+':'+dt.getSeconds();
        return full_date;
    }
    return (
        <div style={{ backgroundColor: '#2d2f34' }} className='text-white p-1'>
            <div className='max-w-[1150px] mx-auto'>
                <div className='text-center text-sm'>
                    <div className='my-4 sm:flex sm:justify-between sm:mx-4'>
                        <p><b>Visitors:</b>155442292</p>
                        <p>Copyright &copy; NIELIT. All Rights Reserved.</p>
                        <p>Last update: {getAndShowDate()}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BottomFooter

