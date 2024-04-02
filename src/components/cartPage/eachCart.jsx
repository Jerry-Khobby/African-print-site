"use client";
import React from "react";
import { useAppSelector, useAppDispatch } from "@/lib/hooks";
import dynamic from "next/dynamic";
import { FaTrash } from "react-icons/fa6";
import { FiMinus } from "react-icons/fi";
import { GoPlus } from "react-icons/go";
import { increaseQuantity, decreaseQuantity,removeItem } from "@/lib/cartItemSlice";


const EachCartItemComponent = () => {
  const cartItems = useAppSelector((state) => state.cart.cartItems);
  const dispatch = useAppDispatch();

  // Check if cartItems is an empty array
  if (!cartItems || cartItems.length === 0) {
    return (
      <div className="w-full flex items-center justify-center mt-24 h-full">
        <h2 className="text-2xl font-sans font-semibold">
          Your cart is empty);.
        </h2>
      </div>
    );
  }
  // creating a function for both increase quantity and decrease quantity
  const handleIncreaseQuantity = (id) => {
    dispatch(increaseQuantity({ id }));
  };
  const handleDecreaseQuantity = (id) => {
    dispatch(decreaseQuantity({ id }));
  };

  const handleRemoveItem=(id)=>{
    dispatch(removeItem({ id }));
  }

  return (
    <div className="relative h-full w-full flex flex-col items-center justify-center mt-24">
      <h2 className="flex items-center justify-center text-3xl font-sans font-semibold text-center mb-2">
        Cart Items
      </h2>
      {cartItems.map((item) => (
        <div key={item.id} className="flex flex-col items-center justify-center gap-2">
          <div className="flex items-center justify-center flex-col lg:flex-row md:flex-col sm:flex-col gap-5 mx-2 sm:mx-2 md:mx-2 lg:mx-0 rounded-md hover:bg-gray-300 p-4 mb-5">
            <div className="rounded-full">
              <img src={item.imageUrl}
                alt=""
                className="w-16 h-16 sm:w-20 sm:h-20 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full"
              />
            </div>
            <div className="flex items-center sm:items-center md:items-center lg:items-start flex-col justify-center">
              <h2 className="text-2xl font-mono font-semibold text-center sm:text-center lg:text-start md:text-center">
                {item.name}
              </h2>
              <h2 className="text-lg font-mono font-medium text-center sm:text-center lg:text-start md:text-center">
                This cloth belongs to the {item.group} group
              </h2>
              <h4 className="text-lg font-mono font-medium text-gray-400 text-center sm:text-center lg:text-start md:text-center hover:text-black">
                ${item.price}
              </h4>
              <h5 className="text-sm font-mono font-medium text-center sm:text-center lg:text-start md:text-center">
                {item.description}
              </h5>
            </div>
            <div className="flex flex-row sm:flex-row md:flex-row lg:flex-col  items-center gap-10 sm:gap-10 md:gap-10 lg:gap-4 ">
              <div className="cursor-pointer border-1 border-black border-solid h-7 w-12 items-center flex justify-center rounded-sm">
                <FiMinus onClick={() => handleDecreaseQuantity(item.id)} />
              </div>
              <div>{item.quantity}</div>
              <div className="cursor-pointer border-1 border-black border-solid h-7 w-12 items-center flex justify-center rounded-sm">
                <GoPlus onClick={() => handleIncreaseQuantity(item.id)} />
              </div>
            </div>
            <div className="cursor-pointer">
              <FaTrash onClick={()=>handleRemoveItem(item.id)} />
            </div>
          </div>
        </div>
      ))}
      {/* Component for Clear Button */}
      {/* Component for Cart Summary */}
    </div>
  );
};

const EachCartItem = dynamic(() => Promise.resolve(EachCartItemComponent), {
  ssr: false,
});

export default EachCartItem;
