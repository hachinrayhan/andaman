import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import "./Slider.css";

// import required modules
import { FreeMode, Navigation, Thumbs, Autoplay } from "swiper";

export default function Slider() {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <>
            <Swiper
                style={{
                    "--swiper-navigation-color": "#fff",
                    "--swiper-pagination-color": "#fff",
                }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                loop={true}
                spaceBetween={10}
                navigation={true}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs, Autoplay]}
                className="mySwiper2 mt-10"
            >
                <SwiperSlide><img src="https://ocean.go2andaman.com/wp-content/uploads/2021/08/Depositphotos_72077543_xl-2015-scaled.jpg?compress=true&quality=90&w=940&dpr=1.0" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://ocean.go2andaman.com/wp-content/uploads/2021/08/Depositphotos_367872072_xl-2015-scaled.jpeg?compress=true&quality=90&w=940&dpr=1.0" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://ocean.go2andaman.com/wp-content/uploads/2021/08/109795458_xl-1.jpeg?compress=true&quality=90&w=940&dpr=1.0" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://ocean.go2andaman.com/wp-content/uploads/2021/08/15-Oct_-Scuba-Diving.jpeg?compress=true&quality=90&w=940&dpr=1.0" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://ocean.go2andaman.com/wp-content/uploads/2022/01/laca-dives-boat.jpeg?compress=true&quality=90&w=940&dpr=1.0" alt="" /></SwiperSlide>
            </Swiper>
            <Swiper
                onSwiper={setThumbsSwiper}
                loop={true}
                spaceBetween={10}
                slidesPerView={5}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper"
            >
                <SwiperSlide><img src="https://ocean.go2andaman.com/wp-content/uploads/2021/08/Depositphotos_72077543_xl-2015-scaled.jpg?compress=true&quality=90&w=940&dpr=1.0" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://ocean.go2andaman.com/wp-content/uploads/2021/08/Depositphotos_367872072_xl-2015-scaled.jpeg?compress=true&quality=90&w=940&dpr=1.0" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://ocean.go2andaman.com/wp-content/uploads/2021/08/109795458_xl-1.jpeg?compress=true&quality=90&w=940&dpr=1.0" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://ocean.go2andaman.com/wp-content/uploads/2021/08/15-Oct_-Scuba-Diving.jpeg?compress=true&quality=90&w=940&dpr=1.0" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://ocean.go2andaman.com/wp-content/uploads/2022/01/laca-dives-boat.jpeg?compress=true&quality=90&w=940&dpr=1.0" alt="" /></SwiperSlide>
            </Swiper>
        </>
    );
}
