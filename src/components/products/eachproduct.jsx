// EachProduct.jsx
'use client'
import React from 'react';
import { useAppSelector } from '@/lib/hooks';

const EachProduct = () => {
    // Initializing the redux to unleash the items to the new screen 
    const nextItem = useAppSelector((state) => state.product.selectedProduct);

    // Check if nextItem is not null before rendering its properties
    return (
        <div>
            {nextItem && (
    <></>
            )}
        </div>
    );
};

export default EachProduct;
