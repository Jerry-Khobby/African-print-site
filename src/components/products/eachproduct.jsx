// EachProduct.jsx
'use client'
import React from 'react';
import { useAppSelector } from '@/lib/hooks';
import {Button} from "@mui/material";
const EachProduct = () => {
    // Initializing the redux to unleash the items to the new screen 
    const nextItem = useAppSelector((state) => state.product.selectedProduct);
    // Check if nextItem is not null before rendering its properties
    return(
    <div className='w-full  flex  flex-row items-center justify-center mt-24 '>
<div className='border-2 border-gray-200 rounded-lg p-4 w-56 h-56 shadow-sm  hover:text-white'>
    {/** the div will have to have the image of the  */}
    <img src={nextItem.imageUrl} alt="The image for the product" className="w-52 h-48 rounded-sm flex items-center justify-center "/>
</div>
<div>
    <div></div>
    <Button sx={{backgroundColor:'orange',color:'white',textTransform:'inherit',height:'2rem',width:'12rem',"&:hover":{backgroundColor:'black',color:'white',}}}>Add To Cart</Button>
</div>
    </div>
    );
};

export default EachProduct;
