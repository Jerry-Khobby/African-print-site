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
                        <div key={category.id} className='flex-initial  m-2 p-4 border border-gray-300 w-36 h-36 bg-white shadow-md flex flex-col items-center justify-center'>
                            <img src={category.imageUrl} alt={category.group} />
                            <div>
                                <h6>{category.group}</h6>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
     );
}
 
export default CategorySection;
