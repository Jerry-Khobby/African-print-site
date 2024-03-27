
"use client"
import React from 'react'
import { useAppSelector } from '@/lib/hooks';


const EachCartItem = () => {

  //I want to access all the elements that is in the redux store 
  const cartItems=useAppSelector((state)=>state.cart.cartItems);

  return (  
    //we have to first check if the place is empty then we display something else 
    <div className='w-full flex flex-col items-center sm:gap-10 md:gap-24 lg:gap-32 gap-10 justify-center mt-24 h-full flex-wrap'>
      <h2 className='flex items-center justify-center text-2xl font-sans font-semibold text-center'>Cart Items</h2>
      {
        cartItems.length===0?(
<h6 className='text-center'>
  Your Cart is Empty);
</h6>
):null}
    </div>
  );
}
 
export default EachCartItem;