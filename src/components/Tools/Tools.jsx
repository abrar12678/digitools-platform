import React, { use, useState } from 'react';
import Products from '../Products/Products';
import Cart from '../Cart/Cart';

const Tools = ({ productsPromise }) => {
    const data = use(productsPromise);

    const [selected, setSelected] = useState("products");
    const [selectedCart, setSelectedCart] = useState([]);

    const handleAddToCart = (product) => {
        setSelectedCart(prev => prev.some(item => item.id === product.id) ? prev : [...prev, product]);
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