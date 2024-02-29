
'use client'
import React,{ useState }  from 'react'
import { Button, Input, Tooltip } from '@mui/material'




const Search = () => {
  const [searchValue, setSearchValue] = useState("")
  return (
    <div style={{
        width: "100%",
        height: "40px",
        border: "1px solid #353535",
        padding: 0,
        margin: 0,
        display: "flex",
        borderRadius: "5px",
        fontWeight: "bold",
        outline:'none',
    }}>
        <Input  
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          style={{
            width: "100%",
            border: "none",
            borderRadius: "5px",
            outline: "none",
            padding: "0 2px 0 2px",
            textDecorationLine: "none",
            
          }} 
          placeholder='Enter what you want search here' 
            />
        <Tooltip title='search feature under construction' arrow>
          <Button style={{
              width: "80px",
              border: "none",
              borderRadius: "5px",
              fontFamily: "inherit",
              fontWeight: 600,
              background: "#353535",
              color: "white",
              outline:"none",
          }}>Search</Button>
        </Tooltip>
    </div>
  )
}

export default Search;