"use client"
import React from 'react';
import { useAppSelector } from '@/lib/hooks';
import dynamic from 'next/dynamic';
import { FaTrash } from "react-icons/fa6";
import { FiMinus } from "react-icons/fi";
import { GoPlus } from "react-icons/go";

const EachCartItemComponent = () => {
  const cartItems = useAppSelector((state) => state.cart.cartItems);

  // Check if cartItems is an empty array
  if (!cartItems || cartItems.length === 0) {
    return (
      <div className="w-full flex items-center justify-center mt-24">
        <h2 className="text-2xl font-sans font-semibold">Your cart is empty);.</h2>
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col items-center sm:gap-5 md:gap-5 lg:gap-5 gap-5 justify-center mt-24 h-full flex-wrap">
      <h2 className="flex items-center justify-center text-3xl font-sans font-semibold text-center">
        Cart Items
      </h2>
      {cartItems.map((item) => (
<div key={item.id} className="flex flex-col items-center justify-center">
  <div className='flex items-center  justify-center  mb-5 p-4 rounded-md hover:bg-gray-400 gap-6 sm:mx-2 mx-2 md:mx-0 lg:mx-0'>
  <div className="rounded-full">
  <img src={item.imageUrl} alt="" className="w-16 h-16 sm:w-20 sm:h-20 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full"/>
</div>
<div className='flex items-center sm:items-center md:items-center lg:items-start flex-col justify-center'>
  <h2 className='text-2xl font-mono font-semibold text-center sm:text-center lg:text-start md:text-center'>{item.name}</h2>
  <h2 className='text-lg font-mono font-medium text-center sm:text-center lg:text-start md:text-center'>This cloth belongs to the {item.group} group</h2>
  <h4 className='text-lg font-mono font-medium text-gray-400 text-center sm:text-center lg:text-start md:text-center'>${item.price}</h4>
  <h5 className='text-sm font-mono font-medium text-center sm:text-center lg:text-start md:text-center'>{item.description}</h5>
</div>
<div className='flex flex-col items-center'>
  {/** this is for the increase and the decrease */}
  <div className='cursor-pointer'>
  <FiMinus />
  </div>
  <div>
    {item.quantity}
  </div>
  <div className='cursor-pointer'>
  <GoPlus />
  </div>
</div>
<div className='cursor-pointer'>
<FaTrash />
</div>
          </div>
        </div>
      ))}
      {/* Component for Clear Button */}
      {/* Component for Cart Summary */}
    </div>
  );
};


const EachCartItem = dynamic(() => Promise.resolve(EachCartItemComponent), { ssr: false });

export default EachCartItem;
