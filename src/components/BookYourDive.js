import React from 'react';
import { FaHandPointRight, FaMinus, FaPlus } from 'react-icons/fa';


const BookYourDive = () => {
    return (
        <div>
            <p className='flex align-middle bg-[#FBEEE7] mt-10 border-t-4 border-orange-400'><FaHandPointRight className='text-yellow-400 mt-1 mr-2' /> <span className='text-orange-400 font-bold'>Free Cancellation before 24 hours. Our Guarantee</span></p>
            <div className='text-start mt-4'>
                <p className='text-3xl font-bold'>Book Your Dive</p>
                <p>Price Starts at <span className='text-3xl font-bold text-orange-400'>₹ 4799</span> <span className='line-through'>₹6000</span></p>
            </div>
            <div className='mt-4 text-sm'>
                <p className='flex'><img className='mr-3 w-4' src="https://www.go2andaman.com/wp-content/uploads/2022/08/check-1-1.svg" alt="" />Get Instant Price Quote</p>
                <p className='flex'><img className='mr-3 w-4' src="https://www.go2andaman.com/wp-content/uploads/2022/08/check-1-1.svg" alt="" />Premium Service Providers Only</p>
            </div>
            <h4 className='text-start mt-4'>Drivers:</h4>
            <div className='flex justify-between border-2 p-4'>
                <FaMinus /> <span>1</span> <FaPlus />
            </div>
        </div>
    );
};

export default BookYourDive;