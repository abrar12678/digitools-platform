import React from 'react';
import BannerImg from '../../assets/assets/banner.png';
import { CiPlay1 } from 'react-icons/ci';

const Hero = () => {
    return (
        <div className='flex flex-col-reverse lg:flex-row mx-4 sm:mx-8 md:mx-16 lg:mx-50 py-12 md:py-16 lg:py-25 justify-between items-center gap-10'>
            <div className='space-y-4 w-full lg:w-[48%] text-center lg:text-left'>
                <p className='bg-[#E1E7FF] text-[#4F39F6] w-full sm:w-[294px] h-[38px] flex justify-center items-center rounded-full text-center px-4 mx-auto lg:mx-0 gap-2'>
                    <span className='text-3xl leading-none flex items-center'>•</span>
                    <span>New: AI-Powered Tools Available</span>
                </p>

                <h1 className='font-bold text-4xl sm:text-5xl lg:text-6xl leading-tight'>
                    Supercharge Your Digital Workflow
                </h1>

                <p className='text-gray-400 text-[16px] sm:text-[18px] max-w-xl mx-auto lg:mx-0'>
                    Access premium AI tools, design assets, templates, and productivity
                    software—all in one place. Start creating faster today.
                </p>

                <div className='flex flex-col sm:flex-row gap-3 justify-center lg:justify-start'>
                    <button className="btn bg-gradient-to-r from-[#4F46E5] to-[#A855F7] text-white rounded-full hover:scale-105 hover:shadow-lg transition-all duration-300 border-none">
                        Explore Products
                    </button>
                    <button className="btn btn-soft btn-primary rounded-full hover:scale-105 hover:shadow-md transition-all duration-300">
                        <CiPlay1 /> Watch Demo
                    </button>
                </div>
            </div>

            <div className='w-full lg:w-[48%] flex justify-center lg:justify-end'>
                <img
                    src={BannerImg}
                    alt="Banner"
                    className='w-full max-w-[280px] sm:max-w-[380px] md:max-w-[450px] lg:max-w-[520px] xl:max-w-[580px] h-auto object-contain'
                />
            </div>
        </div>
    );
};

export default Hero;