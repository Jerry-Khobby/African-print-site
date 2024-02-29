import React from 'react'
import Logo from './Logo'
import Search from './Search'
import {Box, Container, Grid} from '@mui/material'
import UserIcon from './UserIcon'



const Nav = () => {
  return (
    <div style={{
        height: "68px",
        width:"100%",
        display:'flex',
        alignItems: 'center',
        borderBottom: "1px solid #ccc", // Adding a thin line at the bottom
        /* position:'fixed', */
        justifyContent: 'center',
    }}>
        <Container sx={{width:'100%'}}>
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