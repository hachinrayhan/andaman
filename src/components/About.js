import React from 'react';
import { FaStar } from 'react-icons/fa';

const About = () => {
    return (
        <div className='bg-[#FFFFFF] p-6'>
            <h2 className='text-start text-4xl font-bold'>About the Providers</h2>
            <p className='flex justify-center align-middle text-3xl'><FaStar className='text-yellow-500 mt-1' /><FaStar className='text-yellow-500 mt-1' /><FaStar className='text-yellow-500 mt-1' /><FaStar className='text-yellow-500 mt-1' /><FaStar className='text-yellow-500 mt-1' /><span className='text-blue-600 font-bold ml-4'>Top Rated Dive Centers</span></p>

            <p className='my-4 text-start'>
                We only work with  PADI-certified dive shops on the Andaman Islands. PADI is the Professional Association of Dive Instructors and provides globally-recognised Scuba Diving certifications. Therefore, you can be assured that all our dive shops adhere to the strictest international standards. All our providers are in the top 5 dive shops on the Andamans and they include Scubalov, Lacadives, Gypsy Divers and Dive India.
            </p>

            <img src="https://ocean.go2andaman.com/wp-content/uploads/2021/08/dive-center-logos-andaman.png?compress=true&quality=90&w=900&dpr=1.0" alt="" />

        </div>
    );
};

export default About;