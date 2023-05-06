import React from 'react';

const WhoCanDive = () => {
    return (
        <div className='text-start mt-10 space-y-4 bg-[#FFFFFF] p-6'>
            <h2 className='text-4xl font-bold'>Who can Dive</h2>
            <h4 className='font-bold'>Age Limit</h4>
            <ol className='space-y-3'>
                <li className='flex'><img className='mr-3' src="https://www.go2andaman.com/wp-content/uploads/2021/05/Vector-1.svg" alt="" /> 12 years+ for Boat Dives</li>
                <li className='flex'><img className='mr-3' src="https://www.go2andaman.com/wp-content/uploads/2021/05/Vector-1.svg" alt="" /> 12 years+ for Shore Dives – Contact us to book shore dives</li>
            </ol>
            <h4 className='font-bold'>Other Medical Requirements</h4>
            <ol className='space-y-3'>
                <li className='flex'><img className='mr-3' src="https://www.go2andaman.com/wp-content/uploads/2021/05/Vector-1.svg" alt="" />Should not be suffering from diabetes, blood pressure, asthma, and heart conditions.</li>
                <li className='flex'><img className='mr-3' src="https://www.go2andaman.com/wp-content/uploads/2021/05/Vector-1.svg" alt="" />Should not be pregnant.</li>
                <li className='flex'><img className='mr-3' src="https://www.go2andaman.com/wp-content/uploads/2021/05/Vector-1.svg" alt="" />Should not have undergone ear surgery in past 1 year.</li>
                <li className='flex'><img className='mr-3' src="https://www.go2andaman.com/wp-content/uploads/2021/05/Vector-1.svg" alt="" />Should have not gone under any major surgery over last 3 months.</li>
                <li className='flex'><img className='mr-3' src="https://www.go2andaman.com/wp-content/uploads/2021/05/Vector-1.svg" alt="" />Ideally should not be taking a flight within 24 hrs after the dive</li>
            </ol>
            <h4 className='font-bold'>Covid Rules</h4>
            <ol className='space-y-3'>
                <li className='flex'><img className='mr-3' src="https://www.go2andaman.com/wp-content/uploads/2021/05/Vector-1.svg" alt="" />Should be completely vaccinated.</li>
                <li className='flex'><img className='mr-3' src="https://www.go2andaman.com/wp-content/uploads/2021/05/Vector-1.svg" alt="" />Regardless of which program you do, if you have had symptomatic COVID, a three-month period since full recovery and clearance from a cardiologist is mandatory.</li>
            </ol>
        </div>
    );
};

export default WhoCanDive;