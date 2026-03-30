import React from 'react';

const Rating = () => {
    return (
        <div className="w-full my-[60px] md:my-[80px] lg:my-[100px] py-10 px-4 bg-gradient-to-r from-[#4F46E5] to-[#A855F7]">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between text-white text-center gap-6 md:gap-0">
                <div className="flex-1">
                    <h2 className="text-3xl sm:text-4xl font-bold">50K+</h2>
                    <p className="mt-2 text-sm opacity-80">Active Users</p>
                </div>

                <div className="hidden md:block w-px h-16 bg-white/30"></div>

                <div className="flex-1">
                    <h2 className="text-3xl sm:text-4xl font-bold">200+</h2>
                    <p className="mt-2 text-sm opacity-80">Premium Tools</p>
                </div>

                <div className="hidden md:block w-px h-16 bg-white/30"></div>

                <div className="flex-1">
                    <h2 className="text-3xl sm:text-4xl font-bold">4.9</h2>
                    <p className="mt-2 text-sm opacity-80">Rating</p>
                </div>
            </div>
        </div>
    );
};

export default Rating;