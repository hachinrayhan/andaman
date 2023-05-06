import React from 'react';
import { FaStar } from 'react-icons/fa';
import { BsArrowLeft } from 'react-icons/bs';
import { BsArrowRight } from 'react-icons/bs';


const Testimonial = () => {
    return (
        <div className='mt-10 bg-[#FFFFFF] p-6'>
            <h2 className='text-start text-4xl font-bold'>Testimonials</h2>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <div className='flex mx-auto'>
                        <div className="card w-80 bg-base-100">
                            <div className="card-body">
                                <p className='flex justify-center text-yellow-500'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></p>
                                <p>"Heard Kayaking for the first ti
                                    an amazing experience. Go
                                    mangroves, natural view and a
                                    Great instructors"</p>
                                <p className='mt-10'>Parul L <br />Delhi</p>
                            </div>
                        </div>
                        <div className="card w-80 bg-base-100">
                            <div className="card-body">
                                <p className='flex justify-center text-yellow-500'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></p>
                                <p>"My wife is a non-swimmer and she could
                                    dive too. The world beneath the water is
                                    every bit as surreal as the world above it
                                    - we both had a great time!"</p>
                                <p className='mt-10'>Parul L <br />Delhi</p>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-0 right-0 top-1/2">
                        <a href="#slide4" className="btn btn-ghost"><BsArrowLeft className='text-2xl' /></a>
                        <a href="#slide2" className="btn btn-ghost"><BsArrowRight className='text-2xl' /></a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <div className='flex mx-auto'>
                        <div className="card w-80 bg-base-100">
                            <div className="card-body">
                                <p className='flex justify-center text-yellow-500'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></p>
                                <p>"Couldn't have asked for a more kickass
                                    experience in the Andamans. You guys al
                                    DIVEIndia have been stellar. Thanks for
                                    helping me check off all the species i
                                    wanted to see - I reckon the mimic
                                    octopus and the ambon scorpionfish
                                    were the best of the lot! Gonna miss
                                    both the diving and the post-diving
                                    shenanigans!"</p>
                                <p className='mt-10'>Parul L <br />Delhi</p>
                            </div>
                        </div>
                        <div className="card w-80 bg-base-100">
                            <div className="card-body">
                                <p className='flex justify-center text-yellow-500'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></p>
                                <p>"Other than being professional, alert, and
                                    attentive, everyone at the dive shop was
                                    extremely welcoming and homely."</p>
                                <p className='mt-10'>Parul L <br />Delhi</p>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-0 right-0 top-1/2">
                        <a href="#slide1" className="btn btn-ghost"><BsArrowLeft className='text-2xl' /></a>
                        <a href="#slide3" className="btn btn-ghost"><BsArrowRight className='text-2xl' /></a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <div className='flex mx-auto'>
                        <div className="card w-80 bg-base-100">
                            <div className="card-body">
                                <p className='flex justify-center text-yellow-500'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></p>
                                <p>"We went to Andaman in March 2016 on
                                    our honeymoon, It was one of the best
                                    trip and experience. Go2andaman team
                                    helped us in planning the trip and that
                                    too with our limited budget."</p>
                                <p className='mt-10'>Parul L <br />Delhi</p>
                            </div>
                        </div>
                        <div className="card w-80 bg-base-100">
                            <div className="card-body">
                                <p className='flex justify-center text-yellow-500'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></p>
                                <p>"The sky was beautiful!
                                    "I did the night activity. It was wonderful
                                    experience to learn basics of kayaking
                                    and both me and my son thoroughly"</p>
                                <p className='mt-10'>Parul L <br />Delhi</p>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-0 right-0 top-1/2">
                        <a href="#slide2" className="btn btn-ghost"><BsArrowLeft className='text-2xl' /></a>
                        <a href="#slide4" className="btn btn-ghost"><BsArrowRight className='text-2xl' /></a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <div className='flex mx-auto'>
                        <div className="card w-80 bg-base-100">
                            <div className="card-body">
                                <p className='flex justify-center text-yellow-500'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></p>
                                <p>"Heard Kayaking for the first ti
                                    an amazing experience. Go
                                    mangroves, natural view and a
                                    Great instructors"</p>
                                <p className='mt-10'>Parul L <br />Delhi</p>
                            </div>
                        </div>
                        <div className="card w-80 bg-base-100">
                            <div className="card-body">
                                <p className='flex justify-center text-yellow-500'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></p>
                                <p>"This was our first Kayak experience. The
                                    view of the mangroves with the tropical
                                    rainforests running in the background
                                    from the sea was nothing less than gold,
                                    left each of us spellbound."</p>
                                <p className='mt-10'>Parul L <br />Delhi</p>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-0 right-0 top-1/2">
                        <a href="#slide3" className="btn btn-ghost"><BsArrowLeft className='text-2xl' /></a>
                        <a href="#slide1" className="btn btn-ghost"><BsArrowRight className='text-2xl' /></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;