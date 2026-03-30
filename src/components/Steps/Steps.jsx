import React from 'react';
import CardImg1 from '../../assets/assets/user.png';
import CardImg2 from '../../assets/assets/package.png';
import CardImg3 from '../../assets/assets/rocket.png';

const Steps = () => {
    return (
        <div className='bg-[#F9FAFC]'>
            <div className='mx-4 sm:mx-8 md:mx-16 lg:mx-50 py-12 md:py-16 lg:py-25'>
                <div className='text-center mb-[40px]'>
                    <h2 className='font-bold text-3xl sm:text-4xl lg:text-5xl mb-3'>Get Started in 3 Steps</h2>
                    <p className='text-gray-400 text-[16px]'>Start using premium digital tools in minutes, not hours.</p>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-stretch justify-between gap-6'>
                    <div className='bg-[#FFFFFF] rounded-xl border-2 border-gray-200 px-6 py-6'>
                        <div className='flex justify-end'>
                            <p className='bg-gradient-to-r from-[#4F46E5] to-[#A855F7] rounded-full w-10 h-10 flex items-center justify-center text-white mt-2 mb-5'>
                                01
                            </p>
                        </div>
                        <img src={CardImg1} alt="Create Account" className='mb-4 mx-auto' />
                        <h4 className='font-semibold text-2xl text-center'>Create Account</h4>
                        <p className='text-[16px] text-center'>Sign up for free in seconds. No credit card required to get started.</p>
                    </div>

                    <div className='bg-[#FFFFFF] rounded-xl border-2 border-gray-200 px-6 py-6'>
                        <div className='flex justify-end'>
                            <p className='bg-gradient-to-r from-[#4F46E5] to-[#A855F7] rounded-full w-10 h-10 flex items-center justify-center text-white mt-2 mb-5'>
                                02
                            </p>
                        </div>
                        <img src={CardImg2} alt="Choose Products" className='mb-4 mx-auto' />
                        <h4 className='font-semibold text-2xl text-center'>Choose Products</h4>
                        <p className='text-[16px] text-center'>Browse our catalog and select the tools that fit your needs.</p>
                    </div>

                    <div className='bg-[#FFFFFF] rounded-xl border-2 border-gray-200 px-6 py-6 md:col-span-2 lg:col-span-1'>
                        <div className='flex justify-end'>
                            <p className='bg-gradient-to-r from-[#4F46E5] to-[#A855F7] rounded-full w-10 h-10 flex items-center justify-center text-white mt-2 mb-5'>
                                03
                            </p>
                        </div>
                        <img src={CardImg3} alt="Start Creating" className='mb-4 mx-auto' />
                        <h4 className='font-semibold text-2xl text-center'>Start Creating</h4>
                        <p className='text-[16px] text-center'>Download and start using your premium tools immediately.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Steps;