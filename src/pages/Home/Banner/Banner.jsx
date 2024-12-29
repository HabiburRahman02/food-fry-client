import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Autoplay, Pagination } from 'swiper/modules';

import banner1 from '../../../assets/home/01.jpg'
import banner2 from '../../../assets/home/02.jpg'
import banner3 from '../../../assets/home/03.png'


const Banner = () => {

    return (
        <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{
                delay: 3000,
                disableOnInteraction: false
            }}
            pagination={{ clickable: true }}
            loop={true}
            className="mySwiper mb-6 h-[650px]"
        >
            <SwiperSlide>
                <img src={banner2} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={banner1} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={banner3} alt="" />
            </SwiperSlide>
        </Swiper>
    );
};

export default Banner;