
'use client'
import React from 'react';
import { featuredProducts } from '@/data/categories';
import Link from 'next/link';
import { selectedProduct } from '@/lib/reducer';
import { useAppDispatch} from '@/lib/hooks';


const FeaturedProducts = () => {
const dispatch=useAppDispatch();
//rendering the first twelve items in the arrays 
  const randomItems = featuredProducts.slice(0, 12);
// event handler for when  a product is clicked 

  return (
    <div className='flex flex-column items-center justify-center mt-20'>
      <div className='items-center'>
        <h1 className='text-3xl font-mono font-semibold text-center'>Featured Products</h1>
      </div>
      <div>
        <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-2 justify-items-center cursor-pointer'>
          {randomItems.map((randomItem) => (
            <div className="border-2 border-gray-200 rounded-lg p-4 w-48 h-48 shadow-sm hover:bg-black hover:text-white" key={randomItem.id} onClick={()=>dispatch(selectedProduct(randomItem))}>
              <Link href="/Products" style={{ color: 'inherit', textDecoration: 'none' }}>
                <img src={randomItem.imageUrl} alt={randomItem.group} className='w-20 h-20 rounded-full flex items-center justify-center mx-auto' />
                <div className='mt-0 pb-2'>
                  <h6 className='font-medium text-xs text-center pt-1'>{randomItem.name}</h6>
                  <h6 className='font-semibold text-xs text-center'>${randomItem.price}</h6>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
