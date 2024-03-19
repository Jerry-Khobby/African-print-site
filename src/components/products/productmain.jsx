import React from 'react'
import Nav from '@/components/homepage/navbar';
import FooterComponent from '@/components/homepage/footer';
import FeaturedProducts from '@/components/homepage/featuredProducts';


const SingleProducts = () => {
    return ( 
        <div>
        <Nav/>
        <FeaturedProducts/>
<FooterComponent/>

        </div>
     );
}
 
export default SingleProducts;