import React from 'react'
import { categories } from '@/data/categories';

const CategorySection = () => {
    return ( 
        <div className='flex flex-column items-center justify-center mt-10'>
            <div>
                <h1 className='text-3xl font-mono font-semibold text-center'>Product Categories</h1>
            </div>
            <div>
                {categories.map((category) => {
                    return (
                        <div key={category.id}>
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
