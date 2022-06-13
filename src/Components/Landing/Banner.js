import React from 'react';
import pic from '../Assets/banner.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import s1 from '../Assets/s1.png'
import s2 from '../Assets/s2.png'
import s3 from '../Assets/s3.png'
import s4 from '../Assets/s4.png'
import s5 from '../Assets/s5.png'
const Banner = () => {
    return (
        <div className='bg-[#254059] text-slate-500 py-10' >
            <div className=''>
                <div className='text-5xl font-bold flex flex-col justify-center items-center'>
                    <h1 className=''>COMING SOON...</h1>
                    <div className="bg-b bg-no-repeat bg-top">
                        <img className='h-80' src={pic} alt="" />
                    </div>
                </div>

                <Swiper
                    spaceBetween={50}
                    slidesPerView={3}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    <SwiperSlide ><img className='h-40' src={s1} alt="" /></SwiperSlide>
                    <SwiperSlide><img className='h-40' src={s2} alt="" /></SwiperSlide>
                    <SwiperSlide><img className='h-40' src={s3} alt="" /></SwiperSlide>
                    <SwiperSlide><img className='h-40' src={s4} alt="" /></SwiperSlide>
                    <SwiperSlide><img className='h-40' src={s5} alt="" /></SwiperSlide>
                    
                </Swiper>
            </div>

        </div>
    );
};

export default Banner;