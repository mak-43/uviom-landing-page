import React from 'react';
import pic from '../Assets/banner.png'
const Banner = () => {
    return (
        <div className='bg-[#254059] text-slate-500 py-5 ' >
           <div  className='text-5xl font-bold flex flex-col justify-center items-center'>
                <h1>COMING SOON...</h1>
                <div className=''>
                    <img  className='h-80' src={pic} alt="" />
                </div>

           </div>
        </div>
    );
};

export default Banner;