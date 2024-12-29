import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Autoplay, Pagination } from 'swiper/modules';
import img1 from '../../../assets/home/slide1.jpg'
import img2 from '../../../assets/home/slide2.jpg'
import img3 from '../../../assets/home/slide3.jpg'
import img4 from '../../../assets/home/slide4.jpg'
import img5 from '../../../assets/home/slide5.jpg'

const Category = () => {
    const breakpointsConfig = {
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 20,
        },
    }
    return (
        <Swiper
            modules={[Pagination, Autoplay]}
            slidesPerView={3}
            spaceBetween={10}
            pagination={{
                clickable: true,
            }}
            autoplay={{
                delay: 1000,
                disableOnInteraction: false
            }}
            loop={true}
            breakpoints={breakpointsConfig}
            className="mySwiper"
        >
            <SwiperSlide>
                <img src={img1} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={img2} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={img3} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={img4} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={img5} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={img1} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={img2} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={img3} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={img4} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={img5} alt="" />
            </SwiperSlide>
        </Swiper>
    );
};

export default Category;