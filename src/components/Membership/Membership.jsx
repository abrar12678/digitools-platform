import React from 'react';
import SelectTick from '../../assets/assets/vector.png';

const Membership = () => {
    return (
        <div>
            <div className='mx-4 sm:mx-8 md:mx-16 lg:mx-50 py-12 md:py-16 lg:py-25'>
                <div className='text-center mb-10'>
                    <h2 className='font-bold text-3xl sm:text-4xl lg:text-5xl mb-3'>Simple, Transparent Pricing</h2>
                    <p className='text-gray-400 text-[16px]'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch justify-between'>
                    <div className='border-2 border-gray-200 bg-[#F9FAFC] rounded-xl p-6 min-h-full hover:-translate-y-2 hover:shadow-2xl transition-all duration-300'>
                        <div className='mb-6'>
                            <h3 className='font-semibold text-2xl'>Starter</h3>
                            <p className='text-[16px] text-gray-400'>Perfect for getting started</p>
                        </div>
                        <div className='mb-6'>
                            <span className='font-bold text-[40px]'>$0</span> <span className='text-gray-400 text-[20px]'>/Month</span>
                        </div>
                        <ul className='mb-25 space-y-2'>
                            <li className='text-[16px] flex items-center'><span className='mr-2'><img src={SelectTick} alt="Select Tick" /></span> Access to 10 free tools</li>
                            <li className='text-[16px] flex items-center'><span className='mr-2'><img src={SelectTick} alt="Select Tick" /></span> Basic templates</li>
                            <li className='text-[16px] flex items-center'><span className='mr-2'><img src={SelectTick} alt="Select Tick" /></span> Community support</li>
                            <li className='text-[16px] flex items-center'><span className='mr-2'><img src={SelectTick} alt="Select Tick" /></span> 1 project per month</li>
                        </ul>
                        <button className="btn bg-gradient-to-r from-[#4F46E5] to-[#A855F7] text-white rounded-full w-full hover:scale-105 hover:shadow-lg transition-all duration-300 border-none">Get Started Free</button>
                    </div>

                    <div className='relative border-2 border-gray-200 text-white bg-gradient-to-r from-[#4F46E5] to-[#A855F7] rounded-xl p-6 min-h-full hover:-translate-y-2 hover:shadow-2xl transition-all duration-300'>
                        <div className='absolute -top-3 left-1/2 -translate-x-1/2'>
                            <p className='bg-[#FEF3C6] text-[#BB4D00] text-sm px-4 py-1 rounded-full font-medium'>
                                Most Popular
                            </p>
                        </div>

                        <div className='mb-6'>
                            <h3 className='font-semibold text-2xl'>Pro</h3>
                            <p className='text-[16px] text-gray-200'>Best for professionals</p>
                        </div>
                        <div className='mb-6'>
                            <span className='font-bold text-[40px]'>$29</span> <span className='text-gray-200 text-[20px]'>/Month</span>
                        </div>
                        <ul className='mb-10 space-y-2'>
                            <li className='text-[16px] flex items-center'><span className='mr-2'><img src={SelectTick} alt="Select Tick" /></span> Access to all premium tools</li>
                            <li className='text-[16px] flex items-center'><span className='mr-2'><img src={SelectTick} alt="Select Tick" /></span> Unlimited templates</li>
                            <li className='text-[16px] flex items-center'><span className='mr-2'><img src={SelectTick} alt="Select Tick" /></span> Priority support</li>
                            <li className='text-[16px] flex items-center'><span className='mr-2'><img src={SelectTick} alt="Select Tick" /></span> Unlimited projects</li>
                            <li className='text-[16px] flex items-center'><span className='mr-2'><img src={SelectTick} alt="Select Tick" /></span> Cloud sync</li>
                            <li className='text-[16px] flex items-center'><span className='mr-2'><img src={SelectTick} alt="Select Tick" /></span> Advanced analytics</li>
                        </ul>
                        <button className="btn bg-white text-[#4F46E5] rounded-full w-full hover:scale-105 hover:shadow-lg transition-all duration-300 border-none">Start Pro Trial</button>
                    </div>

                    <div className='border-2 border-gray-200 bg-[#F9FAFC] rounded-xl p-6 min-h-full hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 md:col-span-2 lg:col-span-1'>
                        <div className='mb-6'>
                            <h3 className='font-semibold text-2xl'>Enterprise</h3>
                            <p className='text-[16px] text-gray-400'>For teams and businesses</p>
                        </div>
                        <div className='mb-6'>
                            <span className='font-bold text-[40px]'>$99</span> <span className='text-gray-400 text-[20px]'>/Month</span>
                        </div>
                        <ul className='mb-10 space-y-2'>
                            <li className='text-[16px] flex items-center'><span className='mr-2'><img src={SelectTick} alt="Select Tick" /></span> Everything in Pro</li>
                            <li className='text-[16px] flex items-center'><span className='mr-2'><img src={SelectTick} alt="Select Tick" /></span> Team collaboration</li>
                            <li className='text-[16px] flex items-center'><span className='mr-2'><img src={SelectTick} alt="Select Tick" /></span> Custom integrations</li>
                            <li className='text-[16px] flex items-center'><span className='mr-2'><img src={SelectTick} alt="Select Tick" /></span> Dedicated support</li>
                            <li className='text-[16px] flex items-center'><span className='mr-2'><img src={SelectTick} alt="Select Tick" /></span> SLA guarantee</li>
                            <li className='text-[16px] flex items-center'><span className='mr-2'><img src={SelectTick} alt="Select Tick" /></span> Custom branding</li>
                        </ul>
                        <button className="btn bg-gradient-to-r from-[#4F46E5] to-[#A855F7] text-white rounded-full w-full hover:scale-105 hover:shadow-lg transition-all duration-300 border-none">Contact Sales</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Membership;