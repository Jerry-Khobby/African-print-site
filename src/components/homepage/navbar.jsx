import React from 'react'
import Logo from './Logo'
import Search from './Search'
import {Box, Container, Grid} from '@mui/material'
import UserIcon from './UserIcon'



const Nav = () => {
  return (
    <div style={{
      borderBottom: "2px solid #ccc",
      backgroundColor: 'white',
      zIndex: '1000',
      height:'70px',
      position:'fixed',
      top:'0',
      left:'0',
      right:'0',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', // Optional: Add a subtle shadow
      padding: '10px 0', //
    }}>
        <Container sx={{width:'100%'}} className='h-full  '>
           <Grid container spacing={2} display={"flex"} alignItems={"center"} justifyContent={"space-between"}>
            <Grid item xs = {2}  sm = {3} md = {2} lg = {2} display={"flex"} justifyContent={"center"} alignItems={"center"}>
                        <Box>
                            <Logo/>
                        </Box>
            </Grid>
            <Grid item xs = {7} sm md lg>
                <Search/>
            </Grid>
            <Grid item xs={2} sm = {3} md = {3} lg = {2} justifyContent={"flex-end"} alignContent={"center"}>
              <UserIcon/>
            </Grid>
           </Grid>
        </Container>
    </div>
  )
}

export default Nav