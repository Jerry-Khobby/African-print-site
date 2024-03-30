import React from 'react'
import Nav from '../homepage/navbar';
import FooterComponent from '../homepage/footer';
import EachCartItem from './eachCart';


const MainCartPage = () => {
  return ( 
    <div>
<Nav/>
<EachCartItem/>
<FooterComponent className="absolute left-0 bottom-0"/>
    </div>
   );
}
 
export default MainCartPage;