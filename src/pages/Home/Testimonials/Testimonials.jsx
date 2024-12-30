import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import ReactStars from 'react-stars'
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Testimonials = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        axios.get('reviews.json')
            .then(data => setReviews(data.data))
    }, [])
    return (
        <Swiper
            effect={'coverflow'}
            // grabCursor={true}
            centeredSlides={true}
            breakpoints={{
                640: {
                    slidesPerView: 1,
                },
                1024: {
                    slidesPerView: 2,
                },
            }}
            coverflowEffect={{
                rotate: 50,
                stretch: 100,
                depth: 100,
                modifier: 1,
                slideShadows: true,
            }}
            autoplay={{
                delay: 3000
            }}
            pagination={true}
            loop={true}
            modules={[EffectCoverflow, Pagination, Autoplay]}
            className="mySwiper mb-20 h-80 "
        >
            {
                reviews.map(review => <SwiperSlide
                    key={review._id}
                >
                    <div className="flex flex-col items-center mx-24 my-16">
                        <ReactStars
                            count={review.rating}
                            size={40}
                            color1="#42adf5"
                        />
                        <p className="py-4">{review.details}</p>
                        <h3 className="text-2xl text-orange-600 font-medium">{review.name}</h3>
                    </div>
                </SwiperSlide>)
            }
        </Swiper>
    );
};

export default Testimonials;