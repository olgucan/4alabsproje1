import React, { useState } from 'react';
import Button from "@mui/material/Button"
import { NavLink } from 'react-router-dom';
import styled from "styled-components"
import PersonIcon from '@mui/icons-material/Person';
import { SidebarData } from './sidedata';
import CloseIcon from '@mui/icons-material/Close';
const SideBar = ({close,setClose}) => {
  
  return (
      <SideContainer className={close && 'open2'}>
      <Side className={close && 'open'}>
        <ImageContainer>
        <MuiImage src="./muiicon.png" />
        <CloseIcon className='cross' onClick={()=>setClose(!close)}/>
        </ImageContainer>
         <PersonContainer>
           <PersonIcon/>
           <span>Jaydon Frankie</span>
         </PersonContainer>
         <Buttons>
          
             {SidebarData.map((a,i)=> (
               <NavLink key={i} to={a.path} >
                  {a.icon }
                  <span>{a.title}</span>
                 
               </NavLink>
             ))}
          
         </Buttons>
        
         <Down>
           <div>
             <img src="./images/illustrations/illustration_avatar.png" alt="" />
           </div>
           <h3>Get More ?</h3>
            <p><small>From only 69$</small></p>
            <Button variant="contained">Upgrade To Pro</Button>
         </Down>
      
    </Side>
    </SideContainer>
   

  )
}

export default SideBar
const SideContainer=styled.div `


  @media (max-width: 768px) {
   
    display:none;
    
    &.open2 {
      display:block;
      

    }
    
  }
  
 
`
const Side = styled.div `
 
position:fixed;
padding:40px 0 ;

left:0;
height:auto;
width:300px;
top:0;
bottom:0;
overflow-x:hidden;
overflow-y:scroll;
display:flex;
flex-direction:column;
align-items:center;
justify-content:space-between;

@media (max-width: 768px) {
  

    left:-500px;
   
    
    &.open {
      left:0px;
      z-index:500;
      background:#eee;
      ::before {
        
       content:"";
       position:fixed;
       left:300px;
       right:0;
       top:0;
       bottom:0;
       background:rgba(0,0,0,.4);
       z-index:400;
     
      }
      
      
    }
    
 
  }
  

`

const MuiImage=styled.img `
  width:50px;
   
`
const PersonContainer=styled.div `
   display:flex;
   margin:50px 0;
   align-items:center;
   justify-content:space-around;
   padding:22px 15px;
   background:#eee;
   border-radius:10px;
   width:80%;
   & >svg {
     color:red;
     font-size:30px;
   }
`
const ImageContainer = styled.div`
 display:flex;
 justify-content:flex-start;
 width:80%;
 & .cross{
   position:absolute;
   right:-500px;
   font-size:30px;
   cursor:pointer;
 }
 @media (max-width: 768px){
   .cross {
     right:10px;
   }
 }
  
`
const Buttons=styled.div `
 width:90%;
 
 & > a {
  background:#eee;
   color:grey;
   text-decoration:none;
   width:100%;
   margin:10px 0;
   display:flex;
   align-items:center;
   padding:13px 10px;
   border-radius:7px;
   cursor:pointer;
   border:none;
   transition:background 250ms ease-in-out;
   &:hover {
     background:#ddd
   }
   & >svg {
     margin-right:15px;
   }
   &.active {
     background:#3498db ;
     color:white;
   }
   
 }
`
const Down = styled.div `
margin:20px 0;
   & img {
     height:100px;
   }
   & small {
     color:grey;
     font-size:1.1em;
   }
   display:flex;
   flex-direction:column;
   align-items:center;
   & p {
     margin:20px 0 ;
   }
`
