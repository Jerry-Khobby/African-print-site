import React from 'react'
import { featuredProducts } from '@/data/categories';
import Link from 'next/link';


const FeaturedProducts = () => {
    // a function that will pick the random stuffs from the json file 
    // Function to get 8 random items from an array
const getRandomItems = (array, count = 6) => {
    const shuffled = array.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };
  const randomItems=getRandomItems(featuredProducts,12);




    return ( 
        <div className='flex flex-column items-center justify-center mt-20'>
<div>
    <h1 className='text-3xl font-mono font-semibold text-center'>Featured Products</h1>
</div>
<div>
<div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-2 justify-items-center cursor-pointer'>
{
    randomItems.map((randomItem)=>{
        return(
<div className="border-2 border-gray-200 rounded-lg p-4 w-40 h-44 shadow-sm hover:bg-black hover:text-white" key={randomItem.id}>
<Link  href="/Products" style={{color:'inherit',textDecoration:'none'}}>
                 <img src={randomItem.imageUrl} alt={randomItem.group} className='w-20 h-20 rounded-full flex items-center justify-center mx-auto'/>
                 <div className='mt-0 pb-2'>
                                <h6 className='font-medium text-xs text-center pt-1'>{randomItem.name}</h6>
                                <h6 className='font-semibold text-xs text-center'>${randomItem.price}</h6>
</div>
</Link>
            </div>
 
        )
    })
}
</div>

</div>
        </div>
     );
}
 
export default FeaturedProducts;