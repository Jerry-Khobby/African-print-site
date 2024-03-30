'use client'
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { CiSquarePlus, CiSquareMinus } from 'react-icons/ci';
import { addToCart, increaseQuantity, decreaseQuantity } from '@/lib/cartItemSlice';
import dynamic from 'next/dynamic';

const EachProductComponent= () => {
    const nextItem = useSelector((state) => state.product.selectedProduct);
    const cartItems = useSelector((state) => state.cart.cartItems);
    const dispatch = useDispatch();

    if (!nextItem) {
        return null;
    }

    // Function to get the quantity of the current item in the cart
    const getItemQuantity = () => {
        const cartItem = cartItems.find(item => item.id === nextItem.id);
        return cartItem ? cartItem.quantity : 0;
    };

    const handleIncreaseQuantity = () => {
        dispatch(increaseQuantity({ id: nextItem.id }));
    };

    const handleDecreaseQuantity = () => {
        dispatch(decreaseQuantity({ id: nextItem.id }));
    };

    const handleAddToCart=()=>{
        dispatch(addToCart({
            id: nextItem.id,
            name: nextItem.name,
            group: nextItem.group,
            price: nextItem.price,
            imageUrl: nextItem.imageUrl,
            description: nextItem.description,
        }));
    }
    // I want to grab the quantity of an item 
    const itemQuantity=getItemQuantity();

    return (
        <div className='w-full flex flex-row items-center sm:gap-10 md:gap-24 lg:gap-32 gap-10 justify-center mt-24 flex-wrap'>
            <div className='border-2 border-gray-200 rounded-lg p-4 w-56 h-56 shadow-sm hover:text-white'>
            {nextItem.imageUrl && <img src={nextItem.imageUrl} alt="The image for the product" className="w-52 h-48 rounded-sm flex items-center justify-center self-center" />}
            </div>
            <div>
                <div className='flex items-center sm:items-center md:items-center lg:items-start flex-col justify-center'>
                    <h2 className='text-2xl font-mono font-semibold text-center sm:text-center lg:text-start md:text-center'>{nextItem.name}</h2>
                    <h2 className='text-lg font-mono font-medium text-center sm:text-center lg:text-start md:text-center'>This Cloth belongs to the {nextItem.group} group </h2>
                    <h4 className='text-lg font-mono font-medium text-gray-400 text-center sm:text-center lg:text-start md:text-center'>${nextItem.price}</h4>
                    <h5 className='text-sm font-mono font-medium text-center sm:text-center lg:text-start md:text-center'>{nextItem.description}</h5>
                    <div className='flex flex-row items-start justify-center gap-24'>
                        {/* Click handlers for the plus and minus buttons */}
                        <CiSquarePlus size={20} cursor="pointer" onClick={handleIncreaseQuantity} />
                        <p>{getItemQuantity()}</p>
                        <CiSquareMinus size={20} cursor="pointer" onClick={handleDecreaseQuantity} />
                    </div>
                </div>
                <div className='flex items-center sm:items-center md:items-center lg:items-start flex-col justify-center  cursor-pointer'>
                {itemQuantity === 1 ? (
                        <button className='bg-blue-200 w-60 rounded-sm border-1 border-blue-200 text-white text-sm h-8 sm:h-8 lg:h-7 md:h-8 cursor-not-allowed' disabled>
                            Add To Cart
                        </button>
                    ) : (
                        <button className='bg-red-500 w-60 rounded-sm border-1 border-red-500 text-white text-sm h-8 sm:h-8 lg:h-7 md:h-8 hover:bg-black hover:border-black' onClick={handleAddToCart}>
                            Add To Cart
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

const EachProduct=dynamic(()=>Promise.resolve(EachProductComponent),{ssr:false});
export default EachProduct;
