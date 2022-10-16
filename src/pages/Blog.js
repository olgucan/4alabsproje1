import React from 'react'
import {Container} from "@mui/material"
import { Typography,Grid } from '@mui/material'
import styled from "styled-components"
import AddIcon from '@mui/icons-material/Add';
import Button from "@mui/material/Button"
import { TopBox } from './User';
import posts from "../components/blog"
const Blog = () => {
  return (
    <Container sx={{py:3}}>
        <TopBox>
          <Typography component="h2" variant='h4'>Blog</Typography>
          <Button startIcon={<AddIcon/>} variant="contained">New Post</Button>
         </TopBox>

         
    </Container>
  )
}

export default Blog
