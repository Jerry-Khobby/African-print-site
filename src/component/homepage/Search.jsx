'use client'

import React, { useState } from 'react';
import { Button, Tooltip } from '@mui/material';

const Search = () => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <div style={{
      display: "flex",
      alignItems: "center",
      width: "100%",
      height: "40px",
      border: "1px solid #353535",
      borderRadius: "5px",
      overflow: "hidden",
      outline: "none",
    }}>
      <input
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        style={{
          flex: 1,
          border: "none",
          padding: "0 12px",
          height: "100%",
          outline: "none",
          textDecoration: "none",
        }}
        placeholder='Enter what you want to search here'
      />
      <Tooltip title='Search feature under construction' arrow>
        <Button
          style={{
            width: "80px",
            borderRadius: "0 4px 4px 0",
            fontFamily: "inherit",
            fontWeight: 300,
            background: "#353535",
            color: "white",
            border: "none",
            outline: "none",
            margin: 0,
            height:'100%',
          }}
        >
          Search
        </Button>
      </Tooltip>
    </div>
  );
};

export default Search;
