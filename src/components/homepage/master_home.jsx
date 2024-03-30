import React from 'react';
import Banner from './banner';
import CategorySection from './categories';
import FeaturedProducts from './featuredProducts';

const HomeMaster = () => {
    return ( 
        <div>
            <Banner />
            <CategorySection/>
            <FeaturedProducts/> 
        </div>
     );
}
 
export default HomeMaster;
