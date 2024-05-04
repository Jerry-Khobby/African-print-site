"use client";
import React, { useEffect } from 'react';
import FeaturedProducts from '@/components/homepage/featuredProducts';
import EachProduct from './eachproduct';
import { hideNotification } from '@/lib/cartItemSlice';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import dynamic from 'next/dynamic';

const Single = () => {
  const dispatch = useAppDispatch();
  const message = useAppSelector((state) => state.cart.message);
  const notification = useAppSelector((state) => state.cart.notification);

  useEffect(() => {
    let timeout;
    if (message && notification) {
      timeout = setTimeout(() => {
        dispatch(hideNotification());
      }, 2000);
    }
    return () => clearTimeout(timeout);
  }, [notification, message, dispatch]);

  const notificationDiv = notification ? (
    <div className='bg-lime-700' style={{ zIndex: '1000', position: 'fixed', top: '4rem', width: '100%' }}>
      <p className='text-center text-white justify-center text-sm'>{message}</p>
    </div>
  ) : null;

  return (
    <div>
      {notificationDiv}
      <EachProduct />
      <FeaturedProducts />
    </div>
  );
};

const SingleProducts = dynamic(() => Promise.resolve(Single), {
  ssr: false,
});

export default SingleProducts;
