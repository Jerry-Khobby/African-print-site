import React from 'react';
import Nav from './navbar';
import Banner from './banner';
import CategorySection from './categories';
import FeaturedProducts from './featuredProducts';
import FooterComponent from './footer';

const HomeMaster = () => {
    return ( 
        <div>
            <Nav/>
            <Banner />
            <CategorySection/>
            <FeaturedProducts/> 
            <FooterComponent  className="absolute left-0 bottom-0"/>
        </div>
     );
}
 
export default HomeMaster;
