'use client'
import React from 'react'
import { useAppSelector } from '@/lib/hooks';




const EachProduct = () => {
    //initializing the redux to unleash the items to the new screen 
    const nextItem=useAppSelector((state)=>state.product.selectedProduct)
    return ( 
    <div className=''>
    
    </div>
     );
}
 
export default EachProduct;