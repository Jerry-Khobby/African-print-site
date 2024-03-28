"use client"
import React from 'react';
import { useAppSelector } from '@/lib/hooks';
import dynamic from 'next/dynamic';

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
    <div className="w-full flex flex-col items-center sm:gap-10 md:gap-24 lg:gap-32 gap-10 justify-center mt-24 h-full flex-wrap">
      <h2 className="flex items-center justify-center text-2xl font-sans font-semibold text-center">
        Cart Items
      </h2>
      {cartItems.map((item) => (
        <div key={item.id} className="flex flex-col items-center">
          <div className="flex items-center gap-4 mb-5 p-4 rounded-md justify-center flex-row">
            <div>
              {/* Render item image here */}
            </div>
            <div>
              <h2>{item.quantity}</h2>
            </div>
            <div>
              {/* Quantity buttons (e.g., +1, -1) */}
            </div>
            <div>
              {/* Trash can icon */}
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
