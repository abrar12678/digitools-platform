import React from 'react';
import SelectTick from '../../assets/assets/Vector.png';
import * as LucideIcons from 'lucide-react';

const Products = ({ data, selectedCart, onAddToCart }) => {
    const selectedIds = new Set(selectedCart.map(item => item.id));

    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 md:mt-15">
                {
                    data.map(products => {
                        const IconComponent = LucideIcons[products.icon] || LucideIcons.FileText;
                        const isAdded = selectedIds.has(products.id);

                        return (
                            <div
                                key={products.id}
                                className='rounded-xl border border-gray-100 shadow-sm py-4 px-5 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 bg-white'
                            >
                                <div className='flex justify-end'>
                                    <p className={`${products.tagType === "best seller"
                                        ? "bg-[#FEF3C6] text-[#BB4D00] rounded-full w-32 text-center py-1"
                                        : products.tagType === "new"
                                            ? "bg-[#DBFCE7] text-[#0A883E] rounded-full w-20 text-center py-1"
                                            : "bg-[#E1E7FF] text-[#4F39F6] rounded-full w-20 text-center py-1"
                                        }`}>
                                        {products.tagType}
                                    </p>
                                </div>

                                <div className='my-4 text-slate-700'>
                                    <IconComponent size={48} />
                                </div>

                                <h3 className='font-bold text-xl sm:text-2xl min-h-[64px] mb-1'>{products.name}</h3>
                                <p className='text-[16px] text-gray-400 min-h-[68px] mb-2'>{products.description}</p>
                                <p>
                                    <span className='font-bold text-xl'>${products.price}</span>/
                                    <span className='text-gray-400'> {products.period}</span>
                                </p>

                                <ul className='min-h-[80px] mb-3 mt-2'>
                                    <li className='flex items-center'><span className='mr-2'><img src={SelectTick} alt="Select Tick" /></span>{products.features[0]}</li>
                                    <li className='flex items-center'><span className='mr-2'><img src={SelectTick} alt="Select Tick" /></span>{products.features[1]}</li>
                                    <li className='flex items-center'><span className='mr-2'><img src={SelectTick} alt="Select Tick" /></span>{products.features[2]}</li>
                                </ul>

                                <button
                                    className="btn btn-primary w-full rounded-full hover:scale-105 hover:shadow-md transition-all duration-300"
                                    onClick={() => onAddToCart(products)}
                                    disabled={isAdded}
                                >
                                    {isAdded ? "Added to the cart" : "Buy Now"}
                                </button>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Products;