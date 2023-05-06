import React from 'react';

const WhatHappens = () => {
    return (
        <div className='text-start bg-[#FFFFFF] p-6'>
            <h2 className='text-start text-4xl font-bold'>What Happens After the Booking?</h2>
            <ol className='mt-4 space-y-2'>
                <li className='flex'><img className='mr-3' src="https://www.go2andaman.com/wp-content/uploads/2021/05/Vector-1.svg" alt="" />You will receive a call or an e-mail in case of any extra info needed.</li>
                <li className='flex'><img className='mr-3' src="https://www.go2andaman.com/wp-content/uploads/2021/05/Vector-1.svg" alt="" />You will receive the confirmation voucher on your e-mail ID.</li>
                <li className='flex'><img className='mr-3' src="https://www.go2andaman.com/wp-content/uploads/2021/05/Vector-1.svg" alt="" />You will have to show the confirmation voucher to the driver on the day of your activity.</li>
            </ol>
        </div>
    );
};

export default WhatHappens;