'use client'
import React, { useState } from 'react';
import { Button, Tooltip } from '@mui/material';
import { useAppDispatch} from '@/lib/hooks';
import { setSearchItem } from '@/lib/cartItemSlice';

const Search = () => {
  
  const dispatch=useAppDispatch();
  const [searchValue, setSearchValue] = useState("");

  //a function to handle the search 
  const handleSearch = (e) => {
    const inputValue=e.target.value;
    setSearchValue(inputValue);
    dispatch(setSearchItem(searchValue));
  };
  return (
    <div style={{
      display: "flex",
      alignItems: "center",
      width: "100%",
      height: "40px",
      overflow: "hidden",
      outline: "none",
    }}>
      <input
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        style={{
          padding: "0 12px",
          height: "100%",
          width:'calc(100% - 80px)',  // Adjusted width to accommodate button
          border: "2px solid #353535",
          borderRadius: "7px 0 0 7px",  // Adjusted border radius
          outline: "none",
          borderRight:'none'

        }}
        placeholder='Enter what you want to search here'
      />
      <Tooltip title='Search feature under construction' arrow>
        <Button
        onClick={handleSearch}
          style={{
            width: "80px",
            borderRadius: "0 7px 7px 0",  // Adjusted border radius
            fontFamily: "inherit",
            fontWeight: 300,
            background: "#353535",
            color: "white",
            border: "2px solid #353535",  // Added border to match input
            borderLeft: "none",  // Added to remove left border
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
