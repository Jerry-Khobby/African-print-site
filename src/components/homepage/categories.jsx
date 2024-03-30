import React from 'react'
import { categories } from '@/data/categories';


const CategorySection = () => {
    return ( 
        <div className='flex flex-column items-center justify-center mt-12 h-full'>
            <div>
                <h1 className='text-3xl font-mono font-semibold text-center'>Product Categories</h1>
            </div>
            <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-2 justify-items-center'>
                {categories.map((category) => {
                    return (
                        <div className="border-2 border-gray-200 rounded-lg p-4 w-40 h-40 shadow-sm hover:bg-black hover:text-white" key={category.id}>
                            <img src={category.imageUrl} alt={category.group} className='w-20 h-20 rounded-full flex items-center justify-center mx-auto'/>
                            <div className='mt-4'>
                                <h6 className='font-semibold text-sm text-center'>{category.group}</h6>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
     );
}
 
export default CategorySection;