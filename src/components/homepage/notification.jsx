import React from 'react'


const NotificationComponent = () => {
  return ( 
    <div className='bg-lime-700' style={{zIndex:'1000',position:'fixed',top:'4rem',width:'100%'}}>
      <p className='text-center text-white justify-center text-sm'>Product Added to Cart Successfully</p>
    </div>
   );
}
 
export default NotificationComponent;