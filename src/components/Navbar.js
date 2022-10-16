import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import { Typography } from '@mui/material';
import styled from 'styled-components'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SearchIcon from '@mui/icons-material/Search';
const Navbar = ({setClose}) => {
    const Navdiv =styled.nav `
    display:flex;
    position:sticky;
    top:0;
    left:0;
    right:0;
    
    
  backdrop-filter: saturate(180%) blur(4px);
    padding:30px 50px;
    justify-content:space-between;
    color:white;
    align-items:center;
    
    & > div {
        display:flex;
        align-items:center;

    }
    & .person {
      height:40px;
      border-radius:50%;
    }
    & .menu {
      display:none;
      color:black;
    }
    @media (max-width: 768px) {
      & .menu {
        display:flex;
        cursor:pointer;
      }
      & .search {
        display:none;
      }

  }
    
   

    `
   
  
   
  return (
   
    <Navdiv >
       
        <div>
        <SearchIcon className='search' sx={{color:"black"}} />
        <MenuIcon className='menu' onClick={()=>setClose((a)=>!a)}/>
        </div>
        <div>
        <img src="./images/icons/ic_flag_en.svg" alt="" />
        <NotificationsNoneIcon sx={{color:"black",marginX:3}} />
        <img className='person' src="./images\mock-images\avatars\avatar_default.jpg" alt="" />
        </div>
       
    </Navdiv>
    
  )
}

export default Navbar

