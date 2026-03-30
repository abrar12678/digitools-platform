import React from 'react';
import * as LucideIcons from 'lucide-react';

const Cart = ({ selectedCart, setSelectedCart }) => {

    const handleRemoveSelectedPlayer = (carts) => {
        setSelectedCart(prev => prev.filter(item => item.id !== carts.id));
    }

    const handleCheckout = () => {
        setSelectedCart([]);
    };

    const total = selectedCart.reduce((sum, item) => sum + item.price, 0);

    return (
        <div className='mt-10 md:mt-15'>
            {selectedCart.length === 0 ? (
                <div className='text-center py-10 border-white shadow-xl rounded-xl'>
                    <p className='text-xl font-semibold mb-2'>Your cart is empty</p>
                    <p className='text-gray-500'>Add a product from the Products section to see it here.</p>
                </div>
            ) : (
                <div className='border border-gray-200 rounded-xl p-5'>
                    <h3 className='text-2xl font-bold mb-6'>Your Cart</h3>

                    {selectedCart.map(carts => {
                        const IconComponent = LucideIcons[carts.icon] || LucideIcons.FileText;
                        return (
                            <div
                                key={carts.id}
                                className='flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border border-gray-100 shadow-sm p-4 my-5 rounded-xl bg-white'
                            >
                                <div className='flex gap-4 items-center'>
                                    <IconComponent size={48} />
                                    <div>
                                        <h3 className='font-semibold text-[20px]'>{carts.name}</h3>
                                        <p className='text-[16px] text-gray-400'>${carts.price}</p>
                                    </div>
                                </div>

                                <button
                                    className='btn btn-error rounded-xl hover:scale-105 transition-all duration-300'
                                    onClick={() => handleRemoveSelectedPlayer(carts)}
                                >
                                    Remove
                                </button>
                            </div>
                        )
                    })}

                    <div className='flex justify-between items-center mt-6 mb-5'>
                        <p className='text-gray-500'>Total:</p>
                        <h4 className='text-2xl font-bold'>${total}</h4>
                    </div>

                    <button
                        className='btn w-full rounded-full bg-gradient-to-r from-[#4F46E5] to-[#A855F7] text-white border-none'
                        onClick={handleCheckout}
                    >
                        Proceed To Checkout
                    </button>
                </div>
            )}
        </div>
    );
};

export default Cart;