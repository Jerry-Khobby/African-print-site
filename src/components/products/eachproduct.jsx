// EachProduct.jsx
'use client'
import React from 'react';
import { useAppSelector,useAppDispatch } from '@/lib/hooks';
import { CiSquarePlus,CiSquareMinus } from "react-icons/ci";
import { addToCart } from '@/lib/cartItemSlice';
const EachProduct = () => {
    // Initializing the redux to unleash the items to the new screen 
    const nextItem = useAppSelector((state) => state.product.selectedProduct);
    // Check if nextItem is not null before rendering its properties
    const dispatch=useAppDispatch();
    if(!nextItem){
        return null;
    }
    return(
    <div className='w-full  flex  flex-row items-center sm:gap-10 md:gap-24 lg:gap-32 gap-10 justify-center mt-24  flex-wrap '>
<div className='border-2 border-gray-200 rounded-lg p-4 w-56 h-56 shadow-sm  hover:text-white'>
    {
    nextItem.imageUrl&&<img src={nextItem.imageUrl} alt="The image for the product" className="w-52 h-48 rounded-sm flex items-center justify-center self-center"/>
    }
</div>
<div>
    <div className='flex items-center sm:items-center md:items-center lg:items-start  flex-col justify-center'>
        <h2 className='text-2xl font-mono font-semibold '>{nextItem.name}</h2>
        <h2 className='text-lg font-mono font-medium'>This Cloth belongs to the {nextItem.group} group </h2>
        <h4 className='text-lg font-mono font-medium text-gray-400'>${nextItem.price}</h4>
        <h5 className='text-sm font-mono font-medium'>{nextItem.description}</h5>
        <div className='flex flex-row items-start justify-center gap-24'>
            <CiSquarePlus size={20} cursor="pointer" />
            <div>{ nextItem.quantity}</div>
                <CiSquareMinus size={20} cursor="pointer" />
        </div>
    </div>
    <div className='flex items-center sm:items-center md:items-center lg:items-start  flex-col justify-center' onClick={()=>dispatch(addToCart(nextItem))}>
    <button className='bg-red-500 w-60 rounded-sm border-1 border-red-500 text-white text-sm h-6 hover:bg-black'>Add To Cart</button>
    </div>

</div>
    </div>
    );
};

export default EachProduct;