import React from 'react';

const Footer = () => {
    return (
        <div className='bg-[#172d41] py-3 px-10 mt-40'>
           <p className='text-white text-center'>Footer</p>
           <div className='flex justify-between'>
                <div className='text-white flex flex-col justify-center  gap-2'>
                    <h1>UVIOM GLOBALLY</h1>
                    <p>Asia</p>
                    <p>Australia</p>
                    <p>Europe</p>
                    <p>North America</p>
                </div>
                <div className='text-white flex flex-col justify-center  gap-2'>
                    <h1>INFORMATION</h1>
                    <p>My Account</p>
                    <p>Terms OF Use</p>
                    <p>Company Rules</p>
                    <p>Company Employer</p>
                </div>
                <div className='text-white flex flex-col justify-center items-center gap-3'>
                    <h1>COMING SOON ON</h1>
                    <div className='bg-gray-900 flex justify-center items-center gap-4 px-6 py-2 rounded-2xl border-stone-400'>
                        <p className='text-amber-500 text-4xl flex flex-col justify-center items-center'><i class="fa-brands fa-apple "></i></p>
                        <div className='flex flex-col justify-center items-center'>
                            <p className='text-xs'>Download on</p>
                            <p>App Store</p>
                        </div>
                    </div>
                    <div className='bg-gray-900 flex justify-center items-center gap-4 px-5 py-2 rounded-2xl border-stone-400'>
                        <p className='text-amber-500 text-3xl flex flex-col justify-center items-center'><i class="fa-brands fa-google-play"></i></p>
                        <div className='flex flex-col justify-center items-center'>
                            <p className='text-xs'>Get It On </p>
                            <p>Google Ply</p>
                        </div>
                    </div>
                </div>
                <div className='text-white flex flex-col justify-center items-center gap-2'>
                    <h1>VIEW</h1>
                    <p className='text-3xl border px-3 py-1 rounded border-lime-500'><i class="fa-solid fa-mobile-screen"></i></p>
                    <p className='text-4xl '><i class="fa-solid fa-laptop"></i></p>
                </div>
                
           </div>
           <div className='flex justify-center items-center py-5 '>
            <p className='text-white'>&#169; UVIOM INC.2022.All Right Resolved.Developed By 
                <span className='text-amber-500'> UVIOM</span>
            </p>
            
           </div>
        </div>
    );
};

export default Footer;