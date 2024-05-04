
import React from 'react'
import FeaturedProducts from '@/components/homepage/featuredProducts';
import EachProduct from './eachproduct';
import NotificationComponent from '../homepage/notification';


const SingleProducts = () => {
// the notification component, was made to show , whenever the user increases the quantity or added to cart and the rest 
//But I'm tired 

    return ( 
        <div>
        <NotificationComponent/>
        <EachProduct/>
        <FeaturedProducts/>
        </div>
     );
}
 
export default SingleProducts;