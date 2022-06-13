import React from 'react';
import pic from '../Assets/Coming Soon Banner.svg'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/autoplay';
import s1 from '../Assets/slider/image 11.png'
import s2 from '../Assets/slider/image 3.png'
import s3 from '../Assets/slider/image 9.png'
import s4 from '../Assets/slider/image 12.png'
import s5 from '../Assets/slider/image 10.png'
import './Banner.css'

const Banner = () => {
    SwiperCore.use([Autoplay]);
    return (
        <div className='bg-[#254059] text-slate-500  banner py-4' >
            <div className=''>
                {/* <div className='text-5xl font-bold flex flex-col justify-center items-center'>
                    <h1 className=''>COMING SOON...</h1>
                    <div className="bg-b bg-no-repeat bg-top">
                        <img className='h-80' src={pic} alt="" />
                    </div>
                </div> */}
                <div className=' flex flex-col justify-center items-center pt-5'>
                    <img className='h-80' src={pic} alt="" />
                </div>
                <div className='flex justify-center items-center mx-auto'>
                    <Swiper
                        spaceBetween={50}
                        slidesPerView={3}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                        className='img mt-[-30px] '
                        loop={true}
                        autoplay={{
                            delay: 2000,
                            disableOnInteraction: false
                        }}
                       

                    >
                        <SwiperSlide ><img src={s1} alt="" /></SwiperSlide>
                        <SwiperSlide><img src={s2} alt="" /></SwiperSlide>
                        <SwiperSlide><img src={s3} alt="" /></SwiperSlide>
                        <SwiperSlide><img src={s4} alt="" /></SwiperSlide>
                        <SwiperSlide><img src={s5} alt="" /></SwiperSlide>
                        <SwiperSlide><img src={s3} alt="" /></SwiperSlide>
                        <SwiperSlide><img src={s5} alt="" /></SwiperSlide>
                        <SwiperSlide><img src={s4} alt="" /></SwiperSlide>
                        <SwiperSlide><img src={s5} alt="" /></SwiperSlide>

                    </Swiper>
                </div>
            </div>

        </div>
    );
};

export default Banner;