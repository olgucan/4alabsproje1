import React from 'react'
import LineChart2 from '../components/Linechart2'
import LineGraph from "../components/Linegraph"
import { Grid,Paper,Typography,Container } from '@mui/material'
const Dashboard = () => {
  return (
    <>
       
      <Container sx={{width:{xs:"80%"}}}>
       <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
         <LineChart2 />
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper>
              <Typography variant='h6' color='primary'>Recent Deposits</Typography>
              <Typography variant='h4'>
              $3,024.00</Typography>
              <Typography variant='p'>
              on 15 March, 2019</Typography>
          </Paper>
        </Grid>
       </Grid>
       </Container>
     
    </>
  )
}

export default Dashboard
