import React from 'react';

const CancPolicy = () => {
    return (
        <div className='text-start bg-[#FFEADC] p-6'>
            <h2 className='text-start text-4xl font-bold'>Cancellation Policy</h2>
            <ol className='mt-4 space-y-2'>
                <li className='flex'><img className='mr-3' src="https://www.go2andaman.com/wp-content/uploads/2021/05/Vector-1.svg" alt="" />The trip can be canceled upto 24 hours before starting time of the trip. Small 5% retention will apply on such cancellations.
                    Unfortunately, trips may not be canceled within 24 hours since entry tickets are acquired.</li>
                <li className='flex'><img className='mr-3' src="https://www.go2andaman.com/wp-content/uploads/2021/05/Vector-1.svg" alt="" />Unfortunately, trips may not be canceled within 24 hours since entry tickets are acquired.</li>
            </ol>
        </div>
    );
};

export default CancPolicy;