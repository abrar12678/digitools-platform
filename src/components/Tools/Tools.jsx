import React, { use, useState } from 'react';
import Products from '../Products/Products';
import Cart from '../Cart/Cart';
import { toast } from 'react-toastify';

const Tools = ({ productsPromise, selectedCart, setSelectedCart }) => {
    const data = use(productsPromise);
    const [selected, setSelected] = useState("products");

    const handleAddToCart = (product) => {
        const alreadyExists = selectedCart.some(item => item.id === product.id);

        if (!alreadyExists) {
            setSelectedCart(prev => [...prev, product]);
            toast.success(`${product.name} added to cart`);
        }
    };

    return (
        <div className='mx-4 sm:mx-8 md:mx-16 lg:mx-50 py-12 md:py-16 lg:py-25'>
            <div className='text-center'>
                <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold mb-2'>Premium Digital Tools</h2>
                <p className='text-[16px] text-gray-400 mb-3 max-w-3xl mx-auto'>
                    Choose from our curated collection of premium digital products designed to boost your productivity and creativity.
                </p>

                <div className='flex flex-col sm:flex-row justify-center gap-4 mt-4'>
                    <button
                        className={`btn ${selected === "products" ? "btn-primary" : ""} rounded-full hover:scale-105 transition-all duration-300`}
                        onClick={() => setSelected("products")}
                    >
                        Products
                    </button>
                    <button
                        className={`btn ${selected === "cart" ? "btn-primary" : ""} rounded-full hover:scale-105 transition-all duration-300`}
                        onClick={() => setSelected("cart")}
                    >
                        Cart ({selectedCart.length})
                    </button>
                </div>
            </div>

            <div>
                {selected === "products"
                    ? <Products data={data} selectedCart={selectedCart} onAddToCart={handleAddToCart} />
                    : <Cart selectedCart={selectedCart} setSelectedCart={setSelectedCart} />}
            </div>
        </div>
    );
};

export default Tools;