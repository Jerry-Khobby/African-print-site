import React from 'react';
import Nav from './navbar';
import Banner from './banner';
import CategorySection from './categories';
import FeaturedProducts from './featuredProducts';

const HomeMaster = () => {
    return ( 
        <div className=''>
            <Nav />
            <Banner />
            <CategorySection/>
            <FeaturedProducts/>
        </div>
     );
}
 
export default HomeMaster;
