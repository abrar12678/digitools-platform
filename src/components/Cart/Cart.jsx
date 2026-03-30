import React from 'react';
import * as LucideIcons from 'lucide-react';

const Cart = ({ selectedCart, setSelectedCart }) => {

    const handleRemoveSelectedPlayer = (carts) => {
        setSelectedCart(prev => prev.filter(item => item.id !== carts.id));
    }

    return (
        <div className='mt-10 md:mt-15'>
            {selectedCart.length === 0 ? (
                <div className='text-center py-10 border-white shadow-xl rounded-xl'>
                    <p className='text-xl font-semibold mb-2'>Your cart is empty</p>
                    <p className='text-gray-500'>Add a product from the Products section to see it here.</p>
                </div>
            ) : (
                selectedCart.map(carts => {
                    const IconComponent = LucideIcons[carts.icon] || LucideIcons.FileText;
                    return (
                        <div
                            key={carts.id}
                            className='flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border border-gray-100 shadow-xl p-4 my-5 rounded-xl bg-white'
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
                })
            )}
        </div>
    );
};

export default Cart;