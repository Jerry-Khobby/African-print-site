
'use client';
import React from 'react';
import { FaRegUserCircle } from "react-icons/fa";
import { GrCart } from "react-icons/gr";
import { Box } from "@mui/material";
import { useAppSelector } from '@/lib/hooks';
import Link from 'next/link';

const UserIcon = () => {
  //access the cart state from the redux store 
  const cartItems=useAppSelector(state=>state.cart.cartItems);
  //calculate the total quantity of all items present in the cart from the redux store 
  const totalQuantity=cartItems.reduce((total,item)=>total+item.quantity,0);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-end",
        gap: '10px'
      }}
    >
      <div
        style={{
          height: '35px',
          width: '35px',
          alignItems: 'center',
          display: 'flex',
          justifyContent: 'center',
          borderRadius: '50%',
          cursor: 'pointer', // Change background color based on click state
        }}
      >
        <div className='relative'>
        <Link href="/Cartpage">
        <GrCart size={23} color='black' />
        </Link>
        <div className='absolute -top-1 right-3 flex items-center justify-center w-4 h-4 bg-red-500 text-white rounded-full text-xs'>
          {totalQuantity}
        </div>
        </div>
       
      </div>
      <div
        style={{
          height: '35px',
          width: '35px',
          alignItems: 'center',
          display: 'flex',
          justifyContent: 'center',
          borderRadius: '50%',
          cursor: 'pointer', // Change background color based on click state
        }}
      >
        <Box>
          <FaRegUserCircle size={23} color='black' />
        </Box>
      </div>
    </div>
  );
}

export default UserIcon;
