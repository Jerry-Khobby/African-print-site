'use client';
import React from 'react';
import { featuredProducts } from '@/data/categories';
import Link from 'next/link';
import { selectedProduct } from '@/lib/productSlice';
import { useAppDispatch } from '@/lib/hooks';

const CategorySection = () => {
  // Group the items according to their groups
  const groupedProducts = featuredProducts.reduce((groups, product) => {
    const { group } = product;
    if (!groups[group]) {
      groups[group] = [];
    }
    groups[group].push(product);
    return groups;
  }, {});

  //setting up the dispatching 
  const dispatch=useAppDispatch();


  return (
    <div className='flex flex-column items-center justify-center mt-20'>
        <div>
        {Object.entries(groupedProducts).map(([groupName, products]) => (
        <div key={groupName}>
          <h2 className='font-semibold text-2xl font-serif text-start pt-6'>{groupName}</h2>
          <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 justify-items-center'>
            {products.map(product => (
              <div key={product.id} className='border-2 border-gray-200 rounded-lg p-4 w-48 h-52 shadow-sm hover:bg-black hover:text-white' onClick={()=>dispatch(selectedProduct(product))}>
                <Link href="/Products" style={{color:'inherit',textDecoration:'none'}}>
                <img src={product.imageUrl} alt={product.name} className='w-20 h-20 rounded-full flex items-center justify-center mx-auto' />
                <div className='mt-8 pb-2'>
                <h6 className='font-semibold text-xs text-center'>{product.name}</h6>
                <h6 className='font-semibold text-xs text-center'>{product.description}</h6>
                <h6 className='font-semibold text-xs text-center'>Price: ${product.price}</h6>
                </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      ))}
        </div>
    </div>
  );
};

export default CategorySection;
