import React, { useRef } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';

// import required modules
import { Autoplay, Navigation } from 'swiper';

export default function Slider() {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    // const onAutoplayTimeLeft = (s, time, progress) => {
    //     progressCircle.current.style.setProperty('--progress', 1 - progress);
    //     progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    // };
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                // pagination={{
                //     clickable: true,
                // }}
                navigation={true}
                modules={[Autoplay, Navigation]}
                // onAutoplayTimeLeft={onAutoplayTimeLeft}
                className="mySwiper mt-6"
            >
                <SwiperSlide><img src="https://ocean.go2andaman.com/wp-content/uploads/2021/08/Depositphotos_72077543_xl-2015-scaled.jpg?compress=true&quality=90&w=940&dpr=1.0" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://ocean.go2andaman.com/wp-content/uploads/2021/08/Depositphotos_367872072_xl-2015-scaled.jpeg?compress=true&quality=90&w=940&dpr=1.0" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://ocean.go2andaman.com/wp-content/uploads/2021/08/109795458_xl-1.jpeg?compress=true&quality=90&w=940&dpr=1.0" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://ocean.go2andaman.com/wp-content/uploads/2021/08/15-Oct_-Scuba-Diving.jpeg?compress=true&quality=90&w=940&dpr=1.0" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://ocean.go2andaman.com/wp-content/uploads/2022/01/laca-dives-boat.jpeg?compress=true&quality=90&w=940&dpr=1.0" alt="" /></SwiperSlide>
                <div className="autoplay-progress" slot="container-end">
                    <svg viewBox="0 0 48 48" ref={progressCircle}>
                        <circle cx="24" cy="24" r="20"></circle>
                    </svg>
                    <span className='hidden' ref={progressContent}></span>
                </div>
            </Swiper>

        </>
    );
}
