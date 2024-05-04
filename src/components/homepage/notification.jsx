"use client";
import React,{useEffect} from 'react'
import { useAppDispatch,useAppSelector } from '@/lib/hooks';
import { hideNotification } from '@/lib/cartItemSlice';






const NotificationComponent = () => {
  const dispatch=useAppDispatch();
  const {show,message}=useAppSelector((state)=>state.cart.notification);
  useEffect(() => {
    let timeout;
    if (show) {
      timeout = setTimeout(() => {
        dispatch(hideNotification());
      }, 4000);
    }
    return () => clearTimeout(timeout);
  }, [show, dispatch]);

  if (!show) return null;

  return ( 
    <div className='bg-lime-700' style={{zIndex:'1000',position:'fixed',top:'4rem',width:'100%'}}>
      <p className='text-center text-white justify-center text-sm'>{message}</p>
    </div>
   );
}

export default NotificationComponent;