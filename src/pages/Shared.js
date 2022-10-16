import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../components/Navbar'
import SideBar from '../components/SideBar'
import styled from "styled-components"
import { useState } from 'react'
const Shared = () => {
  const [close,setClose] =useState(false);
  // const HandleCloseClick = (a) => {
  //   if (a.target.classList.contains('myside')===false){
  //     setClose(false)
  //     console.log("dasd")
  //     return
  //   }
  
    
  // } 
  // console.log(close)
  return (
    <Shared2>
      <SideBar close={close} setClose={setClose} className='myside' 
      />
      <RightSide >
      <Navbar setClose={setClose} />
       <Outlet/>
      </RightSide>
     
     
    </Shared2>
  )
}

export default Shared

const Shared2=styled.div `
  
  display:grid;
  grid-template-columns:300px auto;
  
  @media (max-width: 768px) {
    
    grid-template-columns:1fr;
  }
`
const RightSide=styled.div `
position:relative;

`


