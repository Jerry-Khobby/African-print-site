import React from 'react'
import Nav from '@/components/homepage/navbar';
import FooterComponent from '@/components/homepage/footer';
import FeaturedProducts from '@/components/homepage/featuredProducts';
import EachProduct from './eachproduct';


const SingleProducts = () => {
    return ( 
        <div>
        <Nav/>
        <EachProduct/>
        <FeaturedProducts/>
<FooterComponent/>

        </div>
     );
}
 
export default SingleProducts;