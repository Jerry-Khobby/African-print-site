
'use client';
import React from 'react';
import { FaRegUserCircle } from "react-icons/fa";
import { GrCart } from "react-icons/gr";
import { Box } from "@mui/material";

const UserIcon = () => {


  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-end",
        gap: '10px'
      }}
    >
      <div
        style={{
          height: '35px',
          width: '35px',
          alignItems: 'center',
          display: 'flex',
          justifyContent: 'center',
          borderRadius: '50%',
          cursor: 'pointer', // Change background color based on click state
        }}
      >
        <Box>
        <GrCart size={23} color='black' />
        </Box>
       
      </div>
      <div
        style={{
          height: '35px',
          width: '35px',
          alignItems: 'center',
          display: 'flex',
          justifyContent: 'center',
          borderRadius: '50%',
          cursor: 'pointer', // Change background color based on click state
        }}
      >
        <Box>
        <FaRegUserCircle size={23} color='black' />
        </Box>
      </div>
    </div>
  );
}

export default UserIcon;
