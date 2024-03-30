import React from 'react'
import FeaturedProducts from '@/components/homepage/featuredProducts';
import EachProduct from './eachproduct';


const SingleProducts = () => {
    return ( 
        <div>
        <EachProduct/>
        <FeaturedProducts/>
        </div>
     );
}
 
export default SingleProducts;