import React, { useState } from 'react';
import { CiShoppingCart, CiMenuFries } from 'react-icons/ci';
import { IoClose } from 'react-icons/io5';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className='w-full px-4 sm:px-6 md:px-10 lg:px-[200px] py-6'>
            <div className='justify-between items-center flex'>
                <h2 className='text-[#4F39F6] font-bold text-2xl sm:text-3xl'>DigiTools</h2>

                <ul className='hidden md:flex gap-4 justify-between items-center font-semibold'>
                    <li><a href="#" className='hover:text-[#4F39F6] transition-colors duration-300'>Products</a></li>
                    <li><a href="#" className='hover:text-[#4F39F6] transition-colors duration-300'>Features</a></li>
                    <li><a href="#" className='hover:text-[#4F39F6] transition-colors duration-300'>Pricing</a></li>
                    <li><a href="#" className='hover:text-[#4F39F6] transition-colors duration-300'>Testimonials</a></li>
                    <li><a href="#" className='hover:text-[#4F39F6] transition-colors duration-300'>FAQ</a></li>
                </ul>

                <div className='hidden md:flex justify-between items-center gap-4'>
                    <CiShoppingCart size={24} />
                    <p className='font-semibold'>
                        <a href="#" className='hover:text-[#4F39F6] transition-colors duration-300'>Login</a>
                    </p>
                    <button className="btn rounded-full bg-gradient-to-r from-[#4F46E5] to-[#A855F7] btn-primary hover:scale-105 hover:shadow-lg transition-all duration-300 border-none">
                        Get Started
                    </button>
                </div>

                <button
                    className='md:hidden text-3xl'
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? <IoClose /> : <CiMenuFries />}
                </button>
            </div>

            {menuOpen && (
                <div className='md:hidden mt-4 flex flex-col gap-4 text-left font-semibold bg-white shadow-lg rounded-xl p-4'>
                    <a href="#" className='hover:text-[#4F39F6] transition-colors duration-300'>Products</a>
                    <a href="#" className='hover:text-[#4F39F6] transition-colors duration-300'>Features</a>
                    <a href="#" className='hover:text-[#4F39F6] transition-colors duration-300'>Pricing</a>
                    <a href="#" className='hover:text-[#4F39F6] transition-colors duration-300'>Testimonials</a>
                    <a href="#" className='hover:text-[#4F39F6] transition-colors duration-300'>FAQ</a>

                    <div className='flex items-center gap-3 pt-2'>
                        <CiShoppingCart size={24} />
                        <a href="#" className='hover:text-[#4F39F6] transition-colors duration-300'>Login</a>
                    </div>

                    <button className="btn rounded-full bg-gradient-to-r from-[#4F46E5] to-[#A855F7] btn-primary hover:scale-105 hover:shadow-lg transition-all duration-300 border-none w-full">
                        Get Started
                    </button>
                </div>
            )}
        </div>
    );
};

export default Navbar;