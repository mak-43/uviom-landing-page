import React, { useState } from 'react';
import logo from '../Assets/logo.png'
import './Header.css'

const Header = () => {
    const [isOpen,setIsOpen]=useState(false)
    
    return (
        <div className='bg-[#172d41] px-10 '>
            
            <div className='flex flex-wrap  Navbar'>
                <div className='flex   items-start  flex-wrap nav-log'>
                    <div className=' flex justify-center items-center my-3'>
                        <img src={logo} alt="" />
                    </div>

                    <div className='flex   '>
                        <hr className='my-auto text-white' style={{ transform: 'rotate(90deg)', width: '50px' }} />
                        <div className=' flex flex-col gap-1 my-3 justify-center items-center'>
                            <h1 className='text-4xl font-bold text-slate-500 '>UVIOM</h1>
                            <span className='mission '>Your Mission Is Our Vision</span>
                        </div>
                    </div>
                   
                </div>
                <div id='navigation' className={`flex gap-6 text-white items-center lg:flex-row md:flex-row sm:flex-col nav-items ${isOpen && 'open'} `}>
                
                    <a className='hover:text-slate-500 ' href="#">Home</a>
                    <a className='hover:text-slate-500' href="#">About</a>
                    <a className='hover:text-slate-500' href="#">Career</a>
                    <a className='hover:text-slate-500' href="#">Privacy</a>
                    <div className='flex  text-white gap-3'>
                        <a className='hover:text-slate-500' href="#">Follow Us</a>
                        <p className='hover:text-slate-500'><i class="fa-solid fa-gear"></i></p>
                        <p className='hover:text-slate-500'><i class="fa-brands fa-facebook"></i></p>
                        <p className='hover:text-slate-500'><i class="fa-brands fa-instagram"></i></p>
                    </div>
                </div>
                <div onClick={()=>setIsOpen(!isOpen)} 
                className={`nav-toggle ${isOpen && 'open'}`}
                >
                    <div className='bar'></div>
                </div>
            </div>
            

        </div>
    );
};

export default Header;