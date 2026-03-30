import React from 'react';

const Workflow = () => {
    return (
        <section className="bg-gradient-to-r from-[#6D28D9] to-[#8B5CF6] py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-10">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white">
                    Ready To Transform Your Workflow?
                </h2>

                <p className="mx-auto mt-5 max-w-2xl text-sm text-white/80 sm:text-base">
                    Join thousands of professionals who are already using Digitools to work smarter. Start your free trial today.
                </p>

                <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                    <button className="btn rounded-full bg-white text-[#4F46E5] px-8 py-3 font-semibold hover:scale-105 hover:bg-slate-100 hover:shadow-lg transition-all duration-300 border-none">
                        Explore Products
                    </button>
                    <button className="btn rounded-full bg-white/10 border border-white/30 text-white px-8 py-3 font-semibold hover:scale-105 hover:bg-white/20 hover:shadow-lg transition-all duration-300">
                        View Pricing
                    </button>
                </div>

                <p className="mt-6 text-sm text-white/70">
                    14-day free trial · No credit card required · Cancel anytime
                </p>
            </div>
        </section>
    );
};

export default Workflow;