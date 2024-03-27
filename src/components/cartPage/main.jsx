import React from 'react'
import Nav from '../homepage/navbar';
import FooterComponent from '../homepage/footer';
import EachCartItem from './eachCart';


const MainCartPage = () => {
  return ( 
    <div>
<Nav/>
<EachCartItem/>
<FooterComponent/>
    </div>
   );
}
 
export default MainCartPage;