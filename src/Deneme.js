import React from 'react'
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Linegraph from './components/Linegraph'


const Deneme = () => {
  return (
      <Container>
    <Grid container spacing={5}>
        <Grid item xs={12} md={4}>
        <Linegraph />
        </Grid>
        <Grid item xs={12} md={4}>
           <Linegraph/>
        </Grid>
        <Grid item xs={12} md={4}>
           <Linegraph/>
        </Grid>
      
    </Grid>
    </Container>
  )
}

export default Deneme
