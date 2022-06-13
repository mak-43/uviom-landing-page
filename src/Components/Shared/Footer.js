import React from 'react';

const Footer = () => {
    return (
        <div className='bg-[#172d41] w-full py-5 px-10 absolute bottom-0'>
  
           <div className='flex justify-between'>
                <div className='text-white flex flex-col justify-center  gap-2'>
                    <h1 className='font-bold'>UVIOM GLOBALLY</h1>
                    <p className='text-slate-500'>Asia</p>
                    <p className='text-slate-500' >Australia</p>
                    <p className='text-slate-500'>Europe</p>
                    <p className='text-slate-500'>North America</p>
                </div>
                <div className='text-white flex flex-col justify-center  gap-2'>
                    <h1 className='font-bold'>INFORMATION</h1>
                    <p className='text-slate-500' >My Account</p>
                    <p className='text-slate-500'>Terms OF Use</p>
                    <p className='text-slate-500'>Company Rules</p>
                    <p className='text-slate-500'>Company Employer</p>
                </div>
                <div className='text-white flex flex-col justify-center items-center gap-3'>
                    <h1 className='font-bold'>COMING SOON ON</h1>
                    <div className='bg-[#1a2029] flex justify-center items-center gap-4 px-6 py-2 rounded-2xl border-stone-400'>
                        <p className='text-amber-500 text-4xl flex flex-col justify-center items-center'><i class="fa-brands fa-apple "></i></p>
                        <div className='flex flex-col justify-center items-center'>
                            <p className='text-xs text-slate-500'>Download on</p>
                            <p className='text-slate-500' >App Store</p>
                        </div>
                    </div>
                    <div className='bg-[#1a2029] box-shadow  flex justify-center items-center gap-4 px-5 py-2 rounded-2xl '>
                        <p className='text-amber-500 text-3xl flex flex-col justify-center items-center'><i class="fa-brands fa-google-play"></i></p>
                        <div className='flex flex-col justify-center items-center'>
                            <p className='text-xs text-slate-500'>Get It On </p>
                            <p className='text-slate-500'>Google Ply</p>
                        </div>
                    </div>
                </div>
                <div className='text-white flex flex-col justify-center items-center gap-6'>
                    <h1 className='font-bold'>VIEW</h1>
                    <p className='text-3xl border px-3 py-1 rounded border-lime-500'><i class="fa-solid fa-mobile-screen"></i></p>
                    <p className='text-4xl '><i class="fa-solid fa-laptop"></i></p>
                </div>
                
           </div>
           <div className='flex justify-center items-center py-8 '>
            <p className='text-white'>&#169; UVIOM INC.2022.All Right Resolved.Developed By 
                <span className='text-amber-500'> UVIOM</span>
            </p>
            
           </div>
        </div>
    );
};

export default Footer;