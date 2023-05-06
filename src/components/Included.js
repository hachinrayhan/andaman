import React from 'react';

const Included = () => {
    return (
        <div className='text-start bg-[#FFFFFF] p-6'>
            <h2 className='text-start text-4xl font-bold'>What is included</h2>
            <ol className='space-y-2 mt-4'>
                <li className='flex'><img className='mr-3' src="https://www.go2andaman.com/wp-content/uploads/2022/08/check-1-1.svg" alt="" /> Scuba Instructor</li>
                <li className='flex'><img className='mr-3' src="https://www.go2andaman.com/wp-content/uploads/2022/08/check-1-1.svg" alt="" /> All dive equipment</li>
                <li className='flex'><img className='mr-3' src="https://www.go2andaman.com/wp-content/uploads/2022/08/check-1-1.svg" alt="" /> Discover Scuba Dive Certificate</li>
                <li className='flex'><img className='mr-3' src="https://www.go2andaman.com/wp-content/uploads/2022/08/check-1-1.svg" alt="" /> Photos and Videos</li>
            </ol>
        </div>
    );
};

export default Included;