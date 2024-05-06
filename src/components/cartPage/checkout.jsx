"use client"

import React, { useState } from 'react';

const CheckOut = () => {
  const [formData, setFormData] = useState({
    email: '',
    amount: '',
  });

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    // Here you can perform any actions you want with the form data, like sending it to a server
    console.log(formData); // For example, logging the form data to the console
  };

  // Function to handle changes in form fields
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
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
          type="text"
          name="amount"
          value={formData.amount}
          placeholder="Amount"
          onChange={handleChange} // Call handleChange on input change
          required
          className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:border-blue-500 block w-full p-2.5 font-mono font-semibold'
        />
        <button type="submit" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Pay Now</button>
      </form>
    </div>
  );
};

export default CheckOut;
