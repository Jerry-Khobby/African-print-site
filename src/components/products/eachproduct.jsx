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
    <div className='w-full h-96 flex  flex-row items-center justify-center mt-16 '>
<div>
    {/** the div will have to have the image of the  */}
    <img src={nextItem.imageUrl} alt="The image for the product"/>
</div>
<div>
    <div></div>
    <Button sx={{backgroundColor:'orange',color:'white',textTransform:'inherit',height:'2rem',width:'12rem',
"&:hover":{
    backgroundColor:'black',
    color:'white',
}
}}>Add To Cart</Button>
</div>
    </div>
    );
};

export default EachProduct;
