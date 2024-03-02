import React from 'react';
import Nav from './navbar';
import Banner from './banner';
import CategorySection from './categories';

const HomeMaster = () => {
    return ( 
        <div className=''>
            <Nav />
            <Banner />
            <CategorySection/>
        </div>
     );
}
 
export default HomeMaster;
