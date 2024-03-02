import React from 'react'
import { categories } from '@/data/categories';

const CategorySection = () => {
    return ( 
        <div className='flex flex-column items-center justify-center mt-10'>
            <div>
                <h1 className='text-3xl font-mono font-semibold text-center'>Product Categories</h1>
            </div>
            <div className='flex flex-row items-center justify-center flex-wrap w-full '>
                {categories.map((category) => {
                    return (
                        <div key={category.id} className='flex-initial  m-2 p-4 border border-gray-300 w-40 h-40 bg-white shadow-md flex flex-col items-center justify-center hover:bg-black'>
                            <img src={category.imageUrl} alt={category.group} className='w-20 h-20 rounded-full flex items-center justify-center '/>
                            <div className='p-3'>
                                <h6 className='font-semibold text-sm'>{category.group}</h6>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
     );
}
 
export default CategorySection;