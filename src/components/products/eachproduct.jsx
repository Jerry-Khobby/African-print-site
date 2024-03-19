'use client'
import React from 'react'
import { useAppSelector } from '@/lib/hooks';




const EachProduct = () => {
    //initializing the redux to unleash the items to the new screen 
    const nextItem=useAppSelector((state)=>state.product.selectedProduct)
    return ( 
    <div>
    {nextItem.id}
    {nextItem.description}
    {nextItem.group}
    </div>
     );
}
 
export default EachProduct;