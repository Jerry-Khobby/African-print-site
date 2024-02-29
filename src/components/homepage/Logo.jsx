'use client';
import React from 'react';
import { Box } from "@mui/material";
import { useRouter } from 'next/navigation';

const Logo = () => {
  const router = useRouter();

  const handleLogoClick = () => {
    router.push('/');
  };

  return (
    <div style={{
      display: "flex",
      justifyContent: "flex-start",
      cursor: "pointer"  // Adding cursor pointer for better UX
    }}>
      <Box  onClick={handleLogoClick}>
        <img src="https://i.pinimg.com/564x/d8/23/e3/d823e34f9d58fef210dba91770dff573.jpg" alt="" width="50" height="50" />
      </Box>
    </div>
  );
}

export default Logo;
