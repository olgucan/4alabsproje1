import React from 'react'
import { Container } from '@mui/system'
import Button from "@mui/material/Button"
import AddIcon from '@mui/icons-material/Add';
import Typography from '@mui/material/Typography';
import styled from "styled-components"
// import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import SearchIcon from '@mui/icons-material/Search';
import Box from '@mui/material/Box';
// import InputAdornment from '@mui/material/InputAdornment';
import FilterListIcon from '@mui/icons-material/FilterList';
import EnhancedTable from '../components/DataTable';
import { Grid } from '@mui/material';
const User = () => {




  return (
    <Container sx={{mt:3}}>
       <TopBox>
          <Typography component="h2" variant='h5'>User</Typography>
          <Button startIcon={<AddIcon/>} variant="contained">New User</Button>
         </TopBox>
         <Paper sx={{mt:4,py:3}}>
            {/* <Box display="flex" p={3} sx={{justifyContent:"space-between",alignItems:"center"}}>
            <TextField InputProps={{
            startAdornment: <InputAdornment position="start"><SearchIcon/></InputAdornment>,
          }} id="outlined-basic" label="Outlined" variant="outlined"  placeholder='Search user...'/>
              <FilterListIcon/>
            </Box> */}
            <Grid container >
               <Grid item xs={12} >
               <EnhancedTable />    
               </Grid>

            </Grid>
                    

          </Paper>
    </Container>
  )
}

export default User

 const TopBox =styled.div `
   display:flex;
   justify-content:space-between;
   align-items:center;
`
export {TopBox}
