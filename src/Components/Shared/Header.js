import React from 'react';
import logo from '../Assets/logo.png'
const Header = () => {
    return (
        <div className='bg-[#172d41] py-3 '>
            <div className='flex items-center  justify-between'>
                <div className='flex  items-start'>
                    <div className=''>
                        <img src={logo} alt="" />
                    </div>
                    <div className='flex flex-col justify-center px-2 '>
                        <h1 className='text-4xl font-bold text-slate-500 '>UVIOM</h1>
                        <span className='text-xs text-orange-300'>Your Mission Is Our Vision</span>
                    </div>
                </div>
                <div className='flex gap-5 text-white px-5'>
                    <a href="#">Home</a>
                    <a href="#">About</a>
                    <a href="#">Career</a>
                    <a href="#">Privacy</a>
                    <a href="#">Follow Us</a>
                    <p><i class="fa-solid fa-gear"></i></p>
                    <p><i class="fa-brands fa-facebook"></i></p>
                    <p><i class="fa-brands fa-instagram"></i></p>
                </div>
                {/* <div className='flex  text-white gap-4'>
                    
                </div> */}
            </div>


        </div>
    );
};

export default Header;