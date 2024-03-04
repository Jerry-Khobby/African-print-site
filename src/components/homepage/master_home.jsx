import React from 'react';
import Nav from './navbar';
import Banner from './banner';
import CategorySection from './categories';
import FeaturedProducts from './featuredProducts';
import FooterComponent from './footer';

const HomeMaster = () => {
    return ( 
        <div className='relative'>
            <Nav />
            <Banner />
            <CategorySection/>
            <FeaturedProducts/>
            <FooterComponent />
        </div>
     );
}
 
export default HomeMaster;
