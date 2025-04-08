import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow, Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css'
import './slider.css'
import 'swiper/css/effect-coverflow'

export default () => {
    return (
        <div className="box">
            <Swiper
                modules={[EffectCoverflow]}
                effect='coverflow'
                coverflowEffect={{
                    depth: 100,
                    modifier: 1,
                    rotate: 30,
                    scale: 1,
                    slideShadows: false,
                    stretch: 5
                }}
                allowSlideNext={true}
                allowSlidePrev={true}
                autoplay={{delay: 2000}}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }}
                spaceBetween={50}
                slidesPerView={3}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                className='swiper-conteiner'
            >
                <SwiperSlide className='swiper-slider'><img src="src/assets/images/slide-1.jpg" alt="" /></SwiperSlide>
                <SwiperSlide className='swiper-slider'><img src="src/assets/images/slide-2.jpg" alt="" /></SwiperSlide>
                <SwiperSlide className='swiper-slider'><img src="src/assets/images/slide-3.jpg" alt="" /></SwiperSlide>
                <SwiperSlide className='swiper-slider'><img src="src/assets/images/slide-4.jpg" alt="" /></SwiperSlide>
            </Swiper>
        </div >
    );
};