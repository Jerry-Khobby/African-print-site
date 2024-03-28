
"use client"
import React from 'react'
import { useAppSelector } from '@/lib/hooks';


const EachCartItem = () => {

  //I want to access all the elements that is in the redux store 
  const cartItems=useAppSelector((state)=>state.cart.cartItems);


  return (  
    //we have to first check if the place is empty then we display something else 
    <div className='w-full flex flex-col items-center sm:gap-10 md:gap-24 lg:gap-32 gap-10 justify-center mt-24 h-full flex-wrap'>
      <h2 className='flex items-center justify-center text-2xl font-sans font-semibold text-center'>Cart Items</h2>
      {
        cartItems.length===0?(
<h6 className='text-center'>
  Your Cart is Empty);
</h6>
):null}
{cartItems.map((item)=>(
  <div key={item.id} className='flex flex-col items-center'>
    <div className='flex items-center g-4 mb-5 p-4 rounded-md justify-center flex-row'>
      <div>
        {/** I think the image will come here  */}
        <img alt='' src={item.imageUrl}/>
      </div>
      <div>
        {/** The name of the item and the description will come here  */}
      </div>
      <div>
        {/** This div will contain the - 1 and the + of the items  */}
      </div>
      <div>
        {/** This last div will contain the trash can icon  */}
      </div>

    </div>

  </div>
))}
{/** A component of the clear button  */}
{/** a component of the cart summary will be here  */}
    </div>
  );
}
 
export default EachCartItem;