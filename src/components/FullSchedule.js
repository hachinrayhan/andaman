import React from 'react';

const FullSchedule = () => {
    return (
        <div className='text-start mt-10 bg-[#FFFFFF] p-6'>
            <h2 className='text-4xl font-bold'>Full Schedule</h2>
            <ul className="steps steps-vertical">
                <li className="step step-primary"><p className='text-start'><span className='font-bold'>To Start On with</span> <br /> Arrive at the Dive shop</p> </li>
                <li className="step step-primary"> <p className='text-start'><span className='font-bold'>Formalities</span> <br />Fill in your dive form and waiver form</p> </li>
                <li className="step step-primary"> <p className='text-start'><span className='font-bold'>Formalities</span> <br />The dive staff will help you with your equipment fittings. You will be fitted with a mask, flippers, dive suit and BCD (jacket-like thing that helps you float and hold other equipment together) of your size.</p> </li>
                <li className="step step-primary"> <p className='text-start'><span className='font-bold'>Getting equipped</span> <br />A de-briefing will take place</p> </li>
                <li className="step step-primary"> <p className='text-start'><span className='font-bold'>Briefing</span> <br />Walk to the picturesque shore dive spot via land with your instructor</p> </li>
                <li className="step step-primary"> <p className='text-start'><span className='font-bold'>A small walk</span> <br />Learn the basic skills on the surface of the water</p> </li>
                <li className="step step-primary"> <p className='text-start'><span className='font-bold'>Pre Diving Instruction</span><br />Learn to perform the skills under water</p> </li>
                <li className="step step-primary"> <p className='text-start'><span className='font-bold'>Get Skilled</span> <br />Go on your splendid Andaman dive and see colourful fish and live coral</p> </li>
                <li className="step step-primary"> <p className='text-start'><span className='font-bold'>It Starts Here</span> <br />Come back to the dive shop post-dive and receive your Discover Scuba Dive certificate</p> </li>
                <li className="step step-primary"> <p className='text-start'><span className='font-bold'>Memorable Ending</span> <br />To Start On with</p> </li>
            </ul>
        </div>
    );
};

export default FullSchedule;