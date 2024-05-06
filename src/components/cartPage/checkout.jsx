"use client"
import React, { useState } from 'react';
import axios from "axios";
import { useRouter } from 'next/navigation';

const CheckOut = () => {
  const router=useRouter();

  const [formData, setFormData] = useState({
    email: '',
    amount: '',
  });



  // Function to handle changes in form fields
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

    // Function to handle form submission
    const handleSubmit = async (event) => {
      event.preventDefault(); // Prevent default form submission behavior
try{
  const response= await  axios.post('/api/payment',{...formData});
  if(response.status === 200){
    const res=response.data;

    const {data}=res;
    const {authorization_url}=data;

    router.push(authorization_url)
  }else{
    throw new Error("An error occured while processing the payment")
  }

}catch(error){
  console.error("Payment error: " + error)
}
    };
  return (
    <div className='h-full w-full items-center justify-center flex flex-col gap-8'>
      <h2 className='text-bold font-mono text-2xl text-center '>Payment Form</h2>
      <form onSubmit={handleSubmit} className='flex items-center justify-center w-1/2 flex-col gap-7'>
        <input
          type="email"
          name="email"
          value={formData.email}
          placeholder="Enter your email address"
          onChange={handleChange} // Call handleChange on input change
          required
          className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:border-blue-500 block w-full p-2.5 font-mono font-semibold'
        />
        <input
          type="number"
          name="amount"
          value={formData.amount}
          placeholder="Amount"
          onChange={handleChange} // Call handleChange on input change
          required
          className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:border-blue-500 block w-full p-2.5 font-mono font-semibold'
          step="0.01" // Increment value by 0.01
        />
        <button type="submit" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Pay Now</button>
      </form>
    </div>
  );
};

export default CheckOut;
